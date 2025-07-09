import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import TargetAudienceSection from '../components/TargetAudienceSection';
import TestimonialsSection from '../components/TestimonialsSection';
import PricingSection from '../components/PricingSection';
import CtaSection from '../components/CtaSection';
import Footer from '../components/Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 antialiased">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <TargetAudienceSection />
        <TestimonialsSection />
        <PricingSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
