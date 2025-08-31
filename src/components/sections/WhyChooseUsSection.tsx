import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Target,
  Eye,
  Clock,
  Award,
  Headphones,
  Heart
} from 'lucide-react';

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

const WhyChooseUsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-blue-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full bg-float-y"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-white rounded-full bg-float-x"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-white rounded-full bg-float-y"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            We Deliver Solutions with the Goal of Trusting Relationships
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Our commitment isn't just about delivering — it's about exceeding expectations

          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass rounded-2xl p-8 text-center card-lift hover:bg-white/20 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300 icon-bounce">
                  <feature.icon className="w-8 h-8 text-white icon-rotate" />
                </div>

                <h3 className="text-xl font-bold text-white mb-4">
                  {feature.title}
                </h3>

                <p className="text-blue-100">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;