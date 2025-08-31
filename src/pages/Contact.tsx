import { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';

// Lazy load ContactSection
const ContactSection = lazy(() => import('@/components/sections/ContactSection'));

const Contact = () => {
  return (
    <div className="min-h-screen md:pt-20 pt-6">
      <Helmet>
        <title>Contact - Revolve </title>
        <meta name="description" content="Get in touch with Revolve  for expert software development, cloud migration, and data engineering services. Book a free consultation today." />
        <meta name="keywords" content="contact Revolve , software development consultation, data engineering services" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Suspense fallback={<div className="py-10 text-center">Loading Contact Form...</div>}>
        <ContactSection />
      </Suspense>
    </div>
  );
};

export default Contact;