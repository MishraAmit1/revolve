import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, Users, ArrowRight, Home, TrendingUp, Gift, Send, Lightbulb } from 'lucide-react';

const jobs = [
  {
    id: 'senior-data-engineer',
    title: "Senior Data Engineer",
    location: "Remote",
    type: "Full-time",
    experience: "5+ years",
    description: "Lead data engineering initiatives and design scalable data solutions for enterprise clients."
  },
  {
    id: 'data-engineer',
    title: "Data Engineer",
    location: "Remote / Onsite",
    type: "Full-time",
    experience: "3+ years",
    description: "Design and implement robust data pipelines and analytics solutions for enterprise clients."
  },
  {
    id: 'cognos-developer',
    title: "Cognos Developer",
    location: "Remote / Onsite",
    type: "Full-time",
    experience: "3+ years",
    description: "Develop and maintain Cognos reports and dashboards for business intelligence solutions."
  }
];

const benefits = [
  {
    icon: Home,
    title: "Work From Anywhere",
    description: "Remote opportunities available"
  },
  {
    icon: Send,
    title: "Onsite Opportunities",
    description: "Onsite opportunities available"
  },
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    description: "Continuous learning and career advancement"
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Work-life balance that suits your lifestyle"
  },
  {
    icon: Gift,
    title: "Employee Benefits",
    description: "Comprehensive benefits package"
  }
];

const Careers = () => {
  return (
    <div className="min-h-screen md:pt-20 pt-6">
      <Helmet>
        <title>Careers - Revolve </title>
        <meta name="description" content="Join Revolve ' team to build your career in data engineering, software development, and more with a focus on innovation and growth." />
        <meta name="keywords" content="careers, Revolve , data engineer jobs, software development careers" />
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
              Build your career with a company that values innovation, growth, and excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="text-center">
              <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-6">
                <div className="flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-sm">
                  <Lightbulb className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium text-gray-700">Future of Business</span>
                </div>
              </div>
            </div>
            <h2 className="text-4xl font-bold text-navy mb-8">Shape the Future of Business</h2>
            <p className="text-lg text-gray-700 mb-6">
              We are all surrounded by countless ventures and business models. Some of them are large enterprises while most of them are SMEs. Studies show that only 20% of these businesses survive for more than 15 years.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Revolve  was founded with a vision to aid businesses all over the World by becoming the one-stop business solution provider. Our services are a comprehensive umbrella of everything a company would be looking for when they intend to transition into a smarter system by offering specialized services like Data Engineering, Business Intelligence, Cloud Migration, Software Development and Yardi Support Services.
            </p>
            <p className="text-lg text-gray-700">
              However, being one of the best business solution providers in the market is not a one-man job. A dedicated team of professionals are constantly thriving day in and day out to make the World a better place with better businesses. We, the best company for data engineer, have always shared mutual respect and welcomed like-minded people with a life-transforming career opportunity. Join us and be a part of shaping a brighter future with data engineering excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-navy mb-12 text-center"
          >
            Why Work With Us?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-10 h-10 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">{benefit.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-navy mb-12 text-center">Current Openings</h2>
          <div className="space-y-6">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row justify-between items-start">
                  <div className="flex-grow mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold text-navy mb-4">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                      <div className="flex items-center"><MapPin className="w-4 h-4 mr-1" />{job.location}</div>
                      <div className="flex items-center"><Clock className="w-4 h-4 mr-1" />{job.type}</div>
                      <div className="flex items-center"><Users className="w-4 h-4 mr-1" />{job.experience}</div>
                    </div>
                    <p className="text-gray-700">{job.description}</p>
                  </div>
                  <Link
                    to={`/careers/${job.id}`}
                    className="btn-orange md:ml-6 flex items-center"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-blue-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make an Impact?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join our team of professionals and be part of shaping a brighter future with data engineering excellence.
            </p>
            <Link to="/careers" className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
              View All Positions
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;