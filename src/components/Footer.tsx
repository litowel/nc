export default function Footer() {
  return (
    <footer className="bg-[#020617] py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                <div className="w-3 h-3 bg-black rounded-sm"></div>
              </div>
              <span className="text-white font-display font-bold tracking-widest text-xl">NEXUS CIVITAS</span>
            </div>
            <p className="text-slate-500 text-sm max-w-sm">
              Building the infrastructure for a Type I civilization. AI-governed, sustainable, and globally connected.
            </p>
          </div>
          
          <div>
            <h5 className="text-white font-bold mb-4">Initiative</h5>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Global Vision</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Technology Stack</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-white font-bold mb-4">Investors</h5>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="#" className="hover:text-white transition-colors">Data Room Login</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Financial Models</a></li>
              <li><a href="#" className="hover:text-white transition-colors">ESG Reports</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Relations</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>&copy; {new Date().getFullYear()} NEXUS CIVITAS INITIATIVE. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
