import { motion } from 'motion/react';
import { Sparkles, CheckCircle2, Hexagon, ArrowRight } from 'lucide-react';

const civilizationData = [
  {
    type: "TYPE I",
    name: "Planetary Civilization",
    desc: "Mastery over Earth",
    color: "from-green-400 to-blue-500",
    bgGlow: "bg-blue-600/20",
    borderGlow: "group-hover:border-blue-500/50",
    understandings: [
      "A Type I civilization can harness and use all the energy available on its home planet perfectly.",
      "We will enjoy 100% clean and limitless energy without polluting the air, land, or oceans.",
      "We will gain the ability to safely control the weather, stopping natural disasters like hurricanes and droughts.",
      "We can safely absorb and prevent earthquakes and volcanoes from causing any damage to cities.",
      "Global communication and transportation will be instantaneous, safe, and practically free for everyone.",
      "We will see an absolute end to poverty and world hunger through automated farming and perfect resource sharing.",
      "Most diseases and the negative effects of aging will be cured using advanced genetic engineering and nanobots.",
      "We will build sustainable floating cities on the ocean and secure, beautiful habitats deep underwater.",
      "Every single child on Earth will have access to world-class education instantly through safe virtual reality.",
      "Humanity will act as one unified, peaceful global family without borders causing war or inequality."
    ],
    initiatives: [
      "Global Weather Control Shield System", "Deep-Earth Fault Line Stabilizers", "Planetary HVDC Clean Energy Grid",
      "Global Ocean Desalination Network", "Atmospheric Carbon Vacuum Hubs", "Orbital Solar Power Reflectors",
      "Universal Quantum Internet Array", "Automated Vertical Mega-Farms", "Global Vacuum-Tube Maglev Trains",
      "Sentient City Operating Systems", "Synthetic Resource Replicators", "Global Disease Eradication Network",
      "Deep-Sea Colonization Platforms", "Total Waste-to-Energy Conversion Rings", "Global AI Governance Optimizer"
    ]
  },
  {
    type: "TYPE II",
    name: "Stellar Civilization",
    desc: "Mastery over the Sun & Solar System",
    color: "from-yellow-400 to-orange-500",
    bgGlow: "bg-orange-600/20",
    borderGlow: "group-hover:border-orange-500/50",
    understandings: [
      "A Type II civilization can harness the complete energy output of its entire parent star (the Sun).",
      "We will build massive structures around the Sun, like a Dyson Swarm, to capture its endless power.",
      "Humanity will safely and comfortably spread out to live on other planets like Mars, Venus, and moons of Jupiter.",
      "Mining asteroids and dead planets means Earth will never run out of raw materials or ruin its own environment.",
      "We will be completely safe from planetary extinction events like asteroid strikes or major solar flares.",
      "Energy will be incredibly abundant, making it free and infinite for any mega-project we dream of.",
      "We can build massive artificial ring-worlds and space habitats capable of housing trillions of people comfortably.",
      "Space travel within our solar system will become as safe, cheap, and easy as taking a bus trip.",
      "We will be able to change the atmosphere of dead planets to make them green and breathable (Terraforming).",
      "Biological aging becomes completely optional, and human consciousness could be securely digitized for immortality."
    ],
    initiatives: [
      "The Dyson Swarm Construction Project", "Mars Terraforming & Atmosphere Generator", "Venus Cloud City Habitation Network",
      "Asteroid Belt Automated Mining Swarms", "Sun-Lifting (Extracting materials from the Sun)", "Jupiter Moon Defense & Science Outposts",
      "Massive Orbital Ring-Worlds around Earth", "Interplanetary Laser Highway System", "Solar-System Wide Quantum Comm Relay",
      "Oort Cloud Cometary Deflection Shield", "Artificial Gravity Commercial Space Stations", "Digital Consciousness Data Vaults",
      "Automated Self-Replicating Space Probes", "Titan Methane Harvesting Stations", "Solar Flare Magnetic Redirection Shield"
    ]
  },
  {
    type: "TYPE III",
    name: "Galactic Civilization",
    desc: "Mastery over the Milky Way",
    color: "from-purple-400 to-pink-500",
    bgGlow: "bg-purple-600/20",
    borderGlow: "group-hover:border-purple-500/50",
    understandings: [
      "A Type III civilization controls and harnesses the energy of its entire host galaxy.",
      "We will be able to travel safely and easily between millions of neighboring star systems.",
      "We will harness the intense, massive energy of supermassive black holes without danger.",
      "Humanity will populate millions of different solar systems, making us truly un-extinctable across the eons.",
      "We will likely discover, protect, and communicate with other intelligent life across the cosmic ocean.",
      "We can literally move entire stars to organize them for better energy collection and safety.",
      "Information and travel might happen faster than light using advanced wormholes and spatial folding.",
      "We will operate as a collective intelligence, sharing knowledge across light-years instantly.",
      "We can build supercomputers the size of entire planets to solve the greatest mysteries of physics.",
      "We will have mastered complete control over spacetime manipulation on a local level."
    ],
    initiatives: [
      "Galactic Wormhole Transit Network", "Supermassive Black Hole Energy Harvesters", "Stellar Relocation Engines (Moving Stars)",
      "Planet-Sized 'Matrioshka Brain' Computers", "Faster-Than-Light (Warp) Drive Fleets", "Galactic Core Terraforming Hubs",
      "Extraterrestrial Alliance Protocols", "Star-System Scale Defensive Grids", "Artificial Star Creation Forges",
      "Galaxy-Wide Unified Peace Enforcement AI", "Instantaneous Sub-Space Communication Arrays", "Nebula Gas Harvesting Operations",
      "Nanite Swarm Terraforming of Dead Worlds", "Multigenerational Deep-Space Seed Ships", "Spacetime Manipulation Laboratories"
    ]
  },
  {
    type: "TYPE IV",
    name: "Universal Civilization",
    desc: "Mastery over the Cosmos",
    color: "from-cyan-400 to-indigo-500",
    bgGlow: "bg-cyan-600/20",
    borderGlow: "group-hover:border-cyan-500/50",
    understandings: [
      "A Type IV civilization controls the energy of the entire observable universe.",
      "We will be able to safely perfectly manipulate dark matter and dark energy, the universe's most mysterious forces.",
      "We can purposefully alter the fundamental laws of physics in localized regions of space.",
      "We will be able to travel anywhere in the observable universe instantly without time delay.",
      "We can prevent the universe from expanding into the 'Big Freeze' or dying out.",
      "We could harness unlimited energy strictly from the rapid expansion of the universe itself.",
      "We will be able to create completely new, custom-made galaxies from scratch.",
      "We could exist beyond a fragile physical body, perhaps evolving into beings of pure energy or complex light.",
      "We can safely observe all of history by bending localized light and time to watch the past unfold.",
      "We will essentially become the architects, caretakers, and protectors of the entire cosmic arena."
    ],
    initiatives: [
      "Dark Energy Harvesting Arrays", "Dark Matter Engineering Weaves", "Universal Expansion Reversal Drivers",
      "Fabric-of-Physics Alteration Engines", "Artificial Galaxy Constructors", "Time-Dilation Historical Observation Spheres",
      "Pure Energy Body Conversion Matrices", "Universal Instantaneous Teleportation Web", "Super-Void Energy Farms",
      "Cosmic Entropy Reversal Generators", "Cosmic Background Radiation Recyclers", "Creation of Localized Pocket Dimensions",
      "Universal Memory Archives", "Sentient Universe Consciousness Sync", "Absolute Zero Heat Sinks for Infinite Computing"
    ]
  },
  {
    type: "TYPE V",
    name: "Multiversal Civilization",
    desc: "Mastery over Alternate Realities",
    color: "from-fuchsia-400 to-rose-500",
    bgGlow: "bg-pink-600/20",
    borderGlow: "group-hover:border-pink-500/50",
    understandings: [
      "A Type V civilization has mastered travel and energy exchange between different, parallel universes (the Multiverse).",
      "We can create entirely new, baby universes with custom rules of physics 'from scratch'.",
      "We will have access to literally infinite energy by drawing it from an endless sea of alternate realities.",
      "We can escape the natural death of our own universe by migrating into younger, safer ones harmlessly.",
      "We will be able to safely observe and interact with alternate versions of our own history.",
      "We will exist entirely outside the normal timeline, mastering interdimensional and out-of-time existence.",
      "We could theoretically change the past and the future to ensure the ultimate safety of all life ever created.",
      "We will understand the absolute deepest secrets of existence and finally answer why anything exists at all.",
      "We will completely control the fundamental mathematical building blocks of hyper-space.",
      "We will have ascended to become ultimate creators, reaching the absolute peak of potential existence."
    ],
    initiatives: [
      "Inter-Universal Gateway Portals", "Universe Creation Engines (Big Bang Generators)", "Multiversal Infinite Energy Siphons",
      "Alternate Timeline Convergence Bridges", "Rules-of-Physics Customization Forges", "Hyper-Dimensional Habitation Constructs",
      "Reality-Spanning Consciousness Uplink", "Timeline Protection and Healing Overlords", "Death-of-Universe Escape Arks",
      "Cosmic Probability-Bending Engines", "Void-Space Interdimensional Colonization", "Endless Reality Mapping Probes",
      "Fundamental String-Manipulation Factories", "Alternate Reality Collaboration Councils", "Ultimate Truth Discovery Omnicomputer"
    ]
  }
];

