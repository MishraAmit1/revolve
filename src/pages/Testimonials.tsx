import { motion } from 'framer-motion';
import { Star, Quote, Search, ArrowRight, Users, Building, Award, Heart } from 'lucide-react';
import { useState } from 'react';
import { Helmet } from "react-helmet-async";

const testimonials = [
  {
    id: 1,
    name: "Jamie Kowalczyk",
    role: "Senior Controller",
    company: "TechCorp Solutions",
    industry: "Technology",
    location: "USA",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bb?w=150&h=150&fit=crop&crop=face",
    content: "Revolve  transformed our business intelligence capabilities. Their expertise in data engineering and analytics helped us make data-driven decisions that increased our revenue by 35%. The team's professionalism and dedication are unmatched.",
    rating: 5,
    project: "Business Intelligence Platform",
    featured: true
  },
  {
    id: 2,
    name: "Sujatha Dhanapal",
    role: "Lead - Yardi Application Support",
    company: "PropTech Innovations",
    industry: "Real Estate",
    location: "Singapore",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content: "Revolve  has done an excellent job staffing our contract resource requirements for Yardi application support. They are timely, provide quality resources and work. I also feel they operate with integrity, which is of utmost importance when securing a staffing partner.",
    rating: 5,
    project: "Yardi Application Support",
    featured: true
  },
  {
    id: 3,
    name: "Michael Kerckhof",
    role: "IT Director",
    company: "Saif Al Ghurair Real Estate Group",
    industry: "Real Estate",
    location: "UAE",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content: "The revolve team have been invaluable to our success. They are very knowledgeable and responsive whenever there is an issue. There are no problems too big or small for them. The revolve team would be a great addition to any organization.",
    rating: 5,
    project: "IT Infrastructure Management",
    featured: true
  },
  {
    id: 4,
    name: "Sarah Mitchell",
    role: "CTO",
    company: "FinanceFlow Ltd",
    industry: "Finance",
    location: "UK",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    content: "Working with Revolve  on our fintech platform was a game-changer. Their technical expertise and attention to detail helped us launch ahead of schedule while maintaining the highest security standards.",
    rating: 5,
    project: "Fintech Platform Development",
    featured: false
  },
  {
    id: 5,
    name: "Raj Patel",
    role: "Operations Manager",
    company: "Global Logistics Co",
    industry: "Logistics",
    location: "India",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content: "The supply chain management system developed by Revolve  has revolutionized our operations. We've seen a 40% improvement in efficiency and significant cost savings. Highly recommended!",
    rating: 5,
    project: "Supply Chain Management System",
    featured: false
  },
  {
    id: 6,
    name: "Dr. Emily Chen",
    role: "Director of Operations",
    company: "MedTech Innovations",
    industry: "Healthcare",
    location: "USA",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
    content: "Revolve  delivered a comprehensive healthcare management system that exceeded our expectations. Their understanding of healthcare compliance and patient data security was exceptional.",
    rating: 5,
    project: "Healthcare Management System",
    featured: false
  },
  {
    id: 7,
    name: "Ahmed Al-Rashid",
    role: "Project Manager",
    company: "Smart City Solutions",
    industry: "Government",
    location: "KSA",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=150&h=150&fit=crop&crop=face",
    content: "The smart city infrastructure project was complex, but Revolve  handled it with expertise. Their IoT solutions and data analytics capabilities have transformed our urban management approach.",
    rating: 5,
    project: "Smart City Infrastructure",
    featured: false
  },
  {
    id: 8,
    name: "Lisa Thompson",
    role: "Head of Digital Transformation",
    company: "RetailMax Group",
    industry: "Retail",
    location: "UK",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    content: "Our e-commerce platform transformation was seamless thanks to Revolve . They not only delivered on time but also provided excellent post-launch support. Sales increased by 60% in the first quarter!",
    rating: 5,
    project: "E-commerce Platform",
    featured: false
  }
];
const industries = ["All", "Technology", "Real Estate", "Finance", "Logistics", "Healthcare", "Government", "Retail"];
const locations = ["All", "USA", "DUBAI", "India", "UAE", "KSA", "Singapore"];

