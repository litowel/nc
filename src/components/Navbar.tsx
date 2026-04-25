import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

interface NavbarProps {
  onOpenModal: () => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine background based on path
  const isHome = location.pathname === '/';
  const navClass = isScrolled || !isHome 
    ? 'bg-nexus-bg/80 backdrop-blur-md border-b border-white/10 py-4' 
    : 'bg-transparent py-6';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClass}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <Logo className="w-10 h-10 drop-shadow-lg" animate={true} />
          <span className="text-white font-display font-bold tracking-widest text-xl drop-shadow-md">NEXUS CIVITAS</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <Link to="/" className="hover:text-white transition-colors drop-shadow">Hub</Link>
          <Link to="/stakeholders" className="hover:text-white transition-colors drop-shadow">Global Stakeholders</Link>
          <Link to="/token" className="text-blue-400 hover:text-blue-300 transition-colors drop-shadow font-bold">$NEXUS ICO</Link>
          <button 
            onClick={onOpenModal}
            className="px-5 py-2 border border-white/20 hover:bg-white hover:text-black transition-all rounded drop-shadow bg-white/5 backdrop-blur"
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
        <div className="md:hidden absolute top-full left-0 right-0 bg-nexus-bg border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-white py-2">Hub</Link>
          <Link to="/stakeholders" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-white py-2">Global Stakeholders</Link>
          <Link to="/token" onClick={() => setMobileMenuOpen(false)} className="text-blue-400 hover:text-blue-300 font-bold py-2">$NEXUS ICO</Link>
          <button 
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenModal();
            }}
            className="px-5 py-3 border border-white/20 hover:bg-white hover:text-black transition-all rounded mt-2 text-white bg-white/10"
          >
            Investor Portal
          </button>
        </div>
      )}
    </nav>
  );
}

