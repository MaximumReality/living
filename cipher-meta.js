// ═══════════════════════════════════════════════════════
// CIPHER ROGUELITE — META PERSISTENCE + BRM SCREEN
// cipher-meta.js
// ═══════════════════════════════════════════════════════

const SAVE_KEY = 'cipher_meta_v3';

function loadMeta() {
  try {
    return JSON.parse(localStorage.getItem(SAVE_KEY)) || { shards:0, unlocks:[], runHistory:[], totalRuns:0, achievements:[], loreLogs:[] };
  } catch(e) {
    return { shards:0, unlocks:[], runHistory:[], totalRuns:0, achievements:[], loreLogs:[] };
  }
}
function saveMeta(meta) {
  try { localStorage.setItem(SAVE_KEY, JSON.stringify(meta)); } catch(e) {}
}
function hasUnlock(id) { return loadMeta().unlocks.includes(id); }

function checkBRMBadge() {
  const meta = loadMeta();
  const hasAffordable = UNLOCKS.some(u => !meta.unlocks.includes(u.id) && meta.shards >= u.cost);
  document.getElementById('brmBadge').style.display = hasAffordable ? 'flex' : 'none';
}
function updateShardsDisplay() {
  const meta = loadMeta();
  document.getElementById('shardsDisplay').textContent = meta.shards + ' frags';
}

// ── BRM SCREEN ──
function openBRM() {
  document.getElementById('endScreen').classList.remove('show');
  renderBRM();
  document.getElementById('brmScreen').classList.add('show');
  document.getElementById('brmBadge').style.display = 'none';
}
function closeBRM() {
  document.getElementById('brmScreen').classList.remove('show');
  checkBRMBadge();
}
function switchBRMTab(tab) {
  ['upgrades','achievements','lore','history'].forEach(t => {
    document.getElementById('brmTab_' + t).classList.toggle('active', t === tab);
    document.getElementById('brmSection_' + t).style.display = t === tab ? 'block' : 'none';
  });
  if (tab === 'achievements') renderAchievements();
}

function renderBRM() {
  const meta = loadMeta();
  document.getElementById('brmShardsCount').textContent = '◈ ' + meta.shards + ' Signal Fragments';

  // Unlocks
  const grid = document.getElementById('unlockGrid');
  grid.innerHTML = '';
  UNLOCKS.forEach(u => {
    const owned = meta.unlocks.includes(u.id);
    const canAfford = !owned && meta.shards >= u.cost;
    const card = document.createElement('div');
    card.className = 'unlock-card ' + (owned ? 'unlocked' : 'locked');
    card.innerHTML =
      '<div class="unlock-info">' +
        '<div class="unlock-name">' + u.name + '</div>' +
        '<div class="unlock-desc">' + u.desc + '</div>' +
      '</div>' +
      '<div style="text-align:right;">' +
        '<div class="unlock-cost' + (owned ? ' owned' : '') + '">' + (owned ? '✓ OWNED' : '◈ ' + u.cost) + '</div>' +
        (!owned ? '<button class="btn-unlock" ' + (canAfford ? '' : 'disabled') + ' onclick="buyUnlock(\'' + u.id + '\')">' + (canAfford ? 'UNLOCK' : 'LOCKED') + '</button>' : '') +
      '</div>';
    grid.appendChild(card);
  });

  // Run history
  const hist = document.getElementById('runHistory');
  if (!meta.runHistory || !meta.runHistory.length) {
    hist.innerHTML = '<div class="run-entry" style="color:var(--dim);font-style:italic;border:none;">No runs recorded yet.</div>';
  } else {
    hist.innerHTML = '';
    meta.runHistory.forEach(r => {
      const entry = document.createElement('div');
      entry.className = 'run-entry';
      entry.innerHTML =
        '<span>Run #' + r.run + ' — Phase ' + r.phase + ' — ' + r.date + '</span>' +
        '<span class="run-result ' + (r.won ? '' : 'lost') + '">' + (r.won ? 'CLEARED' : 'LOST') + ' | ' + r.score + ' cracked | ◈' + r.shards + '</span>';
      hist.appendChild(entry);
    });
  }

  // Default to upgrades tab
  switchBRMTab('upgrades');
}

function buyUnlock(id) {
  const meta = loadMeta();
  const u = UNLOCKS.find(x => x.id === id);
  if (!u || meta.unlocks.includes(id) || meta.shards < u.cost) return;
  meta.shards -= u.cost;
  meta.unlocks.push(id);
  saveMeta(meta);
  SFX.passive();
  showPassiveToast('UNLOCKED: ' + u.name);
  renderBRM();
  updateShardsDisplay();
}

function saveRunToHistory(won) {
  const meta = loadMeta();
  meta.shards = (meta.shards || 0) + state.shardsEarned;
  const entry = {
    run:    meta.totalRuns,
    won,
    score:  state.score,
    phase:  state.phase + 1,
    shards: state.shardsEarned,
    date:   new Date().toLocaleDateString(),
  };
  meta.runHistory = [entry, ...(meta.runHistory || [])].slice(0, 10);
  saveMeta(meta);
  updateShardsDisplay();
  checkBRMBadge();
}
