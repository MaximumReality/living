// ═══════════════════════════════════════════════════════
// CIPHER ROGUELITE — DATA
// cipher-data.js
// ═══════════════════════════════════════════════════════

const ZONES = [
  { name:'PHASE 1: DEADZONE',     subtitle:'Signal range: hostile',        color:'#00ffe7', ciphersPerPhase:4 },
  { name:'PHASE 2: RUST MARKETS', subtitle:'Scavengers active',             color:'#ffaa00', ciphersPerPhase:4 },
  { name:'PHASE 3: SIGNAL STORM', subtitle:'Encrypted interference',        color:'#ff00aa', ciphersPerPhase:4 },
  { name:'PHASE 4: CORE BREACH',  subtitle:'Maximum threat — crack or die', color:'#ff2244', ciphersPerPhase:3 },
];
const TOTAL_CIPHERS = 15;

const PUZZLES = [
  // FOOD
  { word:'RATION',  clue:'Compressed survival block. The <em>nomad</em> found one sealed in a crashed supply drone.', category:'food', icon:'🥫', boost:'food', boostAmt:18, desc:'A vacuum-sealed brick of nutrients. Keeps you moving for 48 hours.' },
  { word:'FUNGUS',  clue:'It grows in the dark tunnels of the <em>deadzone</em>. Glows faintly. Edible — mostly.', category:'food', icon:'🍄', boost:'food', boostAmt:12, desc:'Bioluminescent wasteland mushroom. Nutritious if you ignore the color.' },
  { word:'INSECT',  clue:'Six legs, high protein. The <em>wasteland</em> runs on them.', category:'food', icon:'🦗', boost:'food', boostAmt:10, desc:'Crunchy. Surprisingly good roasted on a hot exhaust pipe.' },
  { word:'ROOTS',   clue:'They push through cracked asphalt, searching for water. So does the <em>wanderer</em>.', category:'food', icon:'🌿', boost:'food', boostAmt:8, desc:'Bitter but caloric. Dig deep enough and the wasteland feeds you.' },
  { word:'ALGAE',   clue:'Green slime coating the <em>dead reservoir</em>. Disgusting. Essential.', category:'food', icon:'🟢', boost:'food', boostAmt:9, desc:'Dried algae cake. Rich in protein, zero flavor. Survival first.' },
  { word:'GRAIN',   clue:'Salvaged from a collapsed silo. The <em>drone</em> detected it under three meters of rubble.', category:'food', icon:'🌾', boost:'food', boostAmt:14, desc:'Hermetically sealed grain pouch. Pre-collapse military surplus.' },
  { word:'JERKY',   clue:'Dried and smoked in the exhaust vents of a <em>dead city</em>. What kind of meat? Don\'t ask.', category:'food', icon:'🥩', boost:'food', boostAmt:16, desc:'Preserved protein strips. Salty. Keeps indefinitely in arid zones.' },
  { word:'SEED',    clue:'Tiny and hidden in the <em>wasteland soil</em>. The future of food starts here.', category:'food', icon:'🌱', boost:'food', boostAmt:7, desc:'Heirloom seed pack. Plant near water, wait two weeks, survive.' },
  // WATER
  { word:'FILTER',  clue:'Without this, the puddle becomes a <em>death sentence</em>. Crack it to survive.', category:'water', icon:'🔩', boost:'water', boostAmt:20, desc:'Carbon mesh water filter. Turns toxic runoff into drinkable grit-water.' },
  { word:'CANTEEN', clue:'Seven letters. Carries the most precious <em>resource</em> in the wasteland.', category:'water', icon:'🧴', boost:'water', boostAmt:16, desc:'Dented alloy canteen with a radiation-resistant seal.' },
  { word:'DEWCAP',  clue:'Stretched between ruins at dusk, it catches <em>sky tears</em> before dawn.', category:'water', icon:'💧', boost:'water', boostAmt:12, desc:'Polymer moisture-capture sheet. Harvests condensation overnight.' },
  { word:'PURIFY',  clue:'The drone buzzes: <em>contamination detected.</em> You need to do this first.', category:'water', icon:'⚗️', boost:'water', boostAmt:15, desc:'Chemical purification tabs. Each one clears a litre of grey water.' },
  { word:'AQUIFER', clue:'Seven letters. Underground. Ancient. The <em>deep scan</em> found a trace signal.', category:'water', icon:'🌊', boost:'water', boostAmt:22, desc:'Aquifer access drill map. One source that hasn\'t gone dry yet.' },
  { word:'RESIN',   clue:'Seeps from the broken trees in the <em>toxic grove</em>. Collect it. Boil it. Drink.', category:'water', icon:'🧪', boost:'water', boostAmt:10, desc:'Processed tree resin extract. Bitter but hydrating after purification.' },
  { word:'FLASK',   clue:'Small. Light. Tucked in the ruins beneath a <em>collapsed overpass</em>.', category:'water', icon:'🥤', boost:'water', boostAmt:11, desc:'Titanium flask. Insulated. The cloak has a slot for exactly this.' },
  { word:'MIST',    clue:'It rolls across the <em>dead flats</em> at dawn. Catch it on cloth. Wring it out. Live.', category:'water', icon:'🌫️', boost:'water', boostAmt:8, desc:'Mist collector net. Four liters per night if conditions hold.' },
  // TECH
  { word:'CIRCUIT', clue:'The drone\'s <em>core processor</em> runs on this. Seven traces on a board.', category:'tech', icon:'⚡', boost:'tech', boostAmt:18, desc:'Salvaged logic board. Powers the drone\'s navigation routines.' },
  { word:'BATTERY', clue:'Seven cells. The <em>heartbeat</em> of every scavenged machine.', category:'tech', icon:'🔋', boost:'tech', boostAmt:15, desc:'Lithium-polymer cell block. Keeps the cloak\'s neon lit and the drone airborne.' },
  { word:'PATCH',   clue:'A small square of code that fixes the <em>glitch</em> in your drone\'s optics.', category:'tech', icon:'🔧', boost:'tech', boostAmt:10, desc:'Firmware patch burned to a chip. The drone stops seeing ghosts.' },
  { word:'SIGNAL',  clue:'You\'ve been searching for weeks. Finally — a <em>beacon</em> in the static.', category:'tech', icon:'📡', boost:'tech', boostAmt:14, desc:'Long-range signal booster. The wasteland gets a little less lonely.' },
  { word:'CIPHER',  clue:'The language of the <em>dead net</em>. Crack it and the ruins speak.', category:'tech', icon:'🔐', boost:'tech', boostAmt:20, desc:'Quantum cipher key. Unlocks encrypted supply caches across the sector.' },
  { word:'RELAY',   clue:'Five letters. Without it the <em>drone goes dark</em> beyond fifty meters.', category:'tech', icon:'📻', boost:'tech', boostAmt:13, desc:'Comms relay module. Extends drone range and restores glitched telemetry.' },
  { word:'PROBE',   clue:'Sent ahead into the <em>contaminated zone</em>. Whatever it found, it didn\'t come back.', category:'tech', icon:'🔭', boost:'tech', boostAmt:11, desc:'Recon probe core. Recovered and patched — still transmits partial data.' },
  { word:'SOLAR',   clue:'Thin as foil. Folds into a pocket. Unfolds to <em>drink the sun</em>.', category:'tech', icon:'☀️', boost:'tech', boostAmt:16, desc:'Flexible solar cell array. Passive charge while moving through open zones.' },
  { word:'CODEC',   clue:'Intercept an encrypted broadcast. You need this to <em>decode the noise</em>.', category:'tech', icon:'💾', boost:'tech', boostAmt:12, desc:'Compression codec chip. Decrypts faction comms. Knowledge is survival.' },
  { word:'CLOAK',   clue:'Not just fashion. The <em>neon weave</em> bends light and scrambles thermal sensors.', category:'tech', icon:'🧥', boost:'tech', boostAmt:19, desc:'Adaptive cloak module. Repairs frayed neon filaments in the hood lining.' },
];

