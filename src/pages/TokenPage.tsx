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
          className="relative w-full max-w-md bg-[#1e293b] border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden"
        >
          {/* Step 1: Connect Wallet */}
          {step === 1 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/30 text-blue-400">
                <Wallet className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Connect Wallet</h3>
              <p className="text-slate-400 mb-8">Connect your Web3 wallet to access the $NEXUS presale.</p>
              <button 
                onClick={handleConnectWallet}
                disabled={isProcessing}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isProcessing ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Connect MetaMask / Trust'}
              </button>
            </motion.div>
          )}

          {/* Step 2: Select Amount */}
          {step === 2 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold text-white">Buy $NEXUS</h3>
                <div className="text-sm text-emerald-400 font-mono bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20">Connected</div>
              </div>
              <div className="mb-6">
                <label className="text-sm text-slate-400 font-bold mb-2 block uppercase tracking-wider">Amount to Purchase (USD)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">$</span>
                  <input 
                    type="number" 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="1000"
                    className="w-full bg-[#0f172a] border border-white/10 rounded-xl py-4 pl-10 pr-4 text-white text-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-mono"
                  />
                </div>
                {amount && !isNaN(Number(amount)) && (
                  <div className="mt-3 text-sm text-blue-300 font-medium flex justify-between">
                    <span>You will receive approximately:</span>
                    <span className="font-mono font-bold">{(Number(amount) * 100).toLocaleString()} NEX</span>
                  </div>
                )}
              </div>
              <button 
                onClick={handlePurchase}
                disabled={isProcessing || !amount}
                className="w-full py-4 bg-gradient-to-r from-emerald-600 to-emerald-400 hover:from-emerald-500 hover:to-emerald-300 text-white rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Confirm Transaction'}
              </button>
            </motion.div>
          )}

          {/* Step 3: Success */}
          {step === 3 && (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center text-center py-6">
              <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6 border border-emerald-500/30 text-emerald-400">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-3 tracking-tight">Success!</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Your transaction has been confirmed on the Base network. Welcome to the Planetary Coalition.
              </p>
              <button 
                onClick={onClose}
                className="w-full py-4 bg-white/10 hover:bg-white/20 border border-white/10 text-white rounded-xl font-bold transition-all"
              >
                Close & Return
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
  { label: "Planetary Initiatives Fund", percentStr: "40%", value: 40, color: "from-blue-400 to-blue-600", hex: "#3b82f6", width: "w-[40%]", description: "Strictly allocated to fund real-world Mega-Initiatives like free housing and clean energy globally." },
  { label: "Public ICO & Community", percentStr: "30%", value: 30, color: "from-emerald-400 to-emerald-600", hex: "#10b981", width: "w-[30%]", description: "Distributed to the public securing robust, decentralized governance." },
  { label: "Liquidity Pool (Locked)", percentStr: "15%", value: 15, color: "from-cyan-400 to-cyan-600", hex: "#06b6d4", width: "w-[15%]", description: "Locked dynamically via smart contracts to guarantee market stability." },
  { label: "Core Team & Founders", percentStr: "10%", value: 10, color: "from-purple-400 to-purple-600", hex: "#a855f7", width: "w-[10%]", description: "Subject to a rigid 4-year linear vesting schedule to align long-term motives." },
  { label: "Ecosystem Rewards", percentStr: "5%", value: 5, color: "from-amber-400 to-amber-600", hex: "#f59e0b", width: "w-[5%]", description: "Incentives for open-source devs, early validators, and ambassadors." },
];

const faqs = [
  { q: "What is the $NEXUS token?", a: "$NEXUS is a global utility and governance token deployed to fund and govern the transition to a Type I planetary civilization. It acts as the financial engine for our Mega-Initiatives." },
  { q: "How does the Airdrop mechanism work?", a: "To ensure long-term ecosystem health, airdropped tokens given to early supporters are seamlessly vested in a smart contract and unlock gradually over time, preventing sudden sell-offs while rewarding loyalty." },
  { q: "Why is $NEXUS deployed on the Base blockchain?", a: "Base, incubated by Coinbase, is a secure, low-cost Layer-2 built on Ethereum. It provides lightning-fast transactions with virtually zero gas friction, essential for micro-funding global projects." },
  { q: "What role does thirdweb play in deployment?", a: "We leverage thirdweb's rigorously audited smart contracts for ultra-secure deployment, ICO distribution, staking mechanics, and transparent treasury management without compromising on safety." },
  { q: "How exactly will the ICO funds be used?", a: "40% of all supply is strictly locked into the Planetary Initiatives Fund. These funds are publicly trackable on-chain and are directly funneled into building sustainable housing, advanced energy grids, and global education hubs." },
  { q: "Can I govern projects with $NEXUS?", a: "Yes. $NEXUS incorporates a robust DAO structure allowing token holders to vote proportionally on the prioritization and geographical placement of the 20 Mega-Initiatives." },
  { q: "When does the public ICO go live?", a: "Exact dates are forthcoming. However, you can currently simulate the presale experience using the interactive dashboard to secure your spot alongside initial partners." }
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
  "Global Disease Eradication Bounty Protocol (IPFS Genetics)",
  "Next-Gen Autonomous Habitats (Floating Cities)",
  "Decentralized Sovereign Wealth Fund (Debt Liquidation)",
  "Open-Source AI Governance Nodes (Super-Intelligence DAO)",
  "Equatorial Solar Swarm Arrays (Gelato Automation)",
  "Universal Digital Identity & UBI (Proof-of-Humanity Streams)",
  "Extra-Planetary Resource Claims (Asteroid Mining Vaults)",
  "Oceanic Waste Reutilization Plants (Chainlink CCIP)",
  "Orbital Defense & Resource Arrays (Sovereign Shields)",
  "Borderless Medical Facilities (zk-SNARK Authenticated)",
  "Public-Good Quantum Compute Nodes (Decentralized Compute)",
  "Sovereign Biosphere Protections (Rainforest/Amazon Bonds)",
  "Verified Carbon Extraction Assets (Atmospheric Scrubbers)",
  "Intercontinental Transit Corridors (High-Speed Maglev)",
  "Smart City IoT Grids (Sentient City Metaverses)",
  "Zero-Scarcity Agricultural Yields (Robotic Agritech Hubs)",
  "Deep-Space Venture Equity (Permissionless Propulsion)",
  "Universal Knowledge Architectures (Empathy/Education SBTs)"
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
              animate={{ opacity: 0.25, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
              alt="Tokenomics background"
              className="absolute inset-0 w-full h-full object-cover mix-blend-screen object-center"
              referrerPolicy="no-referrer"
           />
         </AnimatePresence>
         <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/70 via-[#020617]/90 to-[#020617]"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-transparent to-transparent"></div>
      </div>

      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-400/10 rounded-full blur-[150px]"></div>
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
            <div className="absolute inset-0 bg-blue-500/30 blur-[40px] rounded-full"></div>
            <Hexagon className="w-32 h-32 text-blue-400 relative z-10 drop-shadow-[0_0_30px_rgba(59,130,246,0.8)]" strokeWidth={1} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm mb-6">
              <Coins className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-bold text-blue-300 tracking-widest uppercase">Official ICO Presale Active</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">$NEXUS</span> Token
            </h1>
            <p className="text-slate-300 max-w-3xl mx-auto text-xl leading-relaxed mb-10">
              Powering the profound transition to a Type I Planetary Civilization. Deployed on the <strong className="text-white">Base Blockchain</strong> via <strong className="text-white">thirdweb</strong>, $NEXUS is the decentralized economic engine driving global peace and universal human progress.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white rounded-full font-bold text-lg transition-all shadow-[0_0_30px_rgba(59,130,246,0.3)] flex items-center justify-center gap-3 w-full sm:w-auto">
                Join the Presale <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setBuyModalOpen(true)}
                className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white rounded-full font-bold text-lg transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)] flex items-center justify-center gap-3 w-full sm:w-auto"
              >
                Buy $NEXUS <Wallet className="w-5 h-5" />
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
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md hover:bg-white/10 transition-colors">
            <LineChart className="w-8 h-8 text-blue-400 mb-4" />
            <div className="text-sm text-slate-400 uppercase tracking-wider font-bold mb-1">Total Supply</div>
            <div className="text-2xl font-black text-white">10 Trillion</div>
            <div className="text-xs text-blue-300 mt-2">10,000,000,000,000 $NEXUS</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md hover:bg-white/10 transition-colors">
            <Layers className="w-8 h-8 text-cyan-400 mb-4" />
            <div className="text-sm text-slate-400 uppercase tracking-wider font-bold mb-1">Blockchain</div>
            <div className="text-2xl font-black text-white">Base Network</div>
            <div className="text-xs text-cyan-300 mt-2">Layer 2 Ethereum scaling</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md hover:bg-white/10 transition-colors">
            <Cpu className="w-8 h-8 text-purple-400 mb-4" />
            <div className="text-sm text-slate-400 uppercase tracking-wider font-bold mb-1">Deployment</div>
            <div className="text-2xl font-black text-white">thirdweb</div>
            <div className="text-xs text-purple-300 mt-2">Audited Smart Contracts</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md hover:bg-white/10 transition-colors">
            <Zap className="w-8 h-8 text-emerald-400 mb-4" />
            <div className="text-sm text-slate-400 uppercase tracking-wider font-bold mb-1">Initial Utility</div>
            <div className="text-2xl font-black text-white">Governance & Staking</div>
            <div className="text-xs text-emerald-300 mt-2">Vote on global initiatives</div>
          </div>
        </motion.div>

        {/* --- Tokenomics Section --- */}
        <div className="mb-32">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Tokenomics & Distribution</h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">A fully transparent distribution model mathematically ensuring the vast majority of tokens flow robustly into funding Type I mega-initiatives globally.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center bg-[#0f172a]/80 border border-white/10 rounded-3xl p-4 md:p-8 backdrop-blur-xl shadow-2xl">
            {/* Pie Chart */}
            <div className="h-[300px] md:h-[400px] w-full relative content-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <RechartsTooltip 
                    contentStyle={{ backgroundColor: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.5)' }}
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
                   <div className="text-white text-3xl font-black">10T</div>
                   <div className="text-blue-300 text-sm uppercase tracking-widest font-bold">Total Tokens</div>
                 </div>
              </div>
            </div>

            {/* Visual Bar & Legend */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-8">Allocation Breakdown</h3>
              
              {/* Interactive Bar */}
              <div className="h-8 w-full rounded-full flex overflow-hidden mb-12 border border-white/10 bg-white/5 relative">
                {tokenomics.map((item, idx) => (
                  <div key={idx} className={`h-full bg-gradient-to-r ${item.color} ${item.width} group/bar relative cursor-pointer hover:brightness-110 transition-all border-r border-[#0f172a]/50 last:border-0`}>
                     {/* Tooltip */}
                     <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 bg-[#1e293b] border border-white/10 text-white text-sm rounded-xl p-4 opacity-0 group-hover/bar:opacity-100 transition-opacity pointer-events-none z-20 shadow-2xl scale-95 group-hover/bar:scale-100">
                        <div className="font-bold text-lg mb-1 flex items-center gap-2">
                           <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.hex }}></div>
                           {item.percentStr}
                        </div>
                        <div className="font-semibold text-blue-300 mb-2">{item.label}</div>
                        <div className="text-slate-400 text-xs leading-relaxed">{item.description}</div>
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 border-8 border-transparent border-t-[#1e293b]"></div>
                     </div>
                  </div>
                ))}
              </div>

              {/* Legend Grid */}
              <div className="space-y-4">
                {tokenomics.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                    <div className={`w-14 h-14 shrink-0 rounded-xl bg-gradient-to-br flex items-center justify-center font-bold text-white text-lg shadow-lg ${item.color}`}>
                      {item.percentStr}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg">{item.label}</h4>
                      <p className="text-slate-400 text-sm mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- Why Base & Thirdweb --- */}
        <div className="mb-32">
          <h3 className="text-4xl font-bold text-white text-center mb-12">Built on World-Class Infrastructure</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-10 rounded-3xl border border-blue-500/20 bg-blue-500/5 hover:bg-blue-500/10 transition-colors">
              <Layers className="w-12 h-12 text-blue-400 mb-6" />
              <h4 className="text-3xl font-bold text-white mb-4">Base Blockchain</h4>
              <p className="text-slate-300 text-lg leading-relaxed">
                By deploying on Base—an Ethereum Layer-2 incubated by Coinbase—we guarantee incredibly low transaction fees, lightning-fast confirmation times, and bank-grade security. This allows micro-transactions to seamlessly fund global projects without gas fee friction eroding value.
              </p>
            </div>
            <div className="p-10 rounded-3xl border border-purple-500/20 bg-purple-500/5 hover:bg-purple-500/10 transition-colors">
              <ShieldCheck className="w-12 h-12 text-purple-400 mb-6" />
              <h4 className="text-3xl font-bold text-white mb-4">thirdweb Deployment</h4>
              <p className="text-slate-300 text-lg leading-relaxed">
                Utilizing thirdweb's immensely vetted and audited smart contracts guarantees our token is launched with absolute transparency. Their pre-built standards enable smooth governance staking, automated ICO distribution, and immediate DEX liquidity routing securely post-launch.
              </p>
            </div>
          </div>
        </div>

        {/* --- Omni-Asset Ricardian Tokenization Engine --- */}
        <div className="mb-32">
           <div className="text-center mb-16 px-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-sm mb-6">
                <Globe className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-bold text-emerald-300 tracking-widest uppercase">Trillion-Dollar RWA Market</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Omni-Asset Ricardian Tokenization Engine</h2>
              <p className="text-slate-300 text-base md:text-lg max-w-4xl mx-auto">
                 Instantly tokenize real-world assets, infrastructure, and corporate equity utilizing open-source Web3 protocols. 
                 Every minted asset is enveloped in an immutable, legally-binding Ricardian contract that mathematically prevents duplicate sales.
              </p>
           </div>
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 px-4 md:px-0">
              {/* Tokenization Engine Dashboard */}
              <div className="p-8 rounded-3xl bg-[#1e293b] border border-white/10 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                 <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white">
                      <Lock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Mint Global RWA</h3>
                      <p className="text-sm text-emerald-400">Secured via Immutable Legal Wrapper</p>
                    </div>
                 </div>
                 
                 <div className="space-y-6">
                    <div>
                      <label className="text-sm font-bold text-slate-400 uppercase tracking-wider block mb-2">Select Asset Blueprint</label>
                      <select className="w-full bg-[#0f172a] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-1 focus:ring-emerald-500 appearance-none">
                         {rwaBlueprints.map((bp, idx) => (
                           <option key={idx} value={idx}>{bp}</option>
                         ))}
                      </select>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                       <div>
                          <label className="text-sm font-bold text-slate-400 uppercase tracking-wider block mb-2">Valuation (USD)</label>
                          <input type="text" placeholder="$1,000,000,000" className="w-full bg-[#0f172a] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-1 focus:ring-emerald-500 font-mono" />
                       </div>
                       <div>
                          <label className="text-sm font-bold text-slate-400 uppercase tracking-wider block mb-2">Jurisdiction</label>
                          <select className="w-full bg-[#0f172a] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-1 focus:ring-emerald-500 appearance-none">
                             <option>International Waters (Reg S)</option>
                             <option>Swiss FINMA</option>
                             <option>US SEC (Reg D)</option>
                             <option>UAE VARA</option>
                          </select>
                       </div>
                    </div>

                    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 flex gap-4 items-start">
                       <FileText className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
                       <div>
                          <h4 className="text-emerald-400 font-bold mb-1">Legally Binding Assurance</h4>
                          <p className="text-sm text-slate-300">Generates a zero-knowledge verified smart contract binding the physical asset directly to the $NEXUS token wrapper, preventing multi-pledging or double-spend under international law.</p>
                       </div>
                    </div>

                    <button className="w-full py-4 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-3">
                       Generate RWA Smart Contract <CheckCircle2 className="w-5 h-5" />
                    </button>
                 </div>
              </div>

              {/* Supported Integration Platforms */}
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col">
                 <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                      <Database className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Regulated & Licensed API Integrations</h3>
                 </div>
                 <p className="text-slate-300 mb-6 leading-relaxed">
                   The Nexus Tokenization platform aggregates the world's most trusted, audited, and strictly regulated Web3 infrastructure APIs, enabling frictionless enterprise onboarding.
                 </p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1 overflow-y-auto pr-2 custom-scrollbar">
                    {platforms.map((plat, idx) => (
                      <div key={idx} className="p-4 bg-[#0f172a]/50 rounded-xl border border-white/5 hover:border-blue-500/30 transition-all cursor-pointer group">
                        <h4 className="text-white font-bold mb-1 group-hover:text-blue-400 transition-colors">{plat.name}</h4>
                        <p className="text-slate-400 text-xs leading-relaxed">{plat.desc}</p>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>

        {/* Vision Slideshow */}
        <VisionSlideshow />

        {/* --- Genesis Partner Monetization Program --- */}
        <div className="mb-32 max-w-5xl mx-auto">
           <div className="p-10 rounded-3xl bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-500/30 backdrop-blur-xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full"></div>
              
              <div className="relative z-10 text-center mb-10">
                 <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Genesis Partner Program</h2>
                 <p className="text-blue-200 text-lg">Monetize your network today. Earn compounding yields by onboarding visionary capital and infrastructure into the $NEXUS ecosystem.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                    <Share2 className="w-8 h-8 text-blue-400 mb-4" />
                    <h4 className="text-xl font-bold text-white mb-2">Smart Affiliates</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">Generate a unique on-chain referral ID. Receive 5% of all $NEXUS purchased through your portal, settled instantly via smart contract.</p>
                 </div>
                 <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                    <Building2 className="w-8 h-8 text-purple-400 mb-4" />
                    <h4 className="text-xl font-bold text-white mb-2">Whitelabel Licensing</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">Run a localized node of the Nexus RWA Engine. Charge custom percentage fees on real estate and infrastructure tokenizations in your region.</p>
                 </div>
                 <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                    <Rocket className="w-8 h-8 text-emerald-400 mb-4" />
                    <h4 className="text-xl font-bold text-white mb-2">Ambassador Airdrops</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">Educate local governments and corporations. Earn guaranteed, time-locked $NEXUS airdrops for verifiable enterprise onboarding.</p>
                 </div>
              </div>
           </div>
        </div>

        {/* --- FAQ Section --- */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-400 text-lg">Everything you need to know about the $NEXUS ecosystem.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isExpanded = expandedFaq === idx;
              return (
                <div 
                  key={idx} 
                  onClick={() => setExpandedFaq(isExpanded ? null : idx)}
                  className={`bg-white/5 border border-white/10 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:bg-white/10 hover:border-blue-500/30 ${isExpanded ? 'border-blue-500/50 bg-blue-900/10' : ''}`}
                >
                  <div className="p-6 flex items-center justify-between gap-4">
                    <h4 className={`text-lg font-bold transition-colors ${isExpanded ? 'text-white' : 'text-slate-200'}`}>
                      {faq.q}
                    </h4>
                    <ChevronDown className={`w-6 h-6 shrink-0 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-blue-400' : 'text-slate-500'}`} />
                  </div>
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-2 text-slate-300 leading-relaxed border-t border-white/5">
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
