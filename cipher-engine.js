// ═══════════════════════════════════════════════════════
// CIPHER ROGUELITE — GAME ENGINE
// cipher-engine.js
// ═══════════════════════════════════════════════════════

let state = {};
let timerInterval = null;

// ── ZONE HELPERS ──
function getZoneForCipher(idx) {
  let count = 0;
  for (let z = 0; z < ZONES.length; z++) {
    count += ZONES[z].ciphersPerPhase;
    if (idx < count) return z;
  }
  return ZONES.length - 1;
}
function getCipherInZone(idx) {
  let prev = 0;
  for (let z = 0; z < ZONES.length; z++) {
    if (idx < prev + ZONES[z].ciphersPerPhase) return idx - prev;
    prev += ZONES[z].ciphersPerPhase;
  }
  return 0;
}

// ── INIT ──
function initGame() {
  clearTimerInterval();

  const meta = loadMeta();
  meta.totalRuns = (meta.totalRuns || 0) + 1;
  saveMeta(meta);

  const startSurvival   = 40 + (hasUnlock('extra_survival') ? 10 : 0);
  const baseMaxAttempts = hasUnlock('extra_attempts') ? 5 : 4;

  const shuffled = [...PUZZLES].sort(() => Math.random() - 0.5).slice(0, TOTAL_CIPHERS);

  let startPassives = [];
  if (hasUnlock('start_passive')) {
    const rp = PASSIVE_ITEMS[Math.floor(Math.random() * PASSIVE_ITEMS.length)];
    startPassives = [rp.id];
  }

  state = {
    puzzles:          shuffled,
    round:            0,
    phase:            0,
    survival:         startSurvival,
    food:             50,
    water:            50,
    tech:             50,
    inventory:        [],
    passives:         startPassives,
    attempts:         0,
    maxAttempts:      baseMaxAttempts,
    baseMaxAttempts,
    hintUsed:         false,
    selectedLetters:  [],
    scrambled:        [],
    gameOver:         false,
    score:            0,
    streak:           0,
    shardsEarned:     0,
    ambushMode:       false,
    ambushTimeLeft:   0,
    phaseAnchorUsed:  false,
    currentEncounter: null,
    // KEY FIX: track whether special event was already handled this round
    specialHandled:   false,
  };

  document.getElementById('endScreen').classList.remove('show');
  document.getElementById('streakBadge').classList.remove('show');
  document.getElementById('roundTotal').textContent = TOTAL_CIPHERS;
  document.getElementById('inventoryGrid').innerHTML = '<div class="inv-empty">— empty —</div>';
  document.getElementById('passiveItems').innerHTML = '';
  document.getElementById('runNum').textContent = meta.totalRuns;

  if (startPassives.length) {
    setTimeout(() => renderPassives(), 400);
    showPassiveToast('FIELD CACHE: passive loaded!');
  }

  updateBars();
  updateShardsDisplay();
  checkBRMBadge();
  updateZoneBanner();
  showEncounterChoice();
  startStatusLoop();
  startDroneLoop();
}

// ── ZONE BANNER ──
function updateZoneBanner() {
  const zoneIdx = getZoneForCipher(Math.min(state.round, TOTAL_CIPHERS - 1));
  const zone = ZONES[zoneIdx];

  // Phase transition fanfare
  if (zoneIdx !== state.phase) {
    state.phase = zoneIdx;
    state.phaseAnchorUsed = false;
    SFX.phase();
    flashDrone('// ENTERING ' + zone.name);
  }

  const banner = document.getElementById('zoneBanner');
  banner.style.setProperty('--zone-color', zone.color);
  document.getElementById('zoneName').textContent = zone.name;
  document.getElementById('zoneSubtitle').textContent = zone.subtitle;

  const pip = document.getElementById('zoneProgress');
  pip.innerHTML = '';
  const inPhase = getCipherInZone(Math.min(state.round, TOTAL_CIPHERS - 1));
  for (let i = 0; i < zone.ciphersPerPhase; i++) {
    const d = document.createElement('div');
    d.className = 'zone-pip' + (i < inPhase ? ' done' : i === inPhase ? ' active' : '');
    pip.appendChild(d);
  }
}

