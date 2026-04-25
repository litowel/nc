import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Play, Pause, ExternalLink } from 'lucide-react';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=2000",
    title: "Sovereign Power Infrastructure",
    note: "Universal HVDC Grids fractionalized as Real World Assets to continuously distribute sustainable energy yields."
  },
  {
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=2000",
    title: "Planetary Water Security",
    note: "Desalination Pipelines governed by smart contracts ensuring free access while incentivizing maintenance via micro-dividends."
  },
  {
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=2000",
    title: "Disease Eradication Protocol",
    note: "Open-source genomic databases on IPFS providing time-locked airdrops for verifiable medical breakthroughs."
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000",
    title: "Next-Gen Autonomous Habitats",
    note: "Modular floating cities backed by a $5 Trillion STO, integrating zero-carbon vertical agriculture."
  },
  {
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2000",
    title: "Decentralized Sovereign Wealth",
    note: "A transparent planetary treasury using over-collateralized positions to systematically offset national debts."
  },
  {
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000",
    title: "Open-Source AI Governance",
    note: "Super-intelligence managed via $NEXUS nodes to optimize global supply chains and prevent resource hoarding."
  },
  {
    image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=2000",
    title: "Equatorial Solar Arrays",
    note: "Million-square-mile solar collectors with Gelato Network automation directing direct power dividends."
  },
  {
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=2000",
    title: "Universal Digital Identity & UBI",
    note: "Proof-of-Humanity integration guaranteeing an unconditional daily stream of $NEXUS to eradicate absolute poverty."
  },
  {
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=2000",
    title: "Extra-Planetary Resource Claims",
    note: "Asteroid mining rights pre-tokenized into ERC-4626 vaults to fund humanity's expansion into the cosmos."
  },
  {
    image: "https://images.unsplash.com/photo-1549419131-7e8fc9098711?auto=format&fit=crop&q=80&w=2000",
    title: "Oceanic Waste Reutilization",
    note: "Carbon-negative recycling hubs using cross-chain protocols to fund massive global plastic removal efforts."
  },
  {
    image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&q=80&w=2000",
    title: "Orbital Defense & Arrays",
    note: "A DAO-funded planetary shield governed globally to ensure survival against cataclysmic cosmic threats."
  },
  {
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2000",
    title: "Borderless Medical Facilities",
    note: "Tokenized hospital infrastructure using zero-knowledge proofs to authenticate access while maintaining citizen privacy."
  },
  {
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2000",
    title: "Quantum Compute Nodes",
    note: "Public-good supercomputing networks dedicated to modeling complex climate and atmospheric restoration architectures."
  },
  {
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80&w=2000",
    title: "Sovereign Biosphere Protections",
    note: "Trillion-dollar ecological bonds verified via satellite oracles to fund Amazon basin rewilding and preservation."
  },
  {
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000",
    title: "Verified Carbon Assets",
    note: "Atmospheric scrubber networks issuing dynamic carbon credit NFTs to enforce global zero-emission compliance."
  },
  {
    image: "https://images.unsplash.com/photo-1582662054611-66af76b856da?auto=format&fit=crop&q=80&w=2000",
    title: "Intercontinental Transit",
    note: "Fractionalized high-speed maglev train networks connecting continents, owned entirely by the passengers."
  },
  {
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=2000",
    title: "Smart City IoT Grids",
    note: "Sentient city metaverse replicas compensating users for providing data to optimize urban traffic and energy."
  },
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000",
    title: "Zero-Scarcity Agriculture",
    note: "Fully robotic farming megastructures tokenizing crop yields to direct surplus directly to regions in need."
  },
  {
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000",
    title: "Deep-Space Venture Equity",
    note: "Permissionless liquidity pools funding advanced propulsion and extra-terrestrial colony research for all humanity."
  },
  {
    image: "https://images.unsplash.com/photo-1531297172864-8ff13a1a3642?auto=format&fit=crop&q=80&w=2000",
    title: "Universal Knowledge Protocol",
    note: "Web3 neural learning networks issuing Soulbound empathy and tech credentials that boost UBI allocations."
  }
];

export default function VisionSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsPlaying(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setIsPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setIsPlaying(false);
  };

  return (
    <section className="py-20 bg-[#020617] relative border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 font-display">Global Implementation Blueprint</h2>
            <p className="text-slate-400 max-w-2xl text-sm md:text-base">
              20 multi-trillion dollar initiatives designed to elevate humanity. Tokenized via the Omni-Asset Ricardian Engine.
            </p>
          </div>
          <div className="flex items-center gap-4 bg-white/5 px-4 py-2 rounded-full border border-white/10 w-fit">
             <button onClick={() => setIsPlaying(!isPlaying)} className="text-white hover:text-emerald-400 transition-colors">
               {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
             </button>
             <div className="h-4 w-px bg-white/20"></div>
             <div className="text-sm font-mono text-slate-300">
               {String(currentIndex + 1).padStart(2, '0')} / {slides.length}
             </div>
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden aspect-[16/9] md:aspect-[21/9] bg-[#0f172a] shadow-2xl group border border-white/10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <img 
                src={slides[currentIndex].image} 
                alt={slides[currentIndex].title}
                className="w-full h-full object-cover mix-blend-screen opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent group-hover:via-[#020617]/60 transition-colors duration-700"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="max-w-4xl transform transition-transform duration-500 group-hover:-translate-y-2"
                >
                  <div className="inline-block px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4 group-hover:bg-emerald-500/40 transition-colors duration-500">
                    Initiative {String(currentIndex + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-2xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg leading-tight group-hover:text-emerald-100 transition-colors duration-500">
                    {slides[currentIndex].title}
                  </h3>
                  <p className="text-sm md:text-xl text-slate-200 drop-shadow-md leading-relaxed border-l-2 border-emerald-500 pl-4 md:pl-6 group-hover:text-white transition-colors duration-500">
                    {slides[currentIndex].note}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-black/50 hover:bg-emerald-500/50 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-all border border-white/20"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-black/50 hover:bg-emerald-500/50 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-all border border-white/20"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="mt-6 flex flex-wrap gap-2 justify-center max-w-full overflow-x-auto pb-4 custom-scrollbar">
           {slides.map((_, idx) => (
             <button
               key={idx}
               onClick={() => goToSlide(idx)}
               className={`h-2 rounded-full transition-all duration-300 ${
                 idx === currentIndex 
                   ? 'w-12 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]' 
                   : 'w-2 bg-white/20 hover:bg-white/40'
               }`}
               aria-label={`Go to slide ${idx + 1}`}
             />
           ))}
        </div>
      </div>
    </section>
  );
}
