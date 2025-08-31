import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, PieChart, Cloud, Database, FileText, Home, Globe, Settings } from 'lucide-react';
import image from "../assets/image.png"
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const services = [
    { name: 'Deltek Costpoint', path: '/services/deltek-costpoint', icon: FileText },
    { name: 'Yardi Property Management Software', path: '/services/yardi-property-management-software', icon: Home },
    { name: 'Knowledge process Outsourcing', path: '/services/data-engineering', icon: Database },
    { name: 'Business Intelligence', path: '/services/business-intelligence', icon: PieChart },
    { name: 'Software Development', path: '/services/software-development', icon: Globe },
    { name: 'UK Accounting and Payroll', path: '/services/uk-accounting-and-payroll', icon: Settings },
    { name: 'Cloud Migration', path: '/services/cloud-migration', icon: Cloud },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  // Determine navbar background based on page and scroll state
  const isHomePage = location.pathname === '/';
  const navBackground = isHomePage && !isScrolled ? 'bg-transparent' : 'bg-blue-gradient shadow-lg text-white';

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${navBackground}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <img
                src={image}
                alt="Revolve  Logo"
                className="h-14 w-auto object-contain"
                style={{ maxWidth: '120px' }}
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`nav-link ${isActive('/') ? 'nav-active' : ''
                } ${isHomePage && !isScrolled ? 'text-white' : 'text-white'} hover:text-blue-600 transition-colors`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link
                to="/services"
                className={`flex items-center space-x-1 nav-link ${location.pathname === '/services' || location.pathname.startsWith('/services/') ? 'nav-active' : ''
                  } ${isHomePage && !isScrolled ? 'text-white' : 'text-white'} hover:text-blue-600 transition-colors`}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''
                  }`} />
              </Link>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-96 bg-blue-gradient rounded-xl shadow-xl border border-gray-200 p-4 z-50"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      {services.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className="flex items-center space-x-3 px-4 py-2 text-white hover:bg-blue-100 hover:text-blue-600 transition-colors rounded-lg"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          <service.icon className="w-7 h-7 text-blue-600 flex-shrink-0 self-center" />
                          <span className="block break-words">{service.name}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/about"
              className={`nav-link ${isActive('/about') ? 'nav-active' : ''
                } ${isHomePage && !isScrolled ? 'text-white' : 'text-white'} hover:text-blue-600 transition-colors`}
            >
              About RS
            </Link>

            <Link
              to="/careers"
              className={`nav-link ${isActive('/careers') ? 'nav-active' : ''
                } ${isHomePage && !isScrolled ? 'text-white' : 'text-white'} hover:text-blue-600 transition-colors`}
            >
              Careers
            </Link>

            <Link
              to="/blog"
              className={`nav-link ${isActive('/blog') ? 'nav-active' : ''
                } ${isHomePage && !isScrolled ? 'text-white' : 'text-white'} hover:text-blue-600 transition-colors`}
            >
              Blog
            </Link>

            <Link
              to="/testimonials"
              className={`nav-link ${isActive('/testimonials') ? 'nav-active' : ''
                } ${isHomePage && !isScrolled ? 'text-white' : 'text-white'} hover:text-blue-600 transition-colors`}
            >
              Testimonials
            </Link>

            <Link
              to="/contact"
              className="btn-orange"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg ${isHomePage && !isScrolled ? 'text-white' : 'text-white'
              }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-blue-gradient rounded-lg shadow-lg mt-2 overflow-hidden"
            >
              <div className="py-4">
                <Link
                  to="/"
                  className="block px-4 py-2 text-white hover:bg-blue-700 hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <div className="px-4 py-2">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="block px-4 py-2 text-white font-semibold hover:bg-blue-700 hover:text-white w-full text-left transition-colors"
                  >
                    Services
                    <ChevronDown className={`w-4 h-4 inline-block ml-2 transition-transform ${isServicesOpen ? 'rotate-180' : ''
                      }`} />
                  </button>
                  {isServicesOpen && (
                    <div className="mt-2">
                      {services.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className="flex items-center space-x-3 pl-8 py-1 text-white hover:bg-blue-700 hover:text-white transition-colors"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setIsServicesOpen(false);
                          }}
                        >
                          <service.icon className="w-6 h-6 text-white" />
                          <span>{service.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <Link
                  to="/about"
                  className="block px-4 py-2 text-white hover:bg-blue-700 hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About RS
                </Link>
                <Link
                  to="/careers"
                  className="block px-4 py-2 text-white hover:bg-blue-700 hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Careers
                </Link>
                <Link
                  to="/blog"
                  className="block px-4 py-2 text-white hover:bg-blue-700 hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  to="/testimonials"
                  className="block px-4 py-2 text-white hover:bg-blue-700 hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Testimonials
                </Link>
                <div className="px-4 pt-2">
                  <Link
                    to="/contact"
                    className="btn-orange block text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;