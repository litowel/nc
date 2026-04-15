import { motion } from 'motion/react';
import { Play, Maximize, Layers, Building, Globe } from 'lucide-react';

const scales = [
  {
    id: "01",
    title: "Modular Block",
    subtitle: "200m × 250m Elevated Platform",
    icon: <Building className="w-6 h-6 text-blue-400" />,
    image: "https://picsum.photos/seed/nexusblock/1920/1080",
    description: "A cinematic 3D architectural visualization of an elevated modular city block in Ghana, built on a raised steel platform 8–15 meters above ground. Featuring 8–12 residential towers arranged on a dense but orderly grid, with visible steel mega-columns, composite deck slabs, modular façade panels, rooftop greenery, schools, a clinic, retail blocks, and landscaped parks integrated into the platform. The ground level below remains open for circulation, utilities, and shaded public space.",
    camera: "Wide aerial drone shot at sunrise, descending toward the platform to reveal apartment modules, transport paths, water tanks, and active urban life.",
    mood: "Ambitious, practical, near-future, warm tropical light, soft haze."
  },
  {
    id: "02",
    title: "Integrated District",
    subtitle: "500m × 500m Urban Core",
    icon: <Layers className="w-6 h-6 text-green-400" />,
    image: "https://picsum.photos/seed/nexusdistrict/1920/1080",
    description: "A large-scale cinematic aerial visualization of an elevated district city in Ghana, organized as a fully integrated modular urban block. Showcasing 25–40 high-rise towers, interlinked elevated walkways, internal tram lines, EV road loops, parking decks, two hospitals, multiple schools, a university campus, retail cores, civic plazas, and dense green roof networks. The city sits on a reinforced steel platform system with visible structural rhythm and layered infrastructure.",
    camera: "Fly over the district at golden hour, transitioning into a smooth orbit around the central transit hub and civic core, revealing scale, density, and order.",
    mood: "Futuristic but believable, tropical vegetation, reflective glazing, clear separation of layers."
  },
  {
    id: "03",
    title: "Megacity Masterplan",
    subtitle: "1km × 1km Pilot City",
    icon: <Globe className="w-6 h-6 text-purple-400" />,
    image: "https://picsum.photos/seed/nexusmega/1920/1080",
    description: "An epic cinematic visualization of a 1km by 1km elevated pilot city in Ghana, presented as a vast modular megacity built from prefabricated steel, composite decks, and integrated urban systems. Featuring 80–150 towers of varying heights, a financial district, industrial zone, tech parks, hospitals, universities, schools, solar farms, battery storage facilities, vertical farms, transit corridors, and layered public terraces. A self-contained, systems-driven ecosystem.",
    camera: "High-altitude drone reveal above the megastructure, moving through different districts in a long continuous flight path: residential, transit hub, energy spine, agriculture, and CBD.",
    mood: "Dramatic sunrise lighting, atmospheric depth, epic scale of a future national infrastructure project."
  }
];

export default function Masterplan() {
  return (
    <section className="py-32 relative bg-[#020617] overflow-hidden">
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

        <div className="space-y-32">
          {scales.map((scale, index) => (
            <div key={scale.id} className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}>
              
              {/* Video/Image Container */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 !== 0 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-3/5 relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black">
                  {/* Image with overlay to make it look cinematic */}
                  <img 
                    src={scale.image} 
                    alt={scale.title} 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 group-hover:scale-105 transform"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/20 transition-all cursor-pointer shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                      <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                    </div>
                  </div>

                  {/* UI Overlay Elements */}
                  <div className="absolute top-6 left-6 flex items-center gap-3">
                    <div className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded text-xs font-mono text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                      REC
                    </div>
                    <div className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded text-xs font-mono text-slate-300">
                      4K // 60FPS
                    </div>
                  </div>
                  
                  <div className="absolute bottom-6 right-6">
                    <Maximize className="w-5 h-5 text-white/50 hover:text-white cursor-pointer transition-colors" />
                  </div>
                </div>
              </motion.div>

              {/* Text Content */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full lg:w-2/5"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl font-display font-bold text-white/10">{scale.id}</span>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      {scale.icon}
                      <h4 className="text-2xl font-bold text-white">{scale.title}</h4>
                    </div>
                    <p className="text-blue-400 font-mono text-sm tracking-wide">{scale.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-slate-300 leading-relaxed mb-8 text-lg">
                  {scale.description}
                </p>

                <div className="space-y-4">
                  <div className="p-4 border border-white/5 bg-white/[0.02] rounded-lg">
                    <h5 className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">Camera Direction</h5>
                    <p className="text-sm text-slate-400 leading-relaxed">{scale.camera}</p>
                  </div>
                  <div className="p-4 border border-white/5 bg-white/[0.02] rounded-lg">
                    <h5 className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">Atmosphere & Mood</h5>
                    <p className="text-sm text-slate-400 leading-relaxed">{scale.mood}</p>
                  </div>
                </div>
                
                <button className="mt-8 flex items-center gap-2 text-sm font-bold text-white hover:text-blue-400 transition-colors group">
                  VIEW FULL CONCEPT
                  <span className="w-6 h-[1px] bg-white group-hover:bg-blue-400 group-hover:w-10 transition-all"></span>
                </button>
              </motion.div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
