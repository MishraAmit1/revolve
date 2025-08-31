import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import {
  BarChart3,
  Cloud,
  Database,
  Building2,
  Home,
  Code,
  Settings,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: "Deltek Costpoint",
    description: "Right advisory solutions for effective growth",
    link: "/services/deltek-costpoint",
    gradient: "from-orange-500 to-orange-600"
  },
  {
    icon: Home,
    title: "Yardi Services",
    description: "Comprehensive testing and auditing of your software",
    link: "/services/yardi-services",
    gradient: "from-red-500 to-red-600"
  },
  {
    icon: Database,
    title: "Knowledge process Outsourcing",
    description: "Eliminate workflow pain points, implement new tech",
    link: "/services/data-engineering",
    gradient: "from-green-500 to-green-600"
  },
  {

    icon: BarChart3,
    title: "Business Intelligence",
    description: "Build the product you need on time with experienced team",
    link: "/services/business-intelligence",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    icon: Code,
    title: "Software Development",
    description: "More than just coding skills, experience makes us stand out",
    link: "/services/web-development",
    gradient: "from-indigo-500 to-indigo-600"
  },
  {
    icon: Settings,
    title: "Odoo Services",
    description: "Comprehensive consultation, migration, customization services",
    link: "/services/odoo-services",
    gradient: "from-teal-500 to-teal-600"
  },
  {
    icon: Cloud,
    title: "Cloud Migration",
    description: "Create complex enterprise software, ensure reliable integration",
    link: "/services/cloud-migration",
    gradient: "from-purple-500 to-purple-600"
  },
];

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            We Offer a Wide Range of Business Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transitioning from on-premise to cloud implementation and shifting from finance to technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group-hover:translate-x-2 duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="bg-blue-gradient text-white text-lg px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transform transition-all duration-300"
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;