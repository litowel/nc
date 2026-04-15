import { motion } from 'motion/react';
import { Globe, Network, Shield, Zap } from 'lucide-react';

export default function GlobalVision() {
  const systems = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-[#030712] to-[#030712] z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm font-mono text-purple-400 tracking-widest uppercase mb-4">// 04. Expansion</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-white mb-6">Type I Civilization</h3>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
            The transition to a Type I civilization requires planetary-scale engineering. NEXUS CIVITAS is designing the 20 core global systems needed to harness the Earth's energy and resources sustainably.
          </p>
        </div>

        {/* Global Systems Grid */}
        <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-4 mb-20">
          {systems.map((sys, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="aspect-square border border-white/10 bg-white/5 flex items-center justify-center rounded-lg hover:bg-white/10 hover:border-blue-500/50 transition-all cursor-pointer group"
            >
              <span className="text-xs font-mono text-slate-500 group-hover:text-blue-400">SYS_{sys.toString().padStart(2, '0')}</span>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border-t border-white/10">
            <Globe className="w-8 h-8 text-blue-400 mb-6" />
            <h4 className="text-xl font-bold text-white mb-4">Planetary Grid</h4>
            <p className="text-slate-400 text-sm leading-relaxed">A unified, high-voltage direct current (HVDC) network distributing renewable energy across continents, eliminating regional deficits.</p>
          </div>
          <div className="p-8 border-t border-white/10">
            <Network className="w-8 h-8 text-purple-400 mb-6" />
            <h4 className="text-xl font-bold text-white mb-4">Neural Logistics</h4>
            <p className="text-slate-400 text-sm leading-relaxed">Hyper-connected supply chains managed by decentralized AI, reducing global waste by 40% through predictive routing.</p>
          </div>
          <div className="p-8 border-t border-white/10">
            <Shield className="w-8 h-8 text-green-400 mb-6" />
            <h4 className="text-xl font-bold text-white mb-4">Climate Shield</h4>
            <p className="text-slate-400 text-sm leading-relaxed">Macro-engineering projects designed to stabilize local climates and protect coastal infrastructure from rising sea levels.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
