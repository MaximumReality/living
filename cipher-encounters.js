// ═══════════════════════════════════════════════════════
// CIPHER ROGUELITE — SPECIAL ENCOUNTERS
// cipher-encounters.js
// Trader + Shrine/Glitch Node
// ═══════════════════════════════════════════════════════

// ── TRADER ──────────────────────────────────────────────

function showTrader() {
  hideAllPanels();
  document.getElementById('traderPanel').classList.add('show');

  const meta = loadMeta();
  document.getElementById('traderShards').textContent = '◈ ' + meta.shards + ' frags available';

  // Pick 3 items (4 if trader_eye passive active)
  const count = state.passives.includes('trader_eye') ? 4 : 3;
  const pool = [...TRADER_ITEMS].sort(() => Math.random() - 0.5).slice(0, count);

  const grid = document.getElementById('traderGrid');
  grid.innerHTML = '';

  pool.forEach(item => {
    const meta2 = loadMeta();
    const canAfford = meta2.shards >= item.cost;

    const card = document.createElement('div');
    card.className = 'trader-card' + (canAfford ? '' : ' cant-afford');
    card.innerHTML =
      '<div class="trader-item-top">' +
        '<span class="trader-icon">' + item.icon + '</span>' +
        '<span class="trader-item-name">' + item.name + '</span>' +
        '<span class="trader-cost">◈ ' + item.cost + '</span>' +
      '</div>' +
      '<div class="trader-item-desc">' + item.desc + '</div>';

    if (canAfford) {
      card.addEventListener('click', () => { SFX.tap(); buyTraderItem(item, card); });
    }
    grid.appendChild(card);
  });
}

function buyTraderItem(item, card) {
  const meta = loadMeta();
  if (meta.shards < item.cost) return;

  meta.shards -= item.cost;
  saveMeta(meta);
  updateShardsDisplay();

  // Apply effect
  switch (item.effect) {
    case 'survival':
      state.survival = Math.min(100, state.survival + item.value);
      state.food = state.water = state.tech = Math.min(100, state.survival);
      updateBars();
      flashDrone('+' + item.value + '% survival — good trade');
      break;
    case 'freeHint':
      state.freeHint = true;
      flashDrone('hint chip loaded — next hint is free');
      break;
    case 'autoLetter':
      state.autoLetter = (state.autoLetter || 0) + 1;
      flashDrone('cipher spike ready — one auto-letter queued');
      break;
    case 'reroll':
      state.rerollAvailable = true;
      flashDrone('static bomb primed — cipher reroll ready');
      break;
    case 'passive':
      const unowned = PASSIVE_ITEMS.filter(pi => !state.passives.includes(pi.id));
      if (unowned.length) {
        const rp = unowned[Math.floor(Math.random() * unowned.length)];
        state.passives.push(rp.id);
        setTimeout(() => { SFX.passive(); renderPassives(); }, 300);
        showPassiveToast('Passive acquired: ' + rp.icon + ' ' + rp.name);
        flashDrone('passive installed: ' + rp.name);
      } else {
        // refund if no passives left to give
        meta.shards += item.cost;
        saveMeta(meta);
        updateShardsDisplay();
        flashDrone('all passives already owned — refunded');
      }
      break;
  }

  // Grey out purchased card
  card.classList.add('purchased');
  card.innerHTML += '<div class="trader-purchased-badge">ACQUIRED</div>';
  card.style.pointerEvents = 'none';

  // Update shard display in trader
  document.getElementById('traderShards').textContent = '◈ ' + loadMeta().shards + ' frags available';
  SFX.loot();
  checkAchievements();
}

// ── SHRINE ──────────────────────────────────────────────

function showShrine() {
  hideAllPanels();
  state.shrineUsed = true;
  document.getElementById('shrinePanel').classList.add('show');

  // Pick 2 relics to offer
  const pool = [...SHRINE_RELICS].sort(() => Math.random() - 0.5).slice(0, 2);

  const container = document.getElementById('shrineRelics');
  container.innerHTML = '';

  pool.forEach(relic => {
    const actualCost = state.passives.includes('glitch_ward')
      ? Math.max(5, relic.cost - 5)
      : relic.cost;

    const canAfford = state.survival > actualCost;
    const card = document.createElement('div');
    card.className = 'shrine-relic' + (canAfford ? '' : ' cant-afford');
    card.innerHTML =
      '<div class="shrine-relic-top">' +
        '<span class="shrine-relic-icon">' + relic.icon + '</span>' +
        '<span class="shrine-relic-name">' + relic.name + '</span>' +
        '<span class="shrine-relic-cost">-' + actualCost + '% survival</span>' +
      '</div>' +
      '<div class="shrine-relic-desc">' + relic.desc + '</div>';

    if (canAfford) {
      card.addEventListener('click', () => { SFX.tap(); acceptRelic(relic, actualCost, card); });
    }
    container.appendChild(card);
  });
}

function acceptRelic(relic, cost, card) {
  // Check not already holding this relic
  if (state.relics && state.relics.includes(relic.id)) {
    flashDrone('relic already bound to you');
    return;
  }

  state.survival = Math.max(1, state.survival - cost);
  if (!state.relics) state.relics = [];
  state.relics.push(relic.id);
  updateBars();

  card.classList.add('purchased');
  card.innerHTML += '<div class="trader-purchased-badge">BOUND</div>';
  card.style.pointerEvents = 'none';

  SFX.passive();
  showPassiveToast('Relic bound: ' + relic.icon + ' ' + relic.name);
  flashDrone('the shrine takes. the shrine gives.');
  checkAchievements();

  // Apply relic effects that need run-level flags
  if (relic.id === 'dead_signal') state.doubleShards = true;
  if (relic.id === 'null_filter') state.infiniteAttempts = true;
  if (relic.id === 'void_eye')    state.autoFirstLetter = true;
  if (relic.id === 'iron_cloak')  state.halfFailureLoss = true;
  if (relic.id === 'echo_core')   state.echoCoreActive = true;
}

// ── REROLL (Static Bomb consumable from trader) ──
function useReroll() {
  if (!state.rerollAvailable) return;
  state.rerollAvailable = false;

  const p = state.puzzles[state.round];
  const letters = p.word.split('');
  let scrambled = [...letters].sort(() => Math.random() - 0.5);
  let tries = 0;
  while (scrambled.join('') === p.word && tries < 20) {
    scrambled = [...letters].sort(() => Math.random() - 0.5);
    tries++;
  }
  state.scrambled = scrambled;
  state.selectedLetters = [];
  renderTiles();
  renderSlots();
  flashDrone('cipher rerolled — static bomb used');
  SFX.phase();
  updateRerollBtn();
}

function updateRerollBtn() {
  const btn = document.getElementById('btnReroll');
  if (!btn) return;
  btn.style.display = state.rerollAvailable ? 'block' : 'none';
}
