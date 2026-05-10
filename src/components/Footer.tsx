import Logo from './Logo';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#020617] py-12 border-t border-cyan-500/10 font-sans">
      <div className="container mx-auto px-6 w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Logo className="w-8 h-8 opacity-90 text-cyan-400" animate={false} />
              <span className="text-white font-display font-bold tracking-widest text-xl uppercase">Nexus Civitas</span>
            </div>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed font-mono">
              Building the infrastructure operating system for humanity's transition toward a sustainable Type I Civilization.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
               <a 
                href="https://x.com/NexusCivitas" 
                target="_blank" 
                rel="noreferrer"
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-slate-300 text-xs font-mono uppercase hover:border-cyan-500/50 hover:text-cyan-400 transition-colors"
               >
                 X / Twitter
               </a>
               <a 
                href="https://nexus.upfrica.africa" 
                target="_blank" 
                rel="noreferrer"
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-slate-300 text-xs font-mono uppercase hover:border-blue-500/50 hover:text-blue-400 transition-colors"
               >
                 Official Hub
               </a>
            </div>
          </div>
          
          <div>
            <h5 className="text-white font-bold mb-4 uppercase tracking-wider font-display">Ecosystem</h5>
            <ul className="space-y-3 text-sm text-slate-400 font-mono">
              <li><Link to="/smart-city" className="hover:text-cyan-400 transition-colors lowercase">/smart-city-initiative</Link></li>
              <li><Link to="/civilization/type-1" className="hover:text-cyan-400 transition-colors lowercase">/global-vision</Link></li>
              <li><Link to="/stakeholders" className="hover:text-cyan-400 transition-colors lowercase">/sovereign-partners</Link></li>
              <li><Link to="/token" className="hover:text-cyan-400 transition-colors lowercase">/nexus-infrastructure</Link></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-white font-bold mb-4 uppercase tracking-wider font-display">Resources</h5>
            <ul className="space-y-3 text-sm text-slate-400 font-mono">
              <li><a href="#" className="hover:text-cyan-400 transition-colors lowercase">/tokenomics-paper</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors lowercase">/smart-contract-audit</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors lowercase">/esg-impact-models</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors lowercase">/civic-governance</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>&copy; {new Date().getFullYear()} NEXUS CIVITAS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-cyan-400 transition-colors">PRIVACY_POLICY</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">TERMS_OF_SERVICE</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
