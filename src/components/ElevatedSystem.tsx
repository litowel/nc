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
          className="w-full h-full object-cover opacity-20 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#020617] via-[#020617]/70 to-[#020617]"></div>
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div>
            <h2 className="text-sm font-mono text-cyan-400 tracking-widest uppercase mb-4 drop-shadow-md">// 02. Architecture</h2>
            <h3 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1] font-display">
              Elevated Modular <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-lg">City System</span>
            </h3>
            <p className="text-slate-300 text-xl mb-12 leading-relaxed drop-shadow-sm">
              We don't just build new cities; we upgrade existing ones. The Elevated Urban System constructs a new, pristine layer of habitation above legacy infrastructure, allowing cities to modernize without displacing populations.
            </p>
            
            <div className="space-y-8">
              {phases.map((phase, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-6 items-start group p-6 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 backdrop-blur-sm"
                >
                  <div className="text-4xl font-display font-bold text-slate-700 group-hover:text-cyan-400 transition-colors">
                    {phase.step}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">{phase.title}</h4>
                    <p className="text-slate-400 text-lg">{phase.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Visual Diagram Area */}
          <div className="relative h-[700px] w-full border border-white/10 bg-[#020617]/60 rounded-[40px] overflow-hidden flex items-center justify-center group backdrop-blur-xl shadow-[0_0_60px_rgba(0,0,0,0.8)]">
            {/* Inner Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10"></div>
            
            {/* Abstract representation of the layers */}
            <div className="relative w-3/4 h-[80%] flex flex-col items-center justify-center perspective-1000 mt-10">
              
              {/* Layer 3: Housing */}
              <motion.div 
                animate={{ y: [-15, 15, -15] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[10%] w-[320px] h-[160px] border border-cyan-400/60 bg-cyan-500/20 backdrop-blur-md transform -rotate-x-45 rotate-z-12 shadow-[0_20px_50px_rgba(6,182,212,0.4)] flex items-center justify-center rounded-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"></div>
                <span className="text-cyan-200 font-mono text-sm tracking-widest font-bold">LAYER_03: HABITAT</span>
              </motion.div>

              {/* Layer 2: Decks */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-[35%] w-[400px] h-[200px] border border-blue-400/60 bg-blue-500/20 backdrop-blur-md transform -rotate-x-45 rotate-z-12 shadow-[0_20px_50px_rgba(59,130,246,0.3)] flex items-center justify-center rounded-xl"
              >
                <span className="text-blue-200 font-mono text-sm tracking-widest font-bold">LAYER_02: PLATFORM</span>
              </motion.div>

              {/* Layer 1: Ground */}
              <motion.div 
                className="absolute top-[60%] w-[480px] h-[240px] border border-slate-600/50 bg-slate-800/50 backdrop-blur-md transform -rotate-x-45 rotate-z-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-center rounded-xl"
              >
                <span className="text-slate-300 font-mono text-sm tracking-widest font-bold">LAYER_01: LEGACY_GROUND</span>
              </motion.div>

              {/* Connecting lines */}
              <div className="absolute top-[10%] h-[70%] w-[2px] bg-gradient-to-b from-cyan-400 via-blue-500 to-slate-600 left-1/2 -translate-x-1/2 opacity-70 blur-[1px]"></div>
              <div className="absolute top-[10%] h-[70%] w-[1px] bg-white left-1/2 -translate-x-1/2 opacity-50"></div>
            </div>
            
            <div className="absolute bottom-8 right-8 flex items-center gap-3 text-xs font-mono text-slate-400 bg-black/40 px-4 py-2 rounded-full border border-white/5 backdrop-blur-md">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>SYSTEM_SCHEMATIC_V2</span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
