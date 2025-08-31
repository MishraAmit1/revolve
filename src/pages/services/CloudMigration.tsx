import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, Code, Award, Sparkles, TrendingUp, Zap, Target, TestTube2, Cpu, Eye, Database, BarChart3, PieChart, Building, GitBranch, Cloud, Server, Layers } from 'lucide-react';
import aws from "@/assets/aws.webp"
import ibm from "@/assets/ibm.png"
import k8s from "@/assets/k8s.webp"
import azure from "@/assets/azure.png"
import cloud from "@/assets/cloud.webp"
import vmware from "@/assets/vmware.webp"
import SAP from "@/assets/SAP.webp"
import Oracle from "@/assets/Oracle.png"
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

// Service data for Data Engineering
const serviceOfferings = [
    {
        title: "Data Pipeline Development",
        description: "End-to-end automated data pipelines for seamless data ingestion and processing.",
        icon: Layers,
        color: "blue"
    },
    {
        title: "Data Modernization",
        description: "Transform legacy systems into modern, scalable data architectures.",
        icon: Cloud,
        color: "indigo"
    },
    {
        title: "Real-time Processing",
        description: "Streaming data solutions for instant analytics and decision-making.",
        icon: Zap,
        color: "purple"
    },
    {
        title: "Data Lake Solutions",
        description: "Scalable data lakes for storing structured and unstructured data efficiently.",
        icon: Server,
        color: "pink"
    }
];

const processSteps = {
    'Strategize': {
        title: 'Strategic Planning',
        description: 'Companies executing cloud migration don’t plan to fail. However, those who fail are those who fail to plan. Whether you are migrating all your data to the cloud, you want to adopt a hybrid approach or you want a cloud-to-cloud migration, you need a cloud migration strategy. Getting to know about your company, its data usage and required accessibility will help us in creating a tailor-made and unique strategy for your business.',
        icon: Eye,
        features: [
            "Business needs and goals assessment",
            "Current data usage and accessibility analysis",
            "Tailored cloud migration strategy development",
            "Support for full, hybrid, or cloud-to-cloud migration",
            "Risk identification and mitigation planning",
            "Cloud architecture and platform selection"
        ]
    },
    'Execution': {
        title: 'Seamless Execution',
        description: 'Once a migration strategy has been prepared, which is not only economically feasible but also improves functionality, it is important for smooth execution. The cloud migration should not affect the ongoing business operations. We make sure that all data is accessible to users throughout the duration of the migration process. With 5+ decades of experience under our belt, we ensure that the data is migrated to the cloud, securely & swiftly.',
        icon: Cpu,
        features: [
            "Seamless execution of the migration plan",
            "Minimal disruption to ongoing business operations",
            "Continuous data accessibility for users during migration",
            "Secure and swift data transfer to the cloud",
            "Experienced team ensuring smooth migration process",
            "Adherence to best practices for data integrity and security"
        ]
    },
    'Testing': {
        title: 'Rigorous Testing',
        description: 'We understand that perfection is the key to success and to perfect our system, we test every workload element which is a source of important data to your business. Our team of data engineers and data consultants will test the entire automated system for flawless execution and performance. The smooth functioning of real-time interactive analytics is carried out so that you can understand your customers\' data in order to make informed business decisions, which is the ultimate goal of our data engineering services.',
        icon: TestTube2,
        features: [
            "Comprehensive validation of migrated data and systems",
            "Step-by-step testing of each cloud component",
            "Security checks to ensure data protection",
            "Optimization testing for performance and efficiency",
            "Verification of data accessibility and integrity",
            "Continuous monitoring before final handover"
        ]
    }
};

// Technology expertise data
const technologies = [
    {
        name: "AWS",
        logo: aws,
        category: "Cloud Platform"
    },
    {
        name: "IBM",
        logo: ibm,
        category: "Enterprise Technology"
    },
    {
        name: "Kubernetes",
        logo: k8s,
        category: "Container Orchestration"
    },
    {
        name: "Azure",
        logo: azure,
        category: "Cloud Platform"
    },
    {
        name: "Google Cloud",
        logo: cloud,
        category: "Cloud Platform"
    },
    {
        name: "VMware",
        logo: vmware,
        category: "Virtualization & Cloud Infra"
    },
    {
        name: "SAP",
        logo: SAP,
        category: "Enterprise Software"
    },
    {
        name: "Oracle",
        logo: Oracle,
        category: "Database & Enterprise Software"
    },
];

