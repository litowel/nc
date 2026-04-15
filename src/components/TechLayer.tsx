import { motion } from 'motion/react';

export default function TechLayer() {
  const features = [
    { title: "AI Governance", desc: "City-scale algorithms managing resource distribution, traffic flow, and emergency response in milliseconds." },
    { title: "Smart Grids", desc: "Self-healing energy networks that dynamically route power from decentralized renewable sources." },
    { title: "Modular Construction", desc: "Automated fabrication of standardized building components, reducing construction time by 70%." },
    { title: "Autonomous Logistics", desc: "Underground and aerial drone networks handling 100% of last-mile delivery and waste removal." }
  ];

  return (
    <section className="py-32 relative bg-nexus-surface border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-sm font-mono text-cyan-400 tracking-widest uppercase mb-4">// 05. Software</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">The Technology Layer</h3>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Infrastructure is no longer just concrete and steel. NEXUS CIVITAS is built on a proprietary software stack that turns physical cities into programmable platforms.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feat, idx) => (
                <div key={idx} className="p-6 border border-white/10 bg-black/20 rounded-xl hover:border-cyan-500/30 transition-colors">
                  <h4 className="text-lg font-bold text-white mb-2">{feat.title}</h4>
                  <p className="text-slate-400 text-sm">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Code/Data Visualization */}
          <div className="relative h-full min-h-[400px] border border-white/10 bg-[#0a0a0a] rounded-xl p-6 font-mono text-xs sm:text-sm overflow-hidden flex flex-col">
            <div className="flex gap-2 mb-4 border-b border-white/10 pb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              <span className="ml-4 text-slate-500">nexus_os_kernel.rs</span>
            </div>
            
            <div className="text-slate-300 flex-1 overflow-hidden relative">
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: -200 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="space-y-2"
              >
                <p><span className="text-purple-400">fn</span> <span className="text-blue-400">optimize_grid</span>(sector: <span className="text-yellow-400">&Sector</span>) -{'>'} <span className="text-yellow-400">Result</span>&lt;(), Error&gt; {'{'}</p>
                <p className="pl-4"><span className="text-slate-500">// Calculate current load</span></p>
                <p className="pl-4"><span className="text-purple-400">let</span> load = sector.get_current_load();</p>
                <p className="pl-4"><span className="text-purple-400">let</span> capacity = sector.get_renewable_capacity();</p>
                <br/>
                <p className="pl-4"><span className="text-purple-400">if</span> load {'>'} capacity {'{'}</p>
                <p className="pl-8"><span className="text-slate-500">// Route power from adjacent sectors</span></p>
                <p className="pl-8"><span className="text-purple-400">await</span> grid_router::<span className="text-blue-400">balance_load</span>(sector.id);</p>
                <p className="pl-4">{'}'} <span className="text-purple-400">else</span> {'{'}</p>
                <p className="pl-8"><span className="text-slate-500">// Store excess in thermal batteries</span></p>
                <p className="pl-8"><span className="text-purple-400">await</span> storage::<span className="text-blue-400">charge</span>(capacity - load);</p>
                <p className="pl-4">{'}'}</p>
                <br/>
                <p className="pl-4"><span className="text-blue-400">Ok</span>(())</p>
                <p>{'}'}</p>
                <br/>
                <p><span className="text-purple-400">fn</span> <span className="text-blue-400">route_autonomous_fleet</span>() {'{'}</p>
                <p className="pl-4"><span className="text-slate-500">// Initiating traffic optimization...</span></p>
                <p className="pl-4">...</p>
              </motion.div>
              
              {/* Fade out at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
