import { motion } from 'motion/react';
import { Globe, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

const systems = [
  { id: "01", title: "Global Energy Grid", desc: "Sharing clean energy across the entire world so no country ever runs out of power.", benefit: "No more power outages, and 100% clean energy for everyone.", color: "from-blue-500 to-cyan-400", image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800" },
  { id: "02", title: "Smart Supply Chains", desc: "Using smart computers to move food and goods perfectly without wasting anything.", benefit: "Stops food waste and lowers the cost of living globally.", color: "from-purple-500 to-pink-500", image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800" },
  { id: "03", title: "Weather Protection Shield", desc: "Building giant structures to protect our coasts from bad weather and floods.", benefit: "Saves coastal cities from rising sea levels and deadly storms.", color: "from-emerald-500 to-teal-400", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800" },
  { id: "04", title: "Unlimited Clean Power", desc: "Creating safe fusion energy that works like a tiny sun and never runs out.", benefit: "Replaces all dirty fossil fuels forever.", color: "from-orange-500 to-yellow-400", image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=800" },
  { id: "05", title: "Giant Vertical Farms", desc: "Building high-tech towers that grow fresh food indoors all year round.", benefit: "Ends world hunger and gives farmland back to nature.", color: "from-green-500 to-emerald-400", image: "https://images.unsplash.com/photo-1530836369250-ef71a35921bc?auto=format&fit=crop&q=80&w=800" },
  { id: "06", title: "Air Cleaners", desc: "Using huge machines to suck bad pollution right out of the sky.", benefit: "Stops climate change and gives us clean, healthy air to breathe.", color: "from-cyan-500 to-blue-500", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800" },
  { id: "07", title: "Super-Fast Trains", desc: "Vacuum tubes that let trains travel between countries in just a few hours.", benefit: "Makes global travel cheap, incredibly fast, and pollution-free.", color: "from-indigo-500 to-purple-500", image: "https://images.unsplash.com/photo-1549419131-7e8fc9098711?auto=format&fit=crop&q=80&w=800" },
  { id: "08", title: "Fair AI Helper", desc: "Smart computers that help governments make fair choices for their people.", benefit: "Stops corruption and makes sure everyone gets what they need.", color: "from-fuchsia-500 to-pink-500", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" },
  { id: "09", title: "Ocean Water Purifiers", desc: "Turning salty ocean water into fresh, clean drinking water for everyone.", benefit: "Ends water shortages and stops droughts everywhere.", color: "from-blue-600 to-indigo-400", image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800" },
  { id: "10", title: "Zero-Waste Recycling", desc: "Breaking down old trash completely to make brand new things.", benefit: "Cleans up our landfills and oceans completely.", color: "from-teal-500 to-green-400", image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800" },
  { id: "11", title: "Space Solar Power", desc: "Catching sunlight in space and sending it safely down to Earth.", benefit: "Provides free, endless energy even when it is dark outside.", color: "from-yellow-500 to-orange-500", image: "https://images.unsplash.com/photo-1508138221679-760a23a2285b?auto=format&fit=crop&q=80&w=800" },
  { id: "12", title: "Nature Medicine", desc: "Using biology to grow natural cures and safe materials instead of plastics.", benefit: "Cures diseases faster and stops plastic pollution.", color: "from-pink-500 to-rose-400", image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800" },
  { id: "13", title: "Safe Robot Mining", desc: "Sending robots to do the dangerous work of finding metals deep underground.", benefit: "Stops human suffering in mines and protects the earth's surface.", color: "from-slate-500 to-gray-400", image: "https://images.unsplash.com/photo-1485290334032-132d73ce96f1?auto=format&fit=crop&q=80&w=800" },
  { id: "14", title: "Underwater Cities", desc: "Building safe, beautiful places for people to live under the sea.", benefit: "Gives humans more room to live without destroying forests.", color: "from-cyan-600 to-blue-600", image: "https://images.unsplash.com/photo-1682687982501-1e58f8145380?auto=format&fit=crop&q=80&w=800" },
  { id: "15", title: "Unhackable Internet", desc: "Creating a global web that hackers cannot break into.", benefit: "Keeps everyone's private information and money completely safe.", color: "from-violet-500 to-fuchsia-400", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" },
  { id: "16", title: "Rain Makers", desc: "Using safe technology to bring rain to dry places that need it.", benefit: "Stops wildfires and turns dry deserts into green spaces.", color: "from-sky-500 to-indigo-500", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800" },
  { id: "17", title: "Robot Builders", desc: "Using swarms of flying drones to build houses quickly and safely.", benefit: "Ends homelessness by building cheap, safe homes very fast.", color: "from-amber-500 to-orange-400", image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=800" },
  { id: "18", title: "Earth Heat Power", desc: "Using the natural heat from deep underground to warm our cities.", benefit: "Provides free, clean heating for homes in cold countries.", color: "from-red-500 to-orange-500", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800" },
  { id: "19", title: "Super Learning VR", desc: "Virtual reality schools that make learning fun and easy for everyone.", benefit: "Gives every single child on Earth a world-class education.", color: "from-purple-600 to-indigo-600", image: "https://images.unsplash.com/photo-1531297172864-8ff13a1a3642?auto=format&fit=crop&q=80&w=800" },
  { id: "20", title: "Space Elevator", desc: "A safe, strong cable that lets us travel into space like riding an elevator.", benefit: "Makes exploring space cheap and accessible to all humanity.", color: "from-slate-300 to-slate-100", image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&q=80&w=800" }
];

export default function GlobalVision() {
  return (
    <section className="py-32 relative overflow-hidden bg-[#020617]">
      {/* Vibrant Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-fuchsia-600/20 rounded-full blur-[150px] mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-600/20 rounded-full blur-[150px] mix-blend-screen"></div>
        <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] bg-yellow-500/10 rounded-full blur-[120px] mix-blend-screen"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-bold text-purple-300 tracking-widest uppercase">The Core Vision</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Type I <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Civilization</span>
            </h2>
            <p className="text-slate-300 max-w-4xl mx-auto text-xl leading-relaxed mb-10">
              The main purpose of the entire project is to help solve major global problems and help the world become a Type 1 Civilization. NEXUS CIVITAS is designing the 20 core global systems needed to make the Earth clean, safe, and fair for everyone.
            </p>
            
            {/* $5.8 Trillion Highlight */}
            <div className="inline-block p-[2px] rounded-2xl bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 shadow-[0_0_40px_rgba(234,179,8,0.3)]">
              <div className="bg-[#020617] px-8 py-6 rounded-2xl backdrop-blur-xl">
                <div className="text-sm font-mono text-yellow-400 tracking-widest uppercase mb-2">Total Estimated Project Cost</div>
                <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-500">
                  $5.8 Trillion
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 20 Systems Horizontal Scroll / Carousel */}
        <div className="relative w-full pb-10">
          <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {systems.map((sys, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.05 }}
                className="min-w-[320px] md:min-w-[450px] h-[550px] snap-center relative rounded-3xl overflow-hidden group cursor-pointer border border-white/10 shadow-2xl"
              >
                {/* Background Image */}
                <img 
                  src={sys.image} 
                  alt={sys.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* Vibrant Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/70 to-[#020617] opacity-90`}></div>
                <div className={`absolute inset-0 bg-gradient-to-tr ${sys.color} opacity-40 mix-blend-overlay group-hover:opacity-60 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="text-6xl font-display font-bold text-white/20 mb-auto group-hover:text-white/40 transition-colors">
                    {sys.id}
                  </div>
                  
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <h4 className="text-3xl font-bold text-white mb-3 drop-shadow-lg">{sys.title}</h4>
                    <p className="text-slate-200 text-lg leading-relaxed drop-shadow-md mb-4">
                      {sys.desc}
                    </p>
                    
                    {/* Benefit Section (Reveals on Hover) */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs font-bold text-green-400 uppercase tracking-wider mb-1">Benefit for the World</div>
                          <div className="text-white text-sm leading-relaxed">{sys.benefit}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Animated line */}
                  <div className="w-0 h-1 bg-white mt-6 group-hover:w-full transition-all duration-700 ease-out"></div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Scroll Hint */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-full bg-gradient-to-l from-[#020617] to-transparent pointer-events-none flex items-center justify-end pr-4">
            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center animate-bounce border border-white/20">
              <ArrowRight className="text-white w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

