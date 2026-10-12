import {
  CaseStudiesSection,
  EngagementSection,
  FinalCTASection,
  HeroSection,
  LifecycleSection,
  PeopleSection,
  ProductsSection,
  ServicesSection,
  StatsSection,
  TestimonialsSection,
  TrustedBySection,
  WhyChooseUsSection,
} from '@/sections/home';
import { PEOPLE } from '@/constants/people';

export function HomePage() {
  // People stays hidden until real founder/partner data exists.
  const hasPeople = PEOPLE.founder !== null || PEOPLE.partners.length > 0;

  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <ServicesSection />
      <EngagementSection />
      <ProductsSection />
      <WhyChooseUsSection />
      <StatsSection />
      <LifecycleSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      {hasPeople && <PeopleSection />}
      <FinalCTASection />
    </>
  );
}