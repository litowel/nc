import { motion } from 'motion/react';
import { TrendingUp, ShieldCheck, BarChart3 } from 'lucide-react';

export default function Investment() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-sm font-mono text-yellow-400 tracking-widest uppercase mb-4">// 06. Capital</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-white mb-6">Multi-Trillion Dollar <br/> Infrastructure Opportunity</h3>
          <p className="text-slate-400 text-lg leading-relaxed">
            NEXUS CIVITAS represents the largest asset class transition in human history. We are structuring public-private partnerships to fund the next century of global infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-8 border border-white/10 bg-white/5 rounded-2xl text-center hover:bg-white/10 transition-colors">
            <div className="w-16 h-16 mx-auto bg-blue-500/10 rounded-full flex items-center justify-center mb-6">
              <TrendingUp className="w-8 h-8 text-blue-400" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-2">Long-Term Returns</h4>
            <p className="text-slate-400 text-sm">Stable, sovereign-backed yields generated from essential utility and logistics services.</p>
          </div>
          
          <div className="p-8 border border-white/10 bg-white/5 rounded-2xl text-center hover:bg-white/10 transition-colors">
            <div className="w-16 h-16 mx-auto bg-green-500/10 rounded-full flex items-center justify-center mb-6">
              <ShieldCheck className="w-8 h-8 text-green-400" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-2">De-risked Assets</h4>
            <p className="text-slate-400 text-sm">Phased deployment models and government guarantees minimize early-stage construction risk.</p>
          </div>
          
          <div className="p-8 border border-white/10 bg-white/5 rounded-2xl text-center hover:bg-white/10 transition-colors">
            <div className="w-16 h-16 mx-auto bg-purple-500/10 rounded-full flex items-center justify-center mb-6">
              <BarChart3 className="w-8 h-8 text-purple-400" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-2">ESG Native</h4>
            <p className="text-slate-400 text-sm">Built from the ground up to exceed all global sustainability and social impact mandates.</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto border border-white/10 bg-black/40 p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-bold text-white mb-2">Access the Data Room</h4>
            <p className="text-slate-400 text-sm">Qualified institutional investors can request access to our financial models and Phase 1 technical schematics.</p>
          </div>
          <button className="px-6 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition-colors whitespace-nowrap">
            Request Access
          </button>
        </div>
      </div>
    </section>
  );
}
