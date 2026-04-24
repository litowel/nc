import { motion } from 'motion/react';
import { HeartHandshake, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { civilizationData } from '../data/civilizations';

export default function CivilizationStages() {
  return (
    <section className="py-32 relative bg-[#0f172a] overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[150px] mix-blend-screen"></div>
        <div className="absolute top-[40%] right-[-10%] w-[30%] h-[30%] bg-purple-600/10 rounded-full blur-[150px] mix-blend-screen"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm mb-6">
              <HeartHandshake className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-bold text-purple-300 tracking-widest uppercase">Universal Interconnectivity</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              The Evolution of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Consciousness</span>
            </h2>
            <p className="text-slate-300 max-w-4xl mx-auto text-xl leading-relaxed">
              Ascending the Kardashev scale is not merely an infrastructure movement; it is a global and universal initiative for peace, progress, and interconnected consciousness. Explore our dedicated evolutionary roadmaps.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {civilizationData.map((civ, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={`/civilization/${civ.id}`} className="block h-full group">
                <div className="relative h-full p-8 border border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl transition-all duration-500 hover:scale-105 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl overflow-hidden flex flex-col justify-between">
                  {/* Subtle Background Glow per Type */}
                  <div className={`absolute top-0 right-0 w-32 h-32 blur-3xl opacity-20 group-hover:opacity-60 transition-opacity ${civ.bgGlow}`}></div>

                  <div>
                    <h3 className={`text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${civ.color} tracking-widest uppercase mb-2`}>
                      {civ.type}
                    </h3>
                    <h4 className="text-3xl font-bold text-white mb-4 tracking-tight drop-shadow-md">{civ.name}</h4>
                    <p className="text-slate-300 mb-8">
                      {civ.desc}
                    </p>
                  </div>

                  <div className="mt-auto">
                    <div className="text-sm text-slate-400 uppercase tracking-widest font-mono mb-2">Cost</div>
                    <div className="text-2xl font-bold text-white mb-6 drop-shadow-lg">{civ.cost}</div>

                    <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-bold bg-gradient-to-r ${civ.color} shadow-lg opacity-90 group-hover:opacity-100 transition-opacity w-full justify-between`}>
                      Enter Portal <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
