import { motion } from 'motion/react';
import { MapPin, Activity, Zap, Droplets, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: "01",
    title: "Ghana Pilot Corridor",
    location: "West Africa",
    status: "Phase 1 Active",
    desc: "The first operational node of the Nexus network. A high-speed, AI-managed corridor connecting the coastal capital to the inland resource hub.",
    stats: [
      { label: "Corridor Length", value: "250 KM" },
      { label: "Est. Cost", value: "$1.05B" },
      { label: "Focus", value: "Smart Cities" }
    ],
    icon: <MapPin className="w-6 h-6 text-green-400" />,
    color: "from-green-500 to-emerald-600",
    image: "https://images.unsplash.com/photo-1542361345-89e58247f2d5?q=80&w=2070&auto=format&fit=crop" // Coastal/City intersection
  },
  {
    id: "02",
    title: "Sahara Oasis Project",
    location: "North Africa",
    status: "Proposed",
    desc: "Massive ocean desalination hubs powering thousands of vertical farming towers to turn arid desert into a global food production powerhouse.",
    stats: [
      { label: "Area Covered", value: "10,000 KM²" },
      { label: "Est. Cost", value: "$4.2B" },
      { label: "Focus", value: "Food & Water" }
    ],
    icon: <Droplets className="w-6 h-6 text-blue-400" />,
    color: "from-blue-500 to-cyan-600",
    image: "https://images.unsplash.com/photo-1682687982501-1e58f8145380?q=80&w=2070&auto=format&fit=crop" // Desert Oasis
  },
  {
    id: "03",
    title: "Andes Energy Network",
    location: "South America",
    status: "Planning",
    desc: "Tapping into deep geothermal vents along the Andes mountains to provide infinite, free baseload power to five surrounding nations.",
    stats: [
      { label: "Power Output", value: "500 GW" },
      { label: "Est. Cost", value: "$2.8B" },
      { label: "Focus", value: "Clean Energy" }
    ],
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    color: "from-yellow-500 to-orange-600",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop" // Mountains Geothermal
  },
  {
    id: "04",
    title: "Pacific Clean Transit",
    location: "Southeast Asia",
    status: "Proposed",
    desc: "A network of underwater and floating vacuum-tube maglev trains connecting major island nations, eliminating short-haul flights.",
    stats: [
      { label: "Network Size", value: "4,500 KM" },
      { label: "Est. Cost", value: "$8.5B" },
      { label: "Focus", value: "Transport" }
    ],
    icon: <Activity className="w-6 h-6 text-purple-400" />,
    color: "from-purple-500 to-pink-600",
    image: "https://images.unsplash.com/photo-1549419131-7e8fc9098711?q=80&w=2070&auto=format&fit=crop" // Maglev train / ocean transit
  }
];

export default function ProposedProjects() {
  return (
    <section className="py-32 relative bg-[#020617] overflow-hidden">
      {/* Colorful Background Blurs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[30%] right-[-10%] w-[40%] h-[40%] bg-green-600/20 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[150px] mix-blend-screen"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 tracking-widest uppercase mb-4">// 03. Active & Proposed Deployments</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-white mb-6">Global Projects</h3>
          <p className="text-slate-300 max-w-3xl mx-auto text-xl leading-relaxed">
            From our active pilot in West Africa to massive proposed infrastructure overhauls across the globe, NEXUS CIVITAS is scaling the future.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden group shadow-2xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute inset-0 bg-gradient-to-tr ${project.color} opacity-30 mix-blend-overlay`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80"></div>
                
                {/* Status Badge */}
                <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${project.status.includes('Active') ? 'bg-green-400 animate-ping' : 'bg-yellow-400'}`}></div>
                  <span className="text-white text-xs font-bold uppercase tracking-wider">{project.status}</span>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg`}>
                    {project.icon}
                  </div>
                  <div>
                    <div className="text-slate-400 font-mono text-sm mb-1">{project.location}</div>
                    <h4 className="text-3xl md:text-4xl font-bold text-white">{project.title}</h4>
                  </div>
                </div>
                
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  {project.desc}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  {project.stats.map((stat, sIdx) => (
                    <div key={sIdx} className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                      <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">{stat.label}</div>
                      <div className="text-white font-bold text-xl">{stat.value}</div>
                    </div>
                  ))}
                </div>

                <button className="flex items-center gap-2 text-white font-bold hover:gap-4 transition-all group">
                  Explore Project Data <ArrowRight className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
