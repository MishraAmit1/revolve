import { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';

// Lazy load heavy components
const HeroSlider = lazy(() => import('@/components/HeroSlider'));
const AnimatedSection = lazy(() => import('@/components/AnimatedSection'));
const AboutSection = lazy(() => import('@/components/sections/AboutSection'));
const ServicesSection = lazy(() => import('@/components/sections/ServicesSection'));
const WhyChooseUsSection = lazy(() => import('@/components/sections/WhyChooseUsSection'));
const TeamSection = lazy(() => import('@/components/sections/TeamSection'));
const TestimonialsSection = lazy(() => import('@/components/sections/TestimonialsSection'));
const BlogSection = lazy(() => import('@/components/sections/BlogSection'));

const Home = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Revolve Empowering Businesses, transforming success </title>
        <meta name="description" content="Revolve  provides innovative software development, cloud migration, and data engineering services for modern businesses." />
        <meta name="keywords" content="software development, cloud services, data engineering, Revolve " />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Hero Slider */}
      <Suspense fallback={<div className="h-[600px] flex items-center justify-center">Loading Hero...</div>}>
        <HeroSlider />
      </Suspense>

      {/* About Company Section */}
      <Suspense fallback={<div className="py-10">Loading About...</div>}>
        <AnimatedSection animation="fadeIn" delay={0.1}>
          <AboutSection />
        </AnimatedSection>
      </Suspense>

      {/* Services Section */}
      <Suspense fallback={<div className="py-10">Loading Services...</div>}>
        <AnimatedSection animation="slideUp" delay={0.1}>
          <ServicesSection />
        </AnimatedSection>
      </Suspense>

      {/* Why Choose Us Section */}
      <Suspense fallback={<div className="py-10">Loading Why Choose Us...</div>}>
        <AnimatedSection animation="slideRight" delay={0.1}>
          <WhyChooseUsSection />
        </AnimatedSection>
      </Suspense>

      {/* Leadership Team Section */}
      <Suspense fallback={<div className="py-10">Loading Team...</div>}>
        <AnimatedSection animation="zoomIn" delay={0.1}>
          <TeamSection />
        </AnimatedSection>
      </Suspense>

      {/* Client Testimonials Section */}
      <Suspense fallback={<div className="py-10">Loading Testimonials...</div>}>
        <AnimatedSection animation="slideLeft" delay={0.1}>
          <TestimonialsSection />
        </AnimatedSection>
      </Suspense>

      {/* Recent News/Blog Section */}
      <Suspense fallback={<div className="py-10">Loading Blog...</div>}>
        <AnimatedSection animation="slideUp" delay={0.1}>
          <BlogSection />
        </AnimatedSection>
      </Suspense>
    </div>
  );
};

export default Home;