import { motion } from 'motion/react';
import { Zap, Building2, Globe2, Home, Droplets } from 'lucide-react';

const pillars = [
  {
    icon: <Zap className="w-8 h-8 text-blue-400" />,
    title: "Energy",
    description: "Decentralized microgrids, fusion-ready infrastructure, and 100% renewable baseloads."
  },
  {
    icon: <Building2 className="w-8 h-8 text-green-400" />,
    title: "Smart Cities",
    description: "AI-governed urban operating systems optimizing traffic, waste, and resource allocation in real-time."
  },
  {
    icon: <Globe2 className="w-8 h-8 text-purple-400" />,
    title: "Trade Corridors",
    description: "Autonomous logistics networks connecting deep-water ports to inland industrial hubs."
  },
  {
    icon: <Home className="w-8 h-8 text-orange-400" />,
    title: "Housing Systems",
    description: "Modular, 3D-printed habitats designed for rapid deployment and extreme climate resilience."
  },
  {
    icon: <Droplets className="w-8 h-8 text-cyan-400" />,
    title: "Food & Water",
    description: "Vertical aeroponics and atmospheric water generation integrated directly into residential blocks."
  }
];

export default function CorePillars() {
  return (
    <section className="py-32 relative bg-nexus-surface border-y border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20">
          <h2 className="text-sm font-mono text-blue-400 tracking-widest uppercase mb-4">// 01. Core Infrastructure</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">The Five Pillars</h3>
          <p className="text-slate-400 max-w-2xl text-lg">
            NEXUS CIVITAS is built on a foundation of five interconnected systems, designed to operate autonomously and scale globally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 border border-white/10 bg-black/20 hover:bg-white/[0.02] transition-colors group relative overflow-hidden"
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="mb-6 p-4 bg-white/5 inline-block rounded-lg group-hover:scale-110 transition-transform duration-500">
                {pillar.icon}
              </div>
              <h4 className="text-2xl font-bold text-white mb-4 font-display">{pillar.title}</h4>
              <p className="text-slate-400 leading-relaxed">
                {pillar.description}
              </p>
              
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/20 opacity-0 group-hover:opacity-100 transition-opacity m-4"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
