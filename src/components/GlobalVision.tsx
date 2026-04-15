import { motion } from 'motion/react';
import { Globe, ArrowRight, Sparkles } from 'lucide-react';

const systems = [
  { id: "01", title: "Planetary Grid", desc: "Unified HVDC network distributing renewable energy across continents.", color: "from-blue-500 to-cyan-400" },
  { id: "02", title: "Neural Logistics", desc: "AI-driven supply chains reducing global waste by 40% via predictive routing.", color: "from-purple-500 to-pink-500" },
  { id: "03", title: "Climate Shield", desc: "Macro-engineering to stabilize local climates and protect coastlines.", color: "from-emerald-500 to-teal-400" },
  { id: "04", title: "Fusion Baseload", desc: "Commercialized fusion reactors providing infinite, clean baseline power.", color: "from-orange-500 to-yellow-400" },
  { id: "05", title: "Vertical Agronomics", desc: "Hyper-dense automated farming towers ensuring 100% food security.", color: "from-green-500 to-emerald-400" },
  { id: "06", title: "Carbon Capture", desc: "Atmospheric scrubbers reversing historical emissions at scale.", color: "from-cyan-500 to-blue-500" },
  { id: "07", title: "Global Maglev", desc: "Vacuum-tube transit connecting major continental hubs in hours.", color: "from-indigo-500 to-purple-500" },
  { id: "08", title: "AI Governance", desc: "Quantum-backed nodes optimizing resource allocation in real-time.", color: "from-fuchsia-500 to-pink-500" },
  { id: "09", title: "Ocean Desalination", desc: "Nuclear-powered hubs converting seawater for global irrigation.", color: "from-blue-600 to-indigo-400" },
  { id: "10", title: "Closed-Loop Recycling", desc: "Molecular-level material recovery eliminating landfill waste.", color: "from-teal-500 to-green-400" },
  { id: "11", title: "Orbital Solar", desc: "Space-based solar arrays beaming microwave energy to surface rectennas.", color: "from-yellow-500 to-orange-500" },
  { id: "12", title: "Synthetic Biology", desc: "Engineered organisms for rapid medical and material manufacturing.", color: "from-pink-500 to-rose-400" },
  { id: "13", title: "Automated Mining", desc: "Robotic swarms extracting resources with zero human risk.", color: "from-slate-500 to-gray-400" },
  { id: "14", title: "Deep Sea Habitats", desc: "Pressurized oceanic cities expanding human habitation zones.", color: "from-cyan-600 to-blue-600" },
  { id: "15", title: "Quantum Comms", desc: "Unhackable, instantaneous global data transmission networks.", color: "from-violet-500 to-fuchsia-400" },
  { id: "16", title: "Weather Modification", desc: "Targeted atmospheric seeding to prevent droughts and severe storms.", color: "from-sky-500 to-indigo-500" },
  { id: "17", title: "Autonomous Construction", desc: "Self-assembling infrastructure deployed by drone swarms.", color: "from-amber-500 to-orange-400" },
  { id: "18", title: "Geo-Thermal Tapping", desc: "Deep-crust energy extraction for localized infinite heating.", color: "from-red-500 to-orange-500" },
  { id: "19", title: "Cognitive VR", desc: "Immersive educational matrices accelerating human learning.", color: "from-purple-600 to-indigo-600" },
  { id: "20", title: "Space Elevator", desc: "Carbon-nanotube tethers for low-cost orbital logistics.", color: "from-slate-300 to-slate-100" }
];

export default function GlobalVision() {
  return (
    <section className="py-32 relative overflow-hidden bg-[#020617]">
      {/* Vibrant Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-fuchsia-600/20 rounded-full blur-[150px] mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-600/20 rounded-full blur-[150px] mix-blend-screen"></div>
        <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] bg-yellow-500/10 rounded-full blur-[120px] mix-blend-screen"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-bold text-purple-300 tracking-widest uppercase">The Core Vision</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Type I <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Civilization</span>
            </h2>
            <p className="text-slate-300 max-w-3xl mx-auto text-xl leading-relaxed mb-10">
              The transition requires planetary-scale engineering. NEXUS CIVITAS is designing the 20 core global systems needed to harness the Earth's energy and resources sustainably.
            </p>
            
            {/* $5.9 Trillion Highlight */}
            <div className="inline-block p-[2px] rounded-2xl bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 shadow-[0_0_40px_rgba(234,179,8,0.3)]">
              <div className="bg-[#020617] px-8 py-6 rounded-2xl backdrop-blur-xl">
                <div className="text-sm font-mono text-yellow-400 tracking-widest uppercase mb-2">Estimated Global Investment</div>
                <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-500">
                  $5.9 Trillion
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 20 Systems Horizontal Scroll / Carousel */}
        <div className="relative w-full pb-10">
          <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {systems.map((sys, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.05 }}
                className="min-w-[300px] md:min-w-[400px] h-[500px] snap-center relative rounded-3xl overflow-hidden group cursor-pointer border border-white/10 shadow-2xl"
              >
                {/* Background Image */}
                <img 
                  src={`https://picsum.photos/seed/nexus_sys_${idx}/800/1000`} 
                  alt={sys.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* Vibrant Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/50 to-[#020617] opacity-90`}></div>
                <div className={`absolute inset-0 bg-gradient-to-tr ${sys.color} opacity-40 mix-blend-overlay group-hover:opacity-60 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="text-6xl font-display font-bold text-white/20 mb-auto group-hover:text-white/40 transition-colors">
                    {sys.id}
                  </div>
                  
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h4 className="text-3xl font-bold text-white mb-3 drop-shadow-lg">{sys.title}</h4>
                    <p className="text-slate-200 text-lg leading-relaxed drop-shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {sys.desc}
                    </p>
                  </div>
                  
                  {/* Animated line */}
                  <div className="w-0 h-1 bg-white mt-6 group-hover:w-full transition-all duration-700 ease-out"></div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Scroll Hint */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-full bg-gradient-to-l from-[#020617] to-transparent pointer-events-none flex items-center justify-end pr-4">
            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center animate-bounce border border-white/20">
              <ArrowRight className="text-white w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

