import { motion } from 'motion/react';
import { Terminal, Code2, Database, Network } from 'lucide-react';

export default function TechLayer() {
  const features = [
    { title: "AI Governance", desc: "City-scale algorithms managing resource distribution, traffic flow, and emergency response in milliseconds.", icon: <Database className="w-5 h-5 text-fuchsia-400" /> },
    { title: "Smart Grids", desc: "Self-healing energy networks that dynamically route power from decentralized renewable sources.", icon: <Network className="w-5 h-5 text-cyan-400" /> },
    { title: "Modular Construction", desc: "Automated fabrication of standardized building components, reducing construction time by 70%.", icon: <Code2 className="w-5 h-5 text-yellow-400" /> },
    { title: "Autonomous Logistics", desc: "Underground and aerial drone networks handling 100% of last-mile delivery and waste removal.", icon: <Terminal className="w-5 h-5 text-green-400" /> }
  ];

  return (
    <section className="py-32 relative bg-[#020617] overflow-hidden">
      {/* Visual Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
          alt="Cyber security data background"
          className="w-full h-full object-cover opacity-10 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/90 via-[#020617]/80 to-[#020617]"></div>
      </div>

      {/* Colorful Background Blurs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[50%] left-[20%] w-[40%] h-[40%] bg-cyan-600/10 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[30%] h-[30%] bg-fuchsia-600/10 rounded-full blur-[100px] mix-blend-screen"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 tracking-widest uppercase mb-4">// 05. Software</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-white mb-6">The Technology Layer</h3>
            <p className="text-slate-300 text-xl mb-12 leading-relaxed">
              Infrastructure is no longer just concrete and steel. NEXUS CIVITAS is built on a proprietary software stack that turns physical cities into programmable platforms.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feat, idx) => (
                <div key={idx} className="p-8 border border-white/10 bg-gradient-to-br from-white/5 to-transparent rounded-3xl hover:border-cyan-500/30 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(6,182,212,0.1)]">
                  <div className="w-10 h-10 rounded-lg bg-black/50 flex items-center justify-center mb-4 border border-white/5 group-hover:border-cyan-500/30 transition-colors">
                    {feat.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{feat.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Code/Data Visualization */}
          <div className="relative h-full min-h-[500px] border border-white/10 bg-[#050505] rounded-3xl p-8 font-mono text-xs sm:text-sm overflow-hidden flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-fuchsia-500/5 pointer-events-none"></div>
            
            <div className="flex gap-2 mb-6 border-b border-white/10 pb-4 relative z-10">
              <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
              <span className="ml-4 text-slate-500 font-bold">nexus_os_kernel.rs</span>
            </div>
            
            <div className="text-slate-300 flex-1 overflow-hidden relative z-10">
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: -300 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="space-y-3 text-[13px] leading-relaxed"
              >
                <p><span className="text-fuchsia-400">fn</span> <span className="text-cyan-400">optimize_grid</span>(sector: <span className="text-yellow-400">&Sector</span>) -{'>'} <span className="text-yellow-400">Result</span>&lt;(), Error&gt; {'{'}</p>
                <p className="pl-4"><span className="text-slate-500 italic">// Calculate current load across all nodes</span></p>
                <p className="pl-4"><span className="text-fuchsia-400">let</span> load = sector.get_current_load();</p>
                <p className="pl-4"><span className="text-fuchsia-400">let</span> capacity = sector.get_renewable_capacity();</p>
                <br/>
                <p className="pl-4"><span className="text-fuchsia-400">if</span> load {'>'} capacity {'{'}</p>
                <p className="pl-8"><span className="text-slate-500 italic">// Route power from adjacent sectors</span></p>
                <p className="pl-8"><span className="text-fuchsia-400">await</span> grid_router::<span className="text-cyan-400">balance_load</span>(sector.id);</p>
                <p className="pl-4">{'}'} <span className="text-fuchsia-400">else</span> {'{'}</p>
                <p className="pl-8"><span className="text-slate-500 italic">// Store excess in thermal batteries</span></p>
                <p className="pl-8"><span className="text-fuchsia-400">await</span> storage::<span className="text-cyan-400">charge</span>(capacity - load);</p>
                <p className="pl-4">{'}'}</p>
                <br/>
                <p className="pl-4"><span className="text-cyan-400">Ok</span>(())</p>
                <p>{'}'}</p>
                <br/>
                <p><span className="text-fuchsia-400">fn</span> <span className="text-cyan-400">route_autonomous_fleet</span>() {'{'}</p>
                <p className="pl-4"><span className="text-slate-500 italic">// Initiating traffic optimization matrix...</span></p>
                <p className="pl-4"><span className="text-fuchsia-400">let</span> <span className="text-white">active_drones</span> = fleet.get_active();</p>
                <p className="pl-4"><span className="text-fuchsia-400">for</span> drone <span className="text-fuchsia-400">in</span> active_drones {'{'}</p>
                <p className="pl-8">drone.<span className="text-cyan-400">update_trajectory</span>(weather_data);</p>
                <p className="pl-4">{'}'}</p>
                <p>{'}'}</p>
              </motion.div>
              
              {/* Fade out at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
