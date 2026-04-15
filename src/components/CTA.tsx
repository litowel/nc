import { motion } from 'motion/react';

export default function CTA() {
  return (
    <section className="py-32 relative overflow-hidden border-t border-white/10">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] z-0 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
          Join the Initiative
        </h2>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12">
          Whether you are a sovereign wealth fund, a technology partner, or a visionary engineer, the time to build the future is now.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded hover:bg-blue-500 transition-colors w-full sm:w-auto text-lg shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]">
            Partner With Us
          </button>
          <button className="px-8 py-4 bg-white text-black font-bold rounded hover:bg-gray-200 transition-colors w-full sm:w-auto text-lg">
            Invest in the Future
          </button>
        </div>
      </div>
    </section>
  );
}
