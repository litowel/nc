import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenModal: () => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-nexus-bg/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
            <div className="w-3 h-3 bg-black rounded-sm"></div>
          </div>
          <span className="text-white font-display font-bold tracking-widest text-xl">NEXUS CIVITAS</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#" className="hover:text-white transition-colors">Vision</a>
          <a href="#" className="hover:text-white transition-colors">Systems</a>
          <a href="#" className="hover:text-white transition-colors">Projects</a>
          <a href="#" className="hover:text-white transition-colors">Technology</a>
          <button 
            onClick={onOpenModal}
            className="px-5 py-2 border border-white/20 hover:bg-white hover:text-black transition-all rounded"
          >
            Investor Portal
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-nexus-bg border-b border-white/10 p-6 flex flex-col gap-4">
          <a href="#" className="text-slate-300 hover:text-white py-2">Vision</a>
          <a href="#" className="text-slate-300 hover:text-white py-2">Systems</a>
          <a href="#" className="text-slate-300 hover:text-white py-2">Projects</a>
          <a href="#" className="text-slate-300 hover:text-white py-2">Technology</a>
          <button 
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenModal();
            }}
            className="px-5 py-3 border border-white/20 hover:bg-white hover:text-black transition-all rounded mt-2 text-white"
          >
            Investor Portal
          </button>
        </div>
      )}
    </nav>
  );
}

