import Hero from '../components/Hero';
import CorePillars from '../components/CorePillars';
import ElevatedSystem from '../components/ElevatedSystem';
import Masterplan from '../components/Masterplan';
import TechnicalSpecs from '../components/TechnicalSpecs';
import ProposedProjects from '../components/ProposedProjects';
import GlobalVision from '../components/GlobalVision';
import CivilizationStages from '../components/CivilizationStages';
import OpenSourceInitiative from '../components/OpenSourceInitiative';
import TechLayer from '../components/TechLayer';
import Investment from '../components/Investment';
import TokenBanner from '../components/TokenBanner';
import CTA from '../components/CTA';

interface HomePageProps {
  onOpenModal: () => void;
}

export default function HomePage({ onOpenModal }: HomePageProps) {
  return (
    <main>
      <Hero onOpenModal={onOpenModal} />
      <CorePillars />
      <ElevatedSystem />
      <Masterplan />
      <TokenBanner />
      <TechnicalSpecs />
      <ProposedProjects />
      <GlobalVision />
      <CivilizationStages />
      <OpenSourceInitiative />
      <TechLayer />
      <Investment />
      <CTA />
    </main>
  );
}