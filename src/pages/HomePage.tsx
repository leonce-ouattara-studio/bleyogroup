import React from 'react';
import { HeroSection } from '../components/HeroSection.tsx';
import { BannerSection } from '../components/BannerSection.tsx';
import { LeadershipStats } from '../components/LeadershipStats.tsx';
import { ExpertisePoles } from '../components/ExpertisePoles.tsx';
import { ProjectsShowcase } from '../components/ProjectsShowcase.tsx';
import { WhyChooseUs } from '../components/WhyChooseUs.tsx';
import { ProcessSection } from '../components/ProcessSection.tsx';
import { useRouter } from '../context/RouterContext.tsx';

export const HomePage: React.FC = () => {
  const { openQuoteModal } = useRouter();

  return (
    <div className="space-y-0">
      {/* 1. Hero : Un réseau en panne, un chantier à l'arrêt, une coupure au pire moment (Page 1 PDF) */}
      <HeroSection />

      {/* 2. Ce qu'on résout pour vous : Deux urgences qui coûtent cher quand on les néglige (Pages 2-3 PDF) */}
      <ExpertisePoles onOpenQuote={openQuoteModal} />

      {/* 3. Bannière Immersive & Synergie */}
      <BannerSection />

      {/* 4. Direction & Garanties Opérationnelles */}
      <LeadershipStats />

      {/* 5. Ce que vous ne risquez plus avec nous : Les mauvaises surprises que vous évitez (Page 4 PDF) */}
      <WhyChooseUs />

      {/* 6. Réalisations : Nos chantiers en images (Page 5 PDF) */}
      <ProjectsShowcase onOpenQuote={openQuoteModal} />

      {/* 7. Notre Process : Simple, direct, sans détour & Bannière de passage à l'action (Page 6 PDF) */}
      <ProcessSection />
    </div>
  );
};