// ── ENCOUNTER FLOW ──
// skipSpecial: true after calm zone resolves, preventing infinite loop
function showEncounterChoice(skipSpecial) {
  if (state.round >= TOTAL_CIPHERS) { endGame(true); return; }

  hideAllPanels();

  // Special event check — only if not already handled this round
  if (!skipSpecial && !state.specialHandled && state.round > 0 && state.round % 5 === 0) {
    state.specialHandled = true;
    showCalmZone();
    return;
  }
  // Reset for next round
  state.specialHandled = false;

  // Generate choices
  const choices = generateChoices();
  const ep = document.getElementById('encounterPanel');
  ep.classList.add('show');

  document.getElementById('encounterSubtext').textContent =
    PHASE_SUBTEXT[state.phase] || 'The drone pings three nodes.';

  const container = document.getElementById('encounterChoices');
  container.innerHTML = '';
  choices.forEach((c, i) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.style.setProperty('--choice-color', c.enc.color);
    btn.innerHTML =
      '<div class="choice-top">' +
        '<div class="choice-label">[' + (i+1) + '] ' + c.enc.label + '</div>' +
        '<div class="choice-diff ' + c.enc.diffLabel.toLowerCase() + '">' + c.enc.diffLabel + '</div>' +
      '</div>' +
      '<div class="choice-reward">' + c.enc.reward + '</div>';
    btn.addEventListener('click', () => { SFX.tap(); selectEncounter(c); });
    container.appendChild(btn);
  });

  updateZoneBanner();
}

function generateChoices() {
  const voidEnabled = hasUnlock('void_ciphers');
  const pool = ['food', 'water', 'tech', 'signal'];
  if (voidEnabled) pool.push('void');
  const shuffled = pool.sort(() => Math.random() - 0.5).slice(0, 3);
  return shuffled.map(type => ({ type, enc: ENCOUNTER_TYPES[type] }));
}

function showCalmZone() {
  hideAllPanels();
  document.getElementById('calmPanel').classList.add('show');

  const bonus = hasUnlock('calm_bonus') ? 8 : 5;
  const txt = CALM_TEXTS[Math.floor(Math.random() * CALM_TEXTS.length)];
  document.getElementById('calmText').textContent = txt + ' +' + bonus + '% survival.';

  // Replace button to avoid stale handlers
  const oldBtn = document.getElementById('btnCalm');
  const newBtn = oldBtn.cloneNode(true);
  oldBtn.parentNode.replaceChild(newBtn, oldBtn);
  newBtn.addEventListener('click', () => {
    state.survival = Math.min(100, state.survival + bonus);
    updateBars();
    document.getElementById('calmPanel').classList.remove('show');
    // BUG FIX: pass skipSpecial=true so we don't re-trigger calm zone
    showEncounterChoice(true);
  });
}

function selectEncounter(choice) {
  document.getElementById('encounterPanel').classList.remove('show');
  state.currentEncounter = choice;

  const ambushChance = choice.type === 'void' ? 0.55 : (state.phase >= 2 ? 0.2 : 0);
  if (Math.random() < ambushChance) {
    startAmbush(choice);
    return;
  }
  loadPuzzle(choice);
}

// ── AMBUSH ──
function startAmbush(choice) {
  state.ambushMode = true;
  const timeLimit = Math.max(20, 45 - (state.phase * 5));
  state.ambushTimeLeft = timeLimit;

  hideAllPanels();
  document.getElementById('ambushPanel').classList.add('show');
  document.getElementById('ambushText').textContent =
    AMBUSH_TEXTS[Math.floor(Math.random() * AMBUSH_TEXTS.length)];
  updateTimerDisplay();

  setTimeout(() => {
    document.getElementById('ambushPanel').classList.remove('show');
    loadPuzzle(choice, true);
    startAmbushTimer(timeLimit);
  }, 1800);
}

function startAmbushTimer(timeLimit) {
  clearTimerInterval();
  state.ambushTimeLeft = timeLimit;
  timerInterval = setInterval(() => {
    state.ambushTimeLeft--;
    updateTimerDisplay();
    if (state.ambushTimeLeft <= 10) document.getElementById('timerDisplay').classList.add('urgent');
    if (state.ambushTimeLeft <= 0) {
      clearTimerInterval();
      document.getElementById('timerDisplay').classList.remove('urgent');
      state.survival = Math.max(0, state.survival - 12);
      flashDrone('AMBUSH EXPIRED — -12% survival');
      updateBars();
      state.ambushMode = false;
      if (state.survival <= 0) { endGame(false); return; }
      state.round++;
      state.phaseAnchorUsed = false;
      showEncounterChoice();
    }
  }, 1000);
}

