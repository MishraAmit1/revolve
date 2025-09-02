import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, Users } from 'lucide-react';
import nilesh from '@/assets/nilesh.jpg';
import abdul from '@/assets/abdul.jpg';
import shaji from '@/assets/shaji.jpg';
import sukhman from '@/assets/sukhman.jpeg'; // You'll need to add this image

const teamMembers = [
  {
    name: 'Nilesh Peswani',
    role: 'Founder & President',
    bio: 'Visionary leader with 20+ years in software development, driving innovation and strategic growth.',
    image: nilesh,
    linkedin: '#',
    email: 'nilesh@revolvespl.com',
  },
  {
    name: 'Abdul Raees Shaikh',
    role: 'Co-Founder',
    bio: 'AbdulRaees is a results-driven business leader with over 20+ years of experience guiding financial strategy, enterprise transformation, and operational excellence across industries including U.S. Govt. Contracting, Technology, Manufacturing, Property Management, and Knowledge Process Outsourcing (KPO). As a strategic ERP architect, he brings deep expertise in financial master data management, system integration, and compliance-led financial transformations. His leadership has consistently driven scalable ERP deployments focused on automation, audit integrity, and long-term business efficiency. AbdulRaees has a proven track record in U.S. Govt. contract accounting, business consulting, audit readiness, and regulatory compliance. With a strong command of change management and cross-border system harmonization, he has successfully led global initiatives that align business operations with evolving business needs. His approach blends strategic insight with hands-on implementation, delivering measurable impact across the company operation, project leadership, and compliance frameworks.',
    image: abdul,
    linkedin: '#',
    email: 'raees@revolvespl.com',
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
    name: 'Shaji Joseph',
    role: 'Co-founder',
    bio: 'Operations excellence leader ensuring seamless project delivery and team coordination.',
    image: shaji,
    linkedin: '#',
    email: 'shaji@revolvespl.com',
  },
];

const TeamSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [hoveredMember, setHoveredMember] = useState(null);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center p-1 bg-blue-100 rounded-full mb-4">
            <div className="flex items-center space-x-2 px-3 py-1 bg-white rounded-full shadow-sm">
              <Users className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">Our Leadership</span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Meet Our <span className="text-blue-600">Leadership</span> Team
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the leaders driving our vision with expertise and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100">
                {/* Card Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Image Container with Hover Effect */}
                <div className="relative overflow-hidden w-full h-80">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Bio Overlay on Hover */}
                  <div className={`absolute inset-0 bg-black/90 flex flex-col justify-center p-6 transition-opacity duration-300 ${hoveredMember === index ? 'opacity-100' : 'opacity-0'
                    }`}>
                    <p className="text-white text-sm leading-relaxed overflow-y-auto max-h-full">
                      {member.bio}
                    </p>
                  </div>

                  {/* Social Icons */}
                  <div className="absolute bottom-3 right-3 flex space-x-2 z-10">
                    <a
                      href={member.linkedin}
                      className="p-2 bg-white/90 rounded-full text-blue-600 hover:bg-white transition-all duration-300 shadow-lg"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="p-2 bg-white/90 rounded-full text-blue-600 hover:bg-white transition-all duration-300 shadow-lg"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Name and Title */}
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 text-sm font-medium">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;