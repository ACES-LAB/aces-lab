/* ============================================================
   ACES Lab — data.js
   Edit this file to update all site content.
   No server needed — data is embedded as JS variables.
   ============================================================ */

// ── STATS (hero section) ──────────────────────────────────
window.ACES_STATS = [
  { number: '250+',   label: 'Publications'    },
  { number: '7,000+', label: 'Citations'       },
  { number: '40+',    label: 'PhD Alumni'      },
  { number: '15+',    label: 'Years at GT'     },
  { number: '$10M+',  label: 'Research Funding'},
];

// ── NEWS ─────────────────────────────────────────────────
window.ACES_NEWS = [
  {
    date: '2025 Dec', emoji: '🎉',
    text: '<a href="#">Adam King</a>\'s paper on deep learning for voltage security assessment accepted to <a href="#">HICSS 2025</a>.'
  },
  {
    date: '2025 Dec', emoji: '🔐',
    text: 'New paper on hardware-based authentication for grid SCADA devices in <a href="#">IEEE Trans. Industry Applications</a>.'
  },
  {
    date: '2025 Oct', emoji: '⚡',
    text: '<a href="#">Rehan Nawaz</a>\'s mixture-of-experts voltage security paper accepted to <a href="#">IEEE NAPS 2025</a>.'
  },
  {
    date: '2025 Aug', emoji: '🎓',
    text: '<a href="#">Dr. Jorge Fernandez</a> defends PhD on generalized energy resource scheduling for distribution grid operations.'
  },
  {
    date: '2025 May', emoji: '🌱',
    text: 'New paper on regenerative energy community modeling at <a href="#">IEEE EPEC 2025</a>.'
  },
  {
    date: '2025 Jan', emoji: '📋',
    text: 'Survey on managing zero-marginal-cost renewables published in <a href="#">Renewable &amp; Sustainable Energy Reviews</a>.'
  },
  {
    date: '2024 Dec', emoji: '🎓',
    text: '<a href="#">Dr. Yiming Chen</a> defends PhD on techno-economic analysis for emerging grid technologies.'
  },
  {
    date: '2024 Nov', emoji: '☀️',
    text: 'PV hosting capacity with Volt/Var control paper published in <a href="#">IEEE Trans. Power Systems</a>.'
  },
];