const PASSIVE_ITEMS = [
  { id:'rust_filter',    name:'Rust Filter',     icon:'🔩', desc:'Water loss reduced on cipher failures' },
  { id:'signal_anchor',  name:'Signal Anchor',   icon:'⚓', desc:'+1 free attempt each phase' },
  { id:'drone_overclock',name:'Drone Overclock', icon:'⚡', desc:'Hints cost 1% survival instead of 3%' },
  { id:'scrap_blade',    name:'Scrap Blade',     icon:'🗡️', desc:'+3% survival bonus on every solved cipher' },
  { id:'static_filter',  name:'Static Filter',   icon:'📶', desc:'Failure survival loss reduced by 2' },
  { id:'glitch_ward',    name:'Glitch Ward',     icon:'🌀', desc:'Shrine sacrifice costs 5% less survival' },
  { id:'trader_eye',     name:'Trader Eye',      icon:'👁️', desc:'Trader always offers one extra item' },
];

const ENCOUNTER_TYPES = {
  food:   { label:'FOOD CACHE',    color:'#ffaa00', diffLabel:'EASY',   attemptsBonus:+1, reward:'food boost · low risk' },
  water:  { label:'WATER CISTERN', color:'#00ffe7', diffLabel:'MEDIUM', attemptsBonus: 0, reward:'water boost' },
  tech:   { label:'TECH VAULT',    color:'#ff00aa', diffLabel:'HARD',   attemptsBonus:-1, reward:'tech boost · passive item chance' },
  void:   { label:'VOID ANOMALY',  color:'#cc44ff', diffLabel:'HARD',   attemptsBonus:-1, reward:'rare loot · ◈ +2 frags' },
  signal: { label:'SIGNAL CACHE',  color:'#00ff88', diffLabel:'MEDIUM', attemptsBonus: 0, reward:'mixed boost · ◈ +1 frag' },
  trader: { label:'WASTELAND TRADER', color:'#ffd700', diffLabel:'EVENT', attemptsBonus:0, reward:'spend frags for items or survival' },
  shrine: { label:'GLITCH SHRINE', color:'#cc44ff', diffLabel:'EVENT',  attemptsBonus:0, reward:'sacrifice survival for a powerful relic' },
};