function clearTimerInterval() {
  if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
}

function updateTimerDisplay() {
  const s = Math.max(0, state.ambushTimeLeft);
  document.getElementById('timerDisplay').textContent = '0:' + s.toString().padStart(2, '0');
}

// ── LOAD PUZZLE ──
function loadPuzzle(choice, isAmbush) {
  if (state.round >= TOTAL_CIPHERS) { endGame(true); return; }
  clearTimerInterval();

  const p = state.puzzles[state.round];
  const enc = choice ? choice.enc : ENCOUNTER_TYPES['signal'];

  state.attempts    = 0;
  state.hintUsed    = false;
  state.selectedLetters = [];
  state.ambushMode  = !!isAmbush;

  // Difficulty: base attempts +/- encounter type modifier
  let maxAtt = state.baseMaxAttempts + (enc ? enc.attemptsBonus : 0);
  maxAtt = Math.max(2, maxAtt);

  // Signal Anchor passive: +1 free attempt per phase (once)
  if (state.passives.includes('signal_anchor') && !state.phaseAnchorUsed) {
    maxAtt += 1;
    state.phaseAnchorUsed = true;
  }
  state.maxAttempts = maxAtt;

  // Scramble word
  const letters = p.word.split('');
  let scrambled = [...letters].sort(() => Math.random() - 0.5);
  let tries = 0;
  while (scrambled.join('') === p.word && tries < 20) {
    scrambled = [...letters].sort(() => Math.random() - 0.5);
    tries++;
  }
  state.scrambled = scrambled;

  document.getElementById('roundNum').textContent = state.round + 1;
  document.getElementById('clueText').innerHTML = p.clue;

  const catEl = document.getElementById('catBadge');
  catEl.textContent = p.category.toUpperCase();
  catEl.className = 'category-badge cat-' + p.category;

  const tag = document.getElementById('puzzleTag');
  tag.textContent  = isAmbush ? '⚠ AMBUSH' : 'DECRYPT';
  tag.style.color  = isAmbush ? 'var(--neon-red)' : '';

  document.getElementById('hintLine').textContent = '';
  document.getElementById('puzzlePanel').style.display = 'block';

  updateZoneBanner();
  renderTiles();
  renderSlots();
  renderAttempts();
}

// ── RENDER ──
function hideAllPanels() {
  document.getElementById('puzzlePanel').style.display    = 'none';
  document.getElementById('encounterPanel').classList.remove('show');
  document.getElementById('calmPanel').classList.remove('show');
  document.getElementById('ambushPanel').classList.remove('show');
}

function renderTiles() {
  const area = document.getElementById('scrambledArea');
  area.innerHTML = '';
  state.scrambled.forEach((letter, i) => {
    const tile = document.createElement('div');
    tile.className = 'letter-tile';
    tile.textContent = letter;
    tile.dataset.index = i;
    if (state.selectedLetters.some(s => s.tileIndex === i)) tile.classList.add('used');
    tile.addEventListener('click', () => { SFX.tap(); selectLetter(i, letter, tile); });
    area.appendChild(tile);
  });
}

function renderSlots() {
  const area = document.getElementById('answerSlots');
  area.innerHTML = '';
  const word = state.puzzles[state.round].word;
  for (let i = 0; i < word.length; i++) {
    const slot = document.createElement('div');
    slot.className = 'answer-slot';
    const filled = state.selectedLetters[i];
    if (filled) {
      slot.textContent = filled.letter;
      slot.classList.add('filled');
      slot.addEventListener('click', () => { SFX.tap(); removeFromSlot(i); });
    }
    area.appendChild(slot);
  }
}

function renderAttempts() {
  const dots = document.getElementById('attemptDots');
  dots.innerHTML = '';
  for (let i = 0; i < state.maxAttempts; i++) {
    const d = document.createElement('div');
    d.className = 'attempt-dot' + (i < state.attempts ? ' used' : '');
    dots.appendChild(d);
  }
}

