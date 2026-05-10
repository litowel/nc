import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Hexagon, Coins, LineChart, Zap, ShieldCheck, ArrowRight, ExternalLink, 
  Cpu, Layers, Wallet, CheckCircle2, ChevronDown, Loader2, Globe, Database,
  Lock, FileText, Share2, Building2, Landmark, Rocket
} from 'lucide-react';
import { PieChart, Pie, Cell, Tooltip as RechartsTooltip, ResponsiveContainer } from 'recharts';
import VisionSlideshow from '../components/VisionSlideshow';

// --- Components ---

function BuyNexusModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setAmount('');
      setIsProcessing(false);
    }
  }, [isOpen]);

  const handleConnectWallet = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep(2);
    }, 1500);
  };

  const handlePurchase = () => {
    if (!amount || isNaN(Number(amount))) return;
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep(3);
    }, 2500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }} 
          className="absolute inset-0 bg-[#0f172a]/90 backdrop-blur-sm"
          onClick={onClose}
        ></motion.div>
        
        <motion.div 
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          className="relative w-full max-w-md bg-[#1e293b] border border-white/10 rounded-3xl p-8 shadow-[0_0_30px_rgba(6,182,212,0.1)] overflow-hidden"
        >
          {/* Step 1: Connect Wallet */}
          {step === 1 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 border border-cyan-500/30 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                <Wallet className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 uppercase font-display">Provider Interface</h3>
              <p className="text-slate-400 mb-8 font-mono text-sm leading-relaxed">Connect secure credential node to access ecosystem participation.</p>
              <button 
                onClick={handleConnectWallet}
                disabled={isProcessing}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-wider text-sm"
              >
                {isProcessing ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Initialize Node Connection'}
              </button>
            </motion.div>
          )}

          {/* Step 2: Select Amount */}
          {step === 2 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold text-white uppercase font-display">Ecosystem Access</h3>
                <div className="text-xs text-cyan-400 font-mono bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20 tracking-wider">Node Active</div>
              </div>
              <div className="mb-6">
                <label className="text-xs text-slate-400 font-bold mb-2 block uppercase tracking-wider font-mono">Infrastructure Provision (USD)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400 text-lg font-mono">$</span>
                  <input 
                    type="number" 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="1000"
                    className="w-full bg-[#0f172a] border border-cyan-500/20 rounded-xl py-4 pl-10 pr-4 text-white text-lg focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500 transition-all font-mono shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]"
                  />
                </div>
                {amount && !isNaN(Number(amount)) && (
                  <div className="mt-3 text-sm text-cyan-300 font-medium flex justify-between font-mono">
                    <span>Equivalent Capacity:</span>
                    <span className="font-bold">{(Number(amount) * 100).toLocaleString()} NEX</span>
                  </div>
                )}
              </div>
              <button 
                onClick={handlePurchase}
                disabled={isProcessing || !amount}
                className="w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-500 hover:from-cyan-500 hover:to-blue-400 text-white rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider text-sm"
              >
                {isProcessing ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Authorize Provision'}
              </button>
            </motion.div>
          )}

          {/* Step 3: Success */}
          {step === 3 && (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center text-center py-6">
              <div className="w-20 h-20 bg-cyan-500/20 rounded-full flex items-center justify-center mb-6 border border-cyan-500/30 text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-3 tracking-tight font-display uppercase">Provision Authorized</h3>
              <p className="text-slate-300 mb-8 leading-relaxed font-mono text-sm max-w-[250px]">
                Infrastructure allocation confirmed on the Base network. Welcome to the Coalition.
              </p>
              <button 
                onClick={onClose}
                className="w-full py-4 bg-transparent border border-cyan-500/30 hover:bg-cyan-500/10 text-cyan-300 rounded-xl font-bold transition-all uppercase tracking-wider text-sm shadow-[0_0_15px_rgba(6,182,212,0.1)]"
              >
                Terminate Session
              </button>
            </motion.div>
          )}
          
          {/* Close button for non-success states */}
          {step !== 3 && (
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors p-2"
            >
              ✕
            </button>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

// --- Data ---
const tokenomics = [
  { label: "Infrastructure Deployment Fund", percentStr: "40%", value: 40, color: "from-blue-400 to-blue-600", hex: "#3b82f6", width: "w-[40%]", description: "Strictly allocated to capitalize real-world engineering, automated construction, and global energy integration." },
  { label: "Governance & Ecosystem", percentStr: "30%", value: 30, color: "from-emerald-400 to-emerald-600", hex: "#10b981", width: "w-[30%]", description: "Distributed to institutions and citizens securing robust, decentralized operational protocol governance." },
  { label: "Network Liquidity (Locked)", percentStr: "15%", value: 15, color: "from-cyan-400 to-cyan-600", hex: "#06b6d4", width: "w-[15%]", description: "Algorithmically locked liquidity pools ensuring perpetual market access and systemic stability." },
  { label: "Core Protocol Developers", percentStr: "10%", value: 10, color: "from-purple-400 to-purple-600", hex: "#a855f7", width: "w-[10%]", description: "Cryptographically locked under a rigid 4-year linear vesting schedule aligned with planetary civilization goals." },
  { label: "Contributor Incentives", percentStr: "5%", value: 5, color: "from-amber-400 to-amber-600", hex: "#f59e0b", width: "w-[5%]", description: "Programmatic rewards for AI trainers, open-source engineers, and early civic integrators." },
];

const faqs = [
  { q: "What is the $NEXUS ecosystem?", a: "$NEXUS is an infrastructure coordination and ecosystem participation token supporting future sustainable urban development systems. It acts as the decentralized ledger mapping resource allocation for our global smart city architecture." },
  { q: "What is the primary utility of the token?", a: "$NEXUS functions as the underlying settlement layer for infrastructure access, enabling stakeholders to participate in decentralized governance, automated lease agreements, energy exchange credits, and planetary resource planning." },
  { q: "Why is $NEXUS deployed on the Base blockchain?", a: "To ensure institutional-grade settlement. Base (incubated by Coinbase) is a highly secure Ethereum Layer-2 that provides near-lightspeed transactions with negligible gas friction—mandatory for high-frequency smart city micro-transactions." },
  { q: "How is the development treasury audited?", a: "We utilize rigorous blockchain forensics and smart contract frameworks deployed via thirdweb. All infrastructure deployment funds (40%) are publicly trackable on-chain to ensure zero corruption and complete adherence to the Type I civilization roadmap." },
  { q: "Can I participate in infrastructure governance?", a: "Yes. The $NEXUS protocol integrates a decentralized autonomous governance module, permitting active stakeholders to vote on critical civic upgrades, infrastructure zoning, and AI priority frameworks." },
  { q: "How are real-world assets tokenized?", a: "Physical assets (e.g., modular housing, energy arrays) are encapsulated in zero-knowledge verified Ricardian contracts. These legally-binding digital twins are then fractionalized or managed natively on the blockchain, eliminating legacy bureaucratic friction." }
];

const platforms = [
  { name: "thirdweb", desc: "Audited smart contracts and seamless deployment SDKs." },
  { name: "Alchemy", desc: "Robust API infrastructure for ultra-reliable blockchain data." },
  { name: "Infura", desc: "Trusted Ethereum and L2 node API infrastructure." },
  { name: "Moralis", desc: "Web3 APIs for cross-chain authentication and balances." },
  { name: "QuickNode", desc: "Lightning-fast RPC node providers for scaling dApps." },
  { name: "Crossmint", desc: "APIs for seamless NFT mints and fiat onboarding." },
  { name: "Magic", desc: "Passwordless Web3 onboarding allowing email wallet creation." },
  { name: "Biconomy", desc: "Account Abstraction and gasless transactions API." },
  { name: "Privy", desc: "Embedded wallets for seamless mainstream user onboarding." },
  { name: "Gelato Network", desc: "Web3 automation for executing recurring contract tasks." },
  { name: "Chainlink", desc: "Decentralized oracles bringing real-world data on-chain." },
  { name: "The Graph", desc: "Indexing protocol for querying data efficiently via GraphQL." },
  { name: "Pinata", desc: "IPFS pinning service for immutable decentralized storage." },
  { name: "Tenderly", desc: "Smart contract monitoring, simulation, and debugging APIs." },
  { name: "Sequence", desc: "Robust Web3 wallet stack built for gamification and metaverse." },
  { name: "Syndicate", desc: "APIs for investment DAOs and scaling tokenized capital." },
  { name: "Fireblocks", desc: "Enterprise-grade digital asset custody and tokenization sandbox." },
  { name: "Tokeny", desc: "Compliance-first APIs bridging real-world assets securely." },
  { name: "Polymath", desc: "Security token environments streamlining regulatory compliance." },
  { name: "Securitize", desc: "End-to-end platform for tokenizing real-world financial assets." }
];

const rwaBlueprints = [
  "Sovereign Power Infrastructure (Universal HVDC Grids)",
  "Planetary Water Security Bonds (Desalination Pipelines)",
  "Smart City Residential Hubs (Modular Ecosystems)",
  "Next-Gen Autonomous Habitats (Floating Cities)",
  "Decentralized Infrastructure Debt (Municipal Bonds)",
  "Open-Source AI Governance Nodes (Compute Allocation)",
  "Equatorial Solar Swarm Arrays (Automated Tariffs)",
  "Digital Civic Identity & Access (Zero-Knowledge Pass)",
  "Automated Supply Chain Corridors (Drone Logistics)",
  "Oceanic Waste Reutilization Plants (Carbon Credits)",
  "Planetary Atmospheric Scrubbers (Verified Extraction)",
  "Borderless Medical Facilities (Decentralized Healthcare)",
  "Public-Good Quantum Compute Nodes (Shared Processing)",
  "Sovereign Biosphere Protections (Regenerative Finance)",
  "Intercontinental Transit Corridors (High-Speed Maglev)",
  "Smart City IoT Grids (Sentient City Metaverses)",
  "Zero-Scarcity Agricultural Yields (Robotic Agritech Hubs)",
  "Digital Twin Real Estate Mapping (Spatial Planning)",
  "Universal Knowledge Architectures (Open Education)"
];

const bgImages = [
  "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop", // Blockchain
  "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=2000&auto=format&fit=crop", // Orbit
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop", // Earth
  "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2000&auto=format&fit=crop"  // Sci Fi City
];

// --- Main Page ---

export default function TokenPage() {
  const [buyModalOpen, setBuyModalOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] relative overflow-hidden pt-20 md:pt-32 pb-20 md:pb-32 font-sans">
      <BuyNexusModal isOpen={buyModalOpen} onClose={() => setBuyModalOpen(false)} />

      {/* Dynamic Thematic Background Image/Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <AnimatePresence mode="wait">
           <motion.img 
              key={currentBg}
              src={bgImages[currentBg]}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 0.15, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
              alt="Tokenomics background"
              className="absolute inset-0 w-full h-full object-cover mix-blend-screen mix-blend-luminosity object-center opacity-30"
              referrerPolicy="no-referrer"
           />
         </AnimatePresence>
         <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/80 via-[#020617]/90 to-[#020617]"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent"></div>
      </div>

      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-400/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 w-full max-w-7xl">
        
        {/* --- Hero Section --- */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mb-8"
          >
            <div className="absolute inset-0 bg-cyan-500/20 blur-[40px] rounded-full"></div>
            <Hexagon className="w-32 h-32 text-cyan-400 relative z-10 drop-shadow-[0_0_30px_rgba(6,182,212,0.8)]" strokeWidth={0.5} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm mb-6 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <Coins className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-bold text-cyan-300 tracking-widest uppercase font-mono">Civic Coordination Layer</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight uppercase font-display">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">$NEXUS</span> Ecosystem
            </h1>
            <p className="text-slate-300 max-w-3xl mx-auto text-xl leading-relaxed mb-10">
              An infrastructure coordination and ecosystem participation token supporting future sustainable urban development systems. Built to scale the deployment of AI cities and global resource networks.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-500 hover:from-cyan-500 hover:to-blue-400 text-white rounded-lg font-bold text-sm transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] flex items-center justify-center gap-3 w-full sm:w-auto uppercase tracking-wider">
                Explore Protocol Data <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setBuyModalOpen(true)}
                className="px-8 py-4 bg-transparent border border-cyan-400 hover:bg-cyan-500/10 text-cyan-300 rounded-lg font-bold text-sm transition-all shadow-[0_0_15px_rgba(6,182,212,0.1)] flex items-center justify-center gap-3 w-full sm:w-auto uppercase tracking-wider"
              >
                Access Network <Wallet className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* --- Smart Contract Info Grid --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md hover:bg-white/10 transition-colors shadow-[0_0_20px_rgba(0,0,0,0.3)]">
            <LineChart className="w-8 h-8 text-cyan-400 mb-4 drop-shadow-md" />
            <div className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-1 font-mono">Network Supply</div>
            <div className="text-3xl font-black text-white font-display">10 Trillion</div>
            <div className="text-xs text-cyan-500 mt-2 font-mono">10,000,000,000,000 $NEXUS</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md hover:bg-white/10 transition-colors shadow-[0_0_20px_rgba(0,0,0,0.3)]">
            <Layers className="w-8 h-8 text-blue-400 mb-4 drop-shadow-md" />
            <div className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-1 font-mono">Settlement Layer</div>
            <div className="text-3xl font-black text-white font-display">Base Network</div>
            <div className="text-xs text-blue-500 mt-2 font-mono">Ethereum L2 Scaling</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md hover:bg-white/10 transition-colors shadow-[0_0_20px_rgba(0,0,0,0.3)]">
            <Cpu className="w-8 h-8 text-indigo-400 mb-4 drop-shadow-md" />
            <div className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-1 font-mono">Contract Logic</div>
            <div className="text-3xl font-black text-white font-display">thirdweb</div>
            <div className="text-xs text-indigo-500 mt-2 font-mono">Audited EVM Standards</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md hover:bg-white/10 transition-colors shadow-[0_0_20px_rgba(0,0,0,0.3)]">
            <Zap className="w-8 h-8 text-emerald-400 mb-4 drop-shadow-md" />
            <div className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-1 font-mono">Primary Function</div>
            <div className="text-3xl font-black text-white font-display">Civic Governance</div>
            <div className="text-xs text-emerald-500 mt-2 font-mono">Ecosystem resource allocation</div>
          </div>
        </motion.div>

        {/* --- Tokenomics Section --- */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase font-display">Resource Distribution Model</h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">A fully transparent mathematical framework ensuring resources strictly flow into compounding planetary infrastructure and technological acceleration.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center bg-[#0f172a]/80 border border-white/10 rounded-3xl p-4 md:p-8 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.5)]">
            {/* Pie Chart */}
            <div className="h-[300px] md:h-[400px] w-full relative content-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <RechartsTooltip 
                    contentStyle={{ backgroundColor: '#020617', border: '1px solid rgba(6,182,212,0.2)', borderRadius: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.8)' }}
                    itemStyle={{ color: '#fff', fontWeight: 'bold' }}
                    formatter={(value: number) => [`${value}%`, 'Allocation']}
                  />
                  <Pie
                    data={tokenomics}
                    cx="50%"
                    cy="50%"
                    innerRadius={110}
                    outerRadius={160}
                    paddingAngle={3}
                    dataKey="value"
                    stroke="none"
                  >
                    {tokenomics.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.hex} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <div className="text-center">
                   <div className="text-white text-4xl font-black font-display tracking-wider">10T</div>
                   <div className="text-cyan-400 text-xs uppercase tracking-widest font-bold font-mono mt-1">Total Supply</div>
                 </div>
              </div>
            </div>

            {/* Visual Bar & Legend */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-8 uppercase font-display">Network Allocation</h3>
              
              {/* Interactive Bar */}
              <div className="h-6 w-full rounded-md flex overflow-hidden mb-12 border border-white/10 bg-[#020617] relative shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]">
                {tokenomics.map((item, idx) => (
                  <div key={idx} className={`h-full bg-gradient-to-r ${item.color} ${item.width} group/bar relative cursor-pointer hover:brightness-125 transition-all border-r border-[#0f172a]/80 last:border-0`}>
                     {/* Tooltip */}
                     <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 bg-[#020617] border border-cyan-500/30 text-white text-sm rounded-xl p-4 opacity-0 group-hover/bar:opacity-100 transition-opacity pointer-events-none z-20 shadow-[0_0_20px_rgba(6,182,212,0.2)] scale-95 group-hover/bar:scale-100">
                        <div className="font-bold text-lg mb-1 flex items-center gap-2 font-mono text-cyan-300">
                           <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.hex }}></div>
                           {item.percentStr}
                        </div>
                        <div className="font-bold text-white mb-2 uppercase text-xs tracking-wider">{item.label}</div>
                        <div className="text-slate-400 text-xs leading-relaxed">{item.description}</div>
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 border-8 border-transparent border-t-[#020617]"></div>
                     </div>
                  </div>
                ))}
              </div>

              {/* Legend Grid */}
              <div className="space-y-4">
                {tokenomics.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors shadow-none hover:shadow-[0_0_15px_rgba(6,182,212,0.05)]">
                    <div className={`w-12 h-12 shrink-0 rounded-lg bg-gradient-to-br flex items-center justify-center font-bold text-white text-sm font-mono shadow-lg ${item.color}`}>
                      {item.percentStr}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base uppercase tracking-wide">{item.label}</h4>
                      <p className="text-slate-400 text-xs mt-1 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- Why Base & Thirdweb --- */}
        <div className="mb-32">
          <h3 className="text-4xl font-bold text-white text-center mb-12 uppercase font-display">Institutional Grade Protocol Substrate</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-10 rounded-3xl border border-blue-500/20 bg-gradient-to-b from-blue-500/10 to-transparent hover:border-blue-400/40 transition-all shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              <Layers className="w-12 h-12 text-blue-400 mb-6 drop-shadow-md" />
              <h4 className="text-3xl font-bold text-white mb-4 uppercase font-display">Base Architecture (L2)</h4>
              <p className="text-slate-300 text-lg leading-relaxed">
                Deployed on Base—an Ethereum Layer-2 incubated by Coinbase. We mandate a baseline of near-lightspeed settlement finality and fractional-cent transaction overhead. This is non-negotiable for facilitating high-frequency smart city micro-transactions, automated grid payments, and civic participation without gas friction.
              </p>
            </div>
            <div className="p-10 rounded-3xl border border-indigo-500/20 bg-gradient-to-b from-indigo-500/10 to-transparent hover:border-indigo-400/40 transition-all shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              <ShieldCheck className="w-12 h-12 text-indigo-400 mb-6 drop-shadow-md" />
              <h4 className="text-3xl font-bold text-white mb-4 uppercase font-display">thirdweb Integrity</h4>
              <p className="text-slate-300 text-lg leading-relaxed">
                Foundational logic is anchored using thirdweb's ruthlessly vetted smart contract libraries. By relying on industry-standard, rigorously audited EVM codebases, we ensure systemic immunity against exploits, enabling safe, trustless interactions across the entire NEXUS global ecosystem.
              </p>
            </div>
          </div>
        </div>

        {/* --- Omni-Asset Ricardian Tokenization Engine --- */}
        <div className="mb-32">
           <div className="text-center mb-16 px-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm mb-6 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-bold text-cyan-300 tracking-widest uppercase font-mono">Infrastructure Capitalization</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase font-display">Omni-Asset Automation Engine</h2>
              <p className="text-slate-300 text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
                 A conceptual framework for instantly mapping real-world infrastructure and corporate equity onto an immutable ledger. 
                 By enveloping physical development data in Ricardian wrappers, we model transparent, mathematically assured capital coordination.
              </p>
           </div>
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 px-4 md:px-0">
              {/* Tokenization Engine Dashboard */}
              <div className="p-8 rounded-3xl bg-[#020617]/80 border border-white/10 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.6)]">
                 <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white shadow-lg">
                      <Lock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white uppercase tracking-wide">Generate Asset Twin</h3>
                      <p className="text-xs text-cyan-400 font-mono tracking-wider">Zero-Knowledge Verification Logic</p>
                    </div>
                 </div>
                 
                 <div className="space-y-6">
                    <div>
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono block mb-2">Select Architecture Blueprint</label>
                      <select className="w-full bg-[#0f172a] border border-white/10 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 appearance-none font-mono text-sm">
                         {rwaBlueprints.map((bp, idx) => (
                           <option key={idx} value={idx}>{bp}</option>
                         ))}
                      </select>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                       <div>
                          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono block mb-2">Estimated Capital (USD)</label>
                          <input type="text" placeholder="$1,000,000,000" className="w-full bg-[#0f172a] border border-white/10 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 font-mono text-sm" />
                       </div>
                       <div>
                          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono block mb-2">Regulatory Zone</label>
                          <select className="w-full bg-[#0f172a] border border-white/10 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 appearance-none font-mono text-sm">
                             <option>International (Reg S Default)</option>
                             <option>Swiss FINMA Framework</option>
                             <option>US SEC (Reg D Exempt)</option>
                             <option>UAE VARA Compliance</option>
                          </select>
                       </div>
                    </div>

                    <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-xl p-4 flex gap-4 items-start mt-8">
                       <FileText className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                       <div>
                          <h4 className="text-cyan-300 font-bold mb-1 text-sm uppercase tracking-wide">Cryptographically Binding</h4>
                          <p className="text-xs text-slate-400 leading-relaxed font-mono">Simulates the generation of a legally binding digital twin mapped to the $NEXUS protocol, modeling fractional ownership capabilities with absolute transparency.</p>
                       </div>
                    </div>

                    <button className="w-full py-4 bg-transparent border border-cyan-500 hover:bg-cyan-500/10 text-cyan-300 rounded-lg font-bold transition-all shadow-[0_0_15px_rgba(6,182,212,0.1)] flex items-center justify-center gap-3 uppercase tracking-widest text-xs mt-4">
                       Initialize Contract Simulation <CheckCircle2 className="w-4 h-4" />
                    </button>
                 </div>
              </div>

              {/* Supported Integration Platforms */}
              <div className="p-8 rounded-3xl bg-[#020617]/50 border border-white/10 backdrop-blur-xl flex flex-col shadow-[0_0_40px_rgba(0,0,0,0.6)]">
                 <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/30">
                      <Database className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white uppercase tracking-wide">Ecosystem API Aggregation</h3>
                 </div>
                 <p className="text-slate-400 mb-6 text-sm leading-relaxed font-mono">
                   NEXUS CIVITAS relies on a robust constellation of highly secure, audited Web3 infrastructure providers to ensure operational continuity and sovereign data integrity.
                 </p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1 overflow-y-auto pr-2 custom-scrollbar">
                    {platforms.map((plat, idx) => (
                      <div key={idx} className="p-4 bg-[#0f172a]/30 rounded-lg border border-white/5 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all cursor-crosshair group">
                        <h4 className="text-white font-bold mb-1 text-sm group-hover:text-cyan-300 transition-colors tracking-wide">{plat.name}</h4>
                        <p className="text-slate-500 text-xs leading-relaxed font-mono">{plat.desc}</p>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>

        {/* Vision Slideshow */}
        <VisionSlideshow />

        {/* --- Genesis Partner Monetization Program --- */}
        <div className="mb-32 max-w-6xl mx-auto pt-24">
           <div className="p-10 md:p-14 rounded-3xl bg-gradient-to-b from-[#0f172a] to-[#020617] border border-cyan-500/20 backdrop-blur-xl shadow-[0_0_50px_rgba(6,182,212,0.15)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/10 blur-[100px] rounded-full pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>
              
              <div className="relative z-10 text-center mb-12">
                 <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase font-display">Global Implementation Partners</h2>
                 <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
                   The NEXUS ecosystem is designed for compounding acceleration. We are establishing frameworks for municipalities, developers, and technological integrators to participate in the infrastructure mesh.
                 </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                 <div className="bg-[#020617]/50 border border-white/10 rounded-2xl p-8 hover:border-cyan-500/40 transition-colors shadow-xl group">
                    <Share2 className="w-10 h-10 text-cyan-400 mb-6 group-hover:scale-110 transition-transform" />
                    <h4 className="text-lg font-bold text-white mb-3 uppercase tracking-wide">Network Propagation</h4>
                    <p className="text-slate-400 text-sm leading-relaxed font-mono">Facilitating the integration of localized sustainable models and establishing secure data feeds for infrastructure telemetry mapping.</p>
                 </div>
                 <div className="bg-[#020617]/50 border border-white/10 rounded-2xl p-8 hover:border-blue-500/40 transition-colors shadow-xl group">
                    <Building2 className="w-10 h-10 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
                    <h4 className="text-lg font-bold text-white mb-3 uppercase tracking-wide">Municipal Deployment</h4>
                    <p className="text-slate-400 text-sm leading-relaxed font-mono">Providing modular frameworks for civic administrators to rapidly adopt AI governance protocols and localized asset tokenization.</p>
                 </div>
                 <div className="bg-[#020617]/50 border border-white/10 rounded-2xl p-8 hover:border-indigo-500/40 transition-colors shadow-xl group">
                    <Rocket className="w-10 h-10 text-indigo-400 mb-6 group-hover:scale-110 transition-transform" />
                    <h4 className="text-lg font-bold text-white mb-3 uppercase tracking-wide">Protocol Development</h4>
                    <p className="text-slate-400 text-sm leading-relaxed font-mono">Open-source alignment for engineers building automated construction robotics, energy optimization models, and civic AI interfaces.</p>
                 </div>
              </div>
           </div>
        </div>

        {/* --- FAQ Section --- */}
        <div className="max-w-4xl mx-auto border-t border-white/10 pt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase font-display">System Overview</h2>
            <p className="text-slate-400 text-lg font-mono">Core parameters of the $NEXUS coordination ledger.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isExpanded = expandedFaq === idx;
              return (
                <div 
                  key={idx} 
                  onClick={() => setExpandedFaq(isExpanded ? null : idx)}
                  className={`bg-[#0f172a]/50 border border-white/10 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-cyan-500/30 ${isExpanded ? 'border-cyan-500/50 bg-cyan-900/10 shadow-[0_0_20px_rgba(6,182,212,0.1)]' : ''}`}
                >
                  <div className="p-6 flex items-center justify-between gap-4">
                    <h4 className={`text-sm md:text-base font-bold transition-colors uppercase tracking-wide ${isExpanded ? 'text-white' : 'text-slate-300'}`}>
                      {faq.q}
                    </h4>
                    <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-cyan-400' : 'text-slate-500'}`} />
                  </div>
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-2 text-slate-400 leading-relaxed border-t border-white/5 font-mono text-sm max-w-3xl">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
