// ═══════════════════════════════════════════════════════
// CIPHER ROGUELITE — ACHIEVEMENTS + LORE
// cipher-achievements.js
// ═══════════════════════════════════════════════════════

function checkAchievements() {
  const meta = loadMeta();
  if (!meta.achievements) meta.achievements = [];
  if (!meta.loreLogs) meta.loreLogs = [];

  const newlyUnlocked = [];
  let changed = false;

  ACHIEVEMENTS.forEach(ach => {
    if (meta.achievements.includes(ach.id)) return;
    try {
      if (!ach.check(state)) return;
    } catch(e) { return; }

    meta.achievements.push(ach.id);
    newlyUnlocked.push(ach);
    changed = true;

    // Check if this achievement unlocks a lore log
    const log = LORE_LOGS.find(l => l.unlock === ach.id);
    if (log && !meta.loreLogs.includes(log.id)) {
      meta.loreLogs.push(log.id);
    }
  });

  if (changed) saveMeta(meta);

  newlyUnlocked.forEach((ach, i) => {
    setTimeout(() => showAchievementToast(ach), i * 2800);
  });
}

function showAchievementToast(ach) {
  SFX.streak();
  const toast = document.getElementById('achievementToast');
  document.getElementById('achIcon').textContent = ach.icon;
  document.getElementById('achName').textContent = ach.name;
  document.getElementById('achDesc').textContent = ach.desc;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

// ── BRM: render achievements and lore tabs ──
function renderAchievements() {
  const meta = loadMeta();
  const earned = meta.achievements || [];

  const container = document.getElementById('achievementGrid');
  if (!container) return;
  container.innerHTML = '';

  ACHIEVEMENTS.forEach(ach => {
    const unlocked = earned.includes(ach.id);
    const card = document.createElement('div');
    card.className = 'ach-card ' + (unlocked ? 'unlocked' : 'locked');
    card.innerHTML =
      '<span class="ach-icon">' + (unlocked ? ach.icon : '🔒') + '</span>' +
      '<div class="ach-info">' +
        '<div class="ach-name">' + ach.name + '</div>' +
        '<div class="ach-desc">' + (unlocked ? ach.desc : '???') + '</div>' +
      '</div>';
    container.appendChild(card);
  });

  renderLoreLogs();
}

function renderLoreLogs() {
  const meta = loadMeta();
  const unlocked = meta.loreLogs || [];
  const container = document.getElementById('loreLogGrid');
  if (!container) return;
  container.innerHTML = '';

  if (!unlocked.length) {
    container.innerHTML = '<div style="font-size:0.6rem;color:var(--dim);font-style:italic;padding:8px 0;">No signal logs recovered yet. Complete runs to unlock transmissions.</div>';
    return;
  }

  LORE_LOGS.forEach(log => {
    if (!unlocked.includes(log.id)) return;
    const entry = document.createElement('div');
    entry.className = 'lore-entry';
    entry.innerHTML =
      '<div class="lore-title">' + log.title + '</div>' +
      '<div class="lore-text">' + log.text + '</div>';
    container.appendChild(entry);
  });
}