// ── RESEARCH THEMES & PAPERS ──────────────────────────────
window.ACES_THEMES = [
  {
    id: 'research-ai',
    navLabel: 'AI & ML',
    emoji: '🤖',
    title: 'AI, Machine Learning & Data-Driven Grid Methods',
    desc: 'Applying neural networks, deep learning, big-data analytics, and physics-informed machine learning to power system problems — from photovoltaic estimation and fault detection to real-time voltage security and building energy control.',
    color: '#1565C0',
    papers: [
      { thumbColor: '#1a3a6e', thumbLabel: 'BigData\nAnalytics', title: 'Big Data Analytics for Future Electricity Grids', sub: 'Leveraging large-scale grid data to improve power system operations.', url: '#', tags: ['Energy Research 2020'], authors: 'Kezunovic, Grijalva et al.' },
      { thumbColor: '#1e3a5f', thumbLabel: 'DNN\nPV Estim.', title: 'Deep NN for Behind-the-Meter PV Estimation', sub: 'Estimating rooftop PV size, tilt & azimuth from smart meter data.', url: '#', tags: ['IEEE Trans. Smart Grid'], authors: 'Reno, Grijalva' },
      { thumbColor: '#162d4a', thumbLabel: 'CNN\nBTM Detect', title: 'CNN for Behind-the-Meter PV Detection', sub: 'Identifying hidden PV from net-load AMI consumption signals.', url: '#', tags: ['IEEE Trans. Energy Conversion'], authors: 'Reno, Grijalva' },
      { thumbColor: '#0f2744', thumbLabel: 'Fault-ML\nLocalize', title: 'Supervised Fault Localization in Smart Microgrids', sub: 'Accurate fault localization under complex microgrid conditions.', url: '#', tags: ['IEEE Systems Journal 2022'], authors: '' },
      { thumbColor: '#1a3560', thumbLabel: 'IMoFi\nPhysics', title: 'IMoFi: Physics-Informed ML for Grid Modeling', sub: 'Combines physics knowledge with ML to accelerate DER hosting analysis.', url: '#', tags: ['IEEE ISGT'], awards: ['Physics-Informed ML'], authors: 'Grijalva et al.' },
      { thumbColor: '#113050', thumbLabel: 'HVAC\nNeural', title: 'Building HVAC Control via Neural Networks', sub: 'Adaptive NN controller optimizes HVAC energy scheduling.', url: '#', tags: ['IEEE CEC 2021'], authors: 'Mason, Grijalva' },
      { thumbColor: '#0d2540', thumbLabel: 'Deep\nV-Sec', title: 'Deep Learning for Grid Voltage Security', sub: 'DNN framework for real-time voltage security metric evaluation.', url: '#', tags: ['HICSS 2025'], authors: 'King, Grijalva' },
      { thumbColor: '#182e50', thumbLabel: 'MoE\nV-Sec', title: 'Mixture-of-Experts for Real-Time Voltage Security', sub: 'Sub-second voltage security assessment across dynamic topologies.', url: '#', tags: ['IEEE NAPS 2025'], authors: 'Nawaz, Grijalva' },
      { thumbColor: '#0f2540', thumbLabel: 'KB-Fault\nDiag', title: 'Knowledge-Based Fault Diagnosis for High-PV Systems', sub: 'Expert system + ML for fault detection in high-solar networks.', url: '#', tags: ['IEEE ISGT 2022'], authors: 'Paul, Grijalva, Reno' },
      { thumbColor: '#1a2e50', thumbLabel: 'BigData\nRole', title: 'Role of Big Data in Power System Operation', sub: 'Transformational potential of big data for grid monitoring.', url: '#', tags: ['IREP Symposium 2013'], authors: 'Kezunovic, Xie, Grijalva' },
      { thumbColor: '#142840', thumbLabel: 'Sparse\nInverter', title: 'Sparse Sampling for BTM Inverter Control Recovery', sub: 'Recovering inverter control settings from sparse AMI data.', url: '#', tags: ['IEEE Transactions'], authors: 'Talkington, Grijalva, Reno' },
      { thumbColor: '#0f2035', thumbLabel: 'DD-Ctrl\nOptim', title: 'Data-Driven Control & Optimization in Active Networks', sub: 'Unified data-driven framework for real-time distribution grid decisions.', url: '#', tags: ['Applied Energy'], authors: '' },
    ]
  },
  {
    id: 'research-pv',
    navLabel: 'PV & DERs',
    emoji: '☀️',
    title: 'Solar PV Integration, DERs & Hosting Capacity',
    desc: 'Modeling, analysis, and grid impact assessment of distributed solar PV and other distributed energy resources — including hosting capacity calculation, inverter control estimation from AMI data, and EV smart charging.',
    color: '#C77B00',
    papers: [
      { thumbColor: '#7a5200', thumbLabel: 'Zero-MC\nSurvey', title: 'Managing Zero-Marginal-Cost Renewables', sub: 'Engineering, economic, and policy challenges of zero-cost renewable integration.', url: '#', tags: ['RSER 2026'], authors: 'Oliver, Grijalva et al.' },
      { thumbColor: '#6b4700', thumbLabel: 'HC\nVolt/Var', title: 'Hosting Capacity Model with Volt/Var Control', sub: 'Stochastic hosting capacity accounting for reactive power control.', url: '#', tags: ['IEEE Trans. Power Systems 2025'], authors: 'Kim, Grijalva' },
      { thumbColor: '#7a5a00', thumbLabel: 'HC-AMI\nOnly', title: 'PV Hosting Capacity from Smart Meter Data Only', sub: 'Hosting capacity without network models — uses only AMI measurements.', url: '#', tags: ['IEEE ISGT 2023'], authors: 'Azzolini, Reno, Grijalva et al.' },
      { thumbColor: '#6a4800', thumbLabel: 'HC-Q\nBTM', title: 'Voltage-Constrained Hosting Capacity', sub: 'Measurement-based analysis with controllable BTM reactive power.', url: '#', tags: ['IEEE Transactions'], authors: '' },
      { thumbColor: '#5a3f00', thumbLabel: 'V-Sens\nEstim.', title: 'Voltage Sensitivity Estimation Conditions', sub: 'Identifiability conditions for measurement-based sensitivity estimation.', url: '#', tags: ['IEEE Transactions 2022'], authors: 'Talkington, Grijalva, Molzahn' },
      { thumbColor: '#6b5000', thumbLabel: 'Phase\nRetrieval', title: 'Phase Retrieval via Model-Free Jacobian Recovery', sub: 'Reconstructing power flow sensitivities from noisy AMI data.', url: '#', tags: ['ACM e-Energy 2023'], authors: 'Talkington, Grijalva' },
      { thumbColor: '#7a5800', thumbLabel: 'Inverter\nAMI', title: 'Inverter Reactive Power Settings from AMI Data', sub: 'Inferring BTM inverter control curves from smart meter signals.', url: '#', tags: ['IEEE Trans. Smart Grid'], authors: 'Grijalva, Azzolini, Reno' },
      { thumbColor: '#7b5c00', thumbLabel: 'EV-Smart\nChrg.', title: 'EV Smart Charging to Maximize Renewable Usage', sub: 'Optimal EV scheduling to maximize local renewable self-consumption.', url: '#', tags: ['IEEE IAS'], authors: 'Sastry, Fuller, Grijalva' },
      { thumbColor: '#6a4c00', thumbLabel: 'EV-Fast\nChrg.', title: 'EV Fast Charging to Mitigate Transformer Aging', sub: 'Multi-objective strategy balancing transformer stress with costs.', url: '#', tags: ['IEEE IAS 2021'], authors: 'Zheng, Kandula, Divan, Grijalva' },
      { thumbColor: '#805f00', thumbLabel: 'Fault-Loc\nHi-PV', title: 'Fast Fault Location for High-PV Distribution Systems', sub: 'Rapid fault location for feeders with high-penetration solar.', url: '#', tags: ['HICSS 2021'], authors: 'Jiménez-Aparicio, Grijalva, Reno' },
    ]
  },
  {
    id: 'research-prosumers',
    navLabel: 'Prosumers',
    emoji: '🏘️',
    title: 'Prosumer Architectures, Microgrids & Energy Communities',
    desc: 'Pioneering the concept of prosumer-based grid architectures — where consumers also produce energy. Research covers autonomous and decentralized power control, distributed frequency regulation, microgrid optimization, and regenerative energy communities.',
    color: '#2E7D32',
    papers: [
      { thumbColor: '#1a4f1a', thumbLabel: 'Prosumer\nArch.', title: 'Prosumer-Based Smart Grid Architecture', sub: 'Seminal vision introducing the prosumer paradigm for a flat, sustainable electricity industry.', url: '#', tags: ['IEEE ISGT 2011'], awards: ['Foundational Work'], authors: 'Grijalva, Tariq' },
      { thumbColor: '#144014', thumbLabel: 'Dist.Freq\nCtrl-I', title: 'Comm-Failure-Resilient Distributed Freq. Control I', sub: 'Architecture & algorithm for grid synchronization despite communication failures.', url: '#', tags: ['IEEE Trans. Power Systems 2014'], authors: 'Ainsworth, Grijalva' },
      { thumbColor: '#1a4f1a', thumbLabel: 'Dist.Freq\nCtrl-II', title: 'Comm-Failure-Resilient Distributed Freq. Control II', sub: 'Implementation & numerical validation of the resilient frequency control architecture.', url: '#', tags: ['IEEE Trans. Power Systems 2014'], authors: 'Ainsworth, Grijalva' },
      { thumbColor: '#1b5e20', thumbLabel: 'DER P2P\nMarket', title: 'BTM DERs Enable Prosumer P2P Market Participation', sub: 'Market design enabling prosumers with BTM DERs to trade peer-to-peer electricity.', url: '#', tags: ['IEEE Trans. Smart Grid'], authors: 'Nazari, Grijalva, Molzahn' },
      { thumbColor: '#256025', thumbLabel: 'Multi-MG\nOptim.', title: 'Grid Services Optimization from Multiple Microgrids', sub: 'Coordinated multi-microgrid optimization for stackable grid services.', url: '#', tags: ['IEEE Trans. Smart Grid 2022'], authors: 'Alowaifeer, Meliopoulos, Grijalva' },
      { thumbColor: '#1a4c1a', thumbLabel: 'Battery\nStack.', title: 'Optimal Battery Sizing in a Stacked Revenue Model', sub: 'Co-optimization of battery sizing and dispatch across revenue streams.', url: '#', tags: ['Applied Energy'], authors: 'Mason, Grijalva et al.' },
      { thumbColor: '#185018', thumbLabel: 'Prosumer\nRegen.', title: 'Role of Prosumers in Regenerative Communities', sub: 'Framework for community-level energy regeneration toward net-positive sustainability.', url: '#', tags: ['IEEE ISGT 2024'], authors: 'Grijalva, West' },
      { thumbColor: '#1d5c1d', thumbLabel: 'Regen.\nModel', title: 'Regenerative Energy Community Modeling', sub: 'Integrating community energy flows with distribution resilience metrics.', url: '#', tags: ['IEEE EPEC 2025'], authors: 'West, Grijalva' },
      { thumbColor: '#1a4a1a', thumbLabel: 'HVAC\nMPC', title: 'Activity-Based Home Energy Management via MPC', sub: 'MPC adapts energy schedules to occupant activity patterns for demand flexibility.', url: '#', tags: ['IEEE ICCE 2018'], authors: 'Zhong, Sun, Grijalva, Meliopoulos' },
      { thumbColor: '#204820', thumbLabel: 'Bldg.\nFreq.Reg.', title: 'Aggregated Smart Buildings for Frequency Regulation', sub: 'Building aggregation enabling demand response for bulk grid frequency regulation.', url: '#', tags: ['IEEE IAS 2021'], authors: 'Zheng, Kandula, Divan, Grijalva' },
    ]
  },
  {
    id: 'research-cyber',
    navLabel: 'Cybersecurity',
    emoji: '🔐',
    title: 'Grid Cybersecurity & Cyber-Physical Systems',
    desc: 'Threat modeling, attack detection, cryptographic defenses, and hardware-based authentication for smart grid infrastructure — covering SCADA systems, supply-chain attacks, game-theoretic cyber defense, and physical security.',
    color: '#880E4F',
    papers: [
      { thumbColor: '#4a0000', thumbLabel: 'CPS-SA\nSurvey', title: 'Grid Cyber-Physical Situational Awareness: A Survey', sub: 'Survey bridging cyber threat intelligence and OT awareness for grid defense.', url: '#', tags: ['ACM Comput. Surveys 2023'], authors: 'Nafees, Saxena, Cárdenas, Grijalva, Burnap' },
      { thumbColor: '#5a0000', thumbLabel: 'Atk-Def\nGame', title: 'Grid Cyber-Security Attacker-Defender Model', sub: 'Game-theoretic framework for deriving optimal cyber defense investments.', url: '#', tags: ['Cryptography MDPI 2021'], authors: 'Chen, Mooney, Grijalva' },
      { thumbColor: '#4d0000', thumbLabel: 'Mal-Cmd\nImpact', title: 'Impact of Malicious SCADA Commands in Smart Grids', sub: 'Quantifying physical consequences of malicious control commands.', url: '#', tags: ['IEEE Trans. Sustain. Energy'], authors: 'Saxena, Xiong, Chukwuka, Grijalva' },
      { thumbColor: '#550000', thumbLabel: 'MitM\nCrypto', title: 'Cryptographic Defense Against MitM in Grid Supply Chain', sub: 'Lightweight protocol defending against man-in-the-middle attacks on grid devices.', url: '#', tags: ['IEEE ISGT 2022'], authors: 'Paul, Chen, Grijalva, Mooney' },
      { thumbColor: '#4a0000', thumbLabel: 'HW-Auth\nSCADA', title: 'Hardware Authentication for Grid SCADA Sensors', sub: 'Randomized encoding to authenticate grid sensors against spoofing attacks.', url: '#', tags: ['IEEE TPEC 2022'], authors: 'Hutto, Grijalva, Mooney' },
      { thumbColor: '#5a1010', thumbLabel: 'HW-Auth\nEval.', title: 'Experimental Evaluation of Grid Hardware Authentication', sub: 'Lab-scale testbed validates hardware authentication under realistic conditions.', url: '#', tags: ['IEEE Trans. Ind. Appl. 2025'], authors: 'Grijalva, Mooney, Lewis et al.' },
      { thumbColor: '#3d0000', thumbLabel: 'RanComp\nEmbed.', title: 'RanCompute: Security via Random I/O Encodings', sub: 'Low-cost hardware security for resource-constrained grid edge devices.', url: '#', tags: ['IEEE MECO 2022'], authors: 'Hutto, Grijalva, Mooney' },
      { thumbColor: '#4c0808', thumbLabel: 'Net.Prot\nCybSec', title: 'Networked Protection: Cyber-Security Perspective', sub: 'Cyber vulnerabilities in distributed relay coordination architectures.', url: '#', tags: ['IEEE Trans. Ind. Informatics'], authors: 'Saxena, Grijalva et al.' },
      { thumbColor: '#501010', thumbLabel: 'Drone\nDetect.', title: 'Multi-Sensor Drone Detection for Substation Security', sub: 'RF, acoustic, and visual sensor fusion to protect critical grid substations.', url: '#', tags: ['IEEE EPEC 2025'], authors: 'Yi, Grijalva' },
      { thumbColor: '#450000', thumbLabel: 'SC-Update\nSecure', title: 'Secure Grid Device Software Updates in Supply Chain', sub: 'Testbed for safe, verified software updates to grid control devices.', url: '#', tags: ['IEEE NAPS 2022'], authors: 'Keller, Paul, Grijalva, Mooney' },
    ]
  },
  {
    id: 'research-opt',
    navLabel: 'Optimization',
    emoji: '⚙️',
    title: 'Power Systems Optimization, Markets & Grid Resilience',
    desc: 'Classical and modern approaches to optimal power flow, electricity market design, distribution system planning, and resilience against extreme weather events — bridging rigorous engineering with energy economics and policy.',
    color: '#37474F',
    papers: [
      { thumbColor: '#1a2a4a', thumbLabel: 'AC-OPF\nMcCorm.', title: 'Bound Tightening on AC-OPF McCormick Relaxations', sub: 'Improved relaxation tightening technique accelerates convergence to global OPF optima.', url: '#', tags: ['IEEE NAPS 2025'], authors: 'An, Crozier, Dey, Grijalva' },
      { thumbColor: '#102040', thumbLabel: 'Undergnd\nResil.', title: 'Distribution Resilience via Undergrounding Lines', sub: 'MILP co-optimizes undergrounding and mobile generator deployment for resilience.', url: '#', tags: ['IEEE Trans. Power Delivery 2022'], authors: 'Taheri, Molzahn, Grijalva' },
      { thumbColor: '#0a1a38', thumbLabel: 'Op.Env.\nSched.', title: 'Energy Scheduling-Based Operating Envelopes', sub: 'Branch screening algorithm reduces computational burden for distribution operators.', url: '#', tags: ['HICSS 2025'], authors: 'Fernandez, Grijalva' },
      { thumbColor: '#152035', thumbLabel: 'Cournot\nProsumer', title: 'Cournot-Based Prosumer Market Participation', sub: 'Strategic prosumer model analyzes market power and distribution grid congestion.', url: '#', tags: ['IEEE Trans. Power Systems'], authors: 'Nazari, Grijalva' },
      { thumbColor: '#0f2040', thumbLabel: 'Stoch.\nMILP', title: 'Stochastic MILP for Grid Resilience Planning', sub: 'Multi-stage stochastic model for infrastructure hardening under uncertain weather.', url: '#', tags: ['IEEE Transactions 2022'], authors: 'Taheri, Molzahn, Grijalva' },
      { thumbColor: '#0a1830', thumbLabel: 'OE-Viz\nWeb', title: 'Web Visualization of Distribution Operating Envelopes', sub: 'Scalable web architecture for real-time distribution operator tools.', url: '#', tags: ['IEEE Conference'], authors: '' },
      { thumbColor: '#142038', thumbLabel: 'Bat-as-a\n-Service', title: 'Battery-as-a-Service: Stacked Revenue Model', sub: 'Co-optimization of battery sizing and revenue stacking across grid services.', url: '#', tags: ['Applied Energy'], authors: 'Mason, Grijalva et al.' },
      { thumbColor: '#1c3050', thumbLabel: 'Dist.Mon.\nSurvey', title: 'Monitoring & State Estimation for Distribution Systems', sub: 'Guest editorial on emerging methods for distribution system observability.', url: '#', tags: ['IEEE Trans. Smart Grid 2015'], authors: 'Aminifar, Meliopoulos, Grijalva et al.' },
      { thumbColor: '#081828', thumbLabel: 'Capacity\nCommit.', title: 'Capacity Commitment Framework (CCF)', sub: 'Market mechanism for long-term revenue certainty for grid infrastructure.', url: '#', tags: ['IEEE PES'], authors: '' },
    ]
  },
];