const Testimonials = () => {
  const [filteredTestimonials, setFilteredTestimonials] = useState(testimonials);
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [showOnlyFeatured, setShowOnlyFeatured] = useState(false);
  const filterTestimonials = (industry, location, search, featured) => {
    let filtered = testimonials;

    if (industry !== "All") {
      filtered = filtered.filter(t => t.industry === industry);
    }

    if (location !== "All") {
      filtered = filtered.filter(t => t.location === location);
    }

    if (search) {
      filtered = filtered.filter(t =>
        t.name.toLowerCase().includes(search.toLowerCase()) ||
        t.company.toLowerCase().includes(search.toLowerCase()) ||
        t.content.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (featured) {
      filtered = filtered.filter(t => t.featured);
    }

    setFilteredTestimonials(filtered);
  };

  const handleIndustryChange = (industry) => {
    setSelectedIndustry(industry);
    filterTestimonials(industry, selectedLocation, searchTerm, showOnlyFeatured);
  };

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
    filterTestimonials(selectedIndustry, location, searchTerm, showOnlyFeatured);
  };

  const handleSearchChange = (search) => {
    setSearchTerm(search);
    filterTestimonials(selectedIndustry, selectedLocation, search, showOnlyFeatured);
  };

  const handleFeaturedToggle = (featured) => {
    setShowOnlyFeatured(featured);
    filterTestimonials(selectedIndustry, selectedLocation, searchTerm, featured);
  };

  const stats = [
    { icon: Users, label: "Happy Clients", value: "200+", color: "blue" },
    { icon: Building, label: "Countries", value: "6", color: "indigo" },
    { icon: Award, label: "Success Rate", value: "98%", color: "purple" },
    { icon: Heart, label: "Satisfaction", value: "5.0", color: "pink" }
  ];
  return (
    <div className="min-h-screen md:pt-20 pt-6">
      <Helmet>
        <title>Testimonials - Revolve </title>
        <meta
          name="description"
          content="Read client testimonials and success stories from Revolve . Discover how we've helped businesses across technology, real estate, finance, and more achieve their goals."
        />
        <meta
          name="keywords"
          content="client testimonials, success stories, Revolve  reviews, business intelligence testimonials, cloud migration reviews, real estate technology solutions"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <section className="py-20 bg-blue-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Client Testimonials</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
              Hear what our clients say about working with Revolve .
            </p>
          </motion.div>
        </div>
      </section>
      <section className="relative py-20 lg:py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-600 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-600 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Badge */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-6">
              <div className="flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-sm">
                <Quote className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">Client Success Stories</span>
              </div>
            </div>
          </div>

          {/* Main Title */}
          <div className="text-center mb-12">
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover how we've helped businesses across <span className="font-semibold text-blue-600">6 countries</span> achieve their digital transformation goals
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-${stat.color}-100 rounded-2xl mb-4`}>
                    <stat.icon className={`w-8 h-8 text-${stat.color}-600`} />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white/50 backdrop-blur-sm border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search testimonials..."
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              {/* Featured Toggle */}
              <button
                onClick={() => handleFeaturedToggle(!showOnlyFeatured)}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${showOnlyFeatured
                  ? 'bg-yellow-100 text-yellow-700 border-2 border-yellow-300'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                <Star className="w-4 h-4 inline mr-2" />
                Featured
              </button>

              {/* Industry Filter */}
              <select
                value={selectedIndustry}
                onChange={(e) => handleIndustryChange(e.target.value)}
                className="px-4 py-2 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {industries.map(industry => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>

              {/* Location Filter */}
              <select
                value={selectedLocation}
                onChange={(e) => handleLocationChange(e.target.value)}
                className="px-4 py-2 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-gray-600">
            Showing <span className="font-semibold text-blue-600">{filteredTestimonials.length}</span> of {testimonials.length} testimonials
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {filteredTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="group relative"
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative">
                  {/* Featured Badge */}
                  {testimonial.featured && (
                    <div className="absolute -top-3 -right-3">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white p-2 rounded-full shadow-lg">
                        <Star className="w-5 h-5 fill-current" />
                      </div>
                    </div>
                  )}

                  {/* Quote Icon */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl shadow-lg">
                      <Quote className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500 mb-1">{testimonial.location}</div>
                      <div className="text-xs text-blue-600 font-medium">{testimonial.industry}</div>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 italic">
                    "{testimonial.content}"
                  </p>

                  {/* Project */}
                  <div className="mb-6">
                    <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      <Building className="w-4 h-4 mr-2" />
                      {testimonial.project}
                    </div>
                  </div>

                  {/* Author */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 lg:w-20 lg:h-20 rounded-full object-cover shadow-lg ring-4 ring-white"
                        />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">{testimonial.name}</h4>
                        <p className="text-blue-600 font-semibold">{testimonial.role}</p>
                        <p className="text-gray-500">{testimonial.company}</p>
                      </div>
                    </div>
                    <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredTestimonials.length === 0 && (
            <div className="text-center py-16">
              <div className="w-32 h-32 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Search className="w-16 h-16 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No testimonials found</h3>
              <p className="text-gray-600 mb-8">Try adjusting your search criteria or filters</p>
              <button
                onClick={() => {
                  setSelectedIndustry("All");
                  setSelectedLocation("All");
                  setSearchTerm("");
                  setShowOnlyFeatured(false);
                  setFilteredTestimonials(testimonials);
                }}
                className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-blue-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Let's discuss how we can help transform your business and achieve exceptional results together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@revolvespl.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-2xl hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Start Your Success Story
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;