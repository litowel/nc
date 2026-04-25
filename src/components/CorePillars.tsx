import { motion } from 'motion/react';
import { Zap, Building2, Globe2, Home, Droplets } from 'lucide-react';

const pillars = [
  {
    icon: <Zap className="w-8 h-8 text-white" />,
    title: "Energy",
    description: "Decentralized microgrids, fusion-ready infrastructure, and 100% renewable baseloads.",
    gradient: "from-blue-500 via-cyan-400 to-teal-400",
    shadow: "shadow-[0_0_30px_rgba(56,189,248,0.3)]",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800" // Wind/Energy
  },
  {
    icon: <Building2 className="w-8 h-8 text-white" />,
    title: "Smart Cities",
    description: "AI-governed urban operating systems optimizing traffic, waste, and resource allocation in real-time.",
    gradient: "from-fuchsia-500 via-purple-500 to-indigo-500",
    shadow: "shadow-[0_0_30px_rgba(168,85,247,0.3)]",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=800" // Smart City
  },
  {
    icon: <Globe2 className="w-8 h-8 text-white" />,
    title: "Trade Corridors",
    description: "Autonomous logistics networks connecting deep-water ports to inland industrial hubs.",
    gradient: "from-orange-500 via-red-500 to-rose-500",
    shadow: "shadow-[0_0_30px_rgba(249,115,22,0.3)]",
    image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&q=80&w=800" // Orbit/Globe
  },
  {
    icon: <Home className="w-8 h-8 text-white" />,
    title: "Housing Systems",
    description: "Modular, 3D-printed habitats designed for rapid deployment and extreme climate resilience.",
    gradient: "from-emerald-400 via-green-500 to-teal-500",
    shadow: "shadow-[0_0_30px_rgba(16,185,129,0.3)]",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" // Architecture
  },
  {
    icon: <Droplets className="w-8 h-8 text-white" />,
    title: "Food & Water",
    description: "Vertical aeroponics and atmospheric water generation integrated directly into residential blocks.",
    gradient: "from-sky-400 via-blue-500 to-indigo-500",
    shadow: "shadow-[0_0_30px_rgba(59,130,246,0.3)]",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800" // abstract flowing Tech
  }
];

export default function CorePillars() {
  return (
    <section className="py-32 relative bg-[#020617] overflow-hidden">
      {/* Colorful Background Blurs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[150px] mix-blend-screen"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20 text-center">
          <h2 className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 tracking-widest uppercase mb-4">// 01. Core Infrastructure</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-white mb-6">The Five Pillars</h3>
          <p className="text-slate-300 max-w-3xl mx-auto text-xl leading-relaxed">
            NEXUS CIVITAS is built on a foundation of five interconnected systems, designed to operate autonomously and scale globally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`p-[2px] rounded-3xl bg-gradient-to-br ${pillar.gradient} ${pillar.shadow} group relative overflow-hidden`}
            >
              <div className="relative h-full w-full bg-[#020617]/90 backdrop-blur-xl rounded-[22px] p-8 overflow-hidden">
                {/* Background Image for Card */}
                <div 
                  className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-30 transition-opacity duration-700 mix-blend-overlay"
                  style={{
                    backgroundImage: `url(${pillar.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                ></div>
                
                {/* Overlay gradient to keep text readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="relative z-10 h-full flex flex-col transition-transform duration-500 group-hover:translate-y-[-5px]">
                  <div className={`mb-8 w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    {pillar.icon}
                  </div>
                  <h4 className="text-3xl font-bold text-white mb-4 font-display">{pillar.title}</h4>
                  <p className="text-slate-300 text-lg leading-relaxed mix-blend-screen drop-shadow-md">
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
