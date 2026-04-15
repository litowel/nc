import { motion } from 'motion/react';
import { MapPin, Activity, Cpu, ArrowRight } from 'lucide-react';

export default function GhanaPilot() {
  return (
    <section className="py-32 relative bg-[#020617] overflow-hidden">
      {/* Colorful Background Blurs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[30%] right-[-10%] w-[40%] h-[40%] bg-green-600/20 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[150px] mix-blend-screen"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 tracking-widest uppercase mb-4">// 03. Active Deployment</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-white mb-6">Ghana Pilot Project</h3>
          <p className="text-slate-300 max-w-3xl mx-auto text-xl leading-relaxed">
            The first operational node of the Nexus network. A high-speed, AI-managed corridor connecting the coastal capital to the inland resource hub.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Map Visualization Area */}
          <div className="lg:col-span-8 relative h-[500px] border border-white/10 bg-black/40 backdrop-blur-xl rounded-3xl overflow-hidden p-8 shadow-[0_0_50px_rgba(16,185,129,0.1)]">
            {/* Grid background */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
            
            {/* Map Line */}
            <div className="absolute top-1/2 left-1/4 right-1/4 h-[3px] bg-slate-800 -translate-y-1/2 rounded-full">
              <motion.div 
                className="h-full bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 shadow-[0_0_20px_rgba(52,211,153,0.8)] rounded-full relative"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
                viewport={{ once: true }}
              >
                {/* Moving particle */}
                <motion.div 
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,1)]"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                ></motion.div>
              </motion.div>
            </div>

            {/* Nodes */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 shadow-[0_0_30px_rgba(16,185,129,1)] animate-pulse border-4 border-black z-10"></div>
              <div className="mt-6 text-center bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                <div className="text-white font-bold text-2xl tracking-tight">ACCRA</div>
                <div className="text-green-400 font-mono text-xs mt-1">COASTAL_NODE</div>
              </div>
            </div>

            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 translate-x-1/2 flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 shadow-[0_0_30px_rgba(59,130,246,1)] animate-pulse border-4 border-black z-10"></div>
              <div className="mt-6 text-center bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                <div className="text-white font-bold text-2xl tracking-tight">KUMASI</div>
                <div className="text-blue-400 font-mono text-xs mt-1">INLAND_HUB</div>
              </div>
            </div>

            {/* Data overlays */}
            <div className="absolute top-8 left-8 border border-white/10 bg-black/60 backdrop-blur-md p-5 rounded-xl text-xs font-mono shadow-xl">
              <div className="text-slate-400 mb-2 uppercase tracking-wider">Corridor Length</div>
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 text-3xl font-bold">250 KM</div>
            </div>
            
            <div className="absolute bottom-8 right-8 border border-white/10 bg-black/60 backdrop-blur-md p-5 rounded-xl text-xs font-mono text-right shadow-xl">
              <div className="text-slate-400 mb-2 uppercase tracking-wider">Status</div>
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 text-2xl font-bold flex items-center gap-2">
                PHASE 1 ACTIVE <div className="w-2 h-2 rounded-full bg-green-400 animate-ping"></div>
              </div>
            </div>
          </div>

          {/* Stats/Info Area */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="p-8 border border-white/10 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-xl rounded-3xl hover:border-green-500/30 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6 text-green-400" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-3">Smart City Zones</h4>
              <p className="text-slate-300 leading-relaxed">Three new special economic zones established along the corridor, featuring autonomous logistics and renewable microgrids.</p>
            </div>
            
            <div className="p-8 border border-white/10 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-xl rounded-3xl hover:border-blue-500/30 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Activity className="w-6 h-6 text-blue-400" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-3">Industrial Hubs</h4>
              <p className="text-slate-300 leading-relaxed">Next-generation manufacturing facilities powered by AI-optimized supply chains and zero-emission energy.</p>
            </div>
            
            <div className="p-8 border border-white/10 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-xl rounded-3xl hover:border-purple-500/30 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Cpu className="w-6 h-6 text-purple-400" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-3">Digital Twin</h4>
              <p className="text-slate-300 leading-relaxed">Entire corridor mapped and simulated in real-time to predict maintenance and optimize traffic flow.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
