import { motion } from 'motion/react';
import { Layers, Building, Globe } from 'lucide-react';

const scales = [
  {
    id: "01",
    title: "Modular Block",
    subtitle: "200m × 250m Elevated Platform",
    icon: <Building className="w-6 h-6 text-blue-400" />,
    videoSrc: "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    poster: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070",
  },
  {
    id: "02",
    title: "Integrated District",
    subtitle: "500m × 500m Urban Core",
    icon: <Layers className="w-6 h-6 text-green-400" />,
    videoSrc: "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    poster: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=2070",
  },
  {
    id: "03",
    title: "Megacity Masterplan",
    subtitle: "1km × 1km Pilot City",
    icon: <Globe className="w-6 h-6 text-purple-400" />,
    videoSrc: "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    poster: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=2065",
  }
];

export default function Masterplan() {
  return (
    <section className="py-32 relative bg-[#020617] overflow-hidden border-y border-white/5">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-900/20 rounded-[100%] blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-mono text-blue-400 tracking-widest uppercase mb-4">// Cinematic Visualizations</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-white mb-6">Scale of Deployment</h3>
            <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
              Explore the phased expansion of the NEXUS CIVITAS initiative in Ghana, from a single modular block to a fully integrated megacity.
            </p>
          </motion.div>
        </div>

        <div className="space-y-40">
          {scales.map((scale, index) => (
            <div key={scale.id} className="flex flex-col gap-8">
              
              {/* Header */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex items-end justify-between border-b border-white/10 pb-6"
              >
                <div className="flex items-center gap-6">
                  <span className="text-6xl md:text-8xl font-display font-bold text-white/10">{scale.id}</span>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      {scale.icon}
                      <h4 className="text-3xl md:text-5xl font-bold text-white">{scale.title}</h4>
                    </div>
                    <p className="text-blue-400 font-mono text-lg tracking-wide">{scale.subtitle}</p>
                  </div>
                </div>
              </motion.div>

              {/* Video Player Container */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black shadow-[0_0_50px_rgba(0,0,0,0.5)] group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                
                <video 
                  className="relative w-full h-full object-cover z-10"
                  controls
                  poster={scale.poster}
                  preload="none"
                >
                  <source src={scale.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* UI Overlay Elements (visible before play) */}
                <div className="absolute top-6 left-6 flex items-center gap-3 z-20 pointer-events-none">
                  <div className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded text-xs font-mono text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    REC
                  </div>
                  <div className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded text-xs font-mono text-slate-300">
                    4K // 60FPS
                  </div>
                </div>
              </motion.div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

