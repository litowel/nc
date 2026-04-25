import { motion } from 'motion/react';
import { Hexagon, ArrowRight, Coins } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TokenBanner() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#020617] border-y border-blue-900/30">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop"
            alt="Blockchain abstract"
            className="w-full h-full object-cover opacity-20 mix-blend-screen"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-[#020617]"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-white/5 to-white/[0.02] border border-blue-500/20 rounded-3xl p-8 md:p-12 backdrop-blur-xl shadow-2xl overflow-hidden relative">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-bold tracking-widest uppercase mb-6">
                <Coins className="w-4 h-4" />
                Base Blockchain Powered
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">$NEXUS</span> Token
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Fund the transition to a Type I planetary civilization. $NEXUS provides the economic foundation to back global peace, free housing, and infinite clean energy initiatives. Deployed via thirdweb with a 10 Trillion max supply.
              </p>
              
              <Link 
                to="/token"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white rounded-full font-bold text-lg transition-all shadow-[0_0_30px_rgba(59,130,246,0.3)]"
              >
                Access $NEXUS ICO <ArrowRight className="w-5 h-5" />
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
                 <Hexagon className="w-64 h-64 text-blue-400 drop-shadow-[0_0_30px_rgba(59,130,246,0.6)] relative z-10" strokeWidth={0.5} />
               </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
