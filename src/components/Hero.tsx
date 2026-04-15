import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[#020617]">
      {/* Sleek Architectural/Tech CSS Background */}
      <div className="absolute inset-0 z-0">
        {/* Animated glowing lines simulating city grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>
        
        {/* Deep glowing orbs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/20 rounded-[100%] blur-[120px] animate-[pulse_8s_ease-in-out_infinite_alternate]"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-green-600/10 rounded-[100%] blur-[120px] animate-[pulse_10s_ease-in-out_infinite_alternate_reverse]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(59,130,246,0.2)]"
          >
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse shadow-[0_0_10px_rgba(96,165,250,0.8)]"></span>
            <span className="text-sm font-medium text-blue-200 tracking-widest uppercase font-mono">Initiative 01 Active</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-7xl md:text-9xl lg:text-[10rem] font-bold mb-6 tracking-tighter leading-[0.95]"
          >
            Building the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-green-400 text-glow-blue">
              Next Civilization
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-lg"
          >
            AI-powered smart cities, global trade corridors, and sustainable infrastructure for a Type I civilization.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button className="px-8 py-4 bg-white text-black font-bold rounded hover:bg-gray-200 transition-all flex items-center gap-2 group w-full sm:w-auto justify-center text-lg shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)]">
              Explore the Vision
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={onOpenModal}
              className="px-8 py-4 border border-white/30 bg-black/30 backdrop-blur-md hover:border-white/60 hover:bg-white/10 transition-all text-white font-bold rounded w-full sm:w-auto justify-center text-lg"
            >
              View Investor Deck
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
      >
        <span className="text-xs text-slate-400 uppercase tracking-widest font-mono">Scroll to initialize</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-blue-500 to-transparent"></div>
      </motion.div>
    </section>
  );
}


