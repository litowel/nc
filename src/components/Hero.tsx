import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import Logo from './Logo';

const bgImages = [
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop", // Earth/Space
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop", // Modern Architecture/City
  "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2093&auto=format&fit=crop", // Deep Space/Galaxy
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"  // Futuristic Tech / Energy
];

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bgImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-black">
      {/* Dynamic Image Background Slider */}
      <div className="absolute inset-0 z-0 bg-black">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={bgImages[currentSlide]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.6, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity"
            alt="Hero Background"
          />
        </AnimatePresence>
        
        {/* Overlay gradient to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-transparent to-transparent"></div>
      </div>
      
      {/* Sleek Architectural/Tech CSS overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Animated glowing lines simulating city grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_20%,transparent_100%)] opacity-[0.03]"></div>

        
        {/* Deep glowing orbs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-500/30 rounded-[100%] blur-[150px] animate-[pulse_8s_ease-in-out_infinite_alternate]"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-emerald-500/20 rounded-[100%] blur-[150px] animate-[pulse_10s_ease-in-out_infinite_alternate_reverse]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex justify-center mb-10"
          >
            <Logo className="w-32 h-32 md:w-48 md:h-48 drop-shadow-[0_0_50px_rgba(6,182,212,0.8)]" animate={true} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-sky-400/40 bg-sky-500/10 backdrop-blur-xl mb-10 shadow-[0_0_30px_rgba(56,189,248,0.3)]"
          >
            <span className="w-3 h-3 rounded-full bg-sky-400 animate-pulse shadow-[0_0_15px_rgba(56,189,248,1)]"></span>
            <span className="text-sm font-bold text-sky-100 tracking-[0.2em] uppercase font-mono">Initiative 01 Active</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-8xl lg:text-[11rem] font-bold mb-8 tracking-tighter leading-[0.9] drop-shadow-2xl font-display text-white"
          >
            Building the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-white to-emerald-300 text-glow-sky">
              Next Civilization
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-3xl text-slate-200 mb-14 max-w-4xl mx-auto font-light leading-relaxed drop-shadow-xl"
          >
            AI-powered smart cities, global trade corridors, and sustainable infrastructure for a Type I civilization.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button className="px-10 py-5 bg-gradient-to-r from-white to-slate-200 text-black font-bold rounded-lg hover:from-sky-50 hover:to-white transition-all flex items-center gap-3 group w-full sm:w-auto justify-center text-xl shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:shadow-[0_0_60px_rgba(255,255,255,0.6)] transform hover:-translate-y-1">
              Explore the Vision
              <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
            <button 
              onClick={onOpenModal}
              className="px-10 py-5 border border-sky-400/50 bg-black/40 backdrop-blur-xl hover:border-sky-300 hover:bg-sky-900/40 transition-all text-white font-bold rounded-lg w-full sm:w-auto justify-center text-xl shadow-[0_0_20px_rgba(56,189,248,0.1)] hover:shadow-[0_0_40px_rgba(56,189,248,0.3)] transform hover:-translate-y-1"
            >
              View Investor Deck
            </button>
          </motion.div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {bgImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`transition-all duration-500 rounded-full ${
              idx === currentSlide 
                ? 'w-12 h-2 bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.8)]' 
                : 'w-2 h-2 bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
      >
        <span className="text-xs text-sky-400 uppercase tracking-[0.3em] font-mono font-bold shadow-sky-400/50 drop-shadow-md">Scroll to initialize</span>
        <div className="w-[2px] h-16 bg-gradient-to-b from-sky-400 to-transparent"></div>
      </motion.div>
    </section>
  );
}


