import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Lock, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';

interface InvestorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InvestorModal({ isOpen, onClose }: InvestorModalProps) {
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState<'idle' | 'error' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hardcoded password for demonstration
    if (password === 'NEXUS2026') {
      setStatus('success');
      setTimeout(() => {
        // Simulate redirect or access granted
        setStatus('idle');
        setPassword('');
        onClose();
        alert("Access Granted. Welcome to the Nexus Civitas Investor Portal.");
      }, 1500);
    } else {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
          />
          
          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-[101] pointer-events-none px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-md bg-[#0f172a] border border-white/10 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden pointer-events-auto relative"
            >
              {/* Close Button */}
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8">
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-6 border border-blue-500/20">
                  <Lock className="w-6 h-6 text-blue-400" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2 font-display">Investor Portal</h3>
                <p className="text-slate-400 text-sm mb-8">
                  This area is restricted to qualified institutional partners. Please enter your access code to view the data room and financial models.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <div className="relative">
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter Access Code"
                        className={`w-full bg-black/50 border ${status === 'error' ? 'border-red-500/50 focus:border-red-500' : status === 'success' ? 'border-green-500/50 focus:border-green-500' : 'border-white/10 focus:border-blue-500'} rounded-lg px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none transition-colors font-mono`}
                      />
                      {status === 'error' && (
                        <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-red-500" />
                      )}
                      {status === 'success' && (
                        <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
                      )}
                    </div>
                    {status === 'error' && (
                      <p className="text-red-400 text-xs mt-2 font-mono">Invalid access code. Please try again.</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'success'}
                    className={`w-full py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${
                      status === 'success' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-white text-black hover:bg-gray-200'
                    }`}
                  >
                    {status === 'success' ? 'Authenticating...' : 'Access Data Room'}
                    {status !== 'success' && <ArrowRight className="w-4 h-4" />}
                  </button>
                </form>
                
                <div className="mt-6 pt-6 border-t border-white/10 text-center">
                  <p className="text-xs text-slate-500">
                    Don't have an access code? <a href="#" className="text-blue-400 hover:underline">Request access</a>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
