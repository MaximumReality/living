// ============================================================
// BUREAU TERMINAL — MODULE DATA
// modules.js
// ============================================================

const MODULES = {

  m001: {
    id: 'm001',
    num: 'MODULE 001',
    title: 'THE TOILET — THE SIPHON ENGINE',
    clearance: 'CLEARANCE: CIVILIAN',
    diagram: 'assets/diagrams/module001-toilet.PNG',
    diagramLabel: 'TOILET CROSS-SECTION — SIPHON ENGINE',
    sim: 'toilet',
    flavor: `You have used this device thousands of times. You have never been told how it works. It operates without electricity, without motors, and without a single moving part that requires a power source. It was engineered in the 19th century and has not needed reinvention. This is that explanation.`,
    sections: [
      {
        label: '01 — SYSTEM OVERVIEW',
        title: 'What It Is & What It Does',
        body: `<p>A toilet is a <strong>gravity-fed, self-resetting siphon engine</strong> connected to a pressurized water supply and a vented drain system.</p>
<p>It stores a precise volume of clean water, releases it on command to trigger a siphon effect in the bowl, evacuates waste through that siphon into the drain system, then automatically refills both the bowl and the tank to standby state.</p>
<div class="callout info"><div class="callout-tag">KEY FACT</div><div class="callout-body">A standard toilet uses no electricity, no pumps, and no suction devices. The only forces at work are municipal water pressure and gravity — plus atmospheric pressure driving the siphon.</div></div>`
      },
      {
        label: '02 — COMPONENTS',
        title: 'Tank & Bowl Systems',
        body: `<p><strong>TANK — Upper Reservoir</strong></p>
<table class="components-table">
<thead><tr><th>Component</th><th>Function</th></tr></thead>
<tbody>
<tr><td>Fill valve (ballcock)</td><td>Controls incoming water; shuts off when tank reaches set level</td></tr>
<tr><td>Float (ball or cup)</td><td>Rises with water level; signals fill valve to close</td></tr>
<tr><td>Flapper valve</td><td>Rubber seal at tank bottom; opens on flush, closes to allow refill</td></tr>
<tr><td>Overflow tube</td><td>Emergency drain; prevents tank overflow if fill valve fails</td></tr>
<tr><td>Flush handle & chain</td><td>Mechanical trigger; lifts flapper to initiate flush cycle</td></tr>
<tr><td>Supply line</td><td>Pressurized line from wall; feeds tank only</td></tr>
</tbody>
</table>
<p style="margin-top:14px"><strong>BOWL — The Siphon Chamber</strong></p>
<table class="components-table">
<thead><tr><th>Component</th><th>Function</th></tr></thead>
<tbody>
<tr><td>Rim jets</td><td>Holes under the rim; distribute water around bowl during flush</td></tr>
<tr><td>Siphon jet</td><td>Forward-facing port at bowl bottom; directs high-velocity water into trapway</td></tr>
<tr><td>Trapway</td><td>The S-shaped internal passage; holds water seal, creates siphon during flush</td></tr>
<tr><td>Water seal</td><td>Standing water in trapway; blocks sewer gas at all times</td></tr>
<tr><td>Wax ring</td><td>Airtight seal between toilet base and floor flange</td></tr>
</tbody>
</table>`
      },
      {
        label: '03 — SYSTEM FLOW',
        title: 'How the Flush Cycle Works',
        isFlow: true,
        steps: [
          { num: '01', title: 'STANDBY STATE', text: 'Tank is full. Flapper is sealed. Bowl holds a shallow water seal in the trapway. Vent stack is open. The system is pressurized and waiting.' },
          { num: '02', title: 'FLUSH TRIGGER', text: 'Handle is pressed. Chain lifts flapper off its seat. Tank water is released through the flush valve opening at tank bottom.' },
          { num: '03', title: 'BOWL FILL & JET ACTIVATION', text: 'Water rushes from tank simultaneously through rim jets (cleaning action around bowl walls) and the siphon jet (focused stream into the trapway). Duration: approximately 2–3 seconds.' },
          { num: '04', title: 'SIPHON INITIATION', text: '<strong>This is the mechanism most people never understand.</strong> When enough water fills the trapway completely — top to bottom, no air gap — atmospheric pressure pushing down on the bowl water drives everything up and over the trapway hump and down into the drain. This is siphon action. The bowl empties not because it is "sucked" from below. It is pushed from above by atmospheric pressure.' },
          { num: '05', title: 'SIPHON BREAK', text: 'Once air enters the trapway, siphon action stops. The flapper settles back onto its seat. A small amount of water flows through the fill tube directly into the bowl to re-establish the water seal. The gurgling sound you hear is air breaking the siphon.' },
          { num: '06', title: 'TANK REFILL', text: 'Fill valve opens. Water enters from supply line. Float rises. When water reaches the set level, float signals fill valve to close. System returns to standby. Total cycle: 60–90 seconds.' }
        ]
      },
      {
        label: '04 — WHY IT MATTERS',
        title: 'Real-World Consequences',
        body: `<p>If you don't understand this system, you cannot diagnose it.</p>
<div class="callout warning"><div class="callout-tag">⚠ WASTE ALERT</div><div class="callout-body">A running toilet wastes up to <strong>200 gallons per day</strong> — almost always caused by a $2 flapper that takes 10 minutes to replace.</div></div>
<p>A weak flush is almost always a partial siphon failure — caused by low water level, blocked rim jets, or a worn siphon jet. A toilet that won't stop running after the tank fills is almost always a float set too high, allowing water to constantly drain into the overflow tube.</p>
<div class="callout warning"><div class="callout-tag">⚠ SEWER GAS</div><div class="callout-body">Never let a toilet sit unused and dry. The trapway water seal evaporates over weeks, opening a direct path for sewer gas into the building.</div></div>
<div class="callout success"><div class="callout-tag">✓ THE POINT</div><div class="callout-body">Every failure listed here is diagnosable and fixable by a person with no plumbing training — if they understand the system.</div></div>`
      },
      {
        label: '05 — REPAIR & MAINTENANCE',
        title: 'Common Failures & Fixes',
        body: `<div class="callout info"><div class="callout-tag">SAFETY FIRST</div><div class="callout-body">Always close the supply valve before any tank work. The valve is behind the toilet base, at the wall. Turn clockwise to close. Flush once to empty the tank.</div></div>
<table class="components-table" style="margin-top:14px">
<thead><tr><th>Symptom</th><th>Likely Cause</th><th>Fix</th></tr></thead>
<tbody>
<tr><td>Water trickling into bowl</td><td>Worn flapper</td><td>Replace flapper. $2–5. Unhook old, snap on new.</td></tr>
<tr><td>Water level at overflow tube</td><td>Float set too high</td><td>Adjust float DOWN until water stops 1" below overflow tube.</td></tr>
<tr><td>Fill valve won't close</td><td>Faulty fill valve</td><td>Replace fill valve. $10–15.</td></tr>
<tr><td>Low water in bowl after flush</td><td>Low tank water level</td><td>Adjust float UPWARD.</td></tr>
<tr><td>Uneven water distribution</td><td>Clogged rim jets</td><td>Clear with wire/pick. White vinegar for mineral buildup.</td></tr>
<tr><td>Bowl doesn't fully evacuate</td><td>Partial trapway blockage</td><td>Plunge with flange plunger. If unresolved, use toilet auger.</td></tr>
</tbody></table>`
      },
      {
        label: '06 — TROUBLESHOOTING',
        title: 'Diagnostic Flowchart',
        isFlowchart: true,
        chart: `<span class="q">Is water running continuously?</span>
│
├── YES → <span class="q">Is water trickling INTO the bowl?</span>
│         ├── YES → <span class="a">Flapper is leaking.</span> <span class="fix">→ Replace flapper.</span>
│         └── NO  → <span class="q">Check water level in tank.</span>
│                   ├── AT/ABOVE overflow tube → <span class="a">Float too high.</span> <span class="fix">→ Adjust float DOWN.</span>
│                   └── BELOW overflow tube   → <span class="a">Fill valve faulty.</span> <span class="fix">→ Replace fill valve.</span>
│
└── NO  → <span class="q">Is the flush weak or incomplete?</span>
          ├── YES → <span class="q">Is tank filling to proper level?</span>
          │         ├── NO  → <span class="fix">→ Adjust float UP.</span>
          │         └── YES → <span class="a">Check rim jets for mineral blockage.</span>
          │                   <span class="fix">→ Clear jets. If still weak: auger trapway.</span>
          └── NO  → <span class="q">Is handle loose or unresponsive?</span>
                    ├── YES → <span class="a">Check chain.</span> <span class="fix">→ Reconnect. Adjust slack to ½ inch.</span>
                    └── NO  → <span class="a">Trapway blockage likely.</span> <span class="fix">→ Plunge. If unresolved: auger.</span>`
      }
    ]
  },

  m002: {
    id: 'm002',
    num: 'MODULE 002',
    title: 'THE BREAKER BOX — THE OVERLOAD GATE',
    clearance: 'CLEARANCE: CIVILIAN',
    diagram: 'assets/diagrams/module002-breakerbox.PNG',
    diagramLabel: 'BREAKER PANEL CROSS-SECTION — OVERLOAD GATE',
    sim: 'breaker',
    flavor: `Somewhere in your home there is a gray metal box. Most people open it once, feel a vague unease, and close it again. They call an electrician. They wait in the dark. That box is not mysterious. It is a precisely engineered overload protection system — a series of automatic gates that monitor current flow through every circuit and disconnect any circuit the instant it carries more electricity than its wiring can safely handle. It has one job: prevent your walls from catching fire.`,
    sections: [
      {
        label: '01 — SYSTEM OVERVIEW',
        title: 'What It Is & What It Does',
        body: `<p>A breaker box (also called a panel, load center, or distribution board) is the <strong>central hub where your home's incoming electrical supply is divided into individual protected circuits</strong>, each controlled by an automatic switch called a circuit breaker.</p>
<p>It receives high-voltage power from the utility, splits it into usable circuits, monitors current flow in each circuit continuously, and automatically disconnects any circuit that exceeds its rated capacity — before the wiring overheats and ignites.</p>
<div class="callout warning"><div class="callout-tag">⚠ WHAT IT DOES NOT DO</div><div class="callout-body">It does not protect you from shock if you touch a live wire. It does not prevent all electrical fires — only overload and short-circuit fires. It does not regulate voltage, only current flow.</div></div>`
      },
      {
        label: '02 — COMPONENTS',
        title: 'Panel, Buses & Breakers',
        body: `<p><strong>INCOMING SUPPLY</strong></p>
<table class="components-table">
<thead><tr><th>Component</th><th>Function</th></tr></thead>
<tbody>
<tr><td>Service entrance cables</td><td>Two hot legs (120V each) + one neutral from utility. Enter top of panel.</td></tr>
<tr><td>Meter (outside)</td><td>Utility-owned. Measures power consumed. Sits before the panel.</td></tr>
<tr><td>Main breaker</td><td>Double-pole breaker at top of panel. Disconnects ALL power to the box. Rated 100A, 150A, or 200A.</td></tr>
</tbody></table>
<p style="margin-top:14px"><strong>INSIDE THE PANEL</strong></p>
<table class="components-table">
<thead><tr><th>Component</th><th>Function</th></tr></thead>
<tbody>
<tr><td>Bus bars (hot)</td><td>Two metal bars running down the panel. Each carries 120V. All breakers clip onto these.</td></tr>
<tr><td>Neutral bus bar</td><td>Connects all white (neutral) wires. Returns current to utility.</td></tr>
<tr><td>Ground bus bar</td><td>Connects all bare copper ground wires. Connects to earth ground rod.</td></tr>
<tr><td>Circuit breakers</td><td>Individual switches monitoring and protecting each circuit. Rated in amps: 15A, 20A, 30A, 50A.</td></tr>
</tbody></table>
<p style="margin-top:14px"><strong>BREAKER TYPES</strong></p>
<table class="components-table">
<thead><tr><th>Type</th><th>Voltage</th><th>Typical Use</th></tr></thead>
<tbody>
<tr><td>Single-pole</td><td>120V</td><td>Lights, outlets, small appliances</td></tr>
<tr><td>Double-pole</td><td>240V</td><td>Dryer, oven, AC unit, water heater</td></tr>
<tr><td>GFCI breaker</td><td>120V/240V</td><td>Wet areas — whole-circuit ground fault protection</td></tr>
<tr><td>AFCI breaker</td><td>120V</td><td>Arc fault protection — bedrooms, living areas</td></tr>
</tbody></table>`
      },
      {
        label: '03 — SYSTEM FLOW',
        title: 'How the Protection Cycle Works',
        isFlow: true,
        steps: [
          { num: '01', title: 'STANDBY STATE', text: 'Utility power enters via service entrance. The two hot legs energize the bus bars. Every breaker in the ON position completes a circuit: bus bar → breaker → wiring → load → neutral wire → neutral bus → back to utility. Current flows continuously through every active circuit.' },
          { num: '02', title: 'CURRENT MONITORING', text: 'Inside every breaker is a <strong>bimetallic strip</strong> — two metals bonded together that expand at different rates when heated. Current flowing through generates heat proportional to that current. The strip monitors this heat continuously, passively, with no electronics required.' },
          { num: '03', title: 'OVERLOAD CONDITION', text: 'When total current on a circuit exceeds the breaker\'s rated amperage, the bimetallic strip heats, bends, and trips the breaker after a short delay. The delay is intentional — brief spikes (like a motor starting) are normal. <strong>Sustained overload is the danger.</strong>' },
          { num: '04', title: 'SHORT CIRCUIT CONDITION', text: 'When a hot wire contacts a neutral or ground wire directly, current spikes to catastrophic levels almost instantly. The breaker\'s <strong>internal electromagnet</strong> responds to this sudden spike — tripping in milliseconds, far faster than the bimetallic strip. Two mechanisms: slow thermal for overloads, fast magnetic for short circuits.' },
          { num: '05', title: 'TRIP EVENT', text: 'The breaker\'s mechanism releases. The switch moves to the TRIPPED position — usually center (between ON and OFF). Power to that circuit is cut. The wiring cools. The fault must be identified and resolved before resetting.' },
          { num: '06', title: 'RESET PROCEDURE', text: 'Push the switch firmly to full OFF, then back to full ON. If it trips again immediately, the fault condition still exists. <strong>Do not repeatedly reset a breaker that keeps tripping.</strong> That is the panel telling you something is wrong.' }
        ]
      },
      {
        label: '04 — WHY IT MATTERS',
        title: 'Real-World Consequences',
        body: `<p>Electrical fires kill hundreds of people every year. The majority are caused by overloaded or damaged wiring — the exact condition a properly functioning breaker prevents.</p>
<div class="callout success"><div class="callout-tag">✓ YOU CAN DO THIS YOURSELF</div><div class="callout-body">Reset a tripped breaker. Identify which circuit serves which room. Replace a standard single-pole breaker (with power off). Label every breaker slot — most panels are unlabeled or mislabeled.</div></div>
<div class="callout warning"><div class="callout-tag">⚠ CALL AN ELECTRICIAN FOR THIS</div><div class="callout-body">Any work on the service entrance or main breaker. Adding new circuits. Upgrading panel amperage. Any work inside the panel with the main breaker ON. The service entrance cables above the main breaker are <strong>live at all times</strong>.</div></div>
<div class="callout warning"><div class="callout-tag">⚠ PANEL SAFETY ALERT</div><div class="callout-body">Federal Pacific Stab-Lok and Zinsco panels have documented failure rates — breakers may not trip under fault conditions. If your home has one, consult an electrician about replacement.</div></div>`
      },
      {
        label: '05 — REPAIR & MAINTENANCE',
        title: 'Common Failures & Fixes',
        body: `<div class="callout warning"><div class="callout-tag">⚠ SAFETY FIRST</div><div class="callout-body">Always turn off the main breaker before working inside the panel. Even then, the service entrance cables above the main breaker remain live. Never touch them.</div></div>
<table class="components-table" style="margin-top:14px">
<thead><tr><th>Symptom</th><th>Likely Cause</th><th>Fix</th></tr></thead>
<tbody>
<tr><td>Breaker trips repeatedly</td><td>Overloaded circuit</td><td>Redistribute load. Move devices to other circuits.</td></tr>
<tr><td>Trips instantly on reset</td><td>Short circuit in wiring</td><td>Do not reset again. Call electrician.</td></tr>
<tr><td>Trips when specific device plugs in</td><td>Faulty appliance</td><td>Unplug device. Test circuit. Replace device.</td></tr>
<tr><td>Trips under normal load</td><td>Worn breaker</td><td>Replace the breaker.</td></tr>
<tr><td>Breaker won't reset</td><td>Fault still present</td><td>Disconnect all devices. Try reset. If fails — call electrician.</td></tr>
<tr><td>Breaker hot to touch</td><td>Overload or loose wire</td><td>Slight warmth normal. Hot = call electrician.</td></tr>
<tr><td>Burning smell from panel</td><td>Arcing or overheating wire</td><td>Evacuate if strong. Call electrician immediately.</td></tr>
</tbody></table>`
      },
      {
        label: '06 — TROUBLESHOOTING',
        title: 'Diagnostic Flowchart',
        isFlowchart: true,
        chart: `<span class="q">A circuit is dead. No power to outlets or lights.</span>
│
├── CHECK PANEL → <span class="q">Is a breaker in TRIPPED (center) position?</span>
│   ├── YES → <span class="q">Burning smell, sparks, or specific device caused it?</span>
│   │         ├── Burning/sparks → <span class="a">DO NOT RESET.</span> <span class="fix">Call electrician.</span>
│   │         ├── Specific device → <span class="fix">Unplug device. Reset breaker. Test.</span>
│   │         │   └── Trips again without device? → <span class="a">Wiring fault.</span> <span class="fix">Call electrician.</span>
│   │         └── No obvious fault → <span class="fix">Reset: push to OFF, then ON firmly.</span>
│   │             └── Trips again? → <span class="fix">Unplug all devices. Reset. Add load slowly.</span>
│   │
│   └── NO tripped breaker → <span class="q">Is the MAIN breaker tripped?</span>
│       ├── YES → <span class="fix">Reset main breaker.</span> Trips again? <span class="fix">Call utility.</span>
│       └── NO  → <span class="fix">Check GFCI outlets in that area — press RESET on outlet face.</span>
│                 └── Still dead? → <span class="a">Loose wire or failed breaker.</span> <span class="fix">Call electrician.</span>
│
└── ALL power out
    ├── <span class="q">Neighbors affected?</span> → YES: Utility outage. Wait.
    └── Only your home → <span class="fix">Reset main breaker. If fails → call utility.</span>`
      }
    ]
  },

  m003: {
    id: 'm003',
    num: 'MODULE 003',
    title: 'THE P-TRAP — THE GAS WALL',
    clearance: 'CLEARANCE: CIVILIAN',
    diagram: diagram: 'assets/diagrams/m003-ptrap-gaswall.PNG',
,
    diagramLabel: 'P-TRAP CROSS-SECTION — GAS WALL',
    sim: 'ptrap',
    flavor: `Under every sink, behind every shower drain, and beneath every toilet in your home, there is a curved section of pipe holding a small amount of standing water. That water is not there by accident. It is the only thing standing between you and the sewer system. Remove it, and your home fills with hydrogen sulfide, methane, and every pathogen living in the municipal waste line. The P-trap is not plumbing trivia. It is a life-safety device.`,
    sections: [
      {
        label: '01 — SYSTEM OVERVIEW',
        title: 'What It Is & What It Does',
        body: `<p>A P-trap is a <strong>curved pipe section installed beneath every drain fixture</strong> — sinks, showers, bathtubs, floor drains — that retains a small volume of water after each use. That standing water creates an airtight seal between the living space and the drain/sewer system.</p>
<p>It is called a P-trap because its shape — a curved dip followed by a horizontal outlet — resembles the letter P when viewed from the side.</p>
<div class="callout warning"><div class="callout-tag">⚠ WITHOUT A P-TRAP</div><div class="callout-body">Sewer gas contains hydrogen sulfide (toxic, smells like rotten eggs), methane (flammable), ammonia, and airborne pathogens. A dry or missing trap allows all of these to enter your living space freely.</div></div>`
      },
      {
        label: '02 — COMPONENTS',
        title: 'Trap Anatomy',
        body: `<table class="components-table">
<thead><tr><th>Component</th><th>Function</th></tr></thead>
<tbody>
<tr><td>Inlet arm</td><td>Vertical or angled pipe from drain fixture into the trap curve</td></tr>
<tr><td>Trap dip (the curve)</td><td>The lowest point of the P-shape; this is where water is retained</td></tr>
<tr><td>Water seal</td><td>Standing water sitting in the trap dip; depth typically 2–4 inches; this is the gas barrier</td></tr>
<tr><td>Outlet arm</td><td>Horizontal pipe exiting the trap toward the drain stack</td></tr>
<tr><td>Trap arm</td><td>The horizontal section between trap outlet and the wall fitting</td></tr>
<tr><td>Slip joints / nuts</td><td>Compression fittings allowing trap removal for cleaning; hand-tightenable</td></tr>
<tr><td>Cleanout plug</td><td>Present on some traps; allows access to the trap dip without disassembly</td></tr>
</tbody></table>
<p style="margin-top:14px"><strong>TRAP TYPES</strong></p>
<table class="components-table">
<thead><tr><th>Type</th><th>Use Case</th></tr></thead>
<tbody>
<tr><td>P-trap (standard)</td><td>Under sinks; connects to horizontal drain in wall</td></tr>
<tr><td>S-trap (largely obsolete)</td><td>Connects to drain in floor; prone to self-siphoning — banned in most modern codes</td></tr>
<tr><td>Bottle trap</td><td>Compact design for pedestal sinks; same function, different form</td></tr>
<tr><td>Drum trap</td><td>Old cylindrical design found in pre-1950s homes; difficult to clean</td></tr>
</tbody></table>`
      },
      {
        label: '03 — SYSTEM FLOW',
        title: 'How the Trap Works',
        isFlow: true,
        steps: [
          { num: '01', title: 'STANDBY STATE', text: 'Water from the last use of the fixture sits in the trap dip. It goes nowhere because the outlet arm is not lower than the dip — there is no gravity path for it to drain. The water seal is intact. Sewer gas cannot pass through liquid.' },
          { num: '02', title: 'DRAIN EVENT', text: 'Water enters from above (sink use, shower, etc.). It flows through the inlet arm, over the trap dip, through the outlet arm, and into the drain stack. The trap refills with fresh water during every use.' },
          { num: '03', title: 'SEAL RESTORATION', text: 'As the drain event ends, enough water remains in the dip to restore the seal. The fixture does not need to be used heavily — even a small amount of water is enough to maintain the barrier.' },
          { num: '04', title: 'VENT STACK ROLE', text: 'The vent stack (a pipe running from the drain system to the roof) admits air behind draining water. Without it, draining water creates suction that can pull the trap seal dry — called <strong>siphoning</strong>. The vent breaks that suction and protects every trap in the system.' },
          { num: '05', title: 'EVAPORATION FAILURE', text: 'In fixtures that are rarely used, the trap water evaporates over time — typically 3–5 weeks in dry climates, longer in humid ones. Once the seal is gone, sewer gas enters. Fix: run the fixture for 30 seconds to refill the trap.' },
          { num: '06', title: 'BLOCKAGE LOCATION', text: 'Most sink clogs occur in the trap dip, where hair, grease, and soap accumulate in the curve. This is intentional — the trap is accessible and removable. It acts as a first-line catch point before blockages reach the harder-to-access drain stack.' }
        ]
      },
      {
        label: '04 — WHY IT MATTERS',
        title: 'Real-World Consequences',
        body: `<p>A functioning P-trap is the difference between a healthy indoor environment and a home slowly filling with sewer gas. Most people never think about it — until it fails.</p>
<div class="callout warning"><div class="callout-tag">⚠ DRY TRAP SIGNS</div><div class="callout-body">If you smell rotten eggs or sewage from a drain that is not clogged, especially in a guest bathroom or basement drain that is rarely used, the trap has likely dried out. Run water for 30 seconds. If the smell persists, the trap may be damaged or missing.</div></div>
<div class="callout success"><div class="callout-tag">✓ MOST CLOGS ARE HERE</div><div class="callout-body">Before calling a plumber for a slow drain, remove and clean the P-trap. It is hand-removable under most sinks. Put a bucket underneath, unscrew the slip nuts, pull out the trap, clear it, reinstall. This clears the majority of household sink clogs in under 5 minutes.</div></div>`
      },
      {
        label: '05 — REPAIR & MAINTENANCE',
        title: 'Common Failures & Fixes',
        body: `<div class="callout info"><div class="callout-tag">SAFETY NOTE</div><div class="callout-body">P-trap work requires no special tools. Always place a bucket under the trap before removing it. The trap will contain standing water and debris.</div></div>
<table class="components-table" style="margin-top:14px">
<thead><tr><th>Symptom</th><th>Likely Cause</th><th>Fix</th></tr></thead>
<tbody>
<tr><td>Sewer smell from drain</td><td>Dry trap seal (evaporated)</td><td>Run fixture for 30 seconds. Refills automatically.</td></tr>
<tr><td>Sewer smell from rarely-used drain</td><td>Chronic evaporation</td><td>Pour 1 cup of water + 1 tbsp cooking oil monthly. Oil slows evaporation.</td></tr>
<tr><td>Slow drain</td><td>Debris accumulation in trap dip</td><td>Remove trap, clean, reinstall. 5 minutes.</td></tr>
<tr><td>Leak at slip joint</td><td>Worn washer or loose nut</td><td>Hand-tighten nut. If still leaking, replace the rubber washer inside the nut.</td></tr>
<tr><td>Visible crack in trap</td><td>Physical damage or age</td><td>Replace entire trap. PVC traps cost $3–8 at any hardware store.</td></tr>
<tr><td>Persistent sewer smell after refilling</td><td>Missing vent / siphoned trap</td><td>Check vent stack for blockage (birds nests, debris). May need air admittance valve installed.</td></tr>
</tbody></table>`
      },
      {
        label: '06 — TROUBLESHOOTING',
        title: 'Diagnostic Flowchart',
        isFlowchart: true,
        chart: `<span class="q">Sewer smell coming from a drain.</span>
│
├── <span class="q">Is the fixture used regularly?</span>
│   ├── NO (guest bath, basement drain) → <span class="a">Trap likely dry from evaporation.</span>
│   │   <span class="fix">→ Run fixture 30 seconds. Smell should clear in minutes.</span>
│   │   └── Smell returns within days? → <span class="fix">Add oil seal. Check for vent issue.</span>
│   │
│   └── YES (daily-use fixture) → <span class="q">Any recent plumbing work nearby?</span>
│       ├── YES → <span class="a">Trap may have been removed and not reinstalled.</span>
│       │         <span class="fix">→ Inspect under sink. Verify trap is present and sealed.</span>
│       └── NO  → <span class="a">Possible cracked trap or failed vent stack.</span>
│                 <span class="fix">→ Inspect trap for cracks. Check roof vent for blockage.</span>
│
└── <span class="q">Drain is also slow?</span>
    ├── YES → <span class="a">Debris in trap dip.</span>
    │         <span class="fix">→ Place bucket under trap. Remove slip nuts. Clear trap. Reinstall.</span>
    └── NO  → <span class="a">Trap is clear but seal may be compromised.</span>
              <span class="fix">→ Inspect trap for hairline cracks. Replace if damaged ($3–8).</span>`
      }
    ]
  },

  m004: {
    id: 'm004',
    num: 'MODULE 004',
    title: 'ENGINE OIL — LIQUID ARMOR',
    clearance: 'CLEARANCE: CIVILIAN',
    diagram: diagram: 'assets/diagrams/m004-engineoil-circuit.PNG',
    diagramLabel: 'ENGINE OIL CIRCUIT — LUBRICATION SYSTEM',
    sim: 'oil',
    flavor: `Your engine contains hundreds of metal parts moving at thousands of cycles per minute, separated from each other by a film of oil measured in thousandths of an inch. That film is the only thing preventing direct metal-on-metal contact that would destroy your engine in minutes. Most people change their oil when reminded by a sticker. Almost none of them know what the oil is actually doing — or what happens when it fails.`,
    sections: [
      {
        label: '01 — SYSTEM OVERVIEW',
        title: 'What It Is & What It Does',
        body: `<p>Engine oil is a <strong>pressurized lubrication system</strong> that circulates a film of oil between every moving metal surface inside an engine — crankshaft bearings, camshaft lobes, piston walls, valve stems — preventing direct metal contact, reducing friction, dissipating heat, and carrying microscopic debris to the filter.</p>
<div class="callout info"><div class="callout-tag">KEY FACT</div><div class="callout-body">Oil does not just lubricate. It cools (absorbing up to 40% of engine heat in some designs), cleans (carrying combustion byproducts to the filter), seals (filling micro-gaps between piston rings and cylinder walls), and protects against corrosion.</div></div>`
      },
      {
        label: '02 — COMPONENTS',
        title: 'The Lubrication Circuit',
        body: `<table class="components-table">
<thead><tr><th>Component</th><th>Function</th></tr></thead>
<tbody>
<tr><td>Oil pan (sump)</td><td>Reservoir at bottom of engine; holds 4–8 quarts of oil at rest</td></tr>
<tr><td>Oil pump</td><td>Gear-driven by the engine; pulls oil from sump and pressurizes it throughout the system</td></tr>
<tr><td>Oil pickup tube & screen</td><td>Submerged in the sump; initial filter keeping large debris from entering the pump</td></tr>
<tr><td>Oil filter</td><td>Removes combustion particles, metal shavings, and contaminants down to ~25 microns</td></tr>
<tr><td>Oil galleries (passages)</td><td>Machined passages throughout the engine block; the oil's highway system</td></tr>
<tr><td>Main bearings</td><td>Crankshaft bearing surfaces; rely entirely on pressurized oil film to prevent contact</td></tr>
<tr><td>Rod bearings</td><td>Connecting rod to crankshaft; same oil-film dependency</td></tr>
<tr><td>Camshaft lobes & lifters</td><td>High-pressure contact points; require constant lubrication</td></tr>
<tr><td>Oil pressure relief valve</td><td>Prevents over-pressurization; bleeds off excess at high RPM</td></tr>
<tr><td>Dipstick</td><td>Manual oil level gauge; your primary diagnostic tool</td></tr>
</tbody></table>
<p style="margin-top:14px"><strong>OIL VISCOSITY RATINGS</strong></p>
<table class="components-table">
<thead><tr><th>Rating</th><th>Meaning</th></tr></thead>
<tbody>
<tr><td>5W-30</td><td>"5W" = cold-weather flow rating (Winter). "30" = viscosity at operating temperature. Thinner cold, thicker hot.</td></tr>
<tr><td>0W-20</td><td>Very thin — designed for modern tight-tolerance engines; better cold-start protection</td></tr>
<tr><td>10W-40</td><td>Thicker at temperature — older engines with more wear and looser tolerances</td></tr>
</tbody></table>`
      },
      {
        label: '03 — SYSTEM FLOW',
        title: 'The Oil Circulation Cycle',
        isFlow: true,
        steps: [
          { num: '01', title: 'COLD START', text: 'Oil sits in the sump at rest. On startup, the oil pump immediately begins pulling oil from the sump. For the first 5–30 seconds, oil pressure is being established. This is the most damaging period of engine operation — surfaces are running on residual oil film only. <strong>This is why cold revving is hard on engines.</strong>' },
          { num: '02', title: 'PRESSURIZATION', text: 'The oil pump (gear-type, positive displacement) builds pressure — typically 25–80 PSI at operating temperature depending on engine design. Oil is pushed through galleries in the engine block to every lubricated surface simultaneously.' },
          { num: '03', title: 'FILTRATION', text: 'Oil passes through the filter, which traps particles. When the filter becomes clogged, a bypass valve opens to prevent oil starvation — at the cost of sending unfiltered oil to the engine. This is why filter changes matter as much as oil changes.' },
          { num: '04', title: 'BEARING LUBRICATION', text: 'Pressurized oil is fed to crankshaft and rod bearing journals through drilled passages. The oil forms a hydrodynamic wedge — the rotating shaft actually rides on a film of oil, never touching the bearing surface directly during normal operation.' },
          { num: '05', title: 'HEAT ABSORPTION & RETURN', text: 'Oil absorbs heat from engine components and drains by gravity back to the sump, where it partially cools before being recirculated. Some engines use an oil cooler (a small radiator for oil) to manage thermal load.' },
          { num: '06', title: 'DEGRADATION', text: 'Over time and mileage, oil breaks down: additive packages deplete, combustion byproducts contaminate the oil, and the base oil oxidizes. Viscosity changes. The oil becomes less effective at forming protective films. This is why oil must be changed — not just topped up.' }
        ]
      },
      {
        label: '04 — WHY IT MATTERS',
        title: 'Real-World Consequences',
        body: `<p>Engine oil failure is one of the most expensive and preventable mechanical failures a vehicle owner can experience.</p>
<div class="callout warning"><div class="callout-tag">⚠ LOW OIL PRESSURE</div><div class="callout-body">If the oil pressure warning light illuminates while driving, <strong>stop the engine as soon as safely possible.</strong> Driving even a short distance with low oil pressure can cause catastrophic bearing failure. This is not a "get it checked soon" light. It is a stop now light.</div></div>
<div class="callout warning"><div class="callout-tag">⚠ THE COST OF NEGLECT</div><div class="callout-body">A $30–60 oil change neglected long enough requires a $3,000–8,000 engine replacement. The engine does not fail gradually — bearing surfaces seize suddenly once the oil film breaks down completely.</div></div>
<div class="callout success"><div class="callout-tag">✓ CHECK YOUR OIL</div><div class="callout-body">Pull the dipstick. Wipe it. Reinsert fully. Pull again. Oil should be between MIN and MAX marks, amber-to-brown in color, with no milky appearance (coolant contamination) and no metallic glitter (bearing wear).</div></div>`
      },
      {
        label: '05 — REPAIR & MAINTENANCE',
        title: 'Oil Change & Diagnosis',
        body: `<div class="callout info"><div class="callout-tag">SAFETY NOTE</div><div class="callout-body">Never drain engine oil immediately after running — it will be extremely hot. Wait 20–30 minutes after shutdown. Never run an engine without oil in the sump.</div></div>
<table class="components-table" style="margin-top:14px">
<thead><tr><th>Symptom</th><th>Likely Cause</th><th>Action</th></tr></thead>
<tbody>
<tr><td>Oil pressure warning light on</td><td>Low oil level, failed pump, or blockage</td><td>Stop engine immediately. Check oil level. Do not restart until diagnosed.</td></tr>
<tr><td>Milky/frothy oil on dipstick</td><td>Coolant entering oil (head gasket failure)</td><td>Do not drive. Call mechanic. Head gasket replacement required.</td></tr>
<tr><td>Metallic particles in oil</td><td>Bearing or internal wear</td><td>Engine inspection required. May indicate imminent failure.</td></tr>
<tr><td>Oil very black and thick</td><td>Severely overdue change</td><td>Change oil and filter immediately.</td></tr>
<tr><td>Oil level drops between changes</td><td>External leak or burning oil</td><td>Check for leaks under car. Blue exhaust smoke indicates burning. Investigate source.</td></tr>
<tr><td>Knocking sound at startup</td><td>Oil starvation at bearing surfaces</td><td>Check oil level immediately. If full, possible bearing damage — mechanic required.</td></tr>
</tbody></table>`
      },
      {
        label: '06 — TROUBLESHOOTING',
        title: 'Diagnostic Flowchart',
        isFlowchart: true,
        chart: `<span class="q">Oil warning light is on.</span>
│
├── <span class="q">Is the engine running?</span>
│   ├── YES → <span class="a">Stop engine as soon as safely possible.</span>
│   │         <span class="fix">→ Do NOT continue driving. Check oil level.</span>
│   │         ├── Oil level LOW → <span class="fix">Add correct oil to MAX mark. Restart briefly. Check pressure.</span>
│   │         │   └── Light stays on after adding oil → <span class="a">Oil pump or sensor failure.</span> <span class="fix">Do not drive. Tow.</span>
│   │         └── Oil level OK → <span class="a">Pump failure, blockage, or sensor fault.</span> <span class="fix">Do not drive. Tow.</span>
│   └── NO (light on at startup only) → <span class="a">Normal for 1–2 seconds while pressure builds.</span>
│       └── Light stays on after 3 sec → <span class="fix">Check oil level before starting again.</span>
│
└── <span class="q">Knocking sound from engine.</span>
    ├── <span class="q">Knock at startup, clears after warmup?</span>
    │   └── <span class="a">Possible piston slap or sticky lifter.</span> <span class="fix">Check oil level and quality. Consider thicker viscosity.</span>
    └── <span class="q">Persistent knock at all RPMs?</span>
        └── <span class="a">Bearing knock — serious.</span> <span class="fix">Stop driving. Mechanic inspection required.</span>`
      }
    ]
  }
,

  m005: {
    id: 'm005',
    num: 'MODULE 005',
    title: 'THE WATER HEATER — PRESSURE CHAMBER',
    clearance: 'CLEARANCE: CIVILIAN',
    diagram: null,
    diagramLabel: 'WATER HEATER CROSS-SECTION — PRESSURE CHAMBER',
    sim: 'heater',
    flavor: `In your utility closet or garage sits a metal cylinder holding 40 to 80 gallons of water heated to 120 degrees Fahrenheit and kept under constant pressure. It contains a sacrificial metal rod that is slowly dissolving to protect the tank. It has a valve designed to prevent explosion. Most people have never opened that closet with any intention other than grabbing a mop. This is what is actually happening in there.`,
    sections: [
      {
        label: '01 — SYSTEM OVERVIEW',
        title: 'What It Is & What It Does',
        body: `<p>A water heater is a <strong>pressurized thermal storage vessel</strong> that heats cold incoming water to a set temperature and stores it under pressure until a fixture demands it. When a hot tap opens anywhere in the house, stored hot water flows out and cold water enters the bottom of the tank to be heated.</p>
<p>It is one of the highest-risk appliances in a home — not because it commonly fails catastrophically, but because when it does fail without proper safety mechanisms, the result is a steam explosion.</p>
<div class="callout warning"><div class="callout-tag">⚠ THE MYTHBUSTERS TEST</div><div class="callout-body">A water heater with a disabled T&P valve and a blocked flue was tested by MythBusters. When the thermostat was bypassed, pressure built until the tank rocket-launched through the roof of a two-story house. The T&P valve is not optional safety theater. It is the only thing between a malfunctioning heater and a pressure vessel failure.</div></div>`
      },
      {
        label: '02 — COMPONENTS',
        title: 'Tank, Heating & Safety Systems',
        body: `<p><strong>TANK & STRUCTURE</strong></p>
<table class="components-table">
<thead><tr><th>Component</th><th>Function</th></tr></thead>
<tbody>
<tr><td>Tank shell</td><td>Glass-lined steel vessel; holds pressurized hot water; typically 40–80 gallons</td></tr>
<tr><td>Cold water inlet (dip tube)</td><td>Pipe that delivers cold water to tank bottom; prevents mixing with hot water at top</td></tr>
<tr><td>Hot water outlet</td><td>Draws from tank top where hottest water collects</td></tr>
<tr><td>Anode rod (sacrificial rod)</td><td>Magnesium or aluminum rod suspended in tank; corrodes preferentially to protect steel tank lining</td></tr>
<tr><td>Drain valve</td><td>Ball valve at tank base; used for flushing sediment</td></tr>
<tr><td>Insulation jacket</td><td>Foam insulation between tank and outer shell; reduces standby heat loss</td></tr>
</tbody></table>
<p style="margin-top:14px"><strong>HEATING SYSTEM (Gas)</strong></p>
<table class="components-table">
<thead><tr><th>Component</th><th>Function</th></tr></thead>
<tbody>
<tr><td>Thermostat / gas valve</td><td>Controls gas flow; maintains set temperature; contains high-limit shutoff</td></tr>
<tr><td>Burner assembly</td><td>Gas burner at tank base; heats water through tank bottom</td></tr>
<tr><td>Flue / exhaust</td><td>Vents combustion gases; also draws combustion air; must be clear</td></tr>
<tr><td>Thermocouple / thermopile</td><td>Flame sensor; cuts gas if pilot goes out — prevents unburned gas accumulation</td></tr>
</tbody></table>
<p style="margin-top:14px"><strong>SAFETY SYSTEMS</strong></p>
<table class="components-table">
<thead><tr><th>Component</th><th>Function</th></tr></thead>
<tbody>
<tr><td>T&P relief valve (Temperature & Pressure)</td><td>THE most critical safety device. Opens automatically if temp exceeds 210°F or pressure exceeds 150 PSI. Vents to discharge pipe. Prevents explosion.</td></tr>
<tr><td>Discharge pipe</td><td>Directs T&P valve output to floor; prevents scalding if valve opens</td></tr>
<tr><td>Expansion tank</td><td>Small tank on cold supply line; absorbs pressure spikes in closed systems; prevents T&P valve from cycling repeatedly</td></tr>
</tbody></table>`
      },
      {
        label: '03 — SYSTEM FLOW',
        title: 'How the Heating Cycle Works',
        isFlow: true,
        steps: [
          { num: '01', title: 'STANDBY STATE', text: 'Tank holds hot water at set temperature (typically 120°F). Thermostat monitors water temperature continuously. Burner is off. Pressure inside tank equals house supply pressure plus thermal expansion — typically 50–80 PSI.' },
          { num: '02', title: 'DEMAND DRAW', text: 'A hot tap opens anywhere in the house. Hot water exits from tank top. Cold water enters through the dip tube at tank bottom, displacing upward. Cold water sinks; hot water stays at top. The two do not significantly mix during normal draw.' },
          { num: '03', title: 'BURNER ACTIVATION', text: 'Incoming cold water drops tank temperature. Thermostat detects drop and opens gas valve. Burner ignites. Combustion heats tank base. Convection circulates water — hot rises, cold falls — heating the entire tank volume.' },
          { num: '04', title: 'SEDIMENT BUILDUP', text: 'Minerals in water (calcium, magnesium) precipitate out as water heats and accumulate at tank bottom. Over years, this sediment layer insulates the tank base from the burner, forcing longer burn cycles, reducing efficiency, and eventually cracking the tank lining from thermal stress.' },
          { num: '05', title: 'ANODE ROD SACRIFICE', text: 'The anode rod undergoes galvanic corrosion preferentially — it corrodes so the tank does not. A new anode rod is 3/4 inch diameter. A depleted rod is a thin wire core with white calcium deposits. When the rod is fully depleted, the tank begins corroding. Most anode rods last 4–6 years depending on water chemistry.' },
          { num: '06', title: 'T&P VALVE ACTIVATION', text: 'If the thermostat fails and the burner runs continuously, water temperature and pressure rise beyond safe limits. At 210°F or 150 PSI, the T&P valve opens automatically, releasing water through the discharge pipe. This is the last line of defense before pressure vessel failure.' }
        ]
      },
      {
        label: '04 — WHY IT MATTERS',
        title: 'Real-World Consequences',
        body: `<p>Water heater neglect follows a predictable timeline. Most people own a water heater for 12 years, replace it when it fails, and never perform a single maintenance action in between.</p>
<div class="callout warning"><div class="callout-tag">⚠ ANODE ROD NEGLECT</div><div class="callout-body">The single most common cause of premature water heater failure is a depleted anode rod. A $30 rod replaced every 4–6 years extends tank life from 8 years to 15+. Most homeowners have never heard of it.</div></div>
<div class="callout warning"><div class="callout-tag">⚠ T&P VALVE TEST</div><div class="callout-body">T&P valves should be manually tested once a year by lifting the lever briefly. A valve that has never been tested may be corroded shut — providing no protection. A valve that drips continuously after testing is failing and must be replaced ($15–25).</div></div>
<div class="callout success"><div class="callout-tag">✓ ANNUAL MAINTENANCE CHECKLIST</div><div class="callout-body">1. Test T&P valve (lift lever, verify water flows, verify it reseats). 2. Flush sediment (connect hose to drain valve, flush until clear). 3. Check anode rod every 3 years (requires 1-1/16" socket). 4. Verify discharge pipe terminates near floor.</div></div>`
      },
      {
        label: '05 — REPAIR & MAINTENANCE',
        title: 'Common Failures & Fixes',
        body: `<div class="callout warning"><div class="callout-tag">⚠ SAFETY FIRST</div><div class="callout-body">Before any water heater work: set thermostat to PILOT (gas) or turn off breaker (electric). Close cold water supply valve. Allow water to cool before draining — tank water can be 120–140°F.</div></div>
<table class="components-table" style="margin-top:14px">
<thead><tr><th>Symptom</th><th>Likely Cause</th><th>Fix</th></tr></thead>
<tbody>
<tr><td>No hot water (gas)</td><td>Pilot light out</td><td>Relight pilot per label instructions. If won't stay lit: thermocouple failed ($15–20).</td></tr>
<tr><td>Lukewarm water only</td><td>Thermostat set too low, or sediment insulating burner</td><td>Raise thermostat to 120°F. Flush sediment annually.</td></tr>
<tr><td>Rumbling/popping sounds</td><td>Sediment at tank base heating and cracking</td><td>Flush tank. If sounds persist, tank lining is cracking — replacement approaching.</td></tr>
<tr><td>Water around base of tank</td><td>Tank corrosion leak, or T&P valve dripping</td><td>T&P drip: test valve, replace if faulty. Base leak: tank has failed — replace unit.</td></tr>
<tr><td>Rust-colored hot water</td><td>Anode rod depleted, tank corroding</td><td>Replace anode rod immediately. If tank has corroded through: replace unit.</td></tr>
<tr><td>T&P valve releasing repeatedly</td><td>Thermal expansion in closed system</td><td>Install expansion tank on cold supply line. Check pressure regulator.</td></tr>
</tbody></table>`
      },
      {
        label: '06 — TROUBLESHOOTING',
        title: 'Diagnostic Flowchart',
        isFlowchart: true,
        chart: `<span class="q">No hot water.</span>
│
├── <span class="q">Gas or electric heater?</span>
│   ├── GAS → <span class="q">Is pilot light lit?</span>
│   │         ├── NO → <span class="fix">Relight per label. If won't stay: thermocouple failed.</span>
│   │         └── YES → <span class="q">Is gas supply on?</span>
│   │                   ├── NO → <span class="fix">Open gas valve.</span>
│   │                   └── YES → <span class="a">Thermostat or gas valve failed.</span> <span class="fix">Call technician.</span>
│   └── ELECTRIC → <span class="q">Is breaker on?</span>
│                  ├── NO → <span class="fix">Reset breaker.</span>
│                  └── YES → <span class="a">Heating element or thermostat failed.</span> <span class="fix">Replace element ($20–40).</span>
│
└── <span class="q">Water around base of tank.</span>
    ├── <span class="q">Coming from T&P valve discharge pipe?</span>
    │   ├── YES, dripping → <span class="a">T&P valve failing or thermal expansion.</span>
    │   │   <span class="fix">Test valve. If drips after test: replace ($15–25). Check expansion tank.</span>
    │   └── YES, flowing → <span class="a">Thermostat failure — overheating.</span> <span class="fix">Call technician immediately.</span>
    └── Coming from tank base → <span class="a">Tank has corroded through.</span> <span class="fix">Replace unit. No repair possible.</span>`
      }
    ]
  },

  m006: {
    id: 'm006',
    num: 'MODULE 006',
    title: 'THE HVAC FILTER — THE AIRBORNE',
    clearance: 'CLEARANCE: CIVILIAN',
    diagram: null,
    diagramLabel: 'HVAC FILTER SYSTEM — AIRFLOW DIAGRAM',
    sim: 'hvac',
    flavor: `Somewhere in your home, a fan is pulling air through a rectangle of pleated material and pushing it through ductwork to every room. That filter is the only barrier between your air handler and everything floating in your home — dust, pet dander, mold spores, pollen, skin cells, combustion particles. Most people change it when they remember, which is never often enough. A clogged filter does not just reduce air quality. It starves your HVAC system of airflow and can destroy the equipment it was meant to protect.`,
    sections: [
      {
        label: '01 — SYSTEM OVERVIEW',
        title: 'What It Is & What It Does',
        body: `<p>An HVAC filter is a <strong>fibrous barrier positioned in the return air duct</strong> that captures airborne particles before they reach the air handler's blower motor, heat exchanger, or evaporator coil. It protects equipment first — cleaner indoor air is a secondary benefit.</p>
<p>Air in your home circulates in a continuous loop: return air is pulled from living spaces through the filter, conditioned (heated or cooled), and pushed back through supply ducts. The filter intercepts every particle in that loop on every pass.</p>
<div class="callout info"><div class="callout-tag">KEY FACT — MERV RATINGS</div><div class="callout-body">MERV (Minimum Efficiency Reporting Value) rates how effectively a filter captures particles. MERV 1–4: fiberglass, captures only large debris. MERV 8–11: pleated, captures dust/pollen/mold. MERV 13–16: hospital-grade, captures bacteria and smoke. Higher MERV = more restriction = more strain on your blower if your system isn't designed for it.</div></div>`
      },
      {
        label: '02 — COMPONENTS',
        title: 'Filter & Air Handler System',
        body: `<p><strong>FILTER TYPES</strong></p>
<table class="components-table">
<thead><tr><th>Type</th><th>MERV</th><th>Captures</th><th>Change Interval</th></tr></thead>
<tbody>
<tr><td>Fiberglass (flat)</td><td>1–4</td><td>Large dust, debris</td><td>Monthly</td></tr>
<tr><td>Pleated polyester</td><td>8–11</td><td>Dust, pollen, mold, pet dander</td><td>90 days</td></tr>
<tr><td>High-efficiency pleated</td><td>13–16</td><td>Above + bacteria, smoke, fine particles</td><td>60–90 days</td></tr>
<tr><td>HEPA (standalone units)</td><td>17+</td><td>Viruses, ultrafine particles</td><td>Per unit spec</td></tr>
</tbody></table>
<p style="margin-top:14px"><strong>AIR HANDLER COMPONENTS PROTECTED BY THE FILTER</strong></p>
<table class="components-table">
<thead><tr><th>Component</th><th>What Happens Without Filtration</th></tr></thead>
<tbody>
<tr><td>Blower motor</td><td>Dust accumulation causes overheating; bearing failure; reduced airflow</td></tr>
<tr><td>Evaporator coil (cooling)</td><td>Dust coats coil fins; reduces heat transfer; coil freezes over; system shuts down</td></tr>
<tr><td>Heat exchanger (heating)</td><td>Dust accumulation causes overheating; cracks develop; carbon monoxide leak risk</td></tr>
<tr><td>Ductwork</td><td>Dust coats duct interiors; mold growth potential in humid climates</td></tr>
</tbody></table>`
      },
      {
        label: '03 — SYSTEM FLOW',
        title: 'The Air Circulation Cycle',
        isFlow: true,
        steps: [
          { num: '01', title: 'RETURN AIR DRAW', text: 'The blower motor creates negative pressure in the return air plenum. Air from living spaces is pulled toward return grilles (the large louvered vents, usually on walls or ceilings). Everything in that air — dust, dander, spores — is pulled with it.' },
          { num: '02', title: 'FILTRATION', text: 'Air passes through the filter. Particles are captured by fiber interception, impaction, and diffusion. A new filter captures particles efficiently. A loaded filter becomes increasingly restrictive — airflow decreases as pressure drop across the filter increases.' },
          { num: '03', title: 'AIR HANDLER', text: 'Filtered air reaches the blower and is pushed across the heat exchanger (heating) or evaporator coil (cooling). Heat transfer occurs. The conditioned air is then pushed into supply ducts.' },
          { num: '04', title: 'PRESSURE DROP EFFECT', text: 'As the filter loads with debris, pressure drop increases. The blower must work harder to move the same volume of air. In extreme cases, airflow drops so severely that the evaporator coil freezes (cooling mode) or the heat exchanger overheats (heating mode). Both are equipment-damaging conditions.' },
          { num: '05', title: 'BYPASS AIRFLOW', text: 'A filter that is too restrictive or installed improperly with gaps around the frame creates bypass paths — unfiltered air flows around the filter directly to the equipment. A clogged filter may cause the same result if the filter media tears from differential pressure.' },
          { num: '06', title: 'COIL ICING', text: 'In cooling mode, a severely restricted filter reduces airflow across the evaporator coil. Without adequate warm air flow, the coil temperature drops below freezing. Condensation on the coil freezes, building ice that further restricts airflow in a feedback loop until the system is completely blocked and shuts down.' }
        ]
      },
      {
        label: '04 — WHY IT MATTERS',
        title: 'Real-World Consequences',
        body: `<p>A $8 filter changed on schedule prevents the most common HVAC failures. Most HVAC service calls trace back to a neglected filter.</p>
<div class="callout warning"><div class="callout-tag">⚠ FROZEN COIL</div><div class="callout-body">If your AC is running but not cooling, and you find ice on the refrigerant lines or air handler, the first thing to check is the filter. Turn the system off, let it thaw (2–24 hours), replace the filter, restart. This is the most common AC service call and almost always preventable.</div></div>
<div class="callout warning"><div class="callout-tag">⚠ HIGH-MERV TRAP</div><div class="callout-body">A MERV 13 filter in a system designed for MERV 8 can restrict airflow enough to damage the blower motor or freeze the coil. Match MERV rating to your system's specification. Check your equipment manual or call the manufacturer.</div></div>
<div class="callout success"><div class="callout-tag">✓ THE RULE</div><div class="callout-body">Set a phone reminder. Change every 90 days with no pets. Every 60 days with pets. Every 30 days with pets + allergies. Write the installation date on the filter frame in marker every time.</div></div>`
      },
      {
        label: '05 — REPAIR & MAINTENANCE',
        title: 'Filter Maintenance & Coil Recovery',
        body: `<table class="components-table">
<thead><tr><th>Symptom</th><th>Likely Cause</th><th>Fix</th></tr></thead>
<tbody>
<tr><td>AC running, no cooling</td><td>Frozen coil from restricted airflow</td><td>Check filter. Turn system to FAN ONLY (no cooling) for 2–24 hours to thaw. Replace filter. Restart.</td></tr>
<tr><td>Higher energy bills, no change in usage</td><td>Clogged filter increasing blower workload</td><td>Replace filter. Check bills again next month.</td></tr>
<tr><td>Dusty supply registers</td><td>Filter bypass (gaps around frame, or filter media breach)</td><td>Check filter fit. Verify filter is seated with no air gaps around frame edges.</td></tr>
<tr><td>Musty smell from vents</td><td>Mold on evaporator coil or in ductwork</td><td>Have coil professionally cleaned. Consider UV light installation at coil.</td></tr>
<tr><td>Weak airflow from all registers</td><td>Severely loaded filter or blower failure</td><td>Replace filter first. If no improvement: blower motor or capacitor issue.</td></tr>
</tbody></table>`
      },
      {
        label: '06 — TROUBLESHOOTING',
        title: 'Diagnostic Flowchart',
        isFlowchart: true,
        chart: `<span class="q">AC running but not cooling effectively.</span>
│
├── <span class="q">Is there ice on the refrigerant lines or air handler?</span>
│   ├── YES → <span class="a">Evaporator coil is frozen.</span>
│   │         <span class="fix">1. Turn system off (or to FAN ONLY). 2. Check/replace filter. 3. Allow 2–24hr thaw. 4. Restart.</span>
│   │         └── Freezes again after restart? → <span class="a">Low refrigerant or other issue.</span> <span class="fix">Call HVAC technician.</span>
│   └── NO → <span class="q">Is airflow from supply registers weak?</span>
│            ├── YES → <span class="fix">Check filter. If grey/black and visibly loaded: replace immediately.</span>
│            └── NO  → <span class="a">Refrigerant issue or thermostat fault.</span> <span class="fix">Call HVAC technician.</span>
│
└── <span class="q">Heating system — high energy bills or weak heat.</span>
    ├── <span class="q">Is filter visibly loaded?</span>
    │   ├── YES → <span class="fix">Replace filter. Monitor performance.</span>
    │   └── NO  → <span class="q">Any burning smell from vents?</span>
    │             ├── YES → <span class="a">Dust on heat exchanger burning off, or crack developing.</span>
    │             │         <span class="fix">Replace filter. If smell persists: CO detector check. Call technician.</span>
    │             └── NO  → <span class="a">Thermostat, gas valve, or other issue.</span> <span class="fix">Call technician.</span>`
      }
    ]
  },

  m007: {
    id: 'm007',
    num: 'MODULE 007',
    title: 'ELECTRICAL GROUNDING — THE SAFETY SINK',
    clearance: 'CLEARANCE: CIVILIAN',
    diagram: null,
    diagramLabel: 'ELECTRICAL GROUNDING DIAGRAM — FAULT CURRENT PATH',
    sim: 'ground',
    flavor: `Every outlet in a modern home has three holes. Most people know the two vertical slots carry electricity. Almost nobody knows what the round hole at the bottom actually does — or why its absence turns any appliance into a potential electrocution device. That round hole is a direct wire connection to a metal rod buried in the earth outside your home. It is not there to make the outlet work. It is there to give fault current somewhere to go that is not through your body.`,
    sections: [
      {
        label: '01 — SYSTEM OVERVIEW',
        title: 'What It Is & What It Does',
        body: `<p>Electrical grounding is a <strong>deliberate low-resistance path connecting all metal parts of an electrical system to the earth</strong>. Under normal operation, the ground wire carries no current. Its entire purpose is fault management — providing a safe, controlled path for current if a live wire contacts a metal surface, so that a breaker trips instead of a person becoming the path.</p>
<div class="callout info"><div class="callout-tag">KEY FACT</div><div class="callout-body">Current always seeks the path of least resistance back to its source. In an ungrounded system, if a live wire touches an appliance chassis, the chassis becomes energized at line voltage. The next person who touches both the chassis and a grounded surface (floor, water pipe, another appliance) completes the circuit — through their body. Grounding provides a lower-resistance path than the human body, tripping the breaker before lethal current flows.</div></div>`
      },
      {
        label: '02 — COMPONENTS',
        title: 'The Grounding System',
        body: `<table class="components-table">
<thead><tr><th>Component</th><th>Function</th></tr></thead>
<tbody>
<tr><td>Ground rod</td><td>Copper-clad steel rod driven 8 feet into earth outside home; establishes actual earth connection</td></tr>
<tr><td>Grounding electrode conductor</td><td>Wire from ground rod to main panel neutral/ground bus; typically #6 bare copper</td></tr>
<tr><td>Equipment grounding conductor (EGC)</td><td>Bare or green wire in every circuit cable; connects all metal outlet boxes, appliance chassis, and fixture frames back to panel ground bus</td></tr>
<tr><td>Ground bus bar</td><td>Metal bar in main panel where all ground wires terminate; bonded to neutral bus at main panel only</td></tr>
<tr><td>Outlet ground (round hole)</td><td>Third prong connection; provides grounded path for any appliance with a three-prong plug</td></tr>
<tr><td>GFCI protection</td><td>Ground Fault Circuit Interrupter; detects current imbalance between hot and neutral (as little as 5mA); trips in 1/40th of a second; required in wet areas; protects even without a ground wire present</td></tr>
</tbody></table>
<p style="margin-top:14px"><strong>GROUNDING vs. NEUTRAL — THE CRITICAL DISTINCTION</strong></p>
<table class="components-table">
<thead><tr><th>Wire</th><th>Color</th><th>Normal Current</th><th>Purpose</th></tr></thead>
<tbody>
<tr><td>Hot</td><td>Black (or red)</td><td>Yes — carries load current</td><td>Delivers power to device</td></tr>
<tr><td>Neutral</td><td>White</td><td>Yes — returns load current</td><td>Completes circuit back to panel</td></tr>
<tr><td>Ground</td><td>Bare or green</td><td>No — only during fault</td><td>Fault current path; safety only</td></tr>
</tbody></table>`
      },
      {
        label: '03 — SYSTEM FLOW',
        title: 'How Grounding Protects You',
        isFlow: true,
        steps: [
          { num: '01', title: 'NORMAL OPERATION', text: 'Current flows from panel hot bus → through hot wire → through appliance load → back through neutral wire → to neutral bus → back to utility. The ground wire carries zero current. It sits ready.' },
          { num: '02', title: 'FAULT CONDITION — GROUNDED SYSTEM', text: 'A wire insulation failure allows a live wire to contact the metal chassis of an appliance. Immediately, current flows from the chassis → through the ground wire → to the panel ground bus → trips the breaker. The chassis voltage drops to zero in milliseconds. A person touching the chassis feels nothing because the breaker has already tripped.' },
          { num: '03', title: 'FAULT CONDITION — UNGROUNDED SYSTEM', text: 'Same fault. No ground wire. Current has nowhere to go. The chassis sits at line voltage (120V) silently — no breaker trips, no warning. A person touching the chassis while standing on a concrete floor or touching a water pipe creates the first available fault path — through their body. At 120V, the resulting current through a human is well above the ventricular fibrillation threshold.' },
          { num: '04', title: 'GFCI OPERATION', text: 'A GFCI device monitors the difference in current between the hot and neutral wires. Under normal conditions they are equal. If current is taking a parallel path — through a person, through water — the difference is detected at 4–6 milliamps. The GFCI opens the circuit in 1/40th of a second. This is fast enough to prevent cardiac arrest. GFCI protects even without a physical ground wire.' },
          { num: '05', title: 'STATIC & EQUIPMENT GROUNDING', text: 'Grounding also eliminates static charge buildup on equipment chassis, prevents radio frequency interference, and provides a reference voltage (zero volts) that the entire electrical system uses as a baseline. Without a stable ground reference, sensitive electronics behave unpredictably.' },
          { num: '06', title: 'THE TWO-PRONG DANGER', text: 'Older two-prong outlets have no ground connection. Appliances with metal chassis plugged into two-prong outlets via an adapter ("cheater plug") have no fault current path. The adapter does nothing — the ground screw on the outlet cover plate is not connected to anything in most cases. Two-prong outlets in wet areas (kitchen, bath, garage) are a serious shock hazard and should be replaced with GFCI outlets.' }
        ]
      },
      {
        label: '04 — WHY IT MATTERS',
        title: 'Real-World Consequences',
        body: `<p>Electrocution is the fourth leading cause of occupational death in the United States. The majority involve contact with energized equipment that should have been grounded.</p>
<div class="callout warning"><div class="callout-tag">⚠ THE CHEATER PLUG</div><div class="callout-body">A three-to-two prong adapter ("cheater plug") removes grounding protection from every appliance plugged into it. The small tab on the adapter that is "supposed to" connect to the outlet cover screw provides no ground unless that screw is itself connected to a ground — which it is not in most older homes. Cheater plugs should not exist.</div></div>
<div class="callout warning"><div class="callout-tag">⚠ REVERSE POLARITY</div><div class="callout-body">An outlet wired with hot and neutral reversed is dangerous even with a ground present. The appliance chassis is now connected to the hot side of the circuit during normal operation. The appliance appears to work — but its metal parts are energized. Test outlets with a $10 outlet tester. Reverse polarity is a common DIY wiring error.</div></div>
<div class="callout success"><div class="callout-tag">✓ GFCI EVERYWHERE WET</div><div class="callout-body">Every outlet within 6 feet of a water source should be GFCI protected — kitchens, bathrooms, garages, outdoor outlets, unfinished basements. A single GFCI outlet can protect all outlets downstream on the same circuit. Test GFCI outlets monthly with the TEST button.</div></div>`
      },
      {
        label: '05 — REPAIR & MAINTENANCE',
        title: 'Common Issues & Fixes',
        body: `<div class="callout warning"><div class="callout-tag">⚠ SAFETY FIRST</div><div class="callout-body">Always turn off the breaker before working on any outlet or switch. Verify power is off with a non-contact voltage tester ($15) before touching any wires. Never work on live circuits.</div></div>
<table class="components-table" style="margin-top:14px">
<thead><tr><th>Symptom</th><th>Likely Cause</th><th>Fix</th></tr></thead>
<tbody>
<tr><td>Outlet tester shows "open ground"</td><td>Ground wire missing or disconnected</td><td>Replace with GFCI outlet (protects without ground wire) or run new cable with ground.</td></tr>
<tr><td>Outlet tester shows "reverse polarity"</td><td>Hot and neutral wired backwards</td><td>Turn off breaker. Swap black and white wires at outlet terminals.</td></tr>
<tr><td>GFCI trips repeatedly</td><td>Moisture in outlet box, faulty appliance, or wiring fault</td><td>Unplug all devices. Reset. If trips immediately: wiring fault — call electrician.</td></tr>
<tr><td>Appliance gives mild shock on touch</td><td>Chassis energized — missing or broken ground</td><td>Stop using appliance. Test outlet ground. Check appliance cord for damage.</td></tr>
<tr><td>Two-prong outlets throughout home</td><td>Pre-1960s wiring, no ground conductor</td><td>Replace all with GFCI outlets. Protects without rewiring. Code-compliant solution.</td></tr>
</tbody></table>`
      },
      {
        label: '06 — TROUBLESHOOTING',
        title: 'Diagnostic Flowchart',
        isFlowchart: true,
        chart: `<span class="q">Appliance gives a tingle or mild shock when touched.</span>
│
├── <span class="a">Stop using the appliance immediately.</span>
├── <span class="q">Is the outlet two-prong (no ground hole)?</span>
│   ├── YES → <span class="a">No ground path present.</span>
│   │         <span class="fix">Replace outlet with GFCI. Test appliance on grounded circuit.</span>
│   └── NO  → <span class="q">Does an outlet tester show OPEN GROUND?</span>
│             ├── YES → <span class="a">Ground wire disconnected or missing.</span>
│             │         <span class="fix">Replace outlet with GFCI. Have electrician verify ground continuity.</span>
│             └── NO  → <span class="a">Appliance itself is faulting.</span>
│                       <span class="fix">Have appliance inspected. Check cord for damage. Do not use until repaired.</span>
│
└── <span class="q">GFCI outlet trips when appliance plugs in.</span>
    ├── <span class="q">Does it trip with other appliances too?</span>
    │   ├── YES → <span class="a">Moisture in outlet box or wiring fault.</span>
    │   │         <span class="fix">Turn off breaker. Inspect outlet for moisture. Call electrician if wiring fault.</span>
    │   └── NO  → <span class="a">Specific appliance has ground fault.</span>
    │             <span class="fix">Do not use that appliance. Have it serviced or replaced.</span>`
      }
    ]
  },

  m008: {
    id: 'm008',
    num: 'MODULE 008',
    title: 'THE DRAIN SYSTEM — GRAVITY NETWORK',
    clearance: 'CLEARANCE: CIVILIAN',
    diagram: null,
    diagramLabel: 'DRAIN/WASTE/VENT SYSTEM — WHOLE HOUSE DIAGRAM',
    sim: 'drain',
    flavor: `Behind every wall and under every floor of your home runs a silent network of pipes that operates entirely on gravity. No pump. No motor. No pressure. Just slope, diameter, and air — working together to move waste from every fixture in your home to the municipal sewer or septic system. Most people think of plumbing as water coming in. The drain system is everything going out, and it is far more complex than the supply side. Get any part of it wrong — the slope, the venting, the trap — and the whole system fails.`,
    sections: [
      {
        label: '01 — SYSTEM OVERVIEW',
        title: 'What It Is & What It Does',
        body: `<p>The drain-waste-vent (DWV) system is a <strong>gravity-fed network of pipes that removes wastewater and solid waste from every fixture</strong> in a building and delivers it to the municipal sewer or septic system, while simultaneously venting sewer gases safely to the atmosphere and maintaining air pressure equilibrium to protect every P-trap seal.</p>
<p>It has three interdependent subsystems that must all function correctly: the drain pipes (carry waste), the waste stack (vertical main pipe), and the vent system (admits air and expels gas).</p>
<div class="callout info"><div class="callout-tag">KEY FACT</div><div class="callout-body">The drain system requires no water pressure — only gravity and correct slope. Code requires horizontal drain pipes to slope at 1/4 inch per foot of run. Too little slope: solids settle and clog. Too much slope: water outruns solids, leaving them behind. The slope is not a suggestion.</div></div>`
      },
      {
        label: '02 — COMPONENTS',
        title: 'DWV System Anatomy',
        body: `<p><strong>DRAIN & WASTE PIPES</strong></p>
<table class="components-table">
<thead><tr><th>Component</th><th>Function</th></tr></thead>
<tbody>
<tr><td>Fixture drain</td><td>Pipe from each fixture (sink, tub, shower) to the P-trap and branch drain</td></tr>
<tr><td>Branch drain</td><td>Horizontal pipe collecting waste from multiple fixtures; slopes at 1/4"/ft toward stack</td></tr>
<tr><td>Soil stack (main stack)</td><td>Vertical pipe running full height of building; receives waste from all branches; 3–4 inch diameter</td></tr>
<tr><td>Building drain</td><td>Horizontal pipe at base of stack carrying all waste to sewer connection; below floor level</td></tr>
<tr><td>Cleanout</td><td>Capped access point in drain system for snake/camera access; required at base of stack and direction changes</td></tr>
</tbody></table>
<p style="margin-top:14px"><strong>VENT SYSTEM</strong></p>
<table class="components-table">
<thead><tr><th>Component</th><th>Function</th></tr></thead>
<tbody>
<tr><td>Stack vent</td><td>Extension of soil stack above highest fixture, through roof; primary vent</td></tr>
<tr><td>Individual vent (reventing)</td><td>Vent pipe from specific fixture back to stack or roof; required when fixture is far from stack</td></tr>
<tr><td>Wet vent</td><td>Pipe that serves as both drain and vent; allowed under specific code conditions</td></tr>
<tr><td>Air admittance valve (AAV)</td><td>One-way valve allowing air in but not out; code-permitted alternative to roof penetration in some applications</td></tr>
<tr><td>Vent terminal (roof)</td><td>Open pipe end above roof; must extend above snow line and away from windows/HVAC intakes</td></tr>
</tbody></table>`
      },
      {
        label: '03 — SYSTEM FLOW',
        title: 'How the DWV System Works',
        isFlow: true,
        steps: [
          { num: '01', title: 'DRAIN EVENT', text: 'Wastewater exits a fixture and flows through the drain, through the P-trap (which refills with standing water to restore the gas seal), and into the branch drain. Gravity provides all the motive force — no pump required.' },
          { num: '02', title: 'BRANCH DRAIN FLOW', text: 'The branch drain slopes continuously at 1/4 inch per foot toward the main stack. This slope is critical: fast enough to move solids, slow enough that water and solids travel together. Too steep and water runs ahead of solids; too flat and everything settles.' },
          { num: '03', title: 'STACK FLOW', text: 'Waste enters the main stack vertically. In a properly designed system, waste flows down the inside of the stack as a sheet clinging to the pipe walls — not a solid plug. This leaves an air core in the center of the stack, which is critical for pressure equalization.' },
          { num: '04', title: 'VENTING FUNCTION', text: 'As water drains through pipes, it creates both positive pressure ahead of it (compression) and negative pressure behind it (suction). Without venting, this pressure differential would siphon every P-trap in the system — destroying the gas barriers. Vent pipes admit outside air to equalize pressure throughout the system on every drain event.' },
          { num: '05', title: 'SEWER GAS MANAGEMENT', text: 'The vent stack extends through the roof. Sewer gas — which is continuously produced by decomposition in the sewer system — rises through the stack vent and disperses into the atmosphere. This keeps gas concentration in the drain system low enough that the P-trap water seals remain the only barrier needed.' },
          { num: '06', title: 'BUILDING DRAIN & EXIT', text: 'All waste collects in the building drain (the large horizontal pipe running under the floor). It exits the building at the foundation and connects to either the municipal sewer main (via the lateral) or a septic tank. The connection is below grade and one-directional — backflow prevention relies on the slope and in high-risk areas, a backflow preventer valve.' }
        ]
      },
      {
        label: '04 — WHY IT MATTERS',
        title: 'Real-World Consequences',
        body: `<p>DWV failures range from slow annoyances to serious health hazards. Understanding the system lets you diagnose whether a problem is in the drain, the vent, or the trap — three completely different interventions.</p>
<div class="callout warning"><div class="callout-tag">⚠ BLOCKED VENT STACK</div><div class="callout-body">A blocked vent stack (birds nest, leaves, ice) causes gurgling at all fixtures, slow drains throughout the house, and sewer smell as trap seals are siphoned. The entire system behaves as if everything is clogged — but the drains themselves are clear. Diagnosis: slow drains everywhere simultaneously with gurgling = vent blockage, not drain blockage.</div></div>
<div class="callout warning"><div class="callout-tag">⚠ SEWER BACKUP</div><div class="callout-body">If sewage backs up into your lowest fixtures (basement floor drain, ground-floor toilet), the blockage is in the building drain or sewer lateral — downstream of all fixtures. Do not run any water. The entire drain system is backing up. Call a plumber with a sewer snake or hydro-jetter immediately.</div></div>
<div class="callout success"><div class="callout-tag">✓ DIAGNOSING SLOW DRAINS</div><div class="callout-body">One slow drain = localized blockage in that fixture's trap or branch drain. Multiple slow drains on same floor = blockage in shared branch. All drains slow + gurgling = vent stack blocked. All drains backing up = building drain or lateral blocked.</div></div>`
      },
      {
        label: '05 — REPAIR & MAINTENANCE',
        title: 'Common Failures & Fixes',
        body: `<table class="components-table">
<thead><tr><th>Symptom</th><th>Likely Cause</th><th>Fix</th></tr></thead>
<tbody>
<tr><td>Single slow drain</td><td>P-trap or branch drain blockage</td><td>Clean P-trap. If clear, snake the branch drain. Avoid chemical drain cleaners — they damage pipes.</td></tr>
<tr><td>Multiple slow drains same floor</td><td>Shared branch drain blockage</td><td>Snake from nearest cleanout access point toward main stack.</td></tr>
<tr><td>Gurgling from drains after use</td><td>Vent stack partially blocked</td><td>Check roof vent for debris. Clear with garden hose or plumber's snake from roof.</td></tr>
<tr><td>Sewer smell + slow drains everywhere</td><td>Vent stack fully blocked — trap siphoning</td><td>Clear vent stack from roof. Run all fixtures to refill traps after clearing.</td></tr>
<tr><td>Sewage backup at lowest fixture</td><td>Building drain or sewer lateral blockage</td><td>Do not use water. Call plumber. Hydro-jetting or mechanical snaking of main line required.</td></tr>
<tr><td>Slow drain, gurgling, sewer smell from one fixture</td><td>Missing or damaged vent for that fixture</td><td>Install air admittance valve (AAV) at that fixture's vent connection.</td></tr>
</tbody></table>`
      },
      {
        label: '06 — TROUBLESHOOTING',
        title: 'Diagnostic Flowchart',
        isFlowchart: true,
        chart: `<span class="q">Drain problem in home. Where is the blockage?</span>
│
├── <span class="q">How many fixtures are affected?</span>
│   │
│   ├── ONE fixture only
│   │   └── <span class="a">Localized blockage — P-trap or branch drain.</span>
│   │       <span class="fix">Clean P-trap. If clear: snake branch drain from cleanout.</span>
│   │
│   ├── Multiple fixtures, SAME FLOOR or AREA
│   │   └── <span class="a">Shared branch drain blockage.</span>
│   │       <span class="fix">Locate cleanout on that branch. Snake toward main stack.</span>
│   │
│   ├── ALL fixtures slow + GURGLING sounds
│   │   └── <span class="a">Vent stack blocked. Not a drain problem.</span>
│   │       <span class="fix">Inspect roof vent terminal. Clear debris. Flush with hose from roof.</span>
│   │       └── Still slow after clearing vent? → <span class="fix">Snake main stack from roof cleanout.</span>
│   │
│   └── ALL fixtures backing up / sewage visible
│       └── <span class="a">Building drain or sewer lateral blocked.</span>
│           <span class="fix">STOP using water. Call plumber. Main line service required.</span>
│
└── <span class="q">Sewer smell only — no slow drain.</span>
    ├── <span class="q">From rarely-used fixture?</span>
    │   └── <span class="a">Dry P-trap.</span> <span class="fix">Run water 30 seconds. Add oil seal.</span>
    └── <span class="q">From used fixture, persistent?</span>
        └── <span class="a">Vent issue or cracked trap.</span> <span class="fix">Inspect trap. Check vent stack.</span>`
      }
    ]
  }


};
// End of MODULES
