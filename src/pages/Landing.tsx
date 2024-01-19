import CTA from '@/features/landing/CTA';
import Discover from '@/features/landing/Discover';
import Features from '@/features/landing/Features';
import Hero from '@/features/landing/Hero';

const Landing = () => {
  return (
    <>
      <Hero />
      <Features />
      <Discover />
      <CTA />
    </>
  );
};

export default Landing;
