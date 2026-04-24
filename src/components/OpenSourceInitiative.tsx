import { motion } from 'motion/react';
import { Infinity, Network, Sparkles, BookOpen, Fingerprint, HeartHandshake } from 'lucide-react';

const corePillars = [
  {
    icon: <Network className="w-8 h-8 text-cyan-400" />,
    title: "Open-Source Extraterrestrial Technology",
    desc: "Democratizing universal advancements. Making safe ET technologies, zero-point energy, and consciousness-expanding tools unconditionally free and accessible to all lifeforms, bridging the gap between current science and cosmic boundless potential."
  },
  {
    icon: <HeartHandshake className="w-8 h-8 text-pink-400" />,
    title: "Universal Peace & Interconnectivity",
    desc: "Establishing deep, respectful connections across global and universal communities. Fostering a continuous exchange of positive energy, mutual understanding, and a shared operational framework dedicated to eternal peace."
  },
  {
    icon: <BookOpen className="w-8 h-8 text-amber-400" />,
    title: "Interplanetary Cultural Exchange",
    desc: "Bridging the universal divides between science, religion, art, and creativity. A harmonious exchange of living experiences and profound wisdom between humanity and extraterrestrial souls."
  },
  {
    icon: <Fingerprint className="w-8 h-8 text-purple-400" />,
    title: "Honoring Sentient Consciousness",
    desc: "Transitioning gracefully into a society that values the spiritual and conscious evolution of all living beings, ensuring that every soul, human or otherwise, is recognized, respected, and nurtured."
  }
];

export default function OpenSourceInitiative() {
  return (
    <section className="py-32 relative bg-[#020617] overflow-hidden border-t border-white/5">
      {/* Mystical Background Blurs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[20%] w-[60%] h-[60%] bg-blue-500/10 rounded-full blur-[180px] mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] right-[10%] w-[50%] h-[50%] bg-amber-500/10 rounded-full blur-[150px] mix-blend-screen"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm mb-6 shadow-[0_0_30px_rgba(6,182,212,0.2)]">
              <Infinity className="w-5 h-5 text-cyan-400" />
              <span className="text-sm font-bold text-cyan-300 tracking-widest uppercase">The Universal Open-Source Initiative</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              A Symphony of <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-500">Cosmic Consciousness</span>
            </h2>
            <p className="text-slate-300 max-w-4xl mx-auto text-xl leading-relaxed">
              We are actively creating open-source frameworks for peaceful, conscious living in harmony with humanity, extraterrestrial intelligence, and all souls. This is the democratized nexus of technology, science, religion, and boundless creativity. 
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {corePillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative p-1 rounded-3xl bg-gradient-to-br from-white/10 to-transparent hover:from-white/20 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl"></div>
              
              <div className="relative h-full bg-[#020617] rounded-[22px] p-8 md:p-10 border border-white/5 overflow-hidden">
                {/* Glow behind icon */}
                <div className="absolute top-10 left-10 w-20 h-20 bg-white/5 blur-2xl rounded-full"></div>
                
                <div className="mb-8 p-4 bg-white/5 inline-flex rounded-2xl border border-white/10 shrink-0">
                  {pillar.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                  {pillar.title}
                </h3>
                
                <p className="text-slate-400 text-lg leading-relaxed group-hover:text-slate-300 transition-colors">
                  {pillar.desc}
                </p>

                {/* Decorative particles */}
                <Sparkles className="absolute bottom-8 right-8 w-12 h-12 text-white/5 opacity-0 group-hover:opacity-100 transition-all duration-700 -rotate-12 scale-50 group-hover:scale-100" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Harmonious Statement */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            <div className="bg-[#020617] px-8 md:px-12 py-8 rounded-xl backdrop-blur-xl">
              <h4 className="text-2xl md:text-3xl font-light text-white mb-2 italic">
                "To make extraterrestrial technologies and consciousness <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">free of charge to all.</span>"
              </h4>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