export default function CivilizationStages() {
  return (
    <section className="py-32 relative bg-[#020617] overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[150px] mix-blend-screen"></div>
        <div className="absolute top-[40%] right-[-10%] w-[30%] h-[30%] bg-purple-600/10 rounded-full blur-[150px] mix-blend-screen"></div>
        <div className="absolute bottom-[10%] left-[20%] w-[50%] h-[50%] bg-fuchsia-600/10 rounded-full blur-[150px] mix-blend-screen"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-bold text-purple-300 tracking-widest uppercase">The Grand Trajectory</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              The Evolution to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Multiversal</span>
            </h2>
            <p className="text-slate-300 max-w-4xl mx-auto text-xl leading-relaxed">
              NEXUS CIVITAS is the first step on fundamentally graduating humanity beyond its infancy. Explore the understandings, benefits, and mega-initiatives required to ascend the Kardashev scale from a Planetary Type I civilization to a Multiversal Type V civilization.
            </p>
          </motion.div>
        </div>

        <div className="space-y-32">
          {civilizationData.map((civ, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              {/* Massive background number */}
              <div className="absolute -top-20 -left-10 text-[200px] md:text-[300px] font-bold text-white/[0.02] -z-10 pointer-events-none select-none font-display">
                {civ.type.split(" ")[1]}
              </div>

              <div className="text-center mb-12">
                <h3 className={`text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${civ.color} tracking-widest uppercase mb-2`}>
                  {civ.type}
                </h3>
                <h4 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">{civ.name}</h4>
                <div className="inline-block px-6 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 font-mono text-sm">
                  {civ.desc}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* 10 Understandings Area */}
                <div className="lg:col-span-5 p-8 border border-white/10 bg-black/40 backdrop-blur-xl rounded-3xl group transition-all duration-500 hover:bg-black/60">
                  <h5 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <Sparkles className="w-6 h-6 text-yellow-400" />
                    10 Crucial Understandings
                  </h5>
                  <ul className="space-y-4">
                    {civ.understandings.map((understanding, uIdx) => (
                      <li key={uIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-blue-400" />
                        <span className="text-slate-300 leading-relaxed text-sm md:text-base">
                          {understanding}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 15 Initiatives Area */}
                <div className={`lg:col-span-7 p-8 border border-white/10 bg-black/40 backdrop-blur-xl rounded-3xl transition-all duration-500 ${civ.borderGlow}`}>
                  <h5 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <Hexagon className="w-6 h-6 text-blue-400" />
                    15 Mega-Initiatives
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {civ.initiatives.map((initiative, iIdx) => (
                      <div key={iIdx} className="group/item flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                        <div className="text-xs font-mono text-slate-500 w-6 group-hover/item:text-white transition-colors">{String(iIdx + 1).padStart(2, '0')}</div>
                        <div className="text-slate-300 text-sm font-medium group-hover/item:text-white transition-colors">{initiative}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex justify-end">
                    <button className={`flex items-center gap-2 px-6 py-3 rounded-full text-white font-bold bg-gradient-to-r ${civ.color} hover:opacity-90 transition-opacity`}>
                      Explore Phase Data <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
