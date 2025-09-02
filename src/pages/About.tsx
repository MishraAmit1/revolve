import { lazy, Suspense, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Users, Globe, Award, Clock, Target, Eye, Headphones, Heart } from 'lucide-react';
import aboutUs from '@/assets/about-us.webp';
import nilesh from '@/assets/nilesh.webp';
import abdul from '@/assets/abdul.webp';
import shaji from '@/assets/shaji.webp';
import client1 from '@/assets/client1.png';
import client2 from '@/assets/client2.png';
import sukhman from '@/assets/sukhman.jpeg';
// Lazy load components
const BlogSection = lazy(() => import('@/components/sections/BlogSection'));
const TeamSection = lazy(() => import('@/components/sections/TeamSection'));
const WhyChooseUsSection = lazy(() => import('@/components/sections/WhyChooseUsSection'));

const features = [
  {
    icon: Target,
    title: "Crystal-Clear Understanding",
    description: "We dive deep into your business requirements to deliver exactly what you need"
  },
  {
    icon: Eye,
    title: "Laser Focus",
    description: "Concentrated attention on your project goals with precision and dedication"
  },
  {
    icon: Clock,
    title: "Respecting Timelines",
    description: "We value your time and always deliver projects within agreed schedules"
  },
  {
    icon: Award,
    title: "Enroute Perfection",
    description: "Continuous improvement and refinement throughout the development process"
  },
  {
    icon: Headphones,
    title: "24x7 Support",
    description: "Round-the-clock technical support and maintenance for peace of mind"
  },
  {
    icon: Heart,
    title: "Nurturing Relations",
    description: "Building long-term partnerships based on trust and mutual success"
  }
];

const teamMembers = [
  {
    name: "Nilesh Peswani",
    role: "Founder & President",
    bio: "Visionary leader with 20+ years in software development, driving innovation and strategic growth.",
    image: nilesh,
    linkedin: "#",
    email: "nilesh@revolvespl.com"
  },
  {
    name: "Abdul Raees Shaikh",
    role: "Head of Business Management",
    bio: "Strategic business expert focused on operational excellence and client relationship management.",
    image: abdul,
    linkedin: "#",
    email: "raees@revolvespl.com"
  },
  {
    name: 'Sukhman Sandhu',
    role: 'CEO',
    bio: 'Sukhman Sandhu is an accomplished finance and accounting executive with extensive experience in government contracting, financial systems implementation, and operational efficiency. As Co-Founder and CEO, she brings deep expertise in GAAP, FAR, CAS, and ASC 606 compliance, along with a proven track record of leading scalable accounting operations and system integrations. With a background in directing multi-million-dollar financial functions and building high-performing teams, Sukhman is committed to delivering strategic financial leadership and long-term value to clients.',
    image: sukhman,
    linkedin: '#',
    email: 'sukhman@revolvespl.com',
  },
  {
    name: "Shaji Joseph",
    role: "COO of Company",
    bio: "Operations excellence leader ensuring seamless project delivery and team coordination.",
    image: shaji,
    linkedin: "#",
    email: "shaji@revolvespl.com"
  }
];

const blogPosts = [
  {
    id: 1,
    title: "Virtual Women's Day Celebration",
    excerpt: "Celebrating our amazing women colleagues and their contributions to our success in the tech industry.",
    date: "2023-04-27",
    category: "Company Culture",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&h=400&fit=crop",
    slug: "virtual-womens-day-celebration",
    readTime: "3 min read"
  },
  {
    id: 2,
    title: "Soft Skills Training",
    excerpt: "Enhancing our team's communication and leadership capabilities through comprehensive training programs.",
    date: "2023-04-21",
    category: "Training",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    slug: "soft-skills-training",
    readTime: "5 min read"
  },
  {
    id: 3,
    title: "Revolve Team Meetup",
    excerpt: "Our quarterly team gathering fostering collaboration, innovation, and strengthening team bonds.",
    date: "2023-03-09",
    category: "Events",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop",
    slug: "revolve-team-meetup",
    readTime: "4 min read"
  }
];

const clientLogos = [
  { src: client1, alt: "Client 1" },
  { src: client2, alt: "Client 2" },
  { src: client1, alt: "Client 3" },
  { src: client2, alt: "Client 4" },
];

const stats = [
  { icon: Users, number: "40+", label: "Software Experts", description: "Dedicated professionals" },
  { icon: Clock, number: "4+", label: "Decades", description: "Industry experience" },
  { icon: Award, number: "20+", label: "Active Clients", description: "Global partnerships" },
  { icon: Globe, number: "6", label: "Countries", description: "Worldwide presence" }
];

const stats1 = [
  { number: "20+", label: "Active Clients" },
  { number: "40+", label: "Projects Done" },
  { number: "8+", label: "Team Advisors" },
  { number: "8+", label: "Glorious Years" }
];

const values = [
  {
    title: "Innovation",
    description: "We constantly explore new technologies and methodologies to deliver cutting-edge solutions."
  },
  {
    title: "Quality",
    description: "Every project undergoes rigorous testing and quality assurance to ensure excellence."
  },
  {
    title: "Transparency",
    description: "We believe in open communication and keeping our clients informed throughout the process."
  },
  {
    title: "Partnership",
    description: "We build long-term relationships based on trust, reliability, and mutual success."
  }
];

const About = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen md:pt-20 pt-6" ref={ref}>
      <Helmet>
        <title>About - Revolve </title>
        <meta name="description" content="Learn about Revolve , a leading software development company delivering innovative solutions with a focus on quality and client success." />
        <meta name="keywords" content="about Revolve , software development, cloud services, data engineering" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 bg-blue-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Revolve
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
              Transforming businesses through innovative software solutions with 5 decades of experience and a passion for excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative overflow-hidden">
                <img
                  src={aboutUs}
                  alt="Revolve  Team"
                  className="w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/10 to-transparent" />
              </div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-200 animate-bounce"
              >
                <div className="text-center">
                  {/* <div className="text-3xl font-bold text-navy mb-2">24/7</div> */}
                  <div className="text-gray-600 font-medium">Quick Support</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div className='leading-8 tracking-wide'>
                <h3 className="text-3xl font-bold text-navy mb-6">
                  Best Software Development Company
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Revolve  is the leading partner for many leading businesses, enterprises, SMEs, and technology challengers.
                </p>
                <p className="text-lg text-gray-600">
                  We help elevate their value through custom product design, software development, and consultancy services. Choose the best software development company to experience excellence and drive success.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="text-center p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors duration-300"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-gradient rounded-xl mb-4">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-navy mb-1">{stat.number}</div>
                    <div className="text-sm font-semibold text-blue-600 mb-1">{stat.label}</div>
                    <div className="text-xs text-gray-500">{stat.description}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-navy mb-6">By the Numbers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our track record speaks for itself. Here's what we've achieved together.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 uppercase font-bold leading-8 tracking-wider">
            {stats1.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl font-bold text-navy mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-blue-600 mb-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Mission Card */}
            <div
              className={`p-12 rounded-3xl transition-all duration-500 ease-in-out transform hover:scale-105 cursor-pointer ${hoveredCard === 'mission'
                ? 'bg-blue-gradient text-white shadow-2xl'
                : 'bg-gray-50 text-gray-800 shadow-lg hover:shadow-xl'
                }`}
              onMouseEnter={() => setHoveredCard('mission')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex items-center mb-8">
                <div className={`p-4 rounded-2xl mr-4 transition-all duration-500 ${hoveredCard === 'mission'
                  ? 'bg-white/20 backdrop-blur-sm'
                  : 'bg-blue-100'
                  }`}>
                  <Target className={`w-8 h-8 transition-colors duration-500 ${hoveredCard === 'mission' ? 'text-white' : 'text-blue-600'
                    }`} />
                </div>
                <h3 className="text-3xl font-bold">Our Mission</h3>
              </div>
              <p className={`text-lg leading-relaxed transition-colors duration-500 ${hoveredCard === 'mission' ? 'text-blue-100' : 'text-gray-600'
                }`}>
                To empower businesses worldwide by delivering innovative, reliable, and scalable software solutions that drive growth, efficiency, and digital transformation.
              </p>
            </div>

            {/* Vision Card */}
            <div
              className={`p-12 rounded-3xl transition-all duration-500 ease-in-out transform hover:scale-105 cursor-pointer ${hoveredCard === 'vision'
                ? 'bg-blue-gradient text-white shadow-2xl'
                : 'bg-gray-50 text-gray-800 shadow-lg hover:shadow-xl'
                }`}
              onMouseEnter={() => setHoveredCard('vision')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex items-center mb-8">
                <div className={`p-4 rounded-2xl mr-4 transition-all duration-500 ${hoveredCard === 'vision'
                  ? 'bg-white/20 backdrop-blur-sm'
                  : 'bg-blue-100'
                  }`}>
                  <Eye className={`w-8 h-8 transition-colors duration-500 ${hoveredCard === 'vision' ? 'text-white' : 'text-blue-600'
                    }`} />
                </div>
                <h3 className="text-3xl font-bold">Our Vision</h3>
              </div>
              <p className={`text-lg leading-relaxed transition-colors duration-500 ${hoveredCard === 'vision' ? 'text-blue-100' : 'text-gray-600'
                }`}>
                To be the global leader in software development services, recognized for our innovation, quality, and commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lazy Loaded Sections */}
      <Suspense fallback={<div className="py-10">Loading Why Choose Us...</div>}>
        <WhyChooseUsSection />
      </Suspense>
      <Suspense fallback={<div className="py-10">Loading Team...</div>}>
        <TeamSection />
      </Suspense>

      {/* Clients Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-16 text-center">
            <h2 className="text-4xl font-bold text-navy mb-6 uppercase">Our Clients</h2>
            <div className="marquee-container">
              <div className="marquee">
                {[...clientLogos, ...clientLogos].map((logo, idx) => (
                  <div key={idx} className="w-32 h-16 flex items-center justify-center mx-4">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="grayscale hover:grayscale-0 transition duration-300 w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-section">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-navy mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape our relationships with clients, partners, and team members.
            </p>
          </motion.div>
          <ul className="space-y-10">
            {values.map((value, index) => (
              <li key={index} className="flex items-start gap-6">
                <div className="w-12 h-12 flex-shrink-0 bg-blue-gradient rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {value.title[0]}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Need a Consultation?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Looking for expert advice or want to discuss your project requirements? Get in touch with our team for a free consultation.
            </p>
            <Link to="/contact" className="btn-orange text-lg px-8 py-4 inline-flex items-center">
              Book a Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Suspense fallback={<div className="py-10">Loading Blog...</div>}>
        <BlogSection />
      </Suspense>
    </div>
  );
};

export default About;