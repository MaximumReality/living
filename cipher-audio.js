// ═══════════════════════════════════════════════════════
// CIPHER ROGUELITE — AUDIO ENGINE
// cipher-audio.js
// ═══════════════════════════════════════════════════════

let audioCtx = null;
let soundOn = true;

function getCtx() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}

function playTone(freq, type, dur, vol, detune) {
  if (!soundOn) return;
  vol    = vol    || 0.18;
  detune = detune || 0;
  try {
    const ctx  = getCtx();
    const osc  = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    osc.detune.setValueAtTime(detune, ctx.currentTime);
    gain.gain.setValueAtTime(vol, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);
    osc.start(ctx.currentTime); osc.stop(ctx.currentTime + dur);
  } catch(e) {}
}

function playNoise(dur, vol, hipass) {
  if (!soundOn) return;
  vol    = vol    || 0.06;
  hipass = hipass || 800;
  try {
    const ctx     = getCtx();
    const bufSize = ctx.sampleRate * dur;
    const buf     = ctx.createBuffer(1, bufSize, ctx.sampleRate);
    const data    = buf.getChannelData(0);
    for (let i = 0; i < bufSize; i++) data[i] = Math.random() * 2 - 1;
    const src    = ctx.createBufferSource(); src.buffer = buf;
    const filter = ctx.createBiquadFilter(); filter.type = 'highpass'; filter.frequency.value = hipass;
    const gain   = ctx.createGain();
    gain.gain.setValueAtTime(vol, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);
    src.connect(filter); filter.connect(gain); gain.connect(ctx.destination);
    src.start();
  } catch(e) {}
}

const SFX = {
  tap()     { playTone(660, 'square',   0.06, 0.1);  playNoise(0.04, 0.03, 1200); },
  correct() {
    [440, 554, 659, 880].forEach((f, i) => setTimeout(() => playTone(f, 'square', 0.12, 0.14), i * 60));
    setTimeout(() => playNoise(0.1, 0.05, 2000), 200);
  },
  wrong()   { playTone(220, 'sawtooth', 0.15, 0.18); playTone(180, 'square', 0.1, 0.1, -50); playNoise(0.1, 0.08, 200); },
  loot()    {
    [330, 415, 523, 659].forEach(f => playTone(f, 'triangle', 0.5, 0.12));
    setTimeout(() => [523, 659, 784].forEach(f => playTone(f, 'square', 0.3, 0.08)), 200);
  },
  gameover(){ [440, 370, 311, 220].forEach((f, i) => setTimeout(() => playTone(f, 'sawtooth', 0.3, 0.15), i * 120)); setTimeout(() => playNoise(0.4, 0.1, 100), 400); },
  win()     { [523, 659, 784, 1047, 784, 1047, 1319].forEach((f, i) => setTimeout(() => playTone(f, 'square', 0.15, 0.12), i * 80)); },
  hint()    { playTone(880, 'sine', 0.08, 0.1); playTone(1100, 'sine', 0.08, 0.08); playNoise(0.06, 0.03, 2000); },
  clear()   { playTone(330, 'square', 0.06, 0.08); playNoise(0.05, 0.03, 600); },
  streak()  { [659, 784, 1047, 1319].forEach((f, i) => setTimeout(() => playTone(f, 'square', 0.1, 0.12), i * 50)); },
  passive() { [528, 660, 792].forEach((f, i) => setTimeout(() => playTone(f, 'triangle', 0.2, 0.1), i * 80)); },
  phase()   { [262, 330, 392, 523].forEach((f, i) => setTimeout(() => playTone(f, 'square', 0.25, 0.1), i * 100)); },
};

function toggleSound() {
  soundOn = !soundOn;
  const btn = document.getElementById('soundBtn');
  btn.textContent = soundOn ? '🔊' : '🔇';
  btn.className   = 'sound-btn' + (soundOn ? ' on' : '');
  if (soundOn && audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
}

// iOS: unlock AudioContext on first touch
document.addEventListener('touchstart', () => {
  if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
}, { once: true, passive: true });