// Trader item pool — costs in shards, effect applied immediately
const TRADER_ITEMS = [
  { id:'ration_pack',   name:'Emergency Ration', icon:'🥫', cost:2, desc:'Restore +15% survival',        effect:'survival', value:15 },
  { id:'hint_chip',     name:'Hint Chip',         icon:'💡', cost:2, desc:'Free hint next cipher',        effect:'freeHint', value:1 },
  { id:'cipher_spike',  name:'Cipher Spike',      icon:'⚡', cost:3, desc:'Auto-solve one letter',        effect:'autoLetter', value:1 },
  { id:'static_bomb',   name:'Static Bomb',       icon:'💣', cost:3, desc:'Reroll current cipher word',   effect:'reroll', value:1 },
  { id:'iron_ration',   name:'Iron Ration',       icon:'🔩', cost:4, desc:'Restore +25% survival',        effect:'survival', value:25 },
  { id:'passive_cache', name:'Passive Cache',     icon:'📦', cost:5, desc:'Random passive item',          effect:'passive', value:1 },
];

// Shrine relics — cost survival, grant powerful passives
const SHRINE_RELICS = [
  { id:'void_eye',     name:'Void Eye',     icon:'👁️', cost:15, desc:'See the answer first letter free every cipher' },
  { id:'iron_cloak',   name:'Iron Cloak',   icon:'🛡️', cost:12, desc:'Reduce all failure losses by half this run' },
  { id:'echo_core',    name:'Echo Core',    icon:'🔮', cost:18, desc:'+5% survival for every phase you reach' },
  { id:'dead_signal',  name:'Dead Signal',  icon:'📡', cost:10, desc:'Double shards earned this run' },
  { id:'null_filter',  name:'Null Filter',  icon:'🌀', cost:20, desc:'Failures never end a cipher — infinite attempts this run' },
];

const UNLOCKS = [
  { id:'extra_survival', name:'HARDENED CLOAK',   cost:5,  desc:'+10% starting survival on every run' },
  { id:'extra_attempts', name:'ANALOG OVERRIDE',  cost:8,  desc:'Start with 5 attempts instead of 4' },
  { id:'void_ciphers',   name:'VOID CIPHER PACK', cost:10, desc:'Unlocks VOID ANOMALY encounter type' },
  { id:'start_passive',  name:'FIELD CACHE',      cost:12, desc:'Start each run with a random passive item' },
  { id:'calm_bonus',     name:'CALM PROTOCOL',    cost:6,  desc:'Calm zones restore +8% survival (base: +5%)' },
  { id:'trader_access',  name:'BLACK MARKET',     cost:8,  desc:'Unlocks Wasteland Trader encounter type' },
  { id:'shrine_access',  name:'GLITCH FAITH',     cost:10, desc:'Unlocks Glitch Shrine encounter type' },
];

