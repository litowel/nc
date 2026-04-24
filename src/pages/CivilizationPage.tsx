import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, CheckCircle2, Hexagon, ArrowRight, HeartHandshake, Home, ChevronDown } from 'lucide-react';
import { civilizationData } from '../data/civilizations';

export default function CivilizationPage() {
  const { typeId } = useParams<{ typeId: string }>();
  
  const civ = civilizationData.find(c => c.id === typeId) || civilizationData[0];
  const [expandedInitiative, setExpandedInitiative] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [typeId]);

  return (
    <div className={`min-h-screen ${civ.bgClass} relative overflow-hidden pt-24 pb-32 transition-colors duration-1000`}>
      {/* Dynamic Thematic Background Image/Overlay */}
      <div className="absolute inset-0 z-0">
         <img 
            src={`https://picsum.photos/seed/${civ.seed}/1920/1080`} 
            alt={civ.name}
            className="w-full h-full object-cover opacity-10 object-center"
            referrerPolicy="no-referrer"
         />
         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f172a]/80 to-[#0f172a]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <Link to="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8">
            <Home className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-widest">Back to Hub</span>
        </Link>
        
        <div className="text-center mb-24 mt-8 relative">
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-6 ${civ.bgGlow}`}>
              <HeartHandshake className="w-4 h-4 text-white" />
              <span className="text-sm font-bold text-white tracking-widest uppercase">Universal Interconnectivity</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight drop-shadow-2xl">
              {civ.type} <span className={`text-transparent bg-clip-text bg-gradient-to-r ${civ.color}`}>Civilization</span>
            </h1>
            <h2 className="text-3xl md:text-5xl font-light text-white/90 mb-8 tracking-wide drop-shadow-xl">
                {civ.name}
            </h2>
            <div className="inline-block px-8 py-4 rounded-xl bg-white/10 border border-white/20 text-white font-serif text-xl max-w-3xl mx-auto shadow-xl backdrop-blur-md leading-relaxed">
              {civ.summary}
            </div>
          </motion.div>
        </div>

        <div className="space-y-16">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* 10 Understandings Area */}
                <div className="lg:col-span-5 p-8 border border-white/20 bg-[#0f172a]/80 backdrop-blur-2xl rounded-3xl group transition-all duration-500 hover:bg-[#0f172a]/90 shadow-2xl h-fit">
                  <h5 className="text-3xl font-bold text-white mb-8 flex items-center gap-3 drop-shadow">
                    <Sparkles className="w-8 h-8 text-yellow-400" />
                    Conscious Understandings
                  </h5>
                  <ul className="space-y-6">
                    {civ.understandings.map((understanding, uIdx) => (
                      <li key={uIdx} className="flex items-start gap-4">
                        <CheckCircle2 className={`w-6 h-6 shrink-0 mt-0.5 text-blue-400`} />
                        <span className="text-white text-base md:text-lg leading-relaxed shadow-sm drop-shadow">
                          {understanding}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Cost Box moved under Understandings to save space */}
                  <div className="mt-12 flex flex-col items-start gap-4 bg-white/5 border border-white/20 px-8 py-6 rounded-2xl backdrop-blur-md">
                      <span className="text-white/80 text-sm uppercase tracking-widest font-bold">Estimated Phase Cost:</span>
                      <span className={`text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${civ.color} drop-shadow-2xl`}>
                        {civ.cost}
                      </span>
                  </div>
                </div>

                {/* 20 Mega-Initiatives Area */}
                <div className={`lg:col-span-7 p-8 flex flex-col border border-white/20 bg-[#0f172a]/80 backdrop-blur-2xl rounded-3xl transition-all duration-500 hover:border-white/40 shadow-2xl ${civ.borderGlow}`}>
                  <h5 className="text-3xl font-bold text-white mb-8 flex items-center gap-3 drop-shadow">
                    <Hexagon className="w-8 h-8 text-cyan-400" />
                    20 Interconnected Mega-Initiatives
                  </h5>
                  
                  <div className="grid grid-cols-1 gap-4 flex-1 mb-8 max-h-[850px] overflow-y-auto pr-4 custom-scrollbar">
                    {civ.initiatives.map((initiative: any, iIdx) => {
                      const isExpanded = expandedInitiative === iIdx;
                      return (
                        <div 
                           key={iIdx} 
                           onClick={() => setExpandedInitiative(isExpanded ? null : iIdx)}
                           className="group/item flex flex-col gap-3 p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-pointer overflow-hidden"
                        >
                          <div className="flex items-center justify-between gap-3">
                             <div className="flex items-center gap-3">
                               <div className="text-sm font-mono text-white/50 w-6 group-hover/item:text-white transition-colors">{String(iIdx + 1).padStart(2, '0')}</div>
                               <div className="text-white text-lg font-bold transition-colors drop-shadow-md group-hover/item:text-blue-300">{initiative.title}</div>
                             </div>
                             <ChevronDown className={`w-5 h-5 text-white/50 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-white' : ''}`} />
                          </div>
                          
                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div 
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="pl-9 space-y-3 pt-2"
                              >
                                 <p className="text-slate-200 text-sm leading-relaxed drop-shadow-sm">
                                   <strong className="text-emerald-400 font-bold block mb-1">Benefits:</strong> 
                                   <span className="text-white/90">{initiative.benefits}</span>
                                 </p>
                                 <p className="text-blue-300 text-sm font-medium drop-shadow-sm">
                                   <strong className="text-blue-400 font-bold block mb-1">Proposed Partners:</strong> 
                                   <span className="text-white/80">{initiative.partners}</span>
                                 </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-auto border-t border-white/20 pt-8 flex justify-end">
                    <button className={`flex items-center gap-3 px-8 py-4 rounded-full text-white font-bold bg-gradient-to-r ${civ.color} hover:opacity-90 transition-opacity shadow-[0_0_40px_rgba(255,255,255,0.2)] text-lg`}>
                      Access Blueprints <ArrowRight className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
        </div>
      </div>
    </div>
  );
}
