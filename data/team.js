/*
 * ============================================================
 *  ACES Lab — data/team.js
 *
 *  HOW TO ADD A MEMBER:
 *  Add an object to the "current" array below.
 *  "role" must be one of: "Director" | "Postdoc" | "PhD" | "MS"
 *  "photo" should point to assets/img/team/filename.jpg
 *         Leave as "" if no photo yet — initials will show instead.
 *
 *  HOW TO ADD AN ALUMNUS:
 *  Add to the "alumni" array at the bottom.
 * ============================================================
 */

window.ACES_TEAM = {

  current: [
    {
      initials: "SG",
      name:     "Prof. Santiago Grijalva",
      role:     "Director",
      detail:   "Southern Company Distinguished Professor of ECE · PhD UIUC 2002",
      url:      "http://faculty.ece.gatech.edu/santiago.grijalva",
      photo:    "assets/images/team/grijalva.jpg",
      highlight: true,
    },
    {
      initials: "SA",
      name:     "Samin Alipour",
      role:     "Postdoc",
      detail:   "",
      url:      "#",
      photo:    "",
    },
    {
      initials: "BP",
      name:     "Brendan Preece",
      role:     "Postdoc",
      detail:   "",
      url:      "#",
      photo:    "",
    },
    {
      initials: "PN",
      name:     "Poornachandra Rao Nallamatti",
      role:     "Postdoc",
      detail:   "Advanced Power Electronics for Grid Enhancing Technologies",
      url:      "#",
      photo:    "",
    },
    {
      initials: "AK",
      name:     "Adam King",
      role:     "PhD",
      detail:   "GRIDLOGIC: Hardware/Software Codesign for Deep Grid Visibility and Security",
      url:      "http://adamking.space",
      photo:    "assets/images/team/adam.jpg",
    },
    {
      initials: "CL",
      name:     "Chen Lin",
      role:     "PhD",
      detail:   "Reinforcement Learning/Machine Learning Theory and Applications",
      url:      "https://clmcs.github.io/",
      photo:    "assets/images/team/chen.jpg",
    },
    {
      initials: "JF",
      name:     "Jakob Fick",
      role:     "PhD",
      detail:   "ML-based Cyber-Physical Grid Security",
      url:      "#",
      photo:    "",
    },
    {
      initials: "JS",
      name:     "Josue Sanchez",
      role:     "PhD",
      detail:   "Stochastic AI-based Optimal Power Flow and Unit Commitment",
      url:      "#",
      photo:    "",
    },
    {
      initials: "RB",
      name:     "Rachit Bayana",
      role:     "MS",
      detail:   "Space-Time & VR Visualization for Electricity Grids",
      url:      "https://rachitbhayana.com/",
      photo:    "assets/images/team/rachit.jpg",
    },
    {
      initials: "HX",
      name:     "Hannah Xiao",
      role:     "MS",
      detail:   "Advanced Power Electronics for Flow Router Grid Enhancing Technologies",
      url:      "#",
      photo:    "",
    },
    {
      initials: "ZL",
      name:     "Zirui Li",
      role:     "MS",
      detail:   "Power System Transient Stability & Grid Enhancement Technology ",
      url:      "https://ziruili-133.github.io/",
      photo:    "assets/images/team/zirui.jpg",
    },
  ],

  alumni: [
    { name: "Jorge Fernandez",         year: "PhD 2025",      role: "Generalized Energy Resource Scheduling for Distribution Grids" },
    { name: "Yiming Chen",             year: "PhD 2025",      role: "Techno-Economic Analysis for Emerging Grid Technologies" },
    { name: "Dr. Karl Mason",           year: "Postdoc 2020",  role: "Physics-Based ML for PV Analysis" },
    { name: "Dr. Shuva Paul",            year: "Postdoc 2022",  role: "Grid Cyber-Security & PV ML" },
    { name: "Dr. Younes Seyedi",         year: "Postdoc 2022",  role: "Synchrophasor Analytics & Microgrid Protections" },
    { name: "Dr. Neetesh Saxena",        year: "Postdoc 2017",  role: "Cyber-Physical Grid Security" },
    { name: "Dr. Masoud Nazari",         year: "Postdoc 2015",  role: "Distributed Frequency Regulation, Wayne State Univ." },
    { name: "Evgeniya Tsybina",          year: "PhD 2021",      role: "Economics of Distributed Energy" },
    { name: "Yu-Chen Cheng",             year: "PhD 2022",      role: "Cyber-Physical Grid Security" },
    { name: "Victor Chukwuka",           year: "PhD 2018",      role: "Cyber-Physical Grid Security Co-Simulation" },
    { name: "Jeremiah Deboever",         year: "PhD 2018",      role: "PV Hosting Capacity & Energy Storage Scheduling" },
    { name: "Marcelo Sandoval",          year: "PhD 2018",      role: "Future Grid Business Model Innovation" },
    { name: "Xiaochen Zhang",            year: "PhD 2017",      role: "Data-Driven PV Detection & Grid Analytics" },
    { name: "Dr. Matthew Reno",          year: "PhD 2015",      role: "PV Interconnection & Hosting Capacity — Sandia Natl. Lab" },
    { name: "Dr. Nathan Ainsworth",      year: "PhD 2014",      role: "Distributed Grid Control & Inverter Networks — Blue Origin" },
  ],
};
