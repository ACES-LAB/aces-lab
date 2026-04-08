/*
 * ============================================================
 *  ACES Lab — data/papers.js
 *  All research publications organized into 5 themes.
 *
 *  HOW TO ADD A PAPER:
 *  Find the right theme below and add a new entry like this:
 *
 *  {
 *    title:   "Full paper title",
 *    authors: "Last, First; Last, First",
 *    venue:   "IEEE Transactions on Power Systems",
 *    year:    2025,
 *    url:     "https://doi.org/...",     // or "#" if not ready
 *    awards:  ["Best Paper"],            // optional — leave as [] if none
 *  },
 *
 *  Themes:
 *    1. THEME_AI         — AI, Machine Learning & Data Analytics
 *    2. THEME_PV         — Solar PV, DERs & Hosting Capacity
 *    3. THEME_PROSUMERS  — Prosumers, Microgrids & Energy Communities
 *    4. THEME_CYBER      — Grid Cybersecurity
 *    5. THEME_OPT        — Optimization, Markets & Grid Resilience
 * ============================================================
 */

window.ACES_PAPERS = {

  // ── THEME 1: AI, Machine Learning & Data-Driven Grid Methods ──────────────
  THEME_AI: [
    {
      title:   "Managing zero-marginal-cost, intermittent renewable energy: A survey of the engineering, economic, and policy challenges",
      authors: "Oliver ME, Chapman O, Grijalva S, Matisoff DC, Ramadhani M, West A",
      venue:   "Renewable and Sustainable Energy Reviews",
      year:    2026, url: "#", awards: [],
    },
    {
      title:   "Big Data Analytics for Future Electricity Grids",
      authors: "Kezunovic M, Grijalva S et al.",
      venue:   "Energy Research",
      year:    2020, url: "#", awards: [],
    },
    {
      title:   "Deep Neural Network for Behind-the-Meter PV Size, Tilt and Azimuth Estimation",
      authors: "Reno MJ, Grijalva S",
      venue:   "IEEE Transactions on Smart Grid",
      year:    2019, url: "#", awards: [],
    },
    {
      title:   "CNN for Behind-the-Meter PV Detection from AMI Signals",
      authors: "Reno MJ, Grijalva S",
      venue:   "IEEE Transactions on Energy Conversion",
      year:    2019, url: "#", awards: [],
    },
    {
      title:   "IMoFi: Physics-Informed ML for Grid Modeling and DER Hosting Analysis",
      authors: "Grijalva S et al.",
      venue:   "IEEE Innovative Smart Grid Technologies (ISGT)",
      year:    2022, url: "#", awards: ["Physics-Informed ML"],
    },
    {
      title:   "Building HVAC Control via Neural Networks and Natural Evolution Strategies",
      authors: "Mason K, Grijalva S",
      venue:   "Elsevier Energy and Buildings / IEEE CEC",
      year:    2021, url: "#", awards: [],
    },
    {
      title:   "Deep Learning for Grid Voltage Security Assessment",
      authors: "King A, Grijalva S",
      venue:   "Hawaii International Conference on System Sciences (HICSS)",
      year:    2025, url: "#", awards: [],
    },
    {
      title:   "Mixture-of-Experts for Real-Time Voltage Security Assessment",
      authors: "Nawaz R, Grijalva S",
      venue:   "IEEE North American Power Symposium (NAPS)",
      year:    2025, url: "#", awards: [],
    },
    {
      title:   "Knowledge-Based Fault Diagnosis for High-PV Distribution Systems",
      authors: "Paul S, Grijalva S, Reno MJ",
      venue:   "IEEE Innovative Smart Grid Technologies (ISGT)",
      year:    2022, url: "#", awards: [],
    },
    {
      title:   "The Role of Big Data in Improving Power System Operation and Protection",
      authors: "Kezunovic M, Xie L, Grijalva S",
      venue:   "IREP Bulk Power System Dynamics and Control Symposium",
      year:    2013, url: "#", awards: [],
    },
    {
      title:   "Sparse Sampling for Behind-the-Meter Inverter Control Recovery",
      authors: "Talkington S, Grijalva S, Reno MJ",
      venue:   "IEEE Transactions on Smart Grid",
      year:    2022, url: "#", awards: [],
    },
    {
      title:   "Data-Driven Control and Optimization for Active Distribution Networks",
      authors: "Grijalva S et al.",
      venue:   "Applied Energy",
      year:    2021, url: "#", awards: [],
    },
    {
      title:   "Leveraging AMI Data for Distribution System Model Calibration and Situational Awareness",
      authors: "Peppanen J, Reno MJ, Thakkar M, Grijalva S, Harley RG",
      venue:   "IEEE Transactions on Smart Grid",
      year:    2015, url: "#", awards: [],
    },
    {
      title:   "Distribution System Model Calibration with Big Data from AMI and PV Inverters",
      authors: "Peppanen J, Reno MJ, Broderick R, Grijalva S",
      venue:   "IEEE Transactions on Smart Grid",
      year:    2016, url: "#", awards: [],
    },
    {
      title:   "A Data Driven Approach for Detection and Estimation of Unauthorized Residential PV Installations",
      authors: "Zhang X, Grijalva S",
      venue:   "IEEE Transactions on Smart Grid",
      year:    2016, url: "#", awards: [],
    },
    {
      title:   "Irregularity Detection in Output Power of Distributed Energy Resources Using PMU Data Analytics",
      authors: "Seyedi Y, Kulkarni H, Grijalva S",
      venue:   "IEEE Transactions on Industrial Informatics",
      year:    2019, url: "#", awards: [],
    },
    {
      title:   "A Review of Reinforcement Learning for Autonomous Building Energy Management",
      authors: "Mason K, Grijalva S",
      venue:   "Computers and Electrical Engineering (Elsevier)",
      year:    2019, url: "#", awards: [],
    },
    {
      title:   "Detecting Behind-the-Meter PV Installation Using Convolutional Neural Networks",
      authors: "Vejdan S, Mason K, Reno MJ, Grijalva S",
      venue:   "IEEE Journal of Photovoltaics",
      year:    2020, url: "#", awards: [],
    },
  ],

  // ── THEME 2: Solar PV Integration, DERs & Hosting Capacity ───────────────
  THEME_PV: [
    {
      title:   "Hosting Capacity Statistical Model with Volt/Var Control",
      authors: "Kim J, Grijalva S",
      venue:   "IEEE Transactions on Power Systems",
      year:    2025, url: "#", awards: [],
    },
    {
      title:   "PV Hosting Capacity from Smart Meter Data Only (No Network Model)",
      authors: "Azzolini JA, Reno MJ, Grijalva S et al.",
      venue:   "IEEE Innovative Smart Grid Technologies (ISGT)",
      year:    2023, url: "#", awards: [],
    },
    {
      title:   "Voltage Sensitivity Estimation — Identifiability Conditions",
      authors: "Talkington S, Grijalva S, Molzahn DK",
      venue:   "IEEE Transactions on Power Systems",
      year:    2022, url: "#", awards: [],
    },
    {
      title:   "Phase Retrieval via Model-Free Jacobian Recovery from AMI Data",
      authors: "Talkington S, Grijalva S",
      venue:   "ACM e-Energy",
      year:    2023, url: "#", awards: [],
    },
    {
      title:   "Inverter Reactive Power Settings Estimation from AMI Data",
      authors: "Grijalva S, Azzolini JA, Reno MJ",
      venue:   "IEEE Transactions on Smart Grid",
      year:    2023, url: "#", awards: [],
    },
    {
      title:   "EV Smart Charging to Maximize Renewable Energy Usage",
      authors: "Sastry PS, Fuller JD, Grijalva S",
      venue:   "IEEE Industry Applications Society (IAS)",
      year:    2021, url: "#", awards: [],
    },
    {
      title:   "EV Fast Charging Strategy to Mitigate Distribution Transformer Aging",
      authors: "Zheng Y, Kandula NP, Divan D, Grijalva S",
      venue:   "IEEE Industry Applications Society (IAS)",
      year:    2021, url: "#", awards: [],
    },
    {
      title:   "Fast Fault Location for High-PV Distribution Systems",
      authors: "Jiménez-Aparicio M, Grijalva S, Reno MJ",
      venue:   "Hawaii International Conference on System Sciences (HICSS)",
      year:    2021, url: "#", awards: [],
    },
    {
      title:   "Fast Quasi-Static Time-Series (QSTS) for Yearlong PV Impact Studies using Vector Quantization",
      authors: "Deboever J, Grijalva S, Reno MJ, Broderick R",
      venue:   "Solar Energy Journal",
      year:    2017, url: "#", awards: [],
    },
    {
      title:   "A Fast, Scalable Quasi-Static Time Series Analysis Method for PV Impact Studies using Linear Sensitivity Model",
      authors: "Qureshi MU, Grijalva S, Reno MJ, Deboever J, Zhang X, Broderick R",
      venue:   "IEEE Transactions on Sustainable Energy",
      year:    2019, url: "#", awards: [],
    },
    {
      title:   "Smart Inverter Capabilities for Mitigating Over-Voltage on Distribution Systems with High PV",
      authors: "Reno MJ, Broderick R, Grijalva S",
      venue:   "IEEE Photovoltaic Specialists Conference (PVSC)",
      year:    2013, url: "#", awards: [],
    },
    {
      title:   "Locational Dependence of PV Hosting Capacity Correlated with Feeder Load",
      authors: "Coogan K, Reno MJ, Grijalva S",
      venue:   "IEEE PES Transmission & Distribution Conference",
      year:    2014, url: "#", awards: [],
    },
    {
      title:   "Fast Hosting Capacity Analysis Considering Over-Voltage and Regulating Devices",
      authors: "Qureshi MU, Kumar A, Grijalva S, Deboever J, Peppanen J, Rylander M",
      venue:   "IEEE PES T&D Conference and Exposition",
      year:    2020, url: "#", awards: [],
    },
    {
      title:   "Large-Scale Integration of Wind Generation Including Network Temporal Security Analysis",
      authors: "Grijalva S, Dahman S, Patten K, Visnesky A",
      venue:   "IEEE Transactions on Energy Conversion",
      year:    2007, url: "#", awards: [],
    },
    {
      title:   "Voltage-Constrained PV Hosting Capacity with BTM Reactive Power",
      authors: "Grijalva S et al.",
      venue:   "IEEE Transactions on Smart Grid",
      year:    2023, url: "#", awards: [],
    },
  ],

  // ── THEME 3: Prosumers, Microgrids & Energy Communities ──────────────────
  THEME_PROSUMERS: [
    {
      title:   "Prosumer-Based Smart Grid Architecture Enables a Flat, Sustainable Electricity Industry",
      authors: "Grijalva S, Tariq MU",
      venue:   "IEEE Innovative Smart Grid Technologies (ISGT)",
      year:    2011, url: "#", awards: ["Foundational Work"],
    },
    {
      title:   "Distributed Frequency Control of Prosumer-Based Electric Energy Systems",
      authors: "Nazari M, Costello Z, Feizollahi J, Grijalva S, Egerstedt M",
      venue:   "IEEE Transactions on Power Systems",
      year:    2014, url: "#", awards: [],
    },
    {
      title:   "Overcoming Communication Delay in Distributed Frequency Control",
      authors: "Ramachandran T, Nazari M, Grijalva S, Egerstedt M",
      venue:   "IEEE Transactions on Power Systems",
      year:    2015, url: "#", awards: [],
    },
    {
      title:   "BTM DERs Enable Prosumer P2P Market Participation",
      authors: "Nazari MH, Grijalva S, Molzahn DK",
      venue:   "IEEE Transactions on Smart Grid",
      year:    2021, url: "#", awards: [],
    },
    {
      title:   "Grid Services Optimization from Multiple Microgrids",
      authors: "Alowaifeer M, Meliopoulos APS, Grijalva S",
      venue:   "IEEE Transactions on Smart Grid",
      year:    2022, url: "#", awards: [],
    },
    {
      title:   "Optimal Battery Sizing in a Stacked Revenue Model",
      authors: "Mason K, Grijalva S et al.",
      venue:   "Applied Energy",
      year:    2020, url: "#", awards: [],
    },
    {
      title:   "Role of Prosumers in Regenerative Energy Communities",
      authors: "Grijalva S, West A",
      venue:   "IEEE Innovative Smart Grid Technologies (ISGT)",
      year:    2024, url: "#", awards: [],
    },
    {
      title:   "Regenerative Energy Community Modeling Considering Distribution Network Resilience",
      authors: "West A, Grijalva S",
      venue:   "IEEE Electrical Power and Energy Conference (EPEC)",
      year:    2025, url: "#", awards: [],
    },
    {
      title:   "Real-Time Human Activity Based Energy Management System using Model Predictive Control",
      authors: "Zhong C, Sun J, Xie J, Grijalva S, Meliopoulos AP",
      venue:   "IEEE International Conference on Consumer Electronics (ICCE)",
      year:    2018, url: "#", awards: [],
    },
    {
      title:   "Smart Buildings for Grid Frequency Regulation via EV Aggregation",
      authors: "Zheng Y, Kandula NP, Divan D, Grijalva S",
      venue:   "IEEE Industry Applications Society (IAS)",
      year:    2021, url: "#", awards: [],
    },
    {
      title:   "Large-Scale Decentralized Unit Commitment",
      authors: "Feizollahi M, Ahmed S, Costley M, Grijalva S",
      venue:   "International Journal of Electrical Power and Energy Systems",
      year:    2015, url: "#", awards: [],
    },
    {
      title:   "Enhanced Frequency Response Based on Multiagent Distributed Power Agreement",
      authors: "Qureshi MU, Grijalva S",
      venue:   "IEEE Transactions on Industry Applications",
      year:    2018, url: "#", awards: [],
    },
    {
      title:   "A Structure-Preserving Model for Frequency Synchronization of Droop Inverter-Based AC Networks",
      authors: "Ainsworth N, Grijalva S",
      venue:   "IEEE Transactions on Power Systems",
      year:    2013, url: "#", awards: [],
    },
    {
      title:   "A Fundamental Economic Model of Interacting Electricity Prosumers",
      authors: "Tsybina E, Grijalva S, Moreno-Cruz J",
      venue:   "North American Power Symposium (NAPS)",
      year:    2018, url: "#", awards: [],
    },
    {
      title:   "Home Energy Manager: A Consumer-Oriented Interactive Tool to Optimize Energy Use",
      authors: "Hubert T, Grijalva S",
      venue:   "IEEE International Conference on Consumer Electronics (ICCE)",
      year:    2011, url: "#", awards: [],
    },
    {
      title:   "Modeling for Residential Electricity Optimization in Dynamic Pricing Environments",
      authors: "Hubert T, Grijalva S",
      venue:   "IEEE Transactions on Smart Grid",
      year:    2012, url: "#", awards: [],
    },
  ],

  // ── THEME 4: Grid Cybersecurity & Cyber-Physical Systems ─────────────────
  THEME_CYBER: [
    {
      title:   "Grid Cyber-Physical Situational Awareness: A Review",
      authors: "Nafees MN, Saxena N, Cárdenas AA, Grijalva S, Burnap P",
      venue:   "ACM Computing Surveys",
      year:    2023, url: "#", awards: [],
    },
    {
      title:   "Experimental Evaluation of a Hardware-Based Authentication Solution for Securing Electrical Grids",
      authors: "Grijalva S, Mooney VJ, Lewis TM, King A, Allahverdi A, Keller J, Hutto K et al.",
      venue:   "IEEE Transactions on Industry Applications",
      year:    2025, url: "#", awards: [],
    },
    {
      title:   "Grid Cyber-Security Attacker-Defender Model",
      authors: "Chen Y, Mooney VJ, Grijalva S",
      venue:   "Cryptography (MDPI)",
      year:    2021, url: "#", awards: [],
    },
    {
      title:   "Impact Evaluation of Malicious Control Commands in Cyber-Physical Smart Grids",
      authors: "Saxena N, Chukwuka V, Xiong L, Grijalva S",
      venue:   "IEEE Transactions on Sustainable Computing",
      year:    2018, url: "#", awards: [],
    },
    {
      title:   "Cryptographic Defense Against Man-in-the-Middle Attacks in Grid Supply Chain",
      authors: "Paul S, Chen Y, Grijalva S, Mooney VJ",
      venue:   "IEEE Innovative Smart Grid Technologies (ISGT)",
      year:    2022, url: "#", awards: [],
    },
    {
      title:   "Hardware Authentication for Grid SCADA Sensors",
      authors: "Hutto K, Grijalva S, Mooney VJ",
      venue:   "IEEE Texas Power and Energy Conference (TPEC)",
      year:    2022, url: "#", awards: [],
    },
    {
      title:   "RanCompute: Security via Random I/O Encodings for Embedded Grid Devices",
      authors: "Hutto K, Grijalva S, Mooney VJ",
      venue:   "IEEE MECO Conference",
      year:    2022, url: "#", awards: [],
    },
    {
      title:   "Dynamic Secrets and Secret Keys Based Scheme for Securing Smart Grid Wireless Communication",
      authors: "Saxena N, Grijalva S",
      venue:   "IEEE Transactions on Industrial Informatics",
      year:    2017, url: "#", awards: [],
    },
    {
      title:   "Efficient Signature Scheme for Delivering Authentic Control Commands in the Smart Grid",
      authors: "Saxena N, Grijalva S",
      venue:   "IEEE Transactions on Smart Grid",
      year:    2018, url: "#", awards: [],
    },
    {
      title:   "Multi-Sensor Drone Detection Framework for Securing Power Substations",
      authors: "Yi S, Grijalva S",
      venue:   "IEEE Electrical Power and Energy Conference (EPEC)",
      year:    2025, url: "#", awards: [],
    },
    {
      title:   "Secure Grid Device Software Updates Across the Supply Chain",
      authors: "Keller J, Paul S, Grijalva S, Mooney VJ",
      venue:   "IEEE North American Power Symposium (NAPS)",
      year:    2022, url: "#", awards: [],
    },
    {
      title:   "A Hybrid Attack Model for Cyber-Physical Security Assessment in Electricity Grids",
      authors: "Cheng Y, Gieseking T, Campbell D, Mooney V, Grijalva S",
      venue:   "IEEE Texas Power and Energy Conference (TPEC)",
      year:    2019, url: "#", awards: [],
    },
    {
      title:   "N-1 RTU Cyber-Physical Security Assessment Using State Estimation",
      authors: "Xiong L, Grijalva S",
      venue:   "IEEE PES General Meeting",
      year:    2019, url: "#", awards: [],
    },
    {
      title:   "Authentication Protocol for IoT-Enabled LTE Network",
      authors: "Saxena N, Grijalva S, Chaudhari N",
      venue:   "ACM Transactions on Internet Technology (TOIT)",
      year:    2016, url: "#", awards: [],
    },
    {
      title:   "Networked Protection Systems: A Cyber-Security Perspective",
      authors: "Saxena N, Grijalva S et al.",
      venue:   "IEEE Transactions on Industrial Informatics",
      year:    2019, url: "#", awards: [],
    },
  ],

  // ── THEME 5: Power Systems Optimization, Markets & Grid Resilience ────────
  THEME_OPT: [
    {
      title:   "Bound Tightening for AC Optimal Power Flow McCormick Relaxations",
      authors: "An Z, Crozier C, Dey SS, Grijalva S",
      venue:   "IEEE North American Power Symposium (NAPS)",
      year:    2025, url: "#", awards: [],
    },
    {
      title:   "Distribution System Resilience via Undergrounding Transmission Lines",
      authors: "Taheri B, Molzahn DK, Grijalva S",
      venue:   "IEEE Transactions on Power Delivery",
      year:    2022, url: "#", awards: [],
    },
    {
      title:   "Stochastic MILP for Grid Resilience Planning Under Extreme Weather",
      authors: "Taheri B, Molzahn DK, Grijalva S",
      venue:   "IEEE Transactions on Power Systems",
      year:    2022, url: "#", awards: [],
    },
    {
      title:   "Energy Scheduling-Based Operating Envelopes for Distribution Systems",
      authors: "Fernandez J, Grijalva S",
      venue:   "Hawaii International Conference on System Sciences (HICSS)",
      year:    2025, url: "#", awards: [],
    },
    {
      title:   "Cournot-Based Prosumer Market Participation and Distribution Congestion",
      authors: "Nazari MH, Grijalva S",
      venue:   "IEEE Transactions on Power Systems",
      year:    2020, url: "#", awards: [],
    },
    {
      title:   "Battery-as-a-Service: Revenue Stacking Optimization Model",
      authors: "Mason K, Grijalva S et al.",
      venue:   "Applied Energy",
      year:    2020, url: "#", awards: [],
    },
    {
      title:   "Monitoring and State Estimation for Distribution Systems — Guest Editorial",
      authors: "Aminifar F, Meliopoulos APS, Grijalva S et al.",
      venue:   "IEEE Transactions on Smart Grid",
      year:    2015, url: "#", awards: [],
    },
    {
      title:   "Flexible Security Constrained Optimal Power Flow",
      authors: "Thomas JJ, Grijalva S",
      venue:   "IEEE Transactions on Power Systems",
      year:    2014, url: "#", awards: [],
    },
    {
      title:   "Decentralized Total Transfer Capability Evaluation using Domain Decomposition",
      authors: "Zhang X, Grijalva S",
      venue:   "IEEE Transactions on Power Systems",
      year:    2015, url: "#", awards: [],
    },
    {
      title:   "Increased Wind Revenue and System Security by Trading Wind Power in Energy and Reserve Markets",
      authors: "Liang J, Grijalva S, Harley R",
      venue:   "IEEE Transactions on Sustainable Energy",
      year:    2013, url: "#", awards: [],
    },
    {
      title:   "Game-Theoretic Formulation of Power Dispatch with Guaranteed Convergence",
      authors: "Du L, Grijalva S, Harley R",
      venue:   "IEEE Transactions on Sustainable Energy",
      year:    2014, url: "#", awards: [],
    },
    {
      title:   "A Rolling-Horizon Unit Commitment Framework with Flexible Periodicity",
      authors: "Costley M, Feizollahi J, Ahmed S, Grijalva S",
      venue:   "International Journal of Electrical Power and Energy Systems",
      year:    2017, url: "#", awards: [],
    },
    {
      title:   "Automated Handling of Switching Device Topologies in Contingency Analysis",
      authors: "Roy A, Grijalva S",
      venue:   "IEEE Transactions on Power Systems",
      year:    2012, url: "#", awards: [],
    },
    {
      title:   "Proactive Management of Microgrids for Resiliency Enhancement: An Adaptive Robust Approach",
      authors: "Golani A, Seyedi T, Grijalva S",
      venue:   "IEEE Transactions on Sustainable Energy",
      year:    2017, url: "#", awards: [],
    },
    {
      title:   "Analysis of Multiple Revenue Streams for Privately-Owned Energy Storage Systems",
      authors: "Vejdan S, Grijalva S",
      venue:   "IEEE Power and Energy Conference at Illinois",
      year:    2018, url: "#", awards: [],
    },
    {
      title:   "Web Visualization of Distribution Operating Envelopes",
      authors: "Fernandez J, Grijalva S",
      venue:   "IEEE Conference on Innovative Smart Grid Technologies",
      year:    2024, url: "#", awards: [],
    },
  ],
};