function renderPassives() {
  const container = document.getElementById('passiveItems');
  container.innerHTML = '';
  state.passives.forEach(pid => {
    const pi = PASSIVE_ITEMS.find(p => p.id === pid);
    if (!pi) return;
    const chip = document.createElement('div');
    chip.className = 'passive-chip new';
    chip.textContent = pi.icon + ' ' + pi.name;
    chip.title = pi.desc;
    container.appendChild(chip);
    setTimeout(() => chip.classList.remove('new'), 500);
  });
}

// ── GAME ACTIONS ──
function selectLetter(index, letter, tile) {
  const word = state.puzzles[state.round].word;
  if (state.selectedLetters.length >= word.length) return;
  if (state.selectedLetters.some(s => s.tileIndex === index)) return;
  tile.classList.add('used', 'glitch');
  setTimeout(() => tile.classList.remove('glitch'), 200);
  state.selectedLetters.push({ tileIndex: index, letter });
  renderSlots();
}

function removeFromSlot(slotIndex) {
  if (slotIndex >= state.selectedLetters.length) return;
  state.selectedLetters.splice(slotIndex, 1);
  renderTiles(); renderSlots();
}

function clearAnswer() {
  SFX.clear();
  state.selectedLetters = [];
  renderTiles(); renderSlots();
  document.getElementById('hintLine').textContent = '';
}

function checkAnswer() {
  const word = state.puzzles[state.round].word;
  if (state.selectedLetters.length < word.length) { flashDrone('not enough letters!'); return; }
  const guess = state.selectedLetters.map(s => s.letter).join('');
  const slots = document.querySelectorAll('.answer-slot');

  if (guess === word) {
    // ── CORRECT ──
    clearTimerInterval();
    document.getElementById('timerDisplay').classList.remove('urgent');
    SFX.correct();
    slots.forEach(s => s.classList.add('correct'));
    document.getElementById('puzzlePanel').classList.add('correct-flash');
    setTimeout(() => document.getElementById('puzzlePanel').classList.remove('correct-flash'), 500);

    const p = state.puzzles[state.round];
    state.score++;
    state.streak++;

    if (state.streak >= 2) {
      SFX.streak();
      const sb = document.getElementById('streakBadge');
      sb.textContent = '🔥 CIPHER STREAK ×' + state.streak;
      sb.classList.add('show');
      setTimeout(() => sb.classList.remove('show'), 2500);
    }

    // Scrap Blade bonus
    if (state.passives.includes('scrap_blade')) {
      state.survival = Math.min(100, state.survival + 3);
    }

    applySurvivalBoost(p);

    // Shards earned
    let shardsGained = 1 + state.phase;
    if (state.currentEncounter && state.currentEncounter.type === 'void')   shardsGained += 2;
    if (state.currentEncounter && state.currentEncounter.type === 'signal') shardsGained += 1;
    if (state.ambushMode) shardsGained += 1;
    state.shardsEarned += shardsGained;

    // Passive item chance on TECH or VOID
    let newPassive = null;
    const encType = state.currentEncounter ? state.currentEncounter.type : '';
    if (encType === 'tech' || encType === 'void') {
      const unowned = PASSIVE_ITEMS.filter(pi => !state.passives.includes(pi.id));
      if (unowned.length && Math.random() < 0.35) {
        newPassive = unowned[Math.floor(Math.random() * unowned.length)];
        state.passives.push(newPassive.id);
        setTimeout(() => { SFX.passive(); renderPassives(); }, 700);
      }
    }

    state.ambushMode = false;
    setTimeout(() => { SFX.loot(); showLoot(p, shardsGained, newPassive); }, 500);
    flashDrone('✓ cipher cracked!');

  } else {
    // ── WRONG ──
    SFX.wrong();
    state.streak = 0;
    document.getElementById('streakBadge').classList.remove('show');
    state.attempts++;
    slots.forEach(s => s.classList.add('wrong'));
    setTimeout(() => slots.forEach(s => s.classList.remove('wrong')), 450);
    document.getElementById('puzzlePanel').classList.add('wrong-flash');
    setTimeout(() => document.getElementById('puzzlePanel').classList.remove('wrong-flash'), 450);
    renderAttempts();

    // Passives modify failure penalty
    const baseLoss = state.passives.includes('static_filter') ? 3 : 5;
    if (state.passives.includes('rust_filter')) {
      // Rust Filter: water protected, food/tech take the hit instead
      state.food  = Math.max(0, state.food  - baseLoss);
      state.tech  = Math.max(0, state.tech  - Math.floor(baseLoss / 2));
      state.survival = Math.min(100, Math.round((state.food + state.water + state.tech) / 3));
    } else {
      state.survival = Math.max(0, state.survival - baseLoss);
    }
    updateBars();

    if (state.attempts >= state.maxAttempts) {
      flashDrone('cipher FAILED—');
      clearTimerInterval();
      setTimeout(() => {
        if (state.survival <= 0) { endGame(false); return; }
        state.round++;
        state.phaseAnchorUsed = false;
        state.ambushMode = false;
        showEncounterChoice();
      }, 600);
    } else {
      flashDrone((state.maxAttempts - state.attempts) + ' attempts left');
    }
    clearAnswer();
  }
}

