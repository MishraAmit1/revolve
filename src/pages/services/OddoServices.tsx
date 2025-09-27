import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Code, Award, Sparkles, TrendingUp, Zap, Target, TestTube2, Cpu, Eye, Database, BarChart3, PieChart, Building, GitBranch, Settings, Users, Wrench, Package, Cloud, Shield, Layers, Globe } from 'lucide-react';

// Service data for Odoo
const serviceOfferings = [
    {
        title: "ERP Implementation",
        description: "Complete enterprise resource planning solutions tailored to your business needs.",
        icon: Database,
        color: "blue"
    },
    {
        title: "Custom Module Development",
        description: "Build custom modules to extend Odoo functionality for your unique requirements.",
        icon: Code,
        color: "indigo"
    },
    {
        title: "Integration Services",
        description: "Seamlessly integrate Odoo with third-party applications and systems.",
        icon: Layers,
        color: "purple"
    },
    {
        title: "Migration & Upgrades",
        description: "Smooth migration from legacy systems and upgrades to latest Odoo versions.",
        icon: Cloud,
        color: "pink"
    }
];

const processSteps = {
    'Analysis': {
        title: 'Comprehensive Analysis',
        description: 'We begin by thoroughly understanding your business processes, challenges, and objectives. Our team of Odoo experts conducts detailed assessments of your current systems, workflows, and pain points. This comprehensive analysis helps us identify opportunities for optimization and create a roadmap for successful Odoo implementation that aligns with your business goals.',
        icon: Eye,
        features: [
            'Business process mapping and analysis',
            'Current system evaluation and gap analysis',
            'Requirements gathering and documentation',
            'ROI analysis and cost-benefit assessment',
            'Customization needs identification'
        ]
    },
    'Design': {
        title: 'Strategic Design',
        description: 'Based on our analysis, we design a tailored Odoo solution that addresses your specific business needs. Our design phase focuses on creating intuitive workflows, user-friendly interfaces, and efficient data structures. We ensure that the solution is scalable, maintainable, and aligned with industry best practices while maximizing the use of Odoo\'s powerful features.',
        icon: Cpu,
        features: [
            'Solution architecture design',
            'Module configuration planning',
            'Custom development blueprints',
            'User interface and experience design',
            'Integration architecture planning'
        ]
    },
    'Testing': {
        title: 'Rigorous Testing',
        description: 'Quality assurance is paramount in our Odoo implementations. We conduct comprehensive testing at every level - from individual modules to complete business processes. Our testing methodology ensures data integrity, system performance, and user satisfaction. We validate all customizations, integrations, and configurations before deployment to guarantee a smooth go-live experience.',
        icon: TestTube2,
        features: [
            'Unit and integration testing',
            'User acceptance testing (UAT)',
            'Performance and load testing',
            'Security and compliance validation',
            'End-to-end process testing'
        ]
    }
};

const benefits = [
    {
        title: "All-in-One Solution",
        description: "Unified platform for all business operations from sales to accounting",
        icon: Package
    },
    {
        title: "Cost-Effective",
        description: "Open-source solution with no licensing fees and lower TCO",
        icon: Target
    },
    {
        title: "Highly Customizable",
        description: "Flexible platform that adapts to your unique business processes",
        icon: Settings
    },
    {
        title: "Scalable Growth",
        description: "Grows with your business from startup to enterprise level",
        icon: TrendingUp
    }
];

const OddoServices = () => {
    const [activeTab, setActiveTab] = useState('Analysis');

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
            {/* Hero Section */}
            <section className="py-20 bg-blue-gradient text-white relative overflow-hidden md:pt-40 pt-26">
                <div className="absolute inset-0 opacity-20">
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop)` }}
                    />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="initial-animation">
                        <Link
                            to="/services"
                            className="inline-flex items-center text-blue-200 hover:text-white mb-8 transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            Back to Services
                        </Link>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Odoo ERP Services
                        </h1>
                        <p className="text-2xl text-blue-100 mb-8 max-w-4xl">
                            Transform Your Business with Open Source ERP Excellence
                        </p>
                        <p className="text-lg text-blue-200 max-w-4xl">
                            Leverage the power of Odoo's comprehensive suite of business applications to streamline operations, boost productivity, and drive growth with our expert implementation and customization services.
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
                                <Package className="w-5 h-5 text-blue-600" />
                                <span className="text-sm font-medium text-gray-700">Our Services</span>
                            </div>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Odoo ERP</span>
                            <br />Solutions & Services
                        </h2>
                    </div>

                    {/* Service Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {serviceOfferings.map((service, index) => (
                            <div
                                key={index}
                                className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <service.icon className="w-8 h-8 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {service.description}
                                </p>
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
                                Empower Your Business with{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                                    World-Class Odoo Implementation
                                </span>
                            </h2>

                            <div className="space-y-6 text-gray-600 leading-relaxed">
                                <p>
                                    In today's competitive business landscape, having an integrated ERP system is no longer a luxury but a necessity. Odoo stands out as the world's most popular open-source ERP, offering a comprehensive suite of business applications that cover all your company needs.
                                </p>

                                <p>
                                    At Revolve, we specialize in implementing and customizing Odoo to perfectly fit your business processes. Whether you're a small startup or a large enterprise, our expert consultants ensure that you get the most out of Odoo's powerful features - from CRM and Sales to Manufacturing and Accounting.
                                </p>

                                <p>
                                    Our approach goes beyond simple implementation. We focus on understanding your unique business challenges and crafting solutions that drive real value. With our deep expertise in Odoo's technical architecture and business applications, we deliver solutions that are scalable, efficient, and user-friendly.
                                </p>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white">
                                <h3 className="text-2xl font-bold mb-6">Why Choose Revolve for Odoo?</h3>
                                <div className="space-y-4">
                                    {[
                                        "Certified Odoo partners and experts",
                                        "End-to-end implementation services",
                                        "Custom module development",
                                        "Seamless data migration",
                                        "24/7 support and maintenance",
                                        "Training and knowledge transfer"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center space-x-3">
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
                            Our Proven{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                                Implementation Process
                            </span>
                        </h2>
                    </div>

                    {/* Process Tabs */}
                    <div className="flex justify-center mb-12">
                        <div className="bg-white rounded-2xl p-2 shadow-lg">
                            {Object.keys(processSteps).map((step) => (
                                <button
                                    key={step}
                                    onClick={() => setActiveTab(step)}
                                    className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${activeTab === step
                                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                                        }`}
                                >
                                    {step}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Active Process Content */}
                    <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
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
                                        <div key={index} className="flex items-center space-x-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                            <span className="text-gray-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative">
                                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-8 aspect-square flex items-center justify-center">
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

            {/* Benefits Section */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center p-2 bg-green-100 rounded-full mb-6">
                            <div className="flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-sm">
                                <Sparkles className="w-5 h-5 text-green-600" />
                                <span className="text-sm font-medium text-gray-700">Benefits</span>
                            </div>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Odoo ERP</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-2xl mb-6 shadow-md">
                                    <benefit.icon className="w-7 h-7 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Odoo Modules Section */}
            <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center p-2 bg-indigo-100 rounded-full mb-6">
                            <div className="flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-sm">
                                <Globe className="w-5 h-5 text-indigo-600" />
                                <span className="text-sm font-medium text-gray-700">Odoo Modules</span>
                            </div>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Complete Suite of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Business Applications</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {[
                            { name: "Sales", icon: TrendingUp },
                            { name: "CRM", icon: Users },
                            { name: "Inventory", icon: Package },
                            { name: "Accounting", icon: BarChart3 },
                            { name: "Manufacturing", icon: Settings },
                            { name: "Purchase", icon: Database },
                            { name: "HR", icon: Users },
                            { name: "Project", icon: Layers },
                            { name: "E-commerce", icon: Globe },
                            { name: "Marketing", icon: Target },
                            { name: "Helpdesk", icon: Shield },
                            { name: "POS", icon: Cpu }
                        ].map((module, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl">
                                        <module.icon className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900">{module.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-blue-gradient text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Ready to Transform Your Business with Odoo?
                    </h2>
                    <p className="text-xl mb-8">
                        Let's discuss how our Odoo expertise can streamline your operations and drive growth.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/services"
                            className="btn-blue text-lg px-8 py-4"
                        >
                            Explore More Services
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OddoServices;