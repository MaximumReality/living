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
    diagram: null,
    diagramLabel: 'P-TRAP CROSS-SECTION — GAS WALL',
    sim: null,
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
    diagram: null,
    diagramLabel: 'ENGINE OIL CIRCUIT — LUBRICATION SYSTEM',
    sim: null,
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

};
// End of MODULES
