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
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const services = [
  {
    id: 'business-intelligence',
    icon: BarChart3,
    title: "Business Intelligence",
    shortDescription: "Transform data into actionable insights with comprehensive BI solutions",
    description: "Our Business Intelligence services help organizations make data-driven decisions through advanced analytics, reporting, and visualization tools. We design and implement BI solutions that turn complex data into clear, actionable insights.",
    features: [
      "Advanced Data Analytics",
      "Interactive Dashboards",
      "Real-time Reporting",
      "Data Visualization",
      "Performance Metrics",
      "Predictive Analytics"
    ],
    technologies: ["Power BI", "Tableau", "QlikView", "SQL Server", "Oracle", "Python"],
    gradient: "from-blue-500 to-blue-600"
  },
  {
    id: 'cloud-migration',
    icon: Cloud,
    title: "Cloud Migration",
    shortDescription: "Seamless transition to cloud infrastructure with zero downtime",
    description: "We provide end-to-end cloud migration services that help businesses leverage the power of cloud computing. Our expertise ensures a smooth transition with improved scalability, security, and cost-effectiveness.",
    features: [
      "Cloud Strategy Planning",
      "Infrastructure Assessment",
      "Migration Roadmap",
      "Security Implementation",
      "Performance Optimization",
    ],
    technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
    gradient: "from-purple-500 to-purple-600"
  },
  {
    id: 'data-engineering',
    icon: Database,
    title: "Knowledge process Outsourcing",
    shortDescription: "Build robust data pipelines and architectures for scalable solutions",
    description: "Our data engineering services focus on building scalable, reliable data infrastructure that supports your business operations and analytics needs. We create efficient data pipelines and robust architectures.",
    features: [
      "Data Pipeline Development",
      "ETL/ELT Processes",
      "Data Warehouse Design",
      "Real-time Processing",
      "Data Quality Management",
      "Scalable Architecture"
    ],
    technologies: ["Apache Spark", "Kafka", "Airflow", "Snowflake", "BigQuery", "MongoDB"],
    gradient: "from-green-500 to-green-600"
  },
  {
    id: 'deltek-costpoint',
    icon: Building2,
    title: "Deltek Costpoint",
    shortDescription: "Expert implementation and customization of Deltek Costpoint solutions",
    description: "We specialize in Deltek Costpoint implementation, customization, and support. Our team ensures your project accounting and ERP needs are met with comprehensive solutions tailored to your business.",
    features: [
      "Implementation Services",
      "System Integration",
      "Custom Development",
      "Training & Support",
      "Compliance Management",
      "Performance Optimization"
    ],
    technologies: ["Deltek Costpoint", ".NET", "SQL Server", "Crystal Reports", "Web Services"],
    gradient: "from-orange-500 to-orange-600"
  },
  {
    id: 'yardi-services',
    icon: Home,
    title: "Yardi Services",
    shortDescription: "Comprehensive Yardi property management solutions and support",
    description: "Our Yardi services cover the complete spectrum of property management software needs, from implementation to ongoing support and customization for real estate and property management companies.",
    features: [
      "Yardi Implementation",
      "System Configuration",
      "Integration Services",
      "Custom Reporting",
      "Training Programs",
      "Ongoing Support"
    ],
    technologies: ["Yardi Voyager", "Yardi Matrix", "SQL Server", "Crystal Reports", "APIs"],
    gradient: "from-red-500 to-red-600"
  },
  {
    id: 'web-development',
    icon: Code,
    title: "Software Development",
    shortDescription: "Modern, responsive web applications with cutting-edge technologies",
    description: "We create modern, scalable web applications using the latest technologies and frameworks. Our development approach focuses on performance, user experience, and maintainability.",
    features: [
      "Full-Stack Development",
      "Responsive Design",
      "API Development",
      "E-commerce Solutions",
      "Progressive Web Apps",
      "Performance Optimization"
    ],
    technologies: ["React", "Node.js", "Python", "TypeScript", "Next.js", "MongoDB"],
    gradient: "from-indigo-500 to-indigo-600"
  },
  {
    id: 'odoo-services',
    icon: Settings,
    title: "Odoo Services",
    shortDescription: "Complete Odoo ERP implementation and customization services",
    description: "Our Odoo services provide comprehensive ERP solutions that streamline business processes. We offer implementation, customization, migration, and ongoing support for all Odoo modules.",
    features: [
      "Odoo Implementation",
      "Module Customization",
      "Data Migration",
      "Integration Services",
      "Training & Support",
      "Performance Tuning"
    ],
    technologies: ["Odoo", "Python", "PostgreSQL", "JavaScript", "XML", "REST APIs"],
    gradient: "from-teal-500 to-teal-600"
  }
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen md:pt-20 pt-6">
      <Helmet>
        <title>Services - Revolve </title>
        <meta
          name="description"
          content="Explore Revolve ' comprehensive services including business intelligence, cloud migration, data engineering, Software Development, and ERP solutions. Transform your business with our expert technology services."
        />
        <meta
          name="keywords"
          content="business intelligence services, cloud migration services, data engineering solutions, Software Development, ERP implementation, Revolve  services"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
      {/* Hero Section */}
      <section className="py-20 bg-blue-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
              Comprehensive software solutions tailored to drive your business forward.
              From cloud migration to custom development, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* <h2 className="text-4xl font-bold text-navy mb-6">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of services designed to transform
              your business through innovative technology solutions.
            </p> */}
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                  {/* Header */}
                  <div className="flex items-start space-x-6 mb-8">
                    <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-navy mb-3 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600">
                        {service.shortDescription}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-navy mb-4">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-navy mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.slice(0, 4).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Learn More Link */}
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group-hover:translate-x-2 duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-navy mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how our services can help transform your business.
              Get a free consultation with our experts today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-orange text-lg px-8 py-4">
                Get Free Consultation
              </Link>
              <Link to="/about" className="btn-blue text-lg px-8 py-4">
                Learn About Reve
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;