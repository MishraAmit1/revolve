import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, Play, Pause } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Jamie Kowalczyk",
    role: "Senior Controller",
    company: "TechCorp Solutions",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bb?w=150&h=150&fit=crop&crop=face",
    content: "Revolve  transformed our business intelligence capabilities. Their expertise in data engineering and analytics helped us make data-driven decisions that increased our revenue by 35%. The team's professionalism and dedication are unmatched.",
    rating: 5
  },
  {
    id: 2,
    name: "Sujatha Dhanapal",
    role: "Lead - Yardi Application Support",
    company: "PropTech Innovations",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content: "Revolve  has done an excellent job staffing our contract resource requirements for Yardi application support. They are timely, provide quality resources and work. I also feel they operate with integrity, which is of utmost importance when securing a staffing partner.",
    rating: 5
  },
  {
    id: 3,
    name: "Michael Kerckhof",
    role: "IT Director",
    company: "Saif Al Ghurair Real Estate Group",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content: "The revolve team have been invaluable to our success. They are very knowledgeable and responsive whenever there is an issue. There are no problems too big or small for them. The revolve team would be a great addition to any organization.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-slide functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-6">
            <div className="flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-sm">
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              <span className="text-sm font-medium text-gray-700">Client Testimonials</span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Clients Say</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We've expanded our reach to <span className="font-semibold text-blue-600">6 countries</span> -
            <strong className="text-gray-800">USA DUBAI INDIA, UAE, Singapore and UK</strong>
          </p>
        </div>

        {/* Main testimonial area */}
        <div className="relative max-w-5xl mx-auto">
          {/* Auto-play controls */}
          <div className="flex justify-end mb-6">
            <button
              onClick={togglePlayPause}
              className="flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full text-gray-600 hover:text-blue-600 hover:border-blue-300 transition-all duration-300 shadow-sm"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-4 h-4" />
                  <span className="text-sm font-medium">Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  <span className="text-sm font-medium">Play</span>
                </>
              )}
            </button>
          </div>

          {/* Testimonial cards container */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0">
                    <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 sm:p-10 lg:p-12 shadow-xl border border-white/20 mx-2">
                      {/* Quote icon */}
                      <div className="flex justify-center mb-6">
                        <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl shadow-lg">
                          <Quote className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      {/* Stars */}
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current mx-0.5" />
                        ))}
                      </div>

                      {/* Content */}
                      <div className="text-center mb-8">
                        <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed font-light italic max-w-4xl mx-auto">
                          "{testimonial.content}"
                        </p>
                      </div>

                      {/* Author info */}
                      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <div className="relative">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-16 h-16 lg:w-20 lg:h-20 rounded-full object-cover shadow-lg ring-4 ring-white"
                          />
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                        </div>
                        <div className="text-center sm:text-left">
                          <h4 className="text-xl lg:text-2xl font-bold text-gray-900 mb-1">
                            {testimonial.name}
                          </h4>
                          <p className="text-blue-600 font-semibold text-lg mb-1">
                            {testimonial.role}
                          </p>
                          <p className="text-gray-500 text-base">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 lg:p-4 rounded-full bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-110 border border-gray-200 z-10"
            >
              <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 lg:p-4 rounded-full bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-110 border border-gray-200 z-10"
            >
              <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center items-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 ${currentIndex === index
                  ? 'w-8 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full'
                  : 'w-3 h-3 bg-gray-300 hover:bg-gray-400 rounded-full'
                  }`}
              />
            ))}
          </div>

          {/* Progress bar */}
          {isPlaying && (
            <div className="mt-6 max-w-xs mx-auto">
              <div className="w-full bg-gray-200 rounded-full h-1">
                <div
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 h-1 rounded-full transition-all duration-300"
                  style={{
                    width: `${((currentIndex + 1) / testimonials.length) * 100}%`
                  }}
                ></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;