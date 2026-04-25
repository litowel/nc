/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import InvestorModal from './components/InvestorModal';
import HomePage from './pages/HomePage';
import CivilizationPage from './pages/CivilizationPage';
import StakeholdersPage from './pages/StakeholdersPage';
import TokenPage from './pages/TokenPage';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Router>
      <div className="bg-nexus-bg min-h-screen text-slate-300 selection:bg-nexus-blue/30 selection:text-white">
        <Navbar onOpenModal={() => setIsModalOpen(true)} />
        <Routes>
          <Route path="/" element={<HomePage onOpenModal={() => setIsModalOpen(true)} />} />
          <Route path="/civilization/:typeId" element={<CivilizationPage />} />
          <Route path="/stakeholders" element={<StakeholdersPage />} />
          <Route path="/token" element={<TokenPage />} />
        </Routes>
        <Footer />
        <InvestorModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </Router>
  );
}







