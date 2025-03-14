
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import FeaturedMenu from '@/components/FeaturedMenu';
import AboutSection from '@/components/AboutSection';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import AppPromotion from '@/components/AppPromotion';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedMenu />
      <AboutSection />
      <Testimonials />
      <AppPromotion />
      <CTASection />
    </Layout>
  );
};

export default Index;