// ── TEAM ──────────────────────────────────────────────────
window.ACES_TEAM = {
  current: [
    { initials: 'SG', name: 'Prof. Santiago Grijalva', role: 'Director', detail: 'Southern Company Distinguished Professor of ECE', url: 'http://faculty.ece.gatech.edu/santiago.grijalva', photo: 'assets/img/team/grijalva.jpg', highlight: true },
    { initials: 'MG', name: 'Dr. Mansi Girdhar',            role: 'Postdoc', detail: 'Cyber-Physical Security, Digital Substation Automation',              url: '#', photo: 'assets/img/team/mansi.jpg'    },
    { initials: 'RN', name: 'Dr. Rehan Nawaz',               role: 'Postdoc', detail: 'AI & ML Methods for Power Systems & Cyber-Security',                 url: '#', photo: 'assets/img/team/rehan.jpg'    },
    { initials: 'PN', name: 'Dr. Poornachandra Rao',         role: 'Postdoc', detail: 'Advanced Power Electronics for Grid Enhancing Technologies',          url: '#', photo: 'assets/img/team/poorna.jpg'   },
    { initials: 'AK', name: 'Adam King',                     role: 'PhD',     detail: 'Cyber-Physical Security of Large-Scale Power Systems',                url: '#', photo: 'assets/img/team/adam.jpg'     },
    { initials: 'CL', name: 'Chen Lin',                      role: 'PhD',     detail: 'Topological Distributed Learning / Multi-Armed Bandits',              url: '#', photo: 'assets/img/team/chen.jpg'     },
    { initials: 'JF', name: 'Jakob Fick',                    role: 'PhD',     detail: 'ML-based Cyber-Physical Grid Security',                               url: '#', photo: 'assets/img/team/jakob.jpg'    },
    { initials: 'JS', name: 'Josue Sanchez',                 role: 'PhD',     detail: 'Stochastic AI-based Optimal Power Flow and Unit Commitment',          url: '#', photo: 'assets/img/team/josue.jpg'    },
    { initials: 'RB', name: 'Rachit Bayana',                 role: 'MS',      detail: 'Space-Time & VR Visualization for Electricity Grids',                 url: '#', photo: 'assets/img/team/rachit.jpg'   },
    { initials: 'HX', name: 'Hannah Xiao',                   role: 'MS',      detail: 'Advanced Power Electronics for Flow Router Technologies',             url: '#', photo: 'assets/img/team/hannah.jpg'   },
    { initials: 'ZL', name: 'Zurui Li',                      role: 'MS',      detail: 'Decentralized, Secure AI',                                            url: '#', photo: 'assets/img/team/zurui.jpg'    },
  ],
  alumni: [
    { initials: 'JF', name: 'Jorge Fernandez',      year: 'PhD 2025',        role: 'Generalized Energy Resource Scheduling for Distribution Grids', url: '#' },
    { initials: 'YC', name: 'Yiming Chen',          year: 'PhD 2025',        role: 'Techno-Economic Analysis for Emerging Grid Technologies',       url: '#' },
    { initials: 'KM', name: 'Dr. Karl Mason',        year: 'Postdoc 2020',    role: 'Physics-Based ML · PV Analysis',                               url: '#' },
    { initials: 'SP', name: 'Dr. Shuva Paul',         year: 'Postdoc 2022',    role: 'Grid Cyber-Security & PV ML',                                  url: '#' },
    { initials: 'NS', name: 'Dr. Neetesh Saxena',     year: 'Postdoc 2017',    role: 'Cyber-Physical Grid Security',                                 url: '#' },
    { initials: 'MN', name: 'Dr. Masoud Nazari',      year: 'Postdoc 2015',    role: 'Distributed Frequency Regulation',                             url: '#' },
    { initials: 'VC', name: 'Victor Chukwuka',        year: 'PhD 2018',        role: 'Cyber-Physical Grid Security Co-Simulation',                   url: '#' },
    { initials: 'MR', name: 'Dr. Matthew Reno',       year: 'PhD 2015',        role: 'PV Interconnection & Hosting Capacity Analysis',               url: '#' },
    { initials: 'NA', name: 'Dr. Nathan Ainsworth',   year: 'PhD 2014',        role: 'Distributed Grid Control & Inverter Networks',                 url: '#' },
  ]
};

// ── SPONSORS ─────────────────────────────────────────────
window.ACES_SPONSORS = [
  { name: 'U.S. Dept. of Energy',     logo: 'assets/img/sponsors/doe.png',             url: 'https://www.energy.gov'          },
  { name: 'National Science Foundation', logo: 'assets/img/sponsors/nsf.png',           url: 'https://www.nsf.gov'             },
  { name: 'Southern Company',          logo: 'assets/img/sponsors/southern-company.png', url: 'https://www.southerncompany.com' },
  { name: 'Georgia Power',             logo: 'assets/img/sponsors/georgia-power.png',    url: 'https://www.georgiapower.com'    },
  { name: 'EPRI',                       logo: 'assets/img/sponsors/epri.png',            url: 'https://www.epri.com'            },
  // Add more sponsors below ↓
  // { name: 'Sponsor Name', logo: 'assets/img/sponsors/logo.png', url: 'https://...' },
];