function useHint() {
  if (state.hintUsed) { document.getElementById('hintLine').textContent = 'hint already used'; return; }
  const cost = state.passives.includes('drone_overclock') ? 1 : 3;
  SFX.hint();
  state.hintUsed = true;
  const word = state.puzzles[state.round].word;
  const firstTwo = word.slice(0, 2);
  document.getElementById('hintLine').textContent = 'drone scan: starts with "' + firstTwo + '..."';
  flashDrone('first letters: ' + firstTwo);
  state.survival = Math.max(0, state.survival - cost);
  updateBars();
}

function applySurvivalBoost(p) {
  state[p.boost] = Math.min(100, state[p.boost] + p.boostAmt);
  state.survival = Math.min(100, Math.round((state.food + state.water + state.tech) / 3));
  updateBars();
}

function updateBars() {
  document.getElementById('survivalFill').style.width = state.survival + '%';
  document.getElementById('survivalPct').textContent  = state.survival + '%';
  document.getElementById('foodBar').style.width  = state.food  + '%';
  document.getElementById('waterBar').style.width = state.water + '%';
  document.getElementById('techBar').style.width  = state.tech  + '%';
  if (state.survival <= 0 && !state.gameOver) endGame(false);
}

// ── LOOT POPUP ──
function showLoot(p, shardsGained, newPassive) {
  document.getElementById('lootIcon').textContent  = p.icon;
  document.getElementById('lootName').textContent  = p.word;
  document.getElementById('lootDesc').textContent  = p.desc;
  document.getElementById('lootBoost').textContent =
    '▲ ' + p.boost.toUpperCase() + ' +' + p.boostAmt + '% | SURVIVAL ' + state.survival + '%';
  document.getElementById('lootShards').textContent =
    '◈ +' + shardsGained + ' SIGNAL FRAGMENT' + (shardsGained !== 1 ? 'S' : '');

  const passiveEl = document.getElementById('lootPassive');
  if (newPassive) {
    passiveEl.textContent = '⚙ PASSIVE: ' + newPassive.icon + ' ' + newPassive.name + ' — ' + newPassive.desc;
    passiveEl.classList.add('show');
  } else {
    passiveEl.classList.remove('show');
  }

  document.getElementById('lootPopup').classList.add('show');
  document.getElementById('overlay').classList.add('show');
}

document.getElementById('btnContinue').addEventListener('click', () => {
  document.getElementById('lootPopup').classList.remove('show');
  document.getElementById('overlay').classList.remove('show');
  addToInventory(state.puzzles[state.round]);
  state.round++;
  state.phaseAnchorUsed = false;
  if (state.round >= TOTAL_CIPHERS) { endGame(true); return; }
  showEncounterChoice();
});

function addToInventory(p) {
  const grid = document.getElementById('inventoryGrid');
  const empty = grid.querySelector('.inv-empty');
  if (empty) empty.remove();
  const item = document.createElement('div');
  item.className = 'inv-item';
  item.textContent = p.icon;
  const tip = document.createElement('div');
  tip.className = 'inv-tooltip';
  tip.textContent = p.word;
  item.appendChild(tip);
  item.addEventListener('touchstart', () => {
    tip.style.opacity = '1';
    setTimeout(() => tip.style.opacity = '0', 1500);
  }, { passive: true });
  grid.appendChild(item);
  state.inventory.push({ word: p.word, icon: p.icon });
}

