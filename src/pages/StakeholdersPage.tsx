import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Globe2, Building2, Landmark, CheckCircle2 } from 'lucide-react';
import { stakeholdersData } from '../data/stakeholders';

export default function StakeholdersPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] relative overflow-hidden pt-32 pb-32 font-sans">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-600/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full max-w-7xl">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm mb-6 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <Globe2 className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-bold text-cyan-300 tracking-widest uppercase font-mono">Global Alignment</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight uppercase font-display">
              Proposed <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">Stakeholders</span>
            </h1>
            <p className="text-slate-300 max-w-4xl mx-auto text-xl leading-relaxed">
              Transitioning to a Type I Planetary Civilization requires unprecedented global unity. These are the proposed sovereign, diplomatic, and corporate partners whose immense scale and vision align with universal civilization scaling and human progress.
            </p>
          </motion.div>
        </div>

        {/* 20 Mega Companies / Diplomatic */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <Building2 className="w-10 h-10 text-cyan-400" />
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight uppercase font-display">20 Diplomatic & Mega-Corporate Partners</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stakeholdersData.megaDiplomaticAndCompanies.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min((idx % 10) * 0.05, 0.5) }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] group"
              >
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3 uppercase tracking-wide">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 shrink-0 group-hover:scale-110 transition-transform" />
                  {item.title}
                </h3>
                <p className="text-slate-400 pl-9 leading-relaxed font-mono text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Continents & Organizations */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <Landmark className="w-10 h-10 text-blue-400" />
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight uppercase font-display">Continental Coalitions</h2>
          </div>
          <p className="text-slate-400 mb-12 text-lg max-w-3xl leading-relaxed">
            We propose massive global cooperation encompassing all nations. Each continent brings exactly 10 pivotal organizational stakeholders to the table to ensure strictly distributed global representation.
          </p>

          <div className="space-y-12">
            {stakeholdersData.continents.map((continent, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[#0f172a]/80 to-[#020617]/80 border border-white/10 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.5)]"
              >
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                  <div className="lg:w-1/3">
                    <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4 uppercase tracking-wide font-display">{continent.name}</h3>
                    <p className="text-slate-300 text-base mb-6 leading-relaxed">{continent.description}</p>
                    <div className="px-5 py-4 bg-[#020617]/50 rounded-xl border border-white/5">
                      <p className="text-xs text-slate-400 font-mono leading-relaxed">
                        {continent.countries}
                      </p>
                    </div>
                  </div>
                  
                  <div className="lg:w-2/3">
                    <h4 className="text-xs uppercase tracking-widest text-cyan-500 font-bold mb-6 font-mono">Proposed Organizational Pillars</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {continent.orgs.map((org, oIdx) => (
                        <div key={oIdx} className="px-4 py-3 bg-white/5 rounded-lg border border-white/5 text-slate-300 text-xs font-mono tracking-wide hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-colors shadow-sm">
                          {org}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}