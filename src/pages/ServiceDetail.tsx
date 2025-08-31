import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Code, Award } from 'lucide-react';
import { Helmet } from "react-helmet-async";

// This would typically come from a data source or API
const serviceData: { [key: string]: any } = {
  'business-intelligence': {
    title: 'Business Intelligence',
    hero: 'Transform Your Data Into Strategic Advantages',
    description: 'Our comprehensive Business Intelligence solutions empower organizations to make data-driven decisions through advanced analytics, interactive dashboards, and real-time reporting capabilities.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
    features: [
      'Advanced Data Analytics & Visualization',
      'Interactive Real-time Dashboards',
      'Automated Report Generation',
      'Predictive Analytics & Forecasting',
      'KPI Monitoring & Alerts',
      'Data Integration from Multiple Sources',
      'Mobile-responsive BI Solutions',
      'Self-service Analytics Tools'
    ],
    technologies: ['Power BI', 'Tableau', 'QlikView', 'SQL Server', 'Oracle', 'Python', 'R', 'Apache Spark'],
    process: [
      {
        step: 1,
        title: 'Discovery & Assessment',
        description: 'We analyze your current data landscape and business requirements to design the optimal BI strategy.'
      },
      {
        step: 2,
        title: 'Data Architecture Design',
        description: 'Creating scalable data warehouses and ETL processes to ensure clean, reliable data flow.'
      },
      {
        step: 3,
        title: 'Dashboard Development',
        description: 'Building intuitive, interactive dashboards that provide actionable insights for decision-makers.'
      },
      {
        step: 4,
        title: 'Testing & Deployment',
        description: 'Comprehensive testing and smooth deployment with minimal disruption to business operations.'
      },
      {
        step: 5,
        title: 'Training & Support',
        description: 'User training and ongoing support to ensure maximum adoption and ROI from your BI investment.'
      }
    ],
    benefits: [
      'Improve decision-making with real-time insights',
      'Increase operational efficiency by 30-40%',
      'Reduce reporting time from days to minutes',
      'Enhance data accuracy and consistency',
      'Enable self-service analytics for business users'
    ]
  },
  'cloud-migration': {
    title: 'Cloud Migration',
    hero: 'Seamless Journey to the Cloud',
    description: 'Our cloud migration services help businesses transition to cloud infrastructure with zero downtime, improved scalability, enhanced security, and significant cost savings.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop',
    features: [
      'Comprehensive Cloud Strategy Planning',
      'Infrastructure Assessment & Optimization',
      'Zero-downtime Migration Execution',
      'Security & Compliance Implementation',
      'Performance Monitoring & Optimization',
      'Cost Optimization Strategies',
      'Disaster Recovery Solutions',
      'Cloud Management Support'
    ],
    technologies: ['AWS', 'Microsoft Azure', 'Google Cloud Platform', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
    process: [
      {
        step: 1,
        title: 'Cloud Readiness Assessment',
        description: 'Evaluate current infrastructure, applications, and readiness for cloud migration.'
      },
      {
        step: 2,
        title: 'Migration Strategy & Planning',
        description: 'Develop detailed migration roadmap with timelines, resources, and risk mitigation strategies.'
      },
      {
        step: 3,
        title: 'Environment Setup',
        description: 'Configure secure cloud environments with proper networking, security, and monitoring.'
      },
      {
        step: 4,
        title: 'Migration Execution',
        description: 'Execute phased migration with minimal downtime using proven methodologies and tools.'
      },
      {
        step: 5,
        title: 'Optimization & Support',
        description: 'Continuous optimization for performance and cost, with ongoing support and management.'
      }
    ],
    benefits: [
      'Reduce infrastructure costs by up to 50%',
      'Improve scalability and flexibility',
      'Enhanced security and compliance',
      'Faster deployment and time-to-market',
      'Improved disaster recovery capabilities'
    ]
  }
  // Add more services as needed...
};

const ServiceDetail = () => {
  const { serviceSlug } = useParams();
  const service = serviceData[serviceSlug || ''];

  if (!service) {
    return (
      <div className="min-h-screen md:pt-20 pt-6 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-navy mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
          <Link to="/services" className="btn-blue">
            View All Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen md:pt-20 pt-6">
      <Helmet>
        <title>{service.title} - Revolve </title>
        <meta
          name="description"
          content={`${service.description.slice(0, 160)} Discover our expert ${service.title.toLowerCase()} solutions tailored to your business needs.`}
        />
        <meta
          name="keywords"
          content={`${service.title.toLowerCase()}, ${service.title.toLowerCase()} services, ${service.technologies.join(', ').toLowerCase()}, Revolve `}
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
      {/* Hero Section */}
      <section className="py-20 bg-blue-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${service.image})` }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/services"
              className="inline-flex items-center text-blue-200 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Services
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {service.title}
            </h1>
            <p className="text-2xl text-blue-100 mb-8 max-w-4xl">
              {service.hero}
            </p>
            <p className="text-lg text-blue-200 max-w-4xl">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-navy mb-8">Key Features</h2>
              <div className="space-y-4">
                {service.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold text-navy mb-8">Technologies We Use</h2>
              <div className="grid grid-cols-2 gap-4">
                {service.technologies.map((tech: string, index: number) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-4 rounded-xl text-center hover:bg-blue-50 transition-colors duration-300"
                  >
                    <Code className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <span className="font-medium text-gray-800">{tech}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-navy mb-6">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project delivery and maximum value for your investment.
            </p>
          </motion.div>

          <div className="space-y-8">
            {service.process.map((step: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-gradient rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-navy mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-blue-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Benefits You'll Experience</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our {service.title.toLowerCase()} solutions deliver measurable results and long-term value for your business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.benefits.map((benefit: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 text-center"
              >
                <Award className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <p className="text-lg">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-navy mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how our {service.title.toLowerCase()} solutions can drive your success.
              Get a free consultation with our experts today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-orange text-lg px-8 py-4">
                Get Free Quote
              </Link>
              <Link to="/services" className="btn-blue text-lg px-8 py-4">
                View Other Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;