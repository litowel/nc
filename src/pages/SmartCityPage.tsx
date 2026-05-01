import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Download, Zap, CreditCard, Shuffle, ShieldCheck, TrendingUp, Link as LinkIcon, Building, ArrowRight } from 'lucide-react';
import Logo from '../components/Logo';

export default function SmartCityPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isCreditModalOpen, setIsCreditModalOpen] = useState(false);

  const appealSlides = [
    {
      text: "Start owning smart city real estate with flexible entry",
      image: "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?q=80&w=2000&auto=format&fit=crop"
    },
    {
      text: "Access property without full upfront capital",
      image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=2000&auto=format&fit=crop"
    },
    {
      text: "Join the future of tokenized real estate",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2000&auto=format&fit=crop"
    },
    {
      text: "Flexible ownership powered by blockchain",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f4fc80c?q=80&w=2000&auto=format&fit=crop"
    },
    {
      text: "From zero to property exposure — smarter access",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop"
    },
    {
      text: "Global real estate, simplified access",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % appealSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [appealSlides.length]);

  const features = [
    {
      id: "01",
      title: "Instant Leveraged Entry",
      desc: "Users can access tokenized assets through platform-assisted liquidity mechanisms, enabling fast entry without requiring full upfront capital.",
      caption: "Enter instantly. No waiting. Smart access enabled.",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2000&auto=format&fit=crop",
      icon: <Zap className="w-6 h-6" />
    },
    {
      id: "02",
      title: "Token + Debt Position System",
      desc: "Users receive asset tokens representing ownership exposure, alongside structured repayment obligations tracked within the platform.",
      caption: "Own now. Pay over time.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
      icon: <CreditCard className="w-6 h-6" />
    },
    {
      id: "03",
      title: "Yield Optimization Engine",
      desc: "User positions may be supported by backend capital optimization strategies designed to reduce cost and improve efficiency.",
      caption: "Your position works for you.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f4fc80c?q=80&w=2000&auto=format&fit=crop",
      icon: <Shuffle className="w-6 h-6" />
    },
    {
      id: "04",
      title: "Scalable Liquidity Model",
      desc: "The platform supports growth through layered liquidity systems, enabling expansion from small deployments to large-scale developments.",
      caption: "Start small. Scale globally.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      id: "05",
      title: "Synthetic Exposure Layer",
      desc: "Users can gain exposure to city-wide value without direct unit allocation, enabling global participation and liquidity.",
      caption: "Access global real estate without borders.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop",
      icon: <LinkIcon className="w-6 h-6" />
    },
    {
      id: "06",
      title: "Real-World Development",
      desc: "Token demand and participation contribute to real-world construction funding through structured investment channels.",
      caption: "From digital demand to real-world construction.",
      image: "https://images.unsplash.com/photo-1541888086925-eb8282f232ce?q=80&w=2000&auto=format&fit=crop",
      icon: <Building className="w-6 h-6" />
    }
  ];

  return (
    <div className="pt-24 bg-[#020617] min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2072&auto=format&fit=crop"
            alt="Futuristic Smart City"
            className="w-full h-full object-cover opacity-20 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-[#020617]/40"></div>
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-sky-600/20 rounded-full blur-[150px] mix-blend-screen"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-8"
          >
            <Logo animate={true} className="w-24 h-24 drop-shadow-[0_0_30px_rgba(56,189,248,0.5)]" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tighter leading-tight drop-shadow-2xl font-display uppercase tracking-wider"
          >
            Own a Piece of the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-white to-emerald-300">
              Future Smart City
            </span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center justify-center gap-2 mb-12"
          >
            <p className="text-2xl md:text-3xl text-emerald-400 font-light drop-shadow-md">
              Start small.
            </p>
            <p className="text-2xl md:text-3xl text-sky-300 font-light drop-shadow-md">
              Access tokenized apartments.
            </p>
            <p className="text-2xl md:text-3xl text-white font-light drop-shadow-md">
              Grow with the city.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a 
              href="https://thirdweb.com/base/0xebb52d0e72160a330086Be0fdD952d02eD65dFcA" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-10 py-5 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold rounded-lg hover:from-cyan-300 hover:to-blue-400 transition-all flex items-center justify-center w-full sm:w-auto text-xl shadow-[0_0_30px_rgba(6,182,212,0.4)] transform hover:-translate-y-1"
            >
              Buy Tokens
            </a>
            <div className="flex flex-col items-center w-full sm:w-auto">
              <button 
                onClick={() => setIsCreditModalOpen(true)} 
                className="px-10 py-5 bg-black/40 border border-emerald-400/50 backdrop-blur-xl text-emerald-300 hover:bg-emerald-900/40 hover:text-white font-bold rounded-lg transition-all flex items-center justify-center w-full text-xl shadow-[0_0_30px_rgba(16,185,129,0.2)] transform hover:-translate-y-1"
              >
                Buy With Credit
              </button>
              <span className="text-emerald-400/60 text-xs mt-3 font-mono tracking-widest uppercase text-center">Credit access currently in beta</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Presentation Section */}
      <section className="py-24 relative z-10 border-b border-white/5 bg-[#020617]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-mono text-cyan-400 tracking-widest uppercase mb-4 drop-shadow-md">// Cinematic Vision</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white font-display">Experience The Future</h3>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mt-6">
              Immerse yourself in our cinematic vision of how AI and blockchain are transforming global real estate infrastructure and accessible ownership.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
            {/* Video 1: Individual Ownership */}
            <div className="relative group cursor-pointer rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(6,182,212,0.1)] bg-slate-900 hover:shadow-[0_0_50px_rgba(6,182,212,0.2)] transition-all duration-500">
              <div className="relative aspect-video w-full">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2072&auto=format&fit=crop" 
                  alt="Cinematic Smart City Presentation" 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none"></div>
                
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-cyan-500/20 flex items-center justify-center backdrop-blur-md border border-cyan-400/50 group-hover:bg-cyan-500/40 transition-all duration-300 transform group-hover:scale-110 shadow-[0_0_30px_rgba(6,182,212,0.5)]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z"/>
                    </svg>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6 z-20 text-left pointer-events-none">
                  <h4 className="text-xl md:text-2xl font-display font-bold text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] leading-tight mb-2">
                    “Own a smart city apartment without full capital.”
                  </h4>
                  <p className="text-sky-300 text-sm font-light drop-shadow-md">
                    Flexible credit access & digital ownership in a tech-driven utopia.
                  </p>
                </div>
              </div>
              <div className="bg-black/80 backdrop-blur-md p-4 flex justify-between items-center border-t border-white/10">
                <span className="text-slate-400 text-xs font-mono uppercase tracking-wider">Concept Trailer • 01</span>
                <span className="text-emerald-400/70 text-xs italic">Coming Soon</span>
              </div>
            </div>

            {/* Video 2: Institutional Investment */}
            <div className="relative group cursor-pointer rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(16,185,129,0.1)] bg-slate-900 hover:shadow-[0_0_50px_rgba(16,185,129,0.2)] transition-all duration-500">
              <div className="relative aspect-video w-full">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
                  alt="Global Investment Dashboard" 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none"></div>
                
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center backdrop-blur-md border border-emerald-400/50 group-hover:bg-emerald-500/40 transition-all duration-300 transform group-hover:scale-110 shadow-[0_0_30px_rgba(16,185,129,0.5)]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z"/>
                    </svg>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6 z-20 text-left pointer-events-none">
                  <h4 className="text-xl md:text-2xl font-display font-bold text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] leading-tight mb-2">
                    “Early access to tokenized global real estate infrastructure.”
                  </h4>
                  <p className="text-emerald-300 text-sm font-light drop-shadow-md">
                    High-value investment opportunity powered by AI infrastructure planning.
                  </p>
                </div>
              </div>
              <div className="bg-black/80 backdrop-blur-md p-4 flex justify-between items-center border-t border-white/10">
                <span className="text-slate-400 text-xs font-mono uppercase tracking-wider">Investor Briefing • 02</span>
                <span className="text-emerald-400/70 text-xs italic">Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-24 bg-[#020617] relative z-10 border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-mono text-cyan-400 tracking-widest uppercase mb-4 drop-shadow-md">// The Process</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">How It Works</h3>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Simple steps to secure your exposure in the AI-powered smart city. No complex jargon, just straightforward ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-900/40 border border-white/5 rounded-2xl p-8 backdrop-blur-md relative overflow-hidden group hover:border-sky-500/30 transition-all text-center">
              <div className="w-16 h-16 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-3xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform">
                1
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Choose Your Entry</h4>
              <p className="text-slate-400 leading-relaxed font-light">
                Select your tokenized apartment block and pick how you want to pay: buy outright or use our structured credit system to pay over time.
              </p>
            </div>
            
            <div className="bg-slate-900/40 border border-white/5 rounded-2xl p-8 backdrop-blur-md relative overflow-hidden group hover:border-emerald-500/30 transition-all text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-3xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform">
                2
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Secure & Optimize</h4>
              <p className="text-slate-400 leading-relaxed font-light">
                Your token and any debt position are secured on the platform. Our backend engines go to work, optimizing yields to help reduce your costs automatically.
              </p>
            </div>

            <div className="bg-slate-900/40 border border-white/5 rounded-2xl p-8 backdrop-blur-md relative overflow-hidden group hover:border-blue-500/30 transition-all text-center">
              <div className="w-16 h-16 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-3xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform">
                3
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Grow with the City</h4>
              <p className="text-slate-400 leading-relaxed font-light">
                As the real-world construction progresses through our funding channels, the entire city scales. Your synthetic exposure grows alongside it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview Section */}
      <section className="py-24 bg-gradient-to-b from-[#020617] to-[#04081c] border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 font-display leading-tight">
              NEXUS CIVITAS AI <br />
              <span className="text-sky-400 text-2xl md:text-4xl mt-2 block font-light">AI Powered Global Smart City Initiative</span>
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-slate-300 font-light leading-relaxed text-left md:text-center border-l-4 border-sky-500 pl-6 md:border-l-0 md:pl-0">
              <p>
                <strong className="text-white font-medium">NEXUS CIVITAS AI</strong> is a tokenized smart city platform designed to provide global users with access to real estate ownership through blockchain-based infrastructure and flexible financial entry systems.
              </p>
              <p>
                The project enables users to gain exposure to apartment units within a planned smart city ecosystem using tokenized ownership, credit-based access, and decentralized finance (DeFi) integrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Appeal Messages Image Slider */}
      <section className="relative h-[60vh] min-h-[400px] border-b border-white/5 bg-black overflow-hidden group">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img 
              src={appealSlides[currentSlide].image} 
              alt={appealSlides[currentSlide].text}
              className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/80 via-transparent to-[#020617]/80"></div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white drop-shadow-[0_0_20px_rgba(0,0,0,0.8)] font-display leading-tight">
                {appealSlides[currentSlide].text}
              </h2>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Manual Navigation Controls */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-4">
          {appealSlides.map((_, idx) => (
             <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`transition-all duration-500 rounded-full ${
                idx === currentSlide 
                  ? 'w-12 h-2 bg-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.8)]' 
                  : 'w-2 h-2 bg-white/30 hover:bg-white/80'
              }`}
             />
          ))}
        </div>
      </section>

      {/* Core Ways to Enter Content */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-mono text-cyan-400 tracking-widest uppercase mb-4 drop-shadow-md">// Structured Access</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">Choose how you want to enter</h3>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              This is a tokenized Real World Asset. You don't need full capital to start. We provide structured access via ownership tokens, flexible credit, smart refinancing, and yield optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((opt) => (
              <motion.div 
                key={opt.id}
                whileHover={{ y: -5 }}
                className="bg-slate-900/40 border border-white/5 rounded-[24px] overflow-hidden group hover:border-sky-500/30 transition-colors backdrop-blur-md relative"
              >
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10"></div>
                  <img src={opt.image} alt={opt.title} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
                  
                  {/* Floating Icon or Status */}
                  <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md rounded-xl p-3 border border-white/10 text-sky-400 group-hover:bg-sky-900/50 group-hover:text-white transition-colors">
                    {opt.icon}
                  </div>
                  
                  <div className="absolute bottom-4 left-6 z-20">
                    <div className="text-sm font-bold text-emerald-400 font-mono tracking-wider mb-2 uppercase group-hover:drop-shadow-md">{opt.caption}</div>
                  </div>
                </div>

                <div className="p-8">
                  <h4 className="text-2xl font-bold text-white mb-3">{opt.title}</h4>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {opt.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xs text-slate-500 font-mono tracking-wide">
              * Ownership represents tokenized exposure and may involve repayment obligations.
            </p>
          </div>
        </div>
      </section>

      {/* The Simple Truth */}
      <section className="py-24 relative bg-black/50 border-y border-white/5 overflow-hidden">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">The Simple Truth</h3>
              <p className="text-xl text-slate-300 leading-relaxed mb-6">
                You are not just buying a globally tokenized asset.
              </p>
              <p className="text-xl text-slate-300 leading-relaxed">
                But you are buying:
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-center gap-4 text-2xl text-sky-300 font-bold">
                  <ShieldCheck className="w-8 h-8 text-emerald-400" />
                  Opportunity
                </li>
                <li className="flex items-center gap-4 text-2xl text-sky-300 font-bold">
                  <ShieldCheck className="w-8 h-8 text-emerald-400" />
                  Access
                </li>
                <li className="flex items-center gap-4 text-2xl text-sky-300 font-bold">
                  <ShieldCheck className="w-8 h-8 text-emerald-400" />
                  Future Value
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 w-full">
              <div className="aspect-square rounded-full border border-sky-500/20 bg-sky-900/10 flex items-center justify-center p-12 relative shadow-[0_0_50px_rgba(56,189,248,0.1)] backdrop-blur-md">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.2)_0%,transparent_70%)]"></div>
                <Logo animate={true} className="w-full h-full opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Final CTA */}
      <section className="py-32 relative text-center">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <h2 className="text-sm font-mono text-cyan-400 tracking-widest uppercase mb-6 drop-shadow-md">// Global Initiative</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 font-display">The Vision</h3>
            <p className="text-xl text-slate-300 leading-relaxed mb-12 border-b border-white/10 pb-12 w-full">
              To build a globally accessible, AI-powered smart city ecosystem where ownership, access, and investment are redefined through blockchain technology.
            </p>
            <div className="p-8 border border-amber-500/30 bg-amber-500/5 rounded-2xl backdrop-blur-md mb-12 shadow-[0_0_30px_rgba(245,158,11,0.05)] w-full text-left">
              <div className="flex items-start gap-4">
                <span className="text-2xl mt-1">⚠️</span>
                <div>
                  <strong className="text-amber-400 block mb-2 font-mono text-sm tracking-wider uppercase">Important Note</strong>
                  <p className="text-slate-300 leading-relaxed">
                    Token ownership represents digital exposure to platform-managed assets and may include associated financial obligations depending on participation method.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full mt-4">
              <a 
                href="https://thirdweb.com/base/0xebb52d0e72160a330086Be0fdD952d02eD65dFcA" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-10 py-5 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold rounded-lg hover:from-cyan-300 hover:to-blue-400 transition-all flex items-center justify-center w-full sm:w-auto text-xl shadow-[0_0_30px_rgba(6,182,212,0.4)] transform hover:-translate-y-1"
              >
                Buy Tokens
              </a>
              <div className="flex flex-col items-center w-full sm:w-auto">
                <button 
                  onClick={() => setIsCreditModalOpen(true)} 
                  className="px-10 py-5 bg-transparent border border-emerald-400/50 text-emerald-300 hover:bg-emerald-900/40 hover:text-white font-bold rounded-lg transition-all flex items-center justify-center w-full text-xl shadow-[0_0_20px_rgba(16,185,129,0.1)] transform hover:-translate-y-1"
                >
                  Buy With Credit
                </button>
                <span className="text-emerald-400/60 text-xs mt-3 font-mono tracking-widest uppercase text-center">Credit access currently in beta</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Credit Form Modal */}
      <AnimatePresence>
        {isCreditModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-slate-900 border border-white/10 p-8 rounded-2xl w-full max-w-lg shadow-2xl relative"
            >
              <button 
                onClick={() => setIsCreditModalOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white p-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>

              <h3 className="text-2xl font-bold text-white mb-2 font-display">Apply for Credit Access</h3>
              <p className="text-emerald-400 text-sm mb-6 font-mono uppercase tracking-wider">Beta Phase Allocation</p>

              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Application submitted. We will contact you soon."); setIsCreditModalOpen(false); }}>
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">Email Address</label>
                  <input type="email" required className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-colors" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">Wallet Address</label>
                  <input type="text" required className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-colors" placeholder="0x..." />
                </div>
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">Requested Amount (Tokens)</label>
                  <input type="number" required min="100" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-colors" placeholder="0.00" />
                </div>
                <button type="submit" className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-lg mt-6 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all transform hover:-translate-y-1">
                  Submit Request
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
