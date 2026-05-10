import { motion } from 'motion/react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

const systems = [
  { id: "01", title: "Universal Free Housing", desc: "Modular, AI-constructed residential infrastructure provided as a fundamental right.", benefit: "Eradicating homelessness and optimizing land use globally.", color: "from-blue-500 to-cyan-400", image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800" },
  { id: "02", title: "Global Peace & Harmony", desc: "Transparent, blockchain-verified coordination systems replacing adversarial geopolitics.", benefit: "Reallocating defense budgets to human advancement.", color: "from-purple-500 to-pink-500", image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800" },
  { id: "03", title: "Free Education Networks", desc: "Immersive VR and AI-tutor ecosystems providing world-class education instantly.", benefit: "Unlocking the total intellectual capacity of humanity.", color: "from-emerald-500 to-teal-400", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800" },
  { id: "04", title: "Open Technology Sharing", desc: "A global open-source repository for all non-hazardous scientific engineering.", benefit: "Accelerating civilization-scale innovation.", color: "from-orange-500 to-yellow-400", image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=800" },
  { id: "05", title: "Global Energy Grid", desc: "Planetary HVDC networks sharing fusion and renewable energy across continents.", benefit: "Infinite, cleanly distributed baseload power.", color: "from-green-500 to-emerald-400", image: "https://images.unsplash.com/photo-1549419131-7e8fc9098711?auto=format&fit=crop&q=80&w=800" },
  { id: "06", title: "Cultural Alliance", desc: "Digital systems celebrating localized heritage while unifying global cooperation.", benefit: "Protecting cultural diversity within a planetary society.", color: "from-cyan-500 to-blue-500", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800" },
  { id: "07", title: "Universal Basic Resources", desc: "Automated logistics ensuring food, water, and power reach every human being.", benefit: "Poverty elimination through autonomous infrastructure.", color: "from-indigo-500 to-purple-500", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" },
  { id: "08", title: "Climate Protection", desc: "Planetary-scale atmospheric management and extreme weather shielding.", benefit: "Stabilizing the biosphere and safeguarding coastal megacities.", color: "from-fuchsia-500 to-pink-500", image: "https://images.unsplash.com/photo-1682687982501-1e58f8145380?auto=format&fit=crop&q=80&w=800" },
  { id: "09", title: "Automated Food Networks", desc: "Vertical aeroponics and cellular agriculture managed by autonomous systems.", benefit: "Decoupling food production from destructive land use.", color: "from-blue-600 to-indigo-400", image: "https://images.unsplash.com/photo-1530836369250-ef71a35921bc?auto=format&fit=crop&q=80&w=800" },
  { id: "10", title: "Global Empathy Networks", desc: "Digital platforms optimizing for human connection, mental health, and understanding.", benefit: "Improving societal cohesion on a global scale.", color: "from-teal-500 to-green-400", image: "https://images.unsplash.com/photo-1531297172864-8ff13a1a3642?auto=format&fit=crop&q=80&w=800" },
  { id: "11", title: "AI City Operating Systems", desc: "Centralized AI intelligence managing utilities, traffic, and emergency response.", benefit: "Creating perfectly efficient, zero-waste urban environments.", color: "from-yellow-500 to-orange-500", image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=800" },
  { id: "12", title: "Disease Eradication", desc: "Global pathogen monitoring networks and rapid personalized medicine deployment.", benefit: "Eliminating pandemics and extending human healthspans.", color: "from-pink-500 to-rose-400", image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800" },
  { id: "13", title: "Water & Desalination", desc: "Nuclear-powered desalination hubs piped inland through automated corridors.", benefit: "Unlimited fresh water for all biomes.", color: "from-slate-500 to-gray-400", image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800" },
  { id: "14", title: "Atmospheric Carbon Removal", desc: "Direct air capture matrices integrated into smart city infrastructure.", benefit: "Reversing historical emissions while scaling civilization.", color: "from-cyan-600 to-blue-600", image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800" },
  { id: "15", title: "Oceanic Habitats", desc: "Sustainable floating arcologies adapting to rising sea levels.", benefit: "Expanding human living space without deforestation.", color: "from-violet-500 to-fuchsia-400", image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&q=80&w=800" },
  { id: "16", title: "Waste-to-Energy", desc: "Plasma gasification systems returning all waste into core molecular components.", benefit: "Achieving true zero-waste civilization status.", color: "from-sky-500 to-indigo-500", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800" },
  { id: "17", title: "Space Exploration", desc: "Orbital logistics protocols preparing humanity for multi-planetary expansion.", benefit: "Securing the long-term survival of the human species.", color: "from-amber-500 to-orange-400", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800" },
  { id: "18", title: "Quantum Infrastructure", desc: "Instantaneous, unhackable planetary communication networks.", benefit: "Perfect data security and real-time global computing.", color: "from-red-500 to-orange-500", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" },
  { id: "19", title: "AI Governance", desc: "Non-biased logical frameworks assisting in fair resource distribution and policymaking.", benefit: "Minimizing corruption and maximizing societal well-being.", color: "from-purple-600 to-indigo-600", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" },
  { id: "20", title: "Biosphere Restoration", desc: "Robotic systems tasked with rewilding continents and restoring extinct ecosystems.", benefit: "Harmonizing extreme technological advancement with nature.", color: "from-slate-300 to-slate-100", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800" }
];

export default function GlobalVision() {
  return (
    <section className="py-32 relative overflow-hidden bg-[#020617]">
      {/* Vibrant Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[150px] mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-600/20 rounded-full blur-[150px] mix-blend-screen"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 w-full max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm mb-6 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-bold text-cyan-300 tracking-widest uppercase font-mono">The 20 Initiatives</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight uppercase font-display">
              Toward A <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">Type I Civilization</span>
            </h2>
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl max-w-5xl mx-auto mb-16 text-left shadow-[0_0_30px_rgba(0,0,0,0.5)]">
               <h3 className="text-2xl font-bold text-white mb-4 uppercase">What is a Type I Civilization?</h3>
               <p className="text-slate-300 text-lg leading-relaxed mb-6">
                 A Type I Civilization (based on the Kardashev scale) is a planetary society capable of harnessing all the energy reaching its home planet from its parent star. Currently, humanity is a Type 0.73 civilization, fragmented by geopolitical borders, fossil-fuel reliance, and inefficient infrastructure.
               </p>
               <p className="text-slate-300 text-lg leading-relaxed mb-6">
                 We have not reached Type I status because our legacy governance and energy systems were not designed for planetary-scale coordination. Disconnected power grids, redundant supply chains, and reactive rather than predictive city management have throttled our progress.
               </p>
               <p className="text-slate-300 text-lg leading-relaxed font-bold text-cyan-100">
                 NEXUS CIVITAS is building the 20 core initiatives required to bridge this gap. By utilizing AI infrastructure, clean energy supergrids, smart cities, and global tokenized coordination, we can realistically begin the transition toward a unified, sustainable planetary civilization.
               </p>
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
                transition={{ delay: Math.min(idx * 0.05, 0.5) }}
                className="min-w-[320px] md:min-w-[450px] h-[550px] snap-center relative rounded-3xl overflow-hidden group cursor-pointer border border-white/10 shadow-[0_0_20px_rgba(6,182,212,0.05)]"
              >
                {/* Background Image */}
                <img 
                  src={sys.image} 
                  alt={sys.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* Vibrant Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/80 to-[#020617] opacity-90`}></div>
                <div className={`absolute inset-0 bg-gradient-to-tr ${sys.color} opacity-30 mix-blend-overlay group-hover:opacity-50 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="text-5xl font-mono font-bold text-white/20 mb-auto group-hover:text-cyan-400/40 transition-colors">
                    {sys.id}
                  </div>
                  
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <h4 className="text-2xl font-bold text-white mb-3 drop-shadow-lg uppercase font-display">{sys.title}</h4>
                    <p className="text-slate-300 text-base leading-relaxed drop-shadow-md mb-4">
                      {sys.desc}
                    </p>
                    
                    {/* Benefit Section (Reveals on Hover) */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-cyan-400 shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1 font-mono">Civilization Impact</div>
                          <div className="text-white text-sm leading-relaxed">{sys.benefit}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Animated line */}
                  <div className="w-0 h-1 bg-cyan-400 mt-6 group-hover:w-full transition-all duration-700 ease-out shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Scroll Hint */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-full bg-gradient-to-l from-[#020617] to-transparent pointer-events-none flex items-center justify-end pr-4">
            <div className="w-12 h-12 rounded-full bg-cyan-900/40 backdrop-blur-md flex items-center justify-center animate-bounce border border-cyan-400/40 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
              <ArrowRight className="text-cyan-300 w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

