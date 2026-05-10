import { motion } from 'motion/react';
import { Hexagon, ArrowRight, Coins } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TokenBanner() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#020617] border-y border-cyan-900/30">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop"
            alt="Blockchain abstract"
            className="w-full h-full object-cover opacity-10 mix-blend-screen mix-blend-luminosity"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/70 to-[#020617]"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full max-w-7xl">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-white/5 to-white/[0.02] border border-cyan-500/20 rounded-3xl p-8 md:p-12 backdrop-blur-xl shadow-[0_0_30px_rgba(6,182,212,0.1)] overflow-hidden relative">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-bold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                <Coins className="w-4 h-4" />
                Infrastructure Token
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight uppercase font-display">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">$NEXUS</span> Ecosystem
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                An infrastructure coordination and ecosystem participation token supporting future sustainable urban development systems. Built to scale global deployment of AI cities and clean energy grids.
              </p>
              
              <Link 
                to="/token"
                className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-cyan-400 hover:bg-cyan-500/10 text-cyan-300 rounded-lg font-bold text-lg transition-all shadow-[0_0_20px_rgba(6,182,212,0.1)] uppercase tracking-wide text-sm"
              >
                Explore $NEXUS Economics <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="md:w-1/2 flex justify-center relative">
               <motion.div
                  animate={{ 
                    rotate: 360,
                  }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="relative z-10"
               >
                 <div className="absolute inset-0 bg-cyan-500/20 blur-[50px] rounded-full"></div>
                 <Hexagon className="w-64 h-64 text-cyan-400/50 drop-shadow-[0_0_30px_rgba(6,182,212,0.4)] relative z-10" strokeWidth={0.5} />
               </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
