/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Hero from './components/Hero';
import CorePillars from './components/CorePillars';
import ElevatedSystem from './components/ElevatedSystem';
import Masterplan from './components/Masterplan';
import GhanaPilot from './components/GhanaPilot';
import GlobalVision from './components/GlobalVision';
import TechLayer from './components/TechLayer';
import Investment from './components/Investment';
import CTA from './components/CTA';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import InvestorModal from './components/InvestorModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-nexus-bg min-h-screen text-slate-300 selection:bg-nexus-blue/30 selection:text-white">
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <main>
        <Hero onOpenModal={() => setIsModalOpen(true)} />
        <CorePillars />
        <ElevatedSystem />
        <Masterplan />
        <GhanaPilot />
        <GlobalVision />
        <TechLayer />
        <Investment />
        <CTA />
      </main>
      <Footer />
      <InvestorModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}



