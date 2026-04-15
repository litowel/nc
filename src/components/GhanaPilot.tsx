import { motion } from 'motion/react';
import { MapPin, Activity, Cpu } from 'lucide-react';

export default function GhanaPilot() {
  return (
    <section className="py-32 relative bg-nexus-surface border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-mono text-green-400 tracking-widest uppercase mb-4">// 03. Active Deployment</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Ghana Pilot Project</h3>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            The first operational node of the Nexus network. A high-speed, AI-managed corridor connecting the coastal capital to the inland resource hub.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Map Visualization Area */}
          <div className="lg:col-span-8 relative h-[500px] border border-white/10 bg-[#020617] rounded-xl overflow-hidden p-8">
            {/* Grid background */}
            <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
            
            {/* Map Line */}
            <div className="absolute top-1/2 left-1/4 right-1/4 h-[2px] bg-slate-800 -translate-y-1/2">
              <motion.div 
                className="h-full bg-gradient-to-r from-green-500 to-blue-500"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                viewport={{ once: true }}
              ></motion.div>
            </div>

            {/* Nodes */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center">
              <div className="w-6 h-6 rounded-full bg-green-500 shadow-[0_0_20px_rgba(16,185,129,0.8)] animate-pulse border-4 border-black z-10"></div>
              <div className="mt-4 text-center">
                <div className="text-white font-bold text-xl">ACCRA</div>
                <div className="text-green-400 font-mono text-xs">COASTAL_NODE</div>
              </div>
            </div>

            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 translate-x-1/2 flex flex-col items-center">
              <div className="w-6 h-6 rounded-full bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.8)] animate-pulse border-4 border-black z-10"></div>
              <div className="mt-4 text-center">
                <div className="text-white font-bold text-xl">KUMASI</div>
                <div className="text-blue-400 font-mono text-xs">INLAND_HUB</div>
              </div>
            </div>

            {/* Data overlays */}
            <div className="absolute top-8 left-8 border border-white/10 bg-black/50 backdrop-blur-md p-4 rounded text-xs font-mono">
              <div className="text-slate-400 mb-1">CORRIDOR_LENGTH</div>
              <div className="text-white text-lg">250 KM</div>
            </div>
            
            <div className="absolute bottom-8 right-8 border border-white/10 bg-black/50 backdrop-blur-md p-4 rounded text-xs font-mono text-right">
              <div className="text-slate-400 mb-1">STATUS</div>
              <div className="text-green-400 text-lg">PHASE 1 ACTIVE</div>
            </div>
          </div>

          {/* Stats/Info Area */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="p-6 border border-white/10 bg-black/20 rounded-xl">
              <MapPin className="w-6 h-6 text-green-400 mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">Smart City Zones</h4>
              <p className="text-slate-400 text-sm">Three new special economic zones established along the corridor, featuring autonomous logistics and renewable microgrids.</p>
            </div>
            
            <div className="p-6 border border-white/10 bg-black/20 rounded-xl">
              <Activity className="w-6 h-6 text-blue-400 mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">Industrial Hubs</h4>
              <p className="text-slate-400 text-sm">Next-generation manufacturing facilities powered by AI-optimized supply chains and zero-emission energy.</p>
            </div>
            
            <div className="p-6 border border-white/10 bg-black/20 rounded-xl">
              <Cpu className="w-6 h-6 text-purple-400 mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">Digital Twin</h4>
              <p className="text-slate-400 text-sm">Entire corridor mapped and simulated in real-time to predict maintenance and optimize traffic flow.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
