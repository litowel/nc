import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Box, Maximize, Globe, LayoutGrid, Users, Building2, Home, 
  GraduationCap, HeartPulse, ShoppingBag, TreePine, Zap, 
  Droplets, Trash2, DollarSign, Clock, Train, Factory, 
  Battery, Leaf, Wrench, Calendar, Layers
} from 'lucide-react';

const tabs = [
  { id: 'A', name: 'Option A', desc: 'Pilot Block (200m × 250m)', icon: <Box className="w-5 h-5" /> },
  { id: 'B', name: 'Option B', desc: 'District City (500m × 500m)', icon: <Maximize className="w-5 h-5" /> },
  { id: 'C', name: 'Option C', desc: 'Full Pilot City (1km × 1km)', icon: <Globe className="w-5 h-5" /> },
  { id: 'BOQ', name: 'BOQ & Timeline', desc: 'System Specifications', icon: <Layers className="w-5 h-5" /> },
];

export default function TechnicalSpecs() {
  const [activeTab, setActiveTab] = useState('A');

  return (
    <section className="py-32 relative bg-[#020617] border-y border-white/5 overflow-hidden">
      {/* Background visual */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop"
          alt="Tech circuitry background"
          className="w-full h-full object-cover opacity-10 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-[#020617]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-mono text-blue-400 tracking-widest uppercase mb-4">// Full Pilot Master Plan</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Technical Specifications</h3>
            <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
              Detailed metrics, urban programming, and structural engineering data for the three scales of the Elevated Modular Smart City System.
            </p>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-3 px-6 py-4 rounded-xl border transition-all duration-300 ${
                activeTab === tab.id 
                  ? 'bg-blue-500/10 border-blue-500/50 text-white shadow-[0_0_20px_rgba(59,130,246,0.2)]' 
                  : 'bg-black/20 border-white/10 text-slate-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <div className={`${activeTab === tab.id ? 'text-blue-400' : 'text-slate-500'}`}>
                {tab.icon}
              </div>
              <div className="text-left">
                <div className="font-bold font-display">{tab.name}</div>
                <div className="text-xs font-mono opacity-70">{tab.desc}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-[#020617] border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl min-h-[600px] relative overflow-hidden">
          {/* Subtle background grid in content area */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
          
          <AnimatePresence mode="wait">
            {activeTab === 'A' && (
              <motion.div
                key="A"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
              >
                {/* Column 1 */}
                <div className="space-y-10">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-3">
                      <LayoutGrid className="text-blue-400 w-5 h-5" /> Basic Metrics
                    </h4>
                    <ul className="space-y-4 text-slate-300">
                      <li className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-slate-500">Area</span>
                        <span className="font-mono text-white">50,000 m²</span>
                      </li>
                      <li className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-slate-500">Population</span>
                        <span className="font-mono text-white">30k – 50k</span>
                      </li>
                      <li className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-slate-500">Buildings</span>
                        <span className="font-mono text-white">8 – 12 towers</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-3">
                      <Building2 className="text-green-400 w-5 h-5" /> Urban Program
                    </h4>
                    <div className="space-y-4">
                      <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                        <div className="text-sm text-slate-500 mb-1">Housing</div>
                        <div className="font-mono text-white">10,000 – 12,000 units</div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm text-slate-300">
                        <div className="flex items-center gap-2 bg-white/5 p-2 rounded"><GraduationCap className="w-4 h-4 text-blue-400"/> 2 Schools</div>
                        <div className="flex items-center gap-2 bg-white/5 p-2 rounded"><HeartPulse className="w-4 h-4 text-red-400"/> 1 Clinic</div>
                        <div className="flex items-center gap-2 bg-white/5 p-2 rounded"><ShoppingBag className="w-4 h-4 text-yellow-400"/> 1 Commercial</div>
                        <div className="flex items-center gap-2 bg-white/5 p-2 rounded"><TreePine className="w-4 h-4 text-green-400"/> Parks & Rec</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Column 2 */}
                <div className="space-y-10">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-3">
                      <Wrench className="text-orange-400 w-5 h-5" /> Structural System
                    </h4>
                    <ul className="space-y-4 text-slate-300">
                      <li className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-slate-500">Platform Height</span>
                        <span className="font-mono text-white">10–15m</span>
                      </li>
                      <li className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-slate-500">Steel Grid</span>
                        <span className="font-mono text-white">25m × 25m</span>
                      </li>
                      <li className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-slate-500">Steel Quantity</span>
                        <span className="font-mono text-white">120–180 kg/m²</span>
                      </li>
                      <li className="flex justify-between bg-orange-500/10 p-3 rounded border border-orange-500/20">
                        <span className="text-orange-400 font-bold">Total Steel</span>
                        <span className="font-mono text-white font-bold">6k – 9k tons</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-3">
                      <Home className="text-purple-400 w-5 h-5" /> Apartment Breakdown
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm text-left text-slate-300">
                        <thead className="text-xs text-slate-500 uppercase bg-white/5">
                          <tr>
                            <th className="px-4 py-2 rounded-tl">Type</th>
                            <th className="px-4 py-2">Size</th>
                            <th className="px-4 py-2 rounded-tr text-right">Units</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-white/5">
                            <td className="px-4 py-2">Studio</td>
                            <td className="px-4 py-2 font-mono">35 m²</td>
                            <td className="px-4 py-2 font-mono text-right">2,500</td>
                          </tr>
                          <tr className="border-b border-white/5">
                            <td className="px-4 py-2">1BR</td>
                            <td className="px-4 py-2 font-mono">55 m²</td>
                            <td className="px-4 py-2 font-mono text-right">4,800</td>
                          </tr>
                          <tr className="border-b border-white/5">
                            <td className="px-4 py-2">2BR</td>
                            <td className="px-4 py-2 font-mono">80 m²</td>
                            <td className="px-4 py-2 font-mono text-right">3,000</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2">3BR</td>
                            <td className="px-4 py-2 font-mono">110 m²</td>
                            <td className="px-4 py-2 font-mono text-right">1,200</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Column 3 */}
                <div className="space-y-10">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-3">
                      <Zap className="text-yellow-400 w-5 h-5" /> Infrastructure
                    </h4>
                    <div className="space-y-3 text-sm text-slate-300">
                      <div className="flex items-center gap-3 bg-white/5 p-3 rounded border border-white/5">
                        <Battery className="w-5 h-5 text-yellow-400" />
                        <span>Microgrid (solar + battery)</span>
                      </div>
                      <div className="flex items-center gap-3 bg-white/5 p-3 rounded border border-white/5">
                        <Droplets className="w-5 h-5 text-blue-400" />
                        <span>Water recycling plant</span>
                      </div>
                      <div className="flex items-center gap-3 bg-white/5 p-3 rounded border border-white/5">
                        <Trash2 className="w-5 h-5 text-green-400" />
                        <span>Waste compaction system</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-3">
                      <DollarSign className="text-green-400 w-5 h-5" /> Cost & Timeline
                    </h4>
                    <ul className="space-y-3 text-sm text-slate-300 mb-6">
                      <li className="flex justify-between">
                        <span className="text-slate-500">Structure</span>
                        <span className="font-mono text-white">$120M – $200M</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-slate-500">Buildings</span>
                        <span className="font-mono text-white">$400M – $700M</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-slate-500">Infrastructure</span>
                        <span className="font-mono text-white">$80M – $150M</span>
                      </li>
                      <li className="flex justify-between bg-green-500/10 p-3 rounded border border-green-500/20 mt-2">
                        <span className="text-green-400 font-bold">Total Est.</span>
                        <span className="font-mono text-white font-bold">$600M – $1.05B</span>
                      </li>
                    </ul>
                    
                    <div className="flex items-center gap-3 bg-blue-500/10 p-4 rounded-lg border border-blue-500/20">
                      <Clock className="w-6 h-6 text-blue-400" />
                      <div>
                        <div className="text-xs text-blue-400 uppercase tracking-wider">Build Time</div>
                        <div className="text-lg font-bold text-white">24 – 36 months</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'B' && (
              <motion.div
                key="B"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
              >
                {/* Column 1 */}
                <div className="space-y-10">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-3">
                      <LayoutGrid className="text-blue-400 w-5 h-5" /> Basic Metrics
                    </h4>
                    <ul className="space-y-4 text-slate-300">
                      <li className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-slate-500">Area</span>
                        <span className="font-mono text-white">250,000 m²</span>
                      </li>
                      <li className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-slate-500">Population</span>
                        <span className="font-mono text-white">250k – 400k</span>
                      </li>
                      <li className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-slate-500">Buildings</span>
                        <span className="font-mono text-white">25 – 50 towers</span>
                      </li>
                      <li className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-slate-500">Housing Units</span>
                        <span className="font-mono text-white">60k – 100k</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-3">
                      <Building2 className="text-green-400 w-5 h-5" /> Urban Structure
                    </h4>
                    <div className="flex flex-wrap gap-2 text-sm">
                      <span className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-slate-300">Residential Core</span>
                      <span className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-slate-300">Commercial Belt</span>
                      <span className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-slate-300">Industrial Edge</span>
                      <span className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-slate-300">Education Zone</span>
                      <span className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-slate-300">Health District</span>
                    </div>
                  </div>
                </div>

                {/* Column 2 */}
                <div className="space-y-10">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-3">
                      <Wrench className="text-orange-400 w-5 h-5" /> Structural System
                    </h4>
                    <ul className="space-y-4 text-slate-300">
                      <li className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-slate-500">Column Grid</span>
                        <span className="font-mono text-white">30m × 30m</span>
                      </li>
                      <li className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-slate-500">Supports</span>
                        <span className="font-mono text-white text-right">Multi-core vertical</span>
                      </li>
                      <li className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-slate-500">Steel Quantity</span>
                        <span className="font-mono text-white">140–200 kg/m²</span>
                      </li>
                      <li className="flex justify-between bg-orange-500/10 p-3 rounded border border-orange-500/20">
                        <span className="text-orange-400 font-bold">Total Steel</span>
                        <span className="font-mono text-white font-bold">35k – 50k tons</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-3">
                      <Train className="text-purple-400 w-5 h-5" /> Facilities & Transport
                    </h4>
                    <div className="grid grid-cols-2 gap-3 text-sm text-slate-300 mb-4">
                      <div className="flex items-center gap-2 bg-white/5 p-2 rounded"><GraduationCap className="w-4 h-4 text-blue-400"/> 8 Schools</div>
                      <div className="flex items-center gap-2 bg-white/5 p-2 rounded"><GraduationCap className="w-4 h-4 text-blue-400"/> 2 Universities</div>
                      <div className="flex items-center gap-2 bg-white/5 p-2 rounded"><HeartPulse className="w-4 h-4 text-red-400"/> 2 Hospitals</div>
                      <div className="flex items-center gap-2 bg-white/5 p-2 rounded"><Factory className="w-4 h-4 text-yellow-400"/> Tech Park</div>
                    </div>
                    <ul className="space-y-2 text-sm text-slate-400 list-disc list-inside">
                      <li>Internal tram loop</li>
                      <li>EV lanes</li>
                      <li>Freight corridors</li>
                    </ul>
                  </div>
                </div>

                {/* Column 3 */}
                <div className="space-y-10">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-3">
                      <Zap className="text-yellow-400 w-5 h-5" /> Energy & Food
                    </h4>
                    <div className="space-y-3 text-sm text-slate-300">
                      <div className="flex items-center gap-3 bg-white/5 p-3 rounded border border-white/5">
                        <Zap className="w-5 h-5 text-yellow-400" />
                        <span>150–300 MW solar + Battery hub</span>
                      </div>
                      <div className="flex items-center gap-3 bg-white/5 p-3 rounded border border-white/5">
                        <Leaf className="w-5 h-5 text-green-400" />
                        <span>Vertical farms (30–40% independence)</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-3">
                      <DollarSign className="text-green-400 w-5 h-5" /> Cost & Timeline
                    </h4>
                    <ul className="space-y-3 text-sm text-slate-300 mb-6">
                      <li className="flex justify-between">
                        <span className="text-slate-500">Structure</span>
                        <span className="font-mono text-white">$2B – $4B</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-slate-500">Buildings</span>
                        <span className="font-mono text-white">$3B – $7B</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-slate-500">Infrastructure</span>
                        <span className="font-mono text-white">$1B – $3B</span>
                      </li>
                      <li className="flex justify-between bg-green-500/10 p-3 rounded border border-green-500/20 mt-2">
                        <span className="text-green-400 font-bold">Total Est.</span>
                        <span className="font-mono text-white font-bold">$6B – $14B</span>
                      </li>
                    </ul>
                    
                    <div className="flex items-center gap-3 bg-blue-500/10 p-4 rounded-lg border border-blue-500/20">
                      <Clock className="w-6 h-6 text-blue-400" />
                      <div>
                        <div className="text-xs text-blue-400 uppercase tracking-wider">Build Time</div>
                        <div className="text-lg font-bold text-white">5 – 8 years</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'C' && (
              <motion.div
                key="C"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
              >
                {/* Column 1 */}
                <div className="space-y-10">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-3">
                      <LayoutGrid className="text-blue-400 w-5 h-5" /> Basic Metrics
                    </h4>
                    <ul className="space-y-4 text-slate-300">
                      <li className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-slate-500">Area</span>
                        <span className="font-mono text-white">1,000,000 m²</span>
                      </li>
                      <li className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-slate-500">Population</span>
                        <span className="font-mono text-white">800k – 1.5M</span>
                      </li>
                      <li className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-slate-500">Housing Units</span>
                        <span className="font-mono text-white">200k – 350k</span>
                      </li>
                      <li className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-slate-500">Tower Heights</span>
                        <span className="font-mono text-white">20 – 80 floors</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-3">
                      <Building2 className="text-green-400 w-5 h-5" /> 5 Major Districts
                    </h4>
                    <ol className="space-y-2 text-sm text-slate-300 list-decimal list-inside">
                      <li className="bg-white/5 p-2 rounded">Residential Megazones</li>
                      <li className="bg-white/5 p-2 rounded">Financial + Tech Core</li>
                      <li className="bg-white/5 p-2 rounded">Industrial Production Belt</li>
                      <li className="bg-white/5 p-2 rounded">Education + Innovation Zone</li>
                      <li className="bg-white/5 p-2 rounded">Green + Energy Zone</li>
                    </ol>
                  </div>
                </div>

                {/* Column 2 */}
                <div className="space-y-10">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-3">
                      <Wrench className="text-orange-400 w-5 h-5" /> Structural System
                    </h4>
                    <ul className="space-y-4 text-slate-300">
                      <li className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-slate-500">Mega Grid</span>
                        <span className="font-mono text-white">35m–50m spacing</span>
                      </li>
                      <li className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-slate-500">Platform</span>
                        <span className="font-mono text-white text-right">Multi-layer system</span>
                      </li>
                      <li className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-slate-500">Steel Quantity</span>
                        <span className="font-mono text-white">150–220 kg/m²</span>
                      </li>
                      <li className="flex justify-between bg-orange-500/10 p-3 rounded border border-orange-500/20">
                        <span className="text-orange-400 font-bold">Total Steel</span>
                        <span className="font-mono text-white font-bold">150k – 220k tons</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-3">
                      <Globe className="text-purple-400 w-5 h-5" /> City Systems
                    </h4>
                    <div className="grid grid-cols-2 gap-3 text-sm text-slate-300 mb-4">
                      <div className="flex items-center gap-2 bg-white/5 p-2 rounded"><GraduationCap className="w-4 h-4 text-blue-400"/> 25-40 Schools</div>
                      <div className="flex items-center gap-2 bg-white/5 p-2 rounded"><GraduationCap className="w-4 h-4 text-blue-400"/> 5-8 Universities</div>
                      <div className="flex items-center gap-2 bg-white/5 p-2 rounded"><HeartPulse className="w-4 h-4 text-red-400"/> 5 Hospitals</div>
                      <div className="flex items-center gap-2 bg-white/5 p-2 rounded"><HeartPulse className="w-4 h-4 text-red-400"/> 15 Clinics</div>
                    </div>
                    <ul className="space-y-2 text-sm text-slate-400 list-disc list-inside">
                      <li>Automated metro loop</li>
                      <li>Freight rail corridor</li>
                      <li>Drone logistics network</li>
                    </ul>
                  </div>
                </div>

                {/* Column 3 */}
                <div className="space-y-10">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-3">
                      <Zap className="text-yellow-400 w-5 h-5" /> Energy & Food
                    </h4>
                    <div className="space-y-3 text-sm text-slate-300">
                      <div className="flex items-center gap-3 bg-white/5 p-3 rounded border border-white/5">
                        <Zap className="w-5 h-5 text-yellow-400" />
                        <span>300–800 MW solar + AI grid</span>
                      </div>
                      <div className="flex items-center gap-3 bg-white/5 p-3 rounded border border-white/5">
                        <Leaf className="w-5 h-5 text-green-400" />
                        <span>Vertical farms (40–60% independence)</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-3">
                      <DollarSign className="text-green-400 w-5 h-5" /> Cost & Timeline
                    </h4>
                    <ul className="space-y-3 text-sm text-slate-300 mb-6">
                      <li className="flex justify-between">
                        <span className="text-slate-500">Structure</span>
                        <span className="font-mono text-white">$8B – $15B</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-slate-500">Buildings</span>
                        <span className="font-mono text-white">$10B – $25B</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-slate-500">Infrastructure</span>
                        <span className="font-mono text-white">$5B – $15B</span>
                      </li>
                      <li className="flex justify-between bg-green-500/10 p-3 rounded border border-green-500/20 mt-2">
                        <span className="text-green-400 font-bold">Total Est.</span>
                        <span className="font-mono text-white font-bold">$25B – $55B</span>
                      </li>
                    </ul>
                    
                    <div className="flex items-center gap-3 bg-blue-500/10 p-4 rounded-lg border border-blue-500/20">
                      <Clock className="w-6 h-6 text-blue-400" />
                      <div>
                        <div className="text-xs text-blue-400 uppercase tracking-wider">Build Time</div>
                        <div className="text-lg font-bold text-white">8 – 15 years</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'BOQ' && (
              <motion.div
                key="BOQ"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12"
              >
                {/* Left Column */}
                <div className="space-y-10">
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-3">
                      <Layers className="text-blue-400 w-6 h-6" /> Steel Breakdown
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm text-left text-slate-300">
                        <thead className="text-xs text-slate-500 uppercase bg-white/5">
                          <tr>
                            <th className="px-4 py-3 rounded-tl">Type</th>
                            <th className="px-4 py-3 rounded-tr">Usage</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-white/5">
                            <td className="px-4 py-3 font-bold text-white">H-beams</td>
                            <td className="px-4 py-3 text-slate-400">Primary structure</td>
                          </tr>
                          <tr className="border-b border-white/5">
                            <td className="px-4 py-3 font-bold text-white">Box columns</td>
                            <td className="px-4 py-3 text-slate-400">Vertical supports</td>
                          </tr>
                          <tr className="border-b border-white/5">
                            <td className="px-4 py-3 font-bold text-white">Trusses</td>
                            <td className="px-4 py-3 text-slate-400">Load distribution</td>
                          </tr>
                          <tr className="border-b border-white/5">
                            <td className="px-4 py-3 font-bold text-white">Plates</td>
                            <td className="px-4 py-3 text-slate-400">Decking</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 font-bold text-white">Connectors</td>
                            <td className="px-4 py-3 text-slate-400">Modular joints</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-3">
                      <Box className="text-green-400 w-6 h-6" /> Prefab Modules
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                        <h5 className="text-white font-bold mb-3 text-sm">1. Structural</h5>
                        <ul className="space-y-2 text-xs text-slate-400 list-disc list-inside">
                          <li>Column segments (10–15m)</li>
                          <li>Beam modules (pre-cut)</li>
                          <li>Deck panels (2m × 6m)</li>
                        </ul>
                      </div>
                      <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                        <h5 className="text-white font-bold mb-3 text-sm">2. Housing</h5>
                        <ul className="space-y-2 text-xs text-slate-400 list-disc list-inside">
                          <li>Apartment pods</li>
                          <li>Bathroom pods</li>
                          <li>Kitchen modules</li>
                          <li>Wall systems</li>
                        </ul>
                      </div>
                      <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                        <h5 className="text-white font-bold mb-3 text-sm">3. Infrastructure</h5>
                        <ul className="space-y-2 text-xs text-slate-400 list-disc list-inside">
                          <li>Water tanks</li>
                          <li>Power units</li>
                          <li>HVAC modules</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div>
                  <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-3">
                    <Calendar className="text-purple-400 w-6 h-6" /> Master Construction Timeline
                  </h4>
                  
                  <div className="relative border-l border-white/10 ml-4 space-y-8 pb-4">
                    <div className="relative pl-8">
                      <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[8.5px] top-1 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                      <h5 className="text-lg font-bold text-white mb-1">PHASE 1 — FOUNDATIONS</h5>
                      <ul className="text-sm text-slate-400 list-disc list-inside">
                        <li>Soil testing</li>
                        <li>Piling</li>
                        <li>Column installation</li>
                      </ul>
                    </div>
                    
                    <div className="relative pl-8">
                      <div className="absolute w-4 h-4 bg-green-500 rounded-full -left-[8.5px] top-1 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
                      <h5 className="text-lg font-bold text-white mb-1">PHASE 2 — STRUCTURE</h5>
                      <ul className="text-sm text-slate-400 list-disc list-inside">
                        <li>Steel frame assembly</li>
                        <li>Platform installation</li>
                      </ul>
                    </div>
                    
                    <div className="relative pl-8">
                      <div className="absolute w-4 h-4 bg-yellow-500 rounded-full -left-[8.5px] top-1 shadow-[0_0_10px_rgba(234,179,8,0.8)]"></div>
                      <h5 className="text-lg font-bold text-white mb-1">PHASE 3 — BUILDINGS</h5>
                      <ul className="text-sm text-slate-400 list-disc list-inside">
                        <li>Modular housing installation</li>
                        <li>Tower construction</li>
                      </ul>
                    </div>
                    
                    <div className="relative pl-8">
                      <div className="absolute w-4 h-4 bg-orange-500 rounded-full -left-[8.5px] top-1 shadow-[0_0_10px_rgba(249,115,22,0.8)]"></div>
                      <h5 className="text-lg font-bold text-white mb-1">PHASE 4 — SYSTEMS</h5>
                      <ul className="text-sm text-slate-400 list-disc list-inside">
                        <li>Power, water, ICT integration</li>
                      </ul>
                    </div>
                    
                    <div className="relative pl-8">
                      <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[8.5px] top-1 shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>
                      <h5 className="text-lg font-bold text-white mb-1">PHASE 5 — OCCUPATION</h5>
                      <ul className="text-sm text-slate-400 list-disc list-inside">
                        <li>Phase-based habitation rollout</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
