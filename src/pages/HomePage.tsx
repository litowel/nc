import Hero from '../components/Hero';
import CorePillars from '../components/CorePillars';
import ElevatedSystem from '../components/ElevatedSystem';
import Masterplan from '../components/Masterplan';
import ProposedProjects from '../components/ProposedProjects';
import GlobalVision from '../components/GlobalVision';
import CivilizationStages from '../components/CivilizationStages';
import OpenSourceInitiative from '../components/OpenSourceInitiative';
import TechLayer from '../components/TechLayer';
import Investment from '../components/Investment';
import TokenBanner from '../components/TokenBanner';
import CTA from '../components/CTA';
import VisionSlideshow from '../components/VisionSlideshow';

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
      <VisionSlideshow />
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