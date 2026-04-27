/*
 * ============================================================
 *  ACES Lab — data/areas.js
 *  The 5 main research areas shown as a tile menu on the homepage.
 *  Each links to area.html#area-id for a full description.
 *
 *  "themes" lists which THEME_* keys from papers.js belong here
 *  (used to auto-count publications on the area page).
 * ============================================================
 */
window.ACES_AREAS = [
  {
    id:      "grid-intelligence",
    emoji:   "🤖",
    title:   "Grid Intelligence & AI",
    tagline: "Machine learning and data analytics applied to electricity grids",
    color:   "#1565C0",
    themes:  ["THEME_AI"],
    desc: `
      <p>The electricity grid generates massive streams of data from advanced meters, sensors, and control systems at every level.
      ACES develops machine learning and AI applications to extract scientific value from this data —
      enabling intelligent grid analytics, real-time decision-making, and automated anomaly detection.</p>

      <p>Our work spans physics-informed neural networks for distribution grid modeling, convolutional
      neural networks for behind-the-meter PV detection, deep learning for real-time voltage security
      assessment, and reinforcement learning for building energy management.</p>

      <h3>Key Projects</h3>
      <ul>
        <li><strong>IMoFi:</strong> Physics-informed ML framework for fast DER hosting capacity computation</li>
        <li><strong>GridLogic:</strong> AI-enabled system to detect abnormal behavior inside electricity networks</li>
        <li><strong>Voltage Security via Deep Learning:</strong> Real-time security assessment without running full power flow simulations</li>
        <li><strong>Mixture-of-Experts:</strong> Sub-second voltage security across dynamic grid topologies</li>
        <li><strong>BTM PV Detection:</strong> CNN-based identification of hidden solar installations from AMI data</li>
      </ul>
    `,
    highlights: [
      "250+ publications in AI & grid analytics",
      "Pioneered physics-informed ML for power distribution",
      "Real-time, sub-second grid security assessment tools",
    ],
  },
  {
    id:      "renewable-energy",
    emoji:   "☀️",
    title:   "Renewable Energy & DER Integration",
    tagline: "Solar PV, energy storage, EVs, and distributed energy resources",
    color:   "#B8860B",
    themes:  ["THEME_PV"],
    desc: `
      <p>The rapid growth of rooftop solar, batteries, and electric vehicles is transforming the distribution grid.
      ACES develops the analysis tools, models, and algorithms that utilities and regulators need to safely
      integrate millions of distributed energy resources (DERs) while maintaining grid reliability.</p>

      <p>Our Fast Quasi-Static Time Series (QSTS) simulation methods run yearlong PV impact studies
      two orders of magnitude faster than conventional methods. Our measurement-based hosting capacity
      tools work without needing a network model — using only smart meter data.</p>

      <h3>Key Projects</h3>
      <ul>
        <li><strong>PV Hosting Capacity:</strong> Fast, scalable methods for determining how much solar a feeder can safely host</li>
        <li><strong>AMI-Only Hosting Capacity:</strong> No network topology needed — works from smart meter measurements alone</li>
        <li><strong>Inverter Control Estimation:</strong> Recovering behind-the-meter inverter settings from AMI data</li>
        <li><strong>EV Integration:</strong> Optimal EV charging strategies to maximize renewable usage and minimize transformer aging</li>
        <li><strong>Energy Storage Valuation:</strong> Multi-service revenue stacking optimization for grid-scale batteries</li>
      </ul>
    `,
    highlights: [
      "Fast QSTS simulation — 100x faster than brute force",
      "AMI-only hosting capacity — no network model required",
      "Published in IEEE Trans. Power Systems, ACM e-Energy, Solar Energy",
    ],
  },
  {
    id:      "prosumers-markets",
    emoji:   "🏘️",
    title:   "Prosumers, Microgrids & Markets",
    tagline: "Decentralized grid architectures, energy communities, and electricity markets",
    color:   "#2E7D32",
    themes:  ["THEME_PROSUMERS"],
    desc: `
      <p>ACES pioneered the concept of the <em>energy prosumer</em> — a home, building, or microgrid that can
      not only consume, but also produce, store, and trade energy. This foundational 2011 paper launched
      an entirely new research thread that now spans decentralized frequency control, peer-to-peer energy markets,
      and regenerative energy communities.</p>

      <p>We develop provable decentralized coordination protocols, provide formal theoretical and algorithmic
      foundations for transactive energy, and study scalability and grid evolution processes that support
      the energy internet vision.</p>

      <h3>Key Projects</h3>
      <ul>
        <li><strong>Prosumer Architecture:</strong> Layered, scalable grid control architecture for millions of prosumers</li>
        <li><strong>Distributed Frequency Control:</strong> Communication-failure-resilient decentralized frequency regulation</li>
        <li><strong>P2P Energy Markets:</strong> Peer-to-peer electricity trading mechanisms for communities with BTM DERs</li>
        <li><strong>Regenerative Communities:</strong> Framework for energy communities that produce more than they consume</li>
        <li><strong>Multi-Microgrid Optimization:</strong> Coordinated dispatch of multiple microgrids for stacked grid services</li>
      </ul>
    `,
    highlights: [
      "Introduced the prosumer paradigm — now widely cited worldwide",
      "Resilient distributed frequency control under communication failures",
      "Published in IEEE Trans. Power Systems, IEEE Trans. Smart Grid",
    ],
  },
  {
    id:      "grid-security",
    emoji:   "🔐",
    title:   "Grid Cybersecurity",
    tagline: "Cyber-physical security, hardware authentication, and threat modeling for the grid",
    color:   "#880E4F",
    themes:  ["THEME_CYBER"],
    desc: `
      <p>The modern electricity grid is a cyber-physical system where digital control and physical operations
      are tightly coupled. A cyber attack on grid SCADA systems can cause cascading physical failures with
      widespread consequences. ACES develops defenses across the full attack surface —
      from authentication of individual sensors to system-wide situational awareness.</p>

      <p>Our GridTrust project, successfully tested in a real utility substation, combines hardware digital
      fingerprinting with cryptographic technology to authenticate grid device software updates,
      preventing malicious firmware from being installed on field equipment.</p>

      <h3>Key Projects</h3>
      <ul>
        <li><strong>GridTrust:</strong> Hardware-based authentication for grid SCADA device software updates — tested in a real substation</li>
        <li><strong>GridLogic:</strong> AI-enabled anomaly detection system for cyber-physical grid monitoring</li>
        <li><strong>Attacker-Defender Modeling:</strong> Game-theoretic optimal defense investment strategies</li>
        <li><strong>Drone Threat Detection:</strong> Multi-sensor framework to protect substations from unmanned aircraft</li>
        <li><strong>CPS Situational Awareness:</strong> Bridging cybersecurity and OT awareness for grid defense</li>
      </ul>
    `,
    highlights: [
      "GridTrust tested in a real U.S. municipal utility substation",
      "Featured in AFCEA Signal magazine for AI-enabled grid defense",
      "Published in ACM Computing Surveys, IEEE Trans. Industry Applications",
    ],
  },
  {
    id:      "optimization-markets",
    emoji:   "⚙️",
    title:   "Optimization, Markets & Resilience",
    tagline: "Power flow optimization, electricity markets, and grid resilience planning",
    color:   "#37474F",
    themes:  ["THEME_OPT"],
    desc: `
      <p>Optimal power flow (OPF) is a fundamental problem in power systems — determining how to dispatch
      generation and control devices to meet demand while respecting physical and operational constraints.
      ACES develops advanced optimization algorithms for both transmission and distribution networks,
      spanning AC-OPF formulations, stochastic planning, and real-time control.</p>

      <p>Our work bridges rigorous power systems engineering with energy economics and policy.
      We design electricity market mechanisms that incentivize renewable integration, develop resilience
      frameworks for extreme weather events, and create operating envelopes that coordinate distributed
      energy resources at scale.</p>

      <h3>Key Projects</h3>
      <ul>
        <li><strong>AC Optimal Power Flow:</strong> Scalable algorithms for distribution network optimization with DERs</li>
        <li><strong>Electricity Market Design:</strong> Mechanisms for renewable integration and prosumer participation</li>
        <li><strong>Grid Resilience Planning:</strong> Stochastic optimization under extreme weather and climate uncertainty</li>
        <li><strong>Operating Envelopes:</strong> Dynamic constraint management for millions of distributed resources</li>
        <li><strong>Stochastic Scheduling:</strong> Energy resource coordination under renewable variability and demand uncertainty</li>
      </ul>
    `,
    highlights: [
      "Fast OPF solvers for real-time distribution grid control",
      "Market designs tested in utility pilot programs",
      "Published in IEEE Trans. Power Systems, Operations Research, Energy Policy",
    ],
  },
];