// Achievements — checked at end of run and on key events
const ACHIEVEMENTS = [
  { id:'first_blood',   name:'FIRST CONTACT',    icon:'🩸', desc:'Complete your first run',                  check: (s) => s.score >= 1 },
  { id:'phase2',        name:'RUST RUNNER',       icon:'⚙️', desc:'Reach Phase 2',                           check: (s) => s.phase >= 1 },
  { id:'phase3',        name:'STORM RIDER',       icon:'⚡', desc:'Reach Phase 3',                           check: (s) => s.phase >= 2 },
  { id:'phase4',        name:'CORE BREACH',       icon:'💀', desc:'Reach Phase 4',                           check: (s) => s.phase >= 3 },
  { id:'sector_clear',  name:'SECTOR CLEARED',    icon:'🏆', desc:'Complete a full run',                     check: (s) => s.score >= TOTAL_CIPHERS },
  { id:'no_hints',      name:'GHOST SIGNAL',      icon:'👻', desc:'Finish a run without using any hints',    check: (s) => s.score >= TOTAL_CIPHERS && !s.hintUsedEver },
  { id:'streak5',       name:'CIPHER CHAIN',      icon:'🔥', desc:'Get a 5-cipher streak in one run',        check: (s) => s.maxStreak >= 5 },
  { id:'perfect_phase', name:'CLEAN SWEEP',       icon:'✨', desc:'Complete any phase without a wrong answer',check: (s) => s.perfectPhase },
  { id:'passive3',      name:'FULLY LOADED',      icon:'📦', desc:'Hold 3 passive items at once',            check: (s) => s.passives.length >= 3 },
  { id:'shrine_used',   name:'GLITCH FAITH',      icon:'🌀', desc:'Use a Glitch Shrine',                     check: (s) => s.shrineUsed },
  { id:'survived_low',  name:'FLATLINE',          icon:'❤️', desc:'Survive with 5% or less survival',        check: (s) => s.lowestSurvival <= 5 && !s.gameOver },
  { id:'void_crack',    name:'VOID WALKER',        icon:'🕳️', desc:'Crack a Void Anomaly cipher',            check: (s) => s.voidCracked },
];

// Lore logs — unlocked by milestone, shown in BRM
const LORE_LOGS = [
  { id:'log_deadzone',  unlock:'phase2',       title:'DEADZONE FIELD REPORT',    text:'Signal recovered from sector 7-G. The ruins here predate the collapse by decades. Someone was preparing. The drone keeps finding identical coordinates burned into wall circuits. V0ID-WALKER doesn\'t ask why anymore.' },
  { id:'log_markets',   unlock:'phase3',       title:'RUST MARKETS INTERCEPT',   text:'Intercepted trader comms. The Markets aren\'t black market — they\'re the only market. Everything that survived the collapse passes through here. Someone is cataloging it all. The drone\'s facial recognition keeps triggering on someone it can\'t identify.' },
  { id:'log_storm',     unlock:'phase4',       title:'SIGNAL STORM ORIGIN',      text:'The storm isn\'t weather. It\'s broadcast interference from something in the Core. The Bureau of Reality Management flagged this frequency seventeen years ago and classified it. Whatever they were hiding — it\'s still transmitting.' },
  { id:'log_core',      unlock:'sector_clear', title:'CORE BREACH DEBRIEF',      text:'You made it. The Core was a server farm, not a weapon. Someone uploaded everything — memories, names, the whole pre-collapse record. The drone\'s memory chip is full. You don\'t delete any of it. You carry it out instead.' },
  { id:'log_shrine',    unlock:'shrine_used',  title:'GLITCH SHRINE ANALYSIS',   text:'The shrines are real. They\'re not religious. They\'re terminals — someone built prayer interfaces into derelict hardware. Leave something of yourself, take something back. The Bureau called them anomalies. They were wrong. They\'re the only honest machines left.' },
  { id:'log_void',      unlock:'void_crack',   title:'VOID ANOMALY REPORT',      text:'The Void isn\'t empty. The drone\'s sensors found structured data in what should be noise — a whole compressed archive of transmissions that never arrived. Someone was sending messages to the future. Some of them are addressed to you.' },
];

const CALM_TEXTS = [
  'The static clears. The drone runs diagnostics. You find a ledge and breathe.',
  'A pocket of silence in the storm. No signals. No threats. The cloak cools down.',
  'Old graffiti on a crumbled wall: THEY DIDN\'T BREAK US. You believe it for a moment.',
  'The drone finds a dry channel, plays a fragment of pre-collapse music. You rest.',
  'A dead tree still standing. You lean against it. The wasteland holds its breath.',
];

const AMBUSH_TEXTS = [
  'Hostile signal locked on your position. Crack it before they triangulate.',
  'Static bomb incoming. You have seconds to decrypt the containment code.',
  'The drone screams: DECRYPT NOW or the sector is lost.',
];

const PHASE_SUBTEXT = [
  'The Deadzone fractures ahead.',
  'Rust Market signals scatter.',
  'Storm interference peaks.',
  'Core systems destabilizing.',
];

const DRONE_LINES = [
  'BZZt— proximity ping.','signal fragments: 3','glitch in sector 7','thermal spike detected',
  'recalibrating...','low battery warning','uploading waypoint','entity scan: unclear',
  'memory corruption: 2%','404: hope not found','cloak charge: 67%','route: UNKNOWN',
  'hostile signatures: 0','static on all channels','drone vision: degraded','last checkpoint: erased',
];

const STATUS_LINES = [
  'decrypting cache data...','scanning for hostiles...','cloak charge: nominal',
  'reading the ruins...','navigating deadzone...','tracing signal source...',
  'drone: semi-functional','sector: contaminated','cloak filaments: 72%','route to cache: unclear',
];
