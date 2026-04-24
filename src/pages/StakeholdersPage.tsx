import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Globe2, Building2, Landmark, CheckCircle2 } from 'lucide-react';
import { stakeholdersData } from '../data/stakeholders';

export default function StakeholdersPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0f172a] relative overflow-hidden pt-32 pb-32">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-600/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm mb-6">
              <Globe2 className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-bold text-blue-300 tracking-widest uppercase">Global Alignment</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Proposed <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Stakeholders</span>
            </h1>
            <p className="text-slate-300 max-w-4xl mx-auto text-xl leading-relaxed">
              Transitioning to a Type I Planetary Civilization requires unprecedented global unity. These are the proposed sovereign, diplomatic, and corporate partners whose immense scale and vision align with universal peace, free living, and human progress.
            </p>
          </motion.div>
        </div>

        {/* 20 Mega Companies / Diplomatic */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <Building2 className="w-10 h-10 text-cyan-400" />
            <h2 className="text-4xl font-bold text-white tracking-tight">20 Diplomatic & Mega-Corporate Partners</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stakeholdersData.megaDiplomaticAndCompanies.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 10) * 0.05 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
              >
                <h3 className="text-xl font-bold text-white mb-3 flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 group-hover:scale-110 transition-transform" />
                  {item.title}
                </h3>
                <p className="text-slate-300 pl-9 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Continents & Organizations */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <Landmark className="w-10 h-10 text-emerald-400" />
            <h2 className="text-4xl font-bold text-white tracking-tight">Continental Coalitions</h2>
          </div>
          <p className="text-slate-400 mb-12 text-lg max-w-3xl">
            We propose massive global cooperation encompassing all nations. Each continent brings exactly 10 pivotal organizational stakeholders to the table to ensure absolutely no region or culture is left behind in the prosperity transition.
          </p>

          <div className="space-y-12">
            {stakeholdersData.continents.map((continent, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-sm"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mb-4">{continent.name}</h3>
                    <p className="text-white/90 text-lg mb-6 leading-relaxed">{continent.description}</p>
                    <div className="px-5 py-4 bg-white/5 rounded-xl border border-white/10">
                      <p className="text-sm text-slate-300 italic">
                        {continent.countries}
                      </p>
                    </div>
                  </div>
                  
                  <div className="lg:w-2/3">
                    <h4 className="text-sm uppercase tracking-widest text-slate-500 font-bold mb-6">Proposed Organizational Pillars</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {continent.orgs.map((org, oIdx) => (
                        <div key={oIdx} className="px-4 py-3 bg-white/5 rounded-lg border border-white/10 text-slate-200 text-sm font-medium hover:border-blue-500/50 hover:bg-blue-500/10 transition-colors">
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