const CloudMigration = () => {
    const [activeTab, setActiveTab] = useState('Strategize');
    const currentStep = processSteps[activeTab] || processSteps['Strategize'];
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
            <style>{styles}</style>
            {/* Hero Section */}
            <section className="py-20 bg-blue-gradient text-white relative overflow-hidden md:pt-40 pt-26">
                <div className="absolute inset-0 opacity-20">
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1200&h=600&fit=crop)` }}
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
                            Cloud Migration Services
                        </h1>
                        <p className="text-2xl text-blue-100 mb-8 max-w-4xl">
                            Seamlessly Transition to the Cloud with Revolve
                        </p>
                        <p className="text-lg text-blue-200 max-w-4xl">
                            Your trusted partner for end-to-end cloud migration services, ensuring a smooth, secure, and efficient transition to scalable cloud solutions that empower your business growth.
                        </p>
                    </div>
                </div>
            </section>
            {/* Our Expertise Section */}
            <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-indigo-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center p-2 bg-indigo-100 rounded-full mb-6">
                            <div className="flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-sm">
                                <BarChart3 className="w-5 h-5 text-indigo-600" />
                                <span className="text-sm font-medium text-gray-700">Business Benefits</span>
                            </div>
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Expertise</span>
                        </h2>
                    </div>

                    {/* Technology Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
                                            onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }}
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
                                Your Ideal Partner for{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                                    Software Innovation & Cloud Consulting Services
                                </span>
                            </h2>

                            <div className="space-y-6 text-gray-600 leading-relaxed">
                                <p>
                                    Customer satisfaction, cost efficiency and an online presence are probably the three most important factors resulting in a business’s success in today’s digital age. Anything which directly impacts all three of them is something which no businessman should/would ignore. Hence, the gradual evolution of the cloud leads us all to an inevitable need for cloud migration.
                                </p>

                                <p>
                                    Cloud migration, the process of movement of data from the on-premises data centers to the cloud, has certainly become an obvious choice for companies as it offers additional benefits contributing to growth of companies.
                                </p>

                                <p>
                                    Revolve ’ cloud consulting services are one of the best as our years of experience have resulted in us mastering the complexities of data migration to the cloud. Our team of experts aims to successfully identify the KPIs and come up with the most efficient and unique migration strategies that help our clients take full advantage of the public cloud service providers such as AWS, Google, and Microsoft among others.
                                </p>
                                <p>
                                    Cloud migration is an intricate and delicate process. However, if strategized well, it can result in enhanced security of priceless data, better functionality of your business operations and services, and improved budget allocation of your company; all resulting in a transformed high-quality experience for your end user.
                                </p>
                            </div>
                        </div>

                        <div
                            className="relative"
                        >
                            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white">
                                <h3 className="text-2xl font-bold mb-6">Why Choose Revolve ?</h3>
                                <div className="space-y-4">
                                    {[
                                        "Enhanced customer satisfaction and online presence",
                                        "Significant cost efficiency and optimized budget allocation",
                                        "Seamless migration from on-premises to cloud platforms",
                                        "Expert assessment and KPI-driven migration strategies",
                                        "Improved security and reliability of business data",
                                        "Access to leading public cloud providers (AWS, Google, Microsoft)",
                                        "Better functionality and scalability for business operations",
                                        "High-quality end-user experience through cloud transformation"
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
                    <div
                        className="text-center mb-16"
                    >
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

            {/* CTA Section */}
            <section className="py-20 bg-blue-gradient text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-6">
                            Ready to Transform Your Data Infrastructure?
                        </h2>
                        <p className="text-xl mb-8">
                            Let's discuss how our data engineering solutions can unlock the full potential of your data and drive business growth.
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

export default CloudMigration;