// ── END GAME ──
function endGame(won) {
  clearTimerInterval();
  state.gameOver = true;
  if (won) { SFX.win(); } else { SFX.gameover(); }

  saveRunToHistory(won);

  document.getElementById('endScore').textContent = state.score;
  document.getElementById('endShardsEarned').textContent =
    '◈ +' + state.shardsEarned + ' SIGNAL FRAGMENTS BANKED';

  const endInv = document.getElementById('endInv');
  endInv.innerHTML = '';
  state.inventory.forEach(item => {
    const el = document.createElement('div');
    el.className = 'end-inv-item';
    el.textContent = item.icon;
    el.title = item.word;
    endInv.appendChild(el);
  });

  const title = document.getElementById('endTitle');
  const msg   = document.getElementById('endMsg');
  if (won) {
    title.textContent  = 'SECTOR CLEARED';
    title.className    = 'end-title win';
    msg.textContent    = 'V0ID-WALKER and the drone vanish into the static. ' + state.score + ' ciphers cracked. The wasteland blinks.';
  } else {
    title.textContent  = 'SIGNAL LOST';
    title.className    = 'end-title dead';
    msg.textContent    = 'The neon fades from the cloak. The drone crashes softly in the dust. ' + state.score + ' items salvaged before the dark took you.';
  }
  document.getElementById('endScreen').classList.add('show');
}

// ── SHARE / COPY ──
function buildScoreText() {
  let grid = '';
  state.puzzles.forEach((p, i) => {
    grid += (i < state.inventory.length) ? p.icon : '💀';
    if ((i + 1) % 5 === 0) grid += '\n';
  });
  const result = state.score >= TOTAL_CIPHERS ? 'SECTOR CLEARED' : 'SIGNAL LOST';
  return 'CIPHER ROGUE— Wasteland Word Game\n' + result +
    '\n🎯 ' + state.score + '/' + TOTAL_CIPHERS + ' ciphers cracked' +
    '\n⚡ Survival: ' + state.survival + '%' +
    '\n◈ ' + state.shardsEarned + ' frags earned\n\n' +
    grid.trim() + '\n\nCan you beat this?\nhttps://maximumreality.github.io/living/cipher-rogue.html';
}
function shareToX()  { window.open('https://x.com/intent/tweet?text=' + encodeURIComponent(buildScoreText()), '_blank'); }
function copyScore() {
  const text = buildScoreText();
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => showCopiedToast());
  } else {
    const ta = document.createElement('textarea');
    ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); showCopiedToast(); } catch(e) {}
    document.body.removeChild(ta);
  }
}
function showCopiedToast() {
  const btn = document.getElementById('btnCopy');
  btn.textContent = '[ ✓ COPIED ]'; btn.classList.add('copied');
  setTimeout(() => { btn.textContent = '[ COPY SCORE ]'; btn.classList.remove('copied'); }, 2000);
  const toast = document.getElementById('shareToast');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2000);
}

// ── AMBIENT ──
function flashDrone(msg) {
  const el = document.getElementById('droneChat');
  el.textContent = msg; el.classList.add('show');
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove('show'), 2200);
}

function showPassiveToast(msg) {
  const t = document.getElementById('passiveToast');
  t.textContent = '⚙ ' + msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

function startStatusLoop() {
  const el = document.getElementById('statusText');
  let idx = 0;
  function setStatus(text) {
    el.innerHTML = ''; let i = 0;
    const iv = setInterval(() => {
      el.textContent = text.slice(0, i) + (i < text.length ? '_' : '');
      i++;
      if (i > text.length) { el.innerHTML = text + '<span class="cursor">_</span>'; clearInterval(iv); }
    }, 40);
  }
  setStatus(STATUS_LINES[0]);
  setInterval(() => { idx = (idx + 1) % STATUS_LINES.length; setStatus(STATUS_LINES[idx]); }, 5000);
}

function startDroneLoop() {
  setInterval(() => {
    if (Math.random() < 0.3) flashDrone(DRONE_LINES[Math.floor(Math.random() * DRONE_LINES.length)]);
  }, 6000);
}
