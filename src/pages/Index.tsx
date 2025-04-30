
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BlogSection from '@/components/BlogSection';
import InteractiveModel from '@/components/InteractiveModel';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import DailyPhrase from '@/components/DailyPhrase';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <DailyPhrase />
      <ServicesSection />
      <TestimonialsSection />
      <BlogSection />
      <div className="bg-white">
        <div className="section-container">
          <InteractiveModel />
        </div>
      </div>
      {/* <ContactSection /> */}
      <Footer />
    </div>
  );
};

export default Index;
