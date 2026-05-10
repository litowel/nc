import { motion } from 'motion/react';
import { Zap, Building2, Globe2, Home, Network } from 'lucide-react';

const pillars = [
  {
    icon: <Building2 className="w-8 h-8 text-white" />,
    title: "AI Governed Smart Cities",
    description: "AI systems optimizing traffic, utilities, public safety, emergency response, resource allocation, and autonomous mobility.",
    gradient: "from-blue-500 via-cyan-400 to-teal-400",
    shadow: "shadow-[0_0_30px_rgba(56,189,248,0.3)]",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=800" // Smart City
  },
  {
    icon: <Zap className="w-8 h-8 text-white" />,
    title: "Planetary Clean Energy",
    description: "Global renewable systems including solar, wind, geothermal, fusion-ready grids, HVDC supergrids, and decentralized energy storage.",
    gradient: "from-fuchsia-500 via-purple-500 to-indigo-500",
    shadow: "shadow-[0_0_30px_rgba(168,85,247,0.3)]",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800" // Wind/Energy
  },
  {
    icon: <Network className="w-8 h-8 text-white" />,
    title: "Tokenized Infrastructure",
    description: "Blockchain-based ownership systems for housing, infrastructure, logistics, energy systems, and smart city ecosystems.",
    gradient: "from-emerald-400 via-green-500 to-teal-500",
    shadow: "shadow-[0_0_30px_rgba(16,185,129,0.3)]",
    image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&q=80&w=800" // Orbit/Globe  
  },
  {
    icon: <Globe2 className="w-8 h-8 text-white" />,
    title: "Autonomous Transportation",
    description: "Integrated systems: self-driving vehicles, aerial mobility, AI traffic optimization, smart ports, autonomous logistics, future hyperloop systems.",
    gradient: "from-orange-500 via-red-500 to-rose-500",
    shadow: "shadow-[0_0_30px_rgba(249,115,22,0.3)]",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800" // abstract flowing Tech
  },
  {
    icon: <Home className="w-8 h-8 text-white" />,
    title: "Sustainable Human Habitats",
    description: "Future urban systems: vertical cities, modular housing, floating districts, ecological smart infrastructure, ocean-based urban expansion.",
    gradient: "from-sky-400 via-blue-500 to-indigo-500",
    shadow: "shadow-[0_0_30px_rgba(59,130,246,0.3)]",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" // Architecture
  }
];

export default function CorePillars() {
  return (
    <section className="py-32 relative bg-[#020617] overflow-hidden">
      {/* Visual Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2000&auto=format&fit=crop"
          alt="Smart city architecture background"
          className="w-full h-full object-cover opacity-10 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-[#020617]"></div>
      </div>

      {/* Colorful Background Blurs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-600/20 rounded-full blur-[150px] mix-blend-screen"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full">
        <div className="mb-20 text-center w-full">
          <h2 className="text-sm font-bold text-cyan-400 tracking-widest uppercase mb-4 font-mono">// 01. The Foundation</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-wider font-display">The Five Pillars</h3>
          <p className="text-slate-300 max-w-3xl mx-auto text-xl leading-relaxed">
            NEXUS CIVITAS is built on a foundation of five interconnected systems, designed to operate autonomously and scale globally for the modernization of human civilization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center max-w-7xl mx-auto">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`p-[2px] rounded-3xl bg-gradient-to-br ${pillar.gradient} ${pillar.shadow} group relative overflow-hidden ${
                index === pillars.length - 1 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''
              }`}
            >
              <div className="relative h-full w-full bg-[#020617]/90 backdrop-blur-xl rounded-[22px] p-8 overflow-hidden">
                {/* Background Image for Card */}
                <div 
                  className="absolute inset-0 w-full h-full opacity-30 group-hover:opacity-70 transition-opacity duration-700 mix-blend-overlay group-hover:scale-110 transition-transform"
                  style={{
                    backgroundImage: `url(${pillar.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                ></div>
                
                {/* Overlay gradient to keep text readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent"></div>

                <div className="relative z-10 h-full flex flex-col transition-transform duration-500 group-hover:-translate-y-2">
                  <div className={`mb-8 w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.1)] transform group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-500`}>
                    {pillar.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4 font-display uppercase tracking-wide">{pillar.title}</h4>
                  <p className="text-slate-300 text-base leading-relaxed mix-blend-screen drop-shadow-md">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
