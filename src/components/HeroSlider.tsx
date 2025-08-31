import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import heroSlide1 from '@/assets/hero-slide-1.jpg';
import heroSlide2 from '@/assets/hero-slide-2.jpg';
import heroSlide3 from '@/assets/hero-slide-3.jpg';

const slides = [
  {
    id: 1,
    image: heroSlide1,
    title: "Unlock Innovation Potential with Revolve ",
    subtitle: "Software Experts with 5+ Decades of Experience",
    cta: "Discover Our Services",
    ctaLink: "/services",
    overlay: "from-navy/80 to-blue-600/60"
  },
  {
    id: 2,
    image: heroSlide2,
    title: "Transform Your Business with Data Engineering",
    subtitle: "Leading Partner for Enterprises, SMEs & Technology Challengers",
    cta: "View Our Projects",
    ctaLink: "/about",
    overlay: "from-blue-800/80 to-blue-500/60"
  },
  {
    id: 3,
    image: heroSlide3,
    title: "Excellence in Cloud Migration & Business Intelligence",
    subtitle: "Trusted by 20+ Active Clients Across 6 Countries",
    cta: "Get Free Consultation",
    ctaLink: "/contact",
    overlay: "from-navy/90 to-blue-700/70"
  }
];


const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [slideKey, setSlideKey] = useState(0);

  const slideInterval = 5000; // 5 seconds

  // Preload all images
  useEffect(() => {
    const imagePromises = slides.map(slide => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = slide.image;
      });
    });

    Promise.all(imagePromises)
      .then(() => setImagesLoaded(true))
      .catch(console.error);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let progressInterval: NodeJS.Timeout;

    if (isPlaying && imagesLoaded) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setProgress(0);
        setSlideKey(prev => prev + 1);
      }, slideInterval);

      progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            return 0;
          }
          return prev + (100 / (slideInterval / 100));
        });
      }, 100);
    }

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [isPlaying, imagesLoaded]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    setProgress(0);
    setSlideKey(prev => prev + 1);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgress(0);
    setSlideKey(prev => prev + 1);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
    setSlideKey(prev => prev + 1);
  }, []);

  const togglePlayPause = useCallback(() => {
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  // Show loading state while images are preloading
  if (!imagesLoaded) {
    return (
      <div className="relative h-screen w-full overflow-hidden bg-navy flex items-center justify-center">
        <div className="text-white text-center">
          <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-xl">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-screen w-full overflow-hidden max-w-full">
      {/* All Background Images - Always rendered for smooth crossfade */}
      {slides.map((slide, index) => (
        <motion.div
          key={`slide-${index}`}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{
            opacity: currentSlide === index ? 1 : 0,
            scale: currentSlide === index ? 1 : 1.05
          }}
          transition={{
            opacity: { duration: 0.8, ease: "easeInOut" },
            scale: { duration: 12, ease: "linear" }
          }}
          style={{ zIndex: currentSlide === index ? 2 : 1 }}
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat hero-bg"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.overlay}`} />
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            <motion.div
              key={slideKey}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-white"
            >
              {/* Main Title with Enhanced Animations */}
              <motion.h1
                initial={{ y: 80, opacity: 0, scale: 0.8 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{
                  duration: 1.2,
                  delay: 0.3,
                  type: "spring",
                  stiffness: 100,
                  damping: 12
                }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight hero-title"
              >
                <motion.span
                  initial={{ filter: "blur(10px)" }}
                  animate={{ filter: "blur(0px)" }}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  {slides[currentSlide].title}
                </motion.span>
              </motion.h1>

              {/* Subtitle with Enhanced Slide Animation */}
              <motion.p
                initial={{ y: 50, opacity: 0, x: -30 }}
                animate={{ y: 0, opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 1.0,
                  type: "spring",
                  stiffness: 80
                }}
                className="text-xl md:text-2xl mb-8 text-gray-200 hero-subtitle"
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.3 }}
                >
                  {slides[currentSlide].subtitle}
                </motion.span>
              </motion.p>

              {/* CTA Button with Enhanced Animations */}
              <motion.div
                initial={{ y: 60, opacity: 0, scale: 0.5, rotateX: 45 }}
                animate={{ y: 0, opacity: 1, scale: 1, rotateX: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 1.6,
                  type: "spring",
                  stiffness: 150,
                  damping: 10
                }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={slides[currentSlide].ctaLink}
                  className="btn-orange text-lg px-8 py-4 inline-block hero-cta relative overflow-hidden group"
                >
                  <motion.span
                    className="relative z-10"
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 2.0, duration: 0.5 }}
                  >
                    {slides[currentSlide].cta}
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 -z-10"
                    initial={{ scale: 0, rotate: 45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 1.8, duration: 0.6 }}
                  />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <motion.div
        className="absolute inset-y-0 left-4 flex items-center"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.5, duration: 0.5 }}
      >
        <button
          onClick={prevSlide}
          className="nav-button p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      </motion.div>

      <motion.div
        className="absolute inset-y-0 right-4 flex items-center"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.5, duration: 0.5 }}
      >
        <button
          onClick={nextSlide}
          className="nav-button p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </motion.div>

      {/* Bottom Controls */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.5 }}
      >
        {/* Slide Indicators */}
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative w-12 h-3 rounded-full transition-all duration-300 slider-indicator ${currentSlide === index
                  ? 'bg-white'
                  : 'bg-white/40 hover:bg-white/60'
                }`}
            >
              {currentSlide === index && (
                <motion.div
                  className="absolute top-0 left-0 h-full bg-orange-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1, ease: "linear" }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={togglePlayPause}
          className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300 play-pause-btn"
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>
      </motion.div>

      {/* Slide Counter */}
      <motion.div
        className="absolute top-1/2 right-8 transform -translate-y-1/2 text-white slide-counter"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.8, duration: 0.5 }}
      >
        <div className="text-right">
          <motion.div
            className="text-2xl font-bold"
            key={`counter-${currentSlide}`}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {String(currentSlide + 1).padStart(2, '0')}
          </motion.div>
          <div className="text-sm text-gray-300">
            / {String(slides.length).padStart(2, '0')}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSlider;