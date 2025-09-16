import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, Code, Award, Sparkles, TrendingUp, Zap, Target, TestTube2, Cpu, Eye, Database, BarChart3, PieChart, Building, GitBranch, Cloud, Server, Layers } from 'lucide-react';
import kpg from "@/assets/kpg.webp"
import tableau from "@/assets/tableau-logo.webp"
import octoai from "@/assets/octopai_logo-2-1024x386.png.webp"
import databricks from "@/assets/databricks_logor_stacked_rgb.webp"
import snowflake from "@/assets/smowflake.webp"
import erp from "@/assets/erp-systems.webp" // Placeholder — replace with actual ERP logo if available
import powerbi from "@/assets/powerbi-logo.webp" // Placeholder
import quickbooks from "@/assets/quickbooks-logo.webp" // Placeholder

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

// KPO Service Offerings
const serviceOfferings = [
    {
        title: "Finance & Accounting Outsourcing",
        description: "End-to-end F&A processes including P2P, O2R, R2R, payroll, and compliance management.",
        icon: BarChart3,
        color: "blue"
    },
    {
        title: "Audit & Compliance Support",
        description: "DCAA, DCMA, statutory, and internal audit support with complete documentation and reporting.",
        icon: Award,
        color: "indigo"
    },
    {
        title: "Process Optimization",
        description: "Streamline operations with FAR-compliant process redesign and automation for maximum efficiency.",
        icon: TrendingUp,
        color: "purple"
    },
    {
        title: "ERP & System Advisory",
        description: "System setup optimization, change recommendations, and seamless transition support for ERP platforms.",
        icon: Cpu,
        color: "pink"
    }
];

// KPO Process Steps
const processSteps = {
    'Assessment': {
        title: 'Client Process Assessment',
        description: 'We begin by thoroughly analyzing your current ‘As Is’ processes, identifying gaps, inefficiencies, and compliance risks. Our consultants map workflows, review systems, and document pain points to build a tailored offshore ‘To Be’ model aligned with your business goals.',
        icon: Eye,
        features: [
            'Current state process mapping',
            'Gap and risk analysis',
            'Compliance benchmarking (FAR/DCAA)',
            'System usage evaluation',
            'Documentation of pain points'
        ]
    },
    'Transition': {
        title: 'Seamless Transition Planning',
        description: 'Our team designs a phased transition plan — onsite or offshore — based on complexity and volume. We ensure zero disruption through parallel runs, knowledge transfer sessions, SOP documentation, and role-based access controls with encrypted data security protocols.',
        icon: GitBranch,
        features: [
            'Onsite/offshore transition strategy',
            'Parallel run execution',
            'SOP & knowledge documentation',
            'Role-based secure access setup',
            'CMMC/NDAs compliance enforcement'
        ]
    },
    'Execution & Optimization': {
        title: 'Operational Excellence & Continuous Improvement',
        description: 'Once live, we manage daily operations with rigorous quality checks, monthly reconciliations, audit-ready reporting, and proactive system recommendations. We continuously optimize workflows, reduce costs, and enhance scalability without compromising compliance or accuracy.',
        icon: Zap,
        features: [
            'Daily operational management',
            'GL reconciliation & cleanup',
            'Audit-ready monthly reporting',
            'Process automation opportunities',
            'Cost reduction & scalability enhancements'
        ]
    }
};

// KPO Tools & Platforms
const technologies = [
    {
        name: "QuickBooks",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTqd3IMrG1RK7Hxs9YtT8Jjxsen0VOwseTnw&s",
        category: "Accounting Platform"
    },
    {
        name: "Power BI",
        logo: "https://logos-world.net/wp-content/uploads/2022/02/Microsoft-Power-BI-Logo.jpg",
        category: "Data Visualization"
    },
    {
        name: "Tableau",
        logo: tableau,
        category: "Business Intelligence"
    },
    {
        name: "ERP Systems",
        logo: "https://cdn-icons-png.flaticon.com/512/5129/5129557.png",
        category: "Enterprise Resource Planning"
    },
    {
        name: "OCTOPAI",
        logo: octoai,
        category: "Data Lineage & Audit Trail"
    },
    {
        name: "Databricks",
        logo: databricks,
        category: "Analytics & Reporting"
    },
    {
        name: "Snowflake",
        logo: snowflake,
        category: "Cloud Data Warehouse"
    }
];

const DataEngineering = () => {
    const [activeTab, setActiveTab] = useState('Assessment');

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
            <style>{styles}</style>

            {/* Hero Section */}
            <section className="py-20 bg-blue-gradient text-white relative overflow-hidden md:pt-40 pt-26">
                <div className="absolute inset-0 opacity-20">
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop)` }}
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
                            Knowledge Process Outsourcing
                        </h1>
                        <p className="text-2xl text-blue-100 mb-8 max-w-4xl">
                            Unlock Operational Excellence with Revolve
                        </p>
                        <p className="text-lg text-blue-200 max-w-4xl">
                            Your trusted partner for end-to-end Finance & Accounting outsourcing, audit support, and process optimization — delivering cost efficiency, compliance, and strategic value.
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
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-6">
                            <div className="flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-sm">
                                <Database className="w-5 h-5 text-blue-600" />
                                <span className="text-sm font-medium text-gray-700">Our Services</span>
                            </div>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            We Deliver <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">End-to-End</span>
                            <br />KPO Solutions
                        </h2>
                    </div>

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

            {/* Knowledge Process Outsourcing Section - Already Perfect */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-5 gap-16 items-stretch">
                        <div className="lg:col-span-2">
                            <h2 className="text-3xl lg:text-4xl font-bold text-blue-600 mb-4">
                                Knowledge Process
                            </h2>
                            <h3 className="text-3xl lg:text-4xl font-bold text-blue-600 mb-12">
                                Outsourcing
                            </h3>

                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-1">15+ Years Experience in Account Outsource</h4>
                                    <p className="text-sm text-gray-600">Certified professionals with process expertise</p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-1">7 Outsource client on board</h4>
                                    <p className="text-sm text-gray-600">5 end to end account process and 2 payroll handled offshore.</p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-1">30 Outsource Staff on board</h4>
                                    <p className="text-sm text-gray-600">30 accounting and financial professionals are on board</p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-1">Client Internal, DCAA and Statutory Audit Support</h4>
                                    <p className="text-sm text-gray-600">Audit support – ICS, DCMA & DCAA and Internal Audit support to Onshore team</p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-1">Process Optimization with FAR compliances</h4>
                                    <p className="text-sm text-gray-600">P2P, O2R, R2R, Payroll process maturity with FAR Compliances</p>
                                </div>
                            </div>

                            <div className="mt-8 bg-blue-900 text-white p-4 rounded-lg">
                                <h4 className="text-base font-bold mb-3">Current Client Base:</h4>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="space-y-2">
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-3 h-3 text-green-400" />
                                            <span className="text-sm">United States</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-3 h-3 text-green-400" />
                                            <span className="text-sm">Saudi Arabia</span>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-3 h-3 text-green-400" />
                                            <span className="text-sm">Dubai</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-3 h-3 text-green-400" />
                                            <span className="text-sm">India</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-3 relative flex items-center justify-center">
                            <div className="w-full h-full flex items-center justify-center p-4">
                                <img
                                    src={kpg}
                                    alt="Knowledge Process Outsourcing Visual"
                                    className="w-full h-full max-h-[480px] object-cover transform hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Finance & Account Outsource Section - Style 2 (Already Perfect) */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-blue-600 mb-12 text-center">
                        Finance and Account (F&A) Outsource
                    </h2>

                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="bg-orange-50 p-8 rounded-2xl">
                            <h3 className="text-2xl font-bold text-blue-600 mb-6">
                                Why Outsource Accounting Processes?
                            </h3>

                            <ul className="space-y-4">
                                <li className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-gray-800">Lower operational costs</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-gray-800">Reduced wrap rate, improves competitive US Contractor's bidding</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-gray-800">Reduced administrative burden</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-gray-800">Access to advanced technology</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-gray-800">Zero attrition risk</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-gray-800">Readily framed accounting policies</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-gray-800">Audit support, professional reports and reply, lesser compliance challenge</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-gray-800">Strategic value from focusing on core competencies</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-gray-800">No training cost, operation cost, payroll maintenance.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-cyan-50 p-8 rounded-2xl">
                            <h3 className="text-2xl font-bold text-blue-600 mb-6">
                                How Revolve do it?
                            </h3>

                            <ul className="space-y-4">
                                <li className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-gray-800">Ensure data security with encrypted platform, CMMC compliance check, and NDAs in place</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-gray-800">Study onshore 'As Is' process and Define offshore 'To Be' process</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-gray-800">Onsite or Offsite transition, depends on the size and complexity of requirement</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-gray-800">Document each process and share SOP of each process</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-gray-800">Distinguish the process between Onshore and Offshore</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-gray-800">Reconcile each Balance Sheet GLs, Clean up reconciliation (if any) before staring process</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-gray-800">Study system setup and recommend the change (if any) for optimum use of system and process automation</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Offer Section — KPO Version */}
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
                                Unlock Operational Excellence with{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                                    Revolve: Your Trusted KPO Partner
                                </span>
                            </h2>

                            <div className="space-y-6 text-gray-600 leading-relaxed">
                                <p>
                                    In today’s competitive landscape, businesses need more than just cost-cutting — they need strategic, compliant, and scalable back-office operations. That’s where Revolve steps in as your dedicated Knowledge Process Outsourcing partner.
                                </p>

                                <p>
                                    With over 15 years of experience, we handle end-to-end Finance & Accounting processes — from procure-to-pay and order-to-cash to record-to-report and payroll — all while ensuring strict compliance with FAR, DCAA, and statutory regulations.
                                </p>

                                <p>
                                    Our certified professionals, robust security protocols, and process-driven approach ensure seamless transitions, zero attrition, audit-ready outputs, and continuous optimization — so you can focus on what matters most: growing your core business.
                                </p>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white">
                                <h3 className="text-2xl font-bold mb-6">Why Choose Revolve?</h3>
                                <div className="space-y-4">
                                    {[
                                        "15+ years of domain expertise",
                                        "FAR, DCAA & CMMC compliant",
                                        "Zero attrition, full accountability",
                                        "End-to-end F&A process ownership",
                                        "Seamless onsite/offshore transition",
                                        "Audit-ready reporting & support"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center space-x-3">
                                            <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-xl"></div>
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-400 rounded-full opacity-20 blur-xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Expertise Section — KPO Tools */}
            <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-indigo-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center p-2 bg-indigo-100 rounded-full mb-6">
                            <div className="flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-sm">
                                <Code className="w-5 h-5 text-indigo-600" />
                                <span className="text-sm font-medium text-gray-700">Tools & Platforms</span>
                            </div>
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Expertise</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {technologies.map((tech, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden"
                            >
                                <div className="text-center">
                                    <div className="flex flex-col items-center">
                                        <img
                                            src={tech.logo}
                                            alt={tech.name}
                                            className="h-20 md:h-24 max-w-[240px] object-contain mb-2"
                                            style={{ minHeight: 60 }}
                                            onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }}
                                        />
                                    </div>
                                    <p className="text-sm text-gray-500">{tech.category}</p>
                                </div>

                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section — KPO Workflow */}
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
                                KPO Workflow
                            </span>
                        </h2>
                    </div>

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
                                        <div key={index} className="flex items-center space-x-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                            <span className="text-gray-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative">
                                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-8 aspect-square flex items-center justify-center transform transition-all duration-600 hover:scale-105">
                                    {React.createElement(processSteps[activeTab].icon, {
                                        className: "w-24 h-24 text-blue-600"
                                    })}
                                </div>
                                <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-400 rounded-full opacity-30 blur-lg"></div>
                                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-purple-400 rounded-full opacity-30 blur-lg"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section — KPO Focused */}
            <section className="py-20 bg-blue-gradient text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-6">
                            Ready to Optimize Your Back-Office Operations?
                        </h2>
                        <p className="text-xl mb-8">
                            Let’s discuss how our KPO solutions can reduce your costs, ensure compliance, and free your team to focus on growth.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors">
                                Get Free Consultation
                            </button>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors">
                                View Other Services
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DataEngineering;