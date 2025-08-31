import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Code, Award, Sparkles, TrendingUp, Zap, Target, TestTube2, Cpu, Eye, Database, BarChart3, PieChart, Building, GitBranch } from 'lucide-react';

// Service data based on your provided content
const serviceOfferings = [
    {
        title: "ETL Tools",
        description: "Using extraction, transformation and loading tools for data integration.",
        icon: Database,
        color: "blue"
    },
    {
        title: "Data Mining",
        description: "Identifying customer behaviour and patterns for business growth.",
        icon: TrendingUp,
        color: "indigo"
    },
    {
        title: "Data Warehouse",
        description: "Unified repository of structured data with an analytical user interface.",
        icon: BarChart3,
        color: "purple"
    },
    {
        title: "Reporting BI Tools",
        description: "Reporting insights through interactive dashboards aiding better decisions.",
        icon: PieChart,
        color: "pink"
    }
];

const processSteps = {
    'Analysis': {
        title: 'Comprehensive Analysis',
        description: 'We understand that an organization invests their financial resources only for better financial gains and returns in the future. However, it is of utmost importance that our team of highly-skilled BI experts have an absolute understanding of your requirements and expectations. This comprehensive analysis will help our team to come up with multiple BI concepts and ideas for you, which will thereby lead us to the final design.',
        icon: Eye,
        features: [
            'Requirements gathering and assessment',
            'Current data landscape evaluation',
            'Business objectives alignment',
            'Technology stack evaluation',
            'ROI analysis and projections'
        ]
    },
    'Design': {
        title: 'Strategic Design',
        description: 'Our BI solutions are designed to integrate unstructured, structured, and semi-structured data from multiple channels and reduce the manual analysis of data. We design reliable architecture and you can make tech selections and deploy analytics tools. Further, an automated analytics reporting system is generated. Easy-to-use dashboards with intuitive data models are what will make your Business Intelligence solution perfect.',
        icon: Cpu,
        features: [
            'Data architecture design',
            'Dashboard wireframes and mockups',
            'ETL process blueprints',
            'Security and compliance planning',
            'Scalability considerations'
        ]
    },
    'Testing': {
        title: 'Rigorous Testing',
        description: 'Since BI is now an integral component of your business, BI testing has never been more crucial for us. Before we assist you with systematic BI implementation, we will test every step of the BI. Dealing with multiple sources of data in various formats, it is important to evaluate data storage and test the ETL process. The analytics reports will also be tested. Troubleshooting at the code level along with Business Intelligence support will ensure proper deployment.',
        icon: TestTube2,
        features: [
            'Data quality validation',
            'Performance testing',
            'User acceptance testing',
            'Security vulnerability assessment',
            'Integration testing'
        ]
    }
};

const benefits = [
    {
        title: "Data-Driven Decisions",
        description: "Transform raw data into actionable insights for strategic decision making",
        icon: Target
    },
    {
        title: "Real-Time Analytics",
        description: "Access to live data and instant reporting for immediate business responses",
        icon: Zap
    },
    {
        title: "Increased Efficiency",
        description: "Automate manual processes and reduce time spent on data analysis",
        icon: TrendingUp
    },
    {
        title: "Competitive Advantage",
        description: "Stay ahead of competition with advanced analytics and market insights",
        icon: Sparkles
    }
];

const BusinessIntelligence = () => {
    const [activeTab, setActiveTab] = useState('Analysis');

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">

            <section className="py-20 bg-blue-gradient text-white relative overflow-hidden md:pt-40 pt-26">
                <div className="absolute inset-0 opacity-20">
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop)` }}
                    />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="initial-animation">
                        <a
                            href="/services"
                            className="inline-flex items-center text-blue-200 hover:text-white mb-8 transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            Back to Services
                        </a>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Business Intelligence Services
                        </h1>
                        <p className="text-2xl text-blue-100 mb-8 max-w-4xl">
                            Transform Your Data Into Strategic Advantages
                        </p>
                        <p className="text-lg text-blue-200 max-w-4xl">
                            Our comprehensive Business Intelligence solutions empower organizations to make data-driven decisions through advanced analytics, interactive dashboards, and real-time reporting capabilities.
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
                                <Database className="w-5 h-5 text-blue-600" />
                                <span className="text-sm font-medium text-gray-700">Our Services</span>
                            </div>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            We Provide <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Unparalleled</span>
                            <br />Business Intelligence Services
                        </h2>
                    </div>

                    {/* Service Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {serviceOfferings.map((service, index) => (
                            <div
                                key={index}
                                className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                            >
                                <div className={`inline-flex items-center justify-center w-16 h-16 bg-${service.color}-100 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <service.icon className={`w-8 h-8 text-${service.color}-600`} />
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

            {/* Benefits Section */}
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
                                Revolutionize Your Business with{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                                    Innovative Business Intelligence Services
                                </span>
                            </h2>

                            <div className="space-y-6 text-gray-600 leading-relaxed">
                                <p>
                                    An organization generates data from multiple channels through many touch points of the internet. But what good is this huge pile of data if it can't be used for the growth of business because it is difficult to retrieve relevant data at crucial times?
                                </p>

                                <p>
                                    The usage of Excel sheets for manually analysing data with primitive reporting for individual purposes becomes a difficult and time-consuming task. Furthermore, simultaneously providing the same real-time information to various departments and operations becomes impossible.
                                </p>

                                <p>
                                    Here comes the role of <strong className="text-blue-600">Business Intelligence (BI) platforms</strong> enabling organizations to combine data analysis, data visualization, and data tools; all leading to better business decisions.
                                </p>

                                <p>
                                    Gone are the days when business owners used to "take a shot in the dark." In this era of cutthroat competition between businesses, every decision is planned and revised based on insights from real-time data collected from established infrastructure.
                                </p>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white">
                                <h3 className="text-2xl font-bold mb-6">Why Choose Revolve ?</h3>
                                <div className="space-y-4">
                                    {[
                                        "Integrate data from multiple sources",
                                        "Automate manual data analysis",
                                        "Generate informative dashboards",
                                        "Interactive graphics and analytics tools",
                                        "User-friendly BI platforms",
                                        "Data-driven business decisions"
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
                            We Organize Our{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                                Production Process
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
            {/* CTA Section */}
            <section className="py-20 bg-blue-gradient text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl font-bold mb-6">
                            Ready to Transform Your Business?
                        </h2>
                        <p className="text-xl mb-8">
                            {/* Let's discuss how our {serviceData.title.toLowerCase()} solutions can drive your success. */}
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

export default BusinessIntelligence;