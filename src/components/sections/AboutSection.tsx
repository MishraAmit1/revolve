import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Clock, Award, Globe } from 'lucide-react';
import teamImage from '@/assets/team-image.jpg';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    {
      icon: Users,
      number: "40+",
      label: "Software Experts",
      description: "Experienced professionals"
    },
    {
      icon: Clock,
      number: "4+",
      label: "Decades",
      description: "Of industry experience"
    },
    {
      icon: Award,
      number: "20+",
      label: "Active Clients",
      description: "Trusted partnerships"
    },
    {
      icon: Globe,
      number: "6",
      label: "Countries",
      description: "Global presence"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Why Choose Revolve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a leading consulting firm specializing in business intelligence software development, finance and accounting outsourcing, and ERP solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={teamImage}
                alt="Revolve  Team"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
            </div>

            {/* Floating Card
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-navy mb-2">24/7</div>
                <div className="text-gray-600 font-medium">Quick Support</div>
              </div>
            </motion.div> */}
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-navy mb-6">
                Experience That Delivers Results
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                With over five decades of combined experience, our team of software
                experts delivers innovative solutions that drive business growth and
                digital transformation.
              </p>
              <p className="text-lg text-gray-600">
                We pride ourselves on building lasting relationships with our clients,
                providing quick support, and ensuring every project exceeds expectations.
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
                  {/* <div className="text-2xl font-bold text-navy mb-1">{stat.number}</div> */}
                  <div className="text-sm font-semibold text-blue-600 mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-500">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;