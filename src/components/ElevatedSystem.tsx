import { motion } from 'motion/react';
import { Layers, ArrowRight } from 'lucide-react';

export default function ElevatedSystem() {
  const phases = [
    { step: "01", title: "Structural Columns", desc: "Deep foundation pillars driven into existing urban fabric." },
    { step: "02", title: "Primary Decks", desc: "Interlocking hex-grid platforms forming the new ground level." },
    { step: "03", title: "Modular Housing", desc: "Pre-fabricated living units slotted into the deck matrix." },
    { step: "04", title: "Ground Upgrade", desc: "Legacy ground level converted to automated logistics and ecology." }
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-[#020617]">
      {/* Visual Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
          alt="Modern architecture looking up background"
          className="w-full h-full object-cover opacity-10 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#020617]/90 via-[#020617]/80 to-[#020617]"></div>
      </div>

      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-blue-900/10 to-transparent pointer-events-none z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div>
            <h2 className="text-sm font-mono text-blue-400 tracking-widest uppercase mb-4">// 02. Architecture</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Elevated Modular <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">City System</span>
            </h3>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              We don't just build new cities; we upgrade existing ones. The Elevated Urban System constructs a new, pristine layer of habitation above legacy infrastructure, allowing cities to modernize without displacing populations.
            </p>
            
            <div className="space-y-6">
              {phases.map((phase, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-6 items-start group"
                >
                  <div className="text-2xl font-mono text-slate-600 group-hover:text-blue-400 transition-colors">
                    {phase.step}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{phase.title}</h4>
                    <p className="text-slate-400">{phase.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Visual Diagram Area */}
          <div className="relative h-[600px] w-full border border-white/10 bg-black/40 rounded-2xl overflow-hidden flex items-center justify-center group backdrop-blur-sm shadow-2xl">
            {/* Abstract representation of the layers */}
            <div className="relative w-3/4 h-3/4 flex flex-col items-center justify-center perspective-1000">
              
              {/* Layer 3: Housing */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 w-64 h-32 border-2 border-blue-400/50 bg-blue-500/10 backdrop-blur-md transform -rotate-x-45 rotate-z-12 shadow-[0_0_30px_rgba(59,130,246,0.2)] flex items-center justify-center"
              >
                <span className="text-blue-300 font-mono text-sm tracking-widest">LAYER_03: HABITAT</span>
              </motion.div>

              {/* Layer 2: Decks */}
              <motion.div 
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-2/4 w-80 h-40 border-2 border-green-400/50 bg-green-500/10 backdrop-blur-md transform -rotate-x-45 rotate-z-12 shadow-[0_0_30px_rgba(16,185,129,0.2)] flex items-center justify-center"
              >
                <span className="text-green-300 font-mono text-sm tracking-widest">LAYER_02: PLATFORM</span>
              </motion.div>

              {/* Layer 1: Ground */}
              <motion.div 
                className="absolute top-3/4 w-96 h-48 border-2 border-slate-600/50 bg-slate-800/30 backdrop-blur-md transform -rotate-x-45 rotate-z-12 flex items-center justify-center"
              >
                <span className="text-slate-400 font-mono text-sm tracking-widest">LAYER_01: LEGACY_GROUND</span>
              </motion.div>

              {/* Connecting lines */}
              <div className="absolute top-1/4 h-1/2 w-[2px] bg-gradient-to-b from-blue-500 via-green-500 to-slate-600 left-1/2 -translate-x-1/2 opacity-50"></div>
            </div>
            
            <div className="absolute bottom-6 right-6 flex items-center gap-2 text-xs font-mono text-slate-500">
              <Layers className="w-4 h-4" />
              <span>SYSTEM_SCHEMATIC_V2</span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
