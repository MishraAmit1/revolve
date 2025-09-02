import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, Code, Award, Sparkles, TrendingUp, Zap, Target, TestTube2, Cpu, Eye, Globe, BarChart3, PieChart, Building, GitBranch, Cloud, Server, Layers, Monitor, Smartphone, Shield, Palette } from 'lucide-react';


import pythonLogo from "@/assets/python.jpg"
import reactjs from "@/assets/reactjs.png"
import nodejs from "@/assets/nodejs.png"
import sql from "@/assets/sql.png"
import net from "@/assets/net.png"

// Add CSS animations
const styles = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.animate-fadeIn {
  animation: fadeIn 0.5s ease-in-out forwards;
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-pulse-custom {
  animation: pulse 2s ease-in-out infinite;
}

.group:hover .group-hover\\:animate-float {
  animation: float 2s ease-in-out infinite;
}
`;

const processSteps = {
    'Analysis': {
        title: 'Comprehensive Analysis',
        description: 'Software Development is a vast field in itself and its requirements and priorities will indeed differ from business to business. Therefore, we will first analyze and understand your business, vision for growth and your expectations from the web services. Depending upon the type of your enterprise, our team will come up with creative ideas and concepts for your website and web apps, all of which will be focused on the growth of your business.',
        icon: Eye,
        features: [
            'In-depth business and stakeholder interviews',
            'Vision and goal alignment workshops',
            'Requirement gathering and documentation',
            'Competitor and market research',
            'Ideation sessions for website/app concepts',
            'Growth-focused strategy planning'
        ]
    },
    'Design': {
        title: 'Strategic Design',
        description: 'Post the in-depth analysis of your business, we will come up with our years of hands-on experience in Software Development will help us in coming up with the perfect designs for your Software Development. The initial designing phase will focus on clearly reflecting your brand aesthetics on the website and app. An interactive and simplified sitemap will also be designed prioritizing the functionality of the website for the end user.',
        icon: Palette,
        features: [
            'Brand identity and visual style exploration',
            'Custom UI/UX design tailored to business goals',
            'Interactive sitemap and user flow creation',
            'Wireframes and high-fidelity mockups',
            'User-centric design iterations and feedback loops'
        ]
    },
    'Testing': {
        title: 'Rigorous Testing',
        description: 'The website and application are a digital equivalent of your business and just like your business, it can have no days off. We will ensure this by testing the responsiveness and compatibility of the website and web app on various operating devices and systems to avoid any last-moment glitches and minor nags. The loading time and speed will be enhanced by proper optimization techniques. Only post-final debugging and fixing errors will we make it live.',
        icon: TestTube2,
        features: [
            'Multi-device and multi-OS responsiveness testing',
            'Cross-browser compatibility checks',
            'Performance optimization and speed testing',
            'Comprehensive bug tracking and resolution',
            'Final quality assurance and launch readiness review'
        ]
    }
};

// Technology expertise data
const technologies = [
    {
        name: "Python",
        logo: pythonLogo,
        category: "Python Development",
        description: "Enterprise Python solutions"
    },
    {
        name: "ReactJS",
        logo: reactjs,
        category: "ReactJS Development",
        description: "Dynamic web applications"
    },
    {
        name: "Nodejs",
        logo: nodejs,
        category: "Nodejs Development",
        description: "High-performance applications"
    },
    {
        name: "SQL",
        logo: sql,
        category: "SQL Development",
        description: "High-performance applications"
    },
    {
        name: ".NET",
        logo: net,
        category: ".NET Development",
        description: "Microsoft ecosystem"
    }
];

const WebSiteDevelopment = () => {
    const [activeTab, setActiveTab] = useState('Analysis');

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
            <style>{styles}</style>
            {/* Hero Section */}
            <section className="py-20 bg-blue-gradient text-white relative overflow-hidden md:pt-40 pt-26">
                <div className="absolute inset-0 opacity-20">
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=600&fit=crop)` }}
                    />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="initial-animation">
                        <button
                            onClick={() => window.history.back()}
                            className="inline-flex items-center text-blue-200 hover:text-white mb-8 transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            Back to Services
                        </button>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Software Development Services
                        </h1>
                        <p className="text-2xl text-blue-100 mb-8 max-w-4xl">
                            We Provide Unsurpassed Software Development Services
                        </p>
                        <p className="text-lg text-blue-200 max-w-4xl">
                            Transform your digital presence with cutting-edge web solutions that drive growth, enhance user experience, and deliver measurable results.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Overview Section */}
            <section className="py-16 lg:py-24 relative">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-20 left-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-600 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-6">
                            <div className="flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-sm">
                                <Globe className="w-5 h-5 text-blue-600" />
                                <span className="text-sm font-medium text-gray-700">Our Services</span>
                            </div>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Software Development</span>
                            <br />Solutions for Every Need
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {technologies.map((tech, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden"
                            >
                                <div className="text-center">
                                    <div key={index} className="flex flex-col items-center">
                                        <img
                                            src={tech.logo}
                                            alt={tech.name}
                                            className="h-20 md:h-24 max-w-[240px] object-contain mb-2"
                                            style={{ minHeight: 60 }}
                                            onError={e => { const img = e.target as HTMLImageElement; img.style.display = 'none'; if (img.nextSibling instanceof HTMLElement) img.nextSibling.style.display = 'block'; }}
                                        />
                                    </div>

                                    <p className="text-sm text-gray-500">
                                        {tech.category}
                                    </p>
                                </div>

                                {/* Animated border effect */}
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What We Offer Section */}
            <section className="py-16 lg:py-24 bg-white/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center justify-center p-2 bg-purple-100 rounded-full mb-6">
                                <div className="flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-sm">
                                    <Building className="w-5 h-5 text-purple-600" />
                                    <span className="text-sm font-medium text-gray-700">What We Offer</span>
                                </div>
                            </div>

                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                Optimize your software innovation potential with the{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                                    Best Website Development Company
                                </span>
                            </h2>

                            <div className="space-y-6 text-gray-600 leading-relaxed">
                                <p>
                                    From MSMEs to the largest companies in the world, everyone now realizes the importance of making your presence felt in the biggest market of the world, the internet. However, fancy offices and expensive suits will not help enterprises grow on the internet. A website & a web application for your business is not just a formality anymore. The smartest businessmen have realized Software Development to be an opportunity and the most significant way to make your mark in the biggest and the most competitive market.
                                </p>

                                <p>
                                    Revolve  provide one of the best Software Development services in the market. A good website and web app are about quality optimized content, speed, a sensational UI leading to an unforgettable UX, and most importantly, security. We understand this by adhering to all the above-mentioned factors as strict benchmarks for all our clients.
                                </p>

                                <p>
                                    Revolve  is a one-stop solution for all your Software Development requirements. Our team of experienced IT professionals will use proven methodologies and a customer-centric approach to Software Development. Elevate your online presence with Revolve , the leading website development company.
                                </p>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white">
                                <h3 className="text-2xl font-bold mb-6">Why Choose Revolve ?</h3>
                                <div className="space-y-4">
                                    {[
                                        "Quality optimized content delivery",
                                        "Lightning-fast website performance",
                                        "Sensational UI/UX design",
                                        "Enterprise-grade security",
                                        "Proven methodologies",
                                        "Customer-centric approach"
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center space-x-3"
                                        >
                                            <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-xl"></div>
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-400 rounded-full opacity-20 blur-xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center p-2 bg-indigo-100 rounded-full mb-6">
                            <div className="flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-sm">
                                <GitBranch className="w-5 h-5 text-indigo-600" />
                                <span className="text-sm font-medium text-gray-700">Our Process</span>
                            </div>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            We Organize Our{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                                Production Process
                            </span>
                        </h2>
                    </div>

                    {/* Process Tabs */}
                    <div className="flex justify-center mb-12 overflow-x-auto">
                        <div className="bg-white rounded-2xl p-2 shadow-lg inline-flex">
                            {Object.keys(processSteps).map((step) => (
                                <button
                                    key={step}
                                    onClick={() => setActiveTab(step)}
                                    className={`px-6 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === step
                                        ? 'bg-indigo-600 text-white'
                                        : 'text-gray-700 hover:bg-gray-100'
                                        }`}
                                >
                                    {step}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div
                        key={activeTab}
                        className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl opacity-0 animate-fadeIn"
                        style={{ animation: 'fadeIn 0.5s ease-in-out forwards' }}
                    >
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className={`inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6`}>
                                    {React.createElement(processSteps[activeTab].icon, { className: "w-8 h-8 text-blue-600" })}
                                </div>

                                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                                    {processSteps[activeTab].title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed mb-8">
                                    {processSteps[activeTab].description}
                                </p>

                                <div className="space-y-3">
                                    {processSteps[activeTab].features.map((feature, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center space-x-3"
                                        >
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                            <span className="text-gray-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative">
                                <div
                                    className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-8 aspect-square flex items-center justify-center transform transition-all duration-600 hover:scale-105"
                                >
                                    {React.createElement(processSteps[activeTab].icon, {
                                        className: "w-24 h-24 text-blue-600"
                                    })}
                                </div>
                                {/* Decorative elements */}
                                <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-400 rounded-full opacity-30 blur-lg"></div>
                                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-purple-400 rounded-full opacity-30 blur-lg"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Call to Action Section */}
            <section className="py-16 lg:py-24 bg-blue-gradient text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                        Ready to Elevate Your Web Presence?
                    </h2>
                    <p className="text-lg mb-8">
                        Contact us today to discuss your Software Development needs and get a free consultation.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center justify-center px-8 py-3 bg-orange-500 hover:bg-orange-600 rounded-full text-white transition-colors"
                    >
                        Get Started
                        <TrendingUp className="w-5 h-5 ml-2" />
                    </a>
                </div>
            </section>
            {/* Footer */}
        </div>
    );
};
export default WebSiteDevelopment;