import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, Code, Award, Sparkles, TrendingUp, Zap, Target, TestTube2, Cpu, Eye, Database, BarChart3, PieChart, Building, GitBranch, Cloud, Server, Layers } from 'lucide-react';
import aws from "@/assets/aws.webp"
import airflow from "@/assets/airflow.webp"
import tableau from "@/assets/tableau-logo.webp"
import spark from "@/assets/apache-spark-logo.webp"
import octoai from "@/assets/octopai_logo-2-1024x386.png.webp"
import databricks from "@/assets/databricks_logor_stacked_rgb.webp"
import kafka from "@/assets/kafkalogo-bg.webp"
import snowflake from "@/assets/smowflake.webp"
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
    'Analysis': {
        title: 'Comprehensive Analysis',
        description: 'This is the stage where we analyze, understand and plan, considering your business needs and expectations. Our expert team of data consultants will provide data assessment and help you with a roadmap strategy to meet your business goals. A comprehensive analysis of your data engineering requirements will not only establish crucial benchmarks and pillars of the project which in turn will help us to provide you with a quality assessment with complete dedication to satisfying your business requirements.',
        icon: Eye,
        features: [
            'Business needs assessment and planning',
            'Data landscape evaluation and audit',
            'Roadmap strategy development',
            'Benchmarks and project pillars establishment',
            'Quality assessment and requirement analysis'
        ]
    },
    'Design': {
        title: 'Strategic Design',
        description: 'Our expert data engineers design end-to-end data pipelines which ingest data from multiple sources including real-time streaming data into a modern data warehouse. Further, the activity of cleansing data into structured, semi-structured and unstructured data is performed, followed by ETL jobs and integration of data. Cloud migration to modern architectures is also executed. We also design data lakes and data pipelines for ML solutions. The objective of these operations is to generate data analytics on a real-time basis for your end-users.',
        icon: Cpu,
        features: [
            'End-to-end data pipeline architecture',
            'Real-time streaming data ingestion',
            'Data cleansing and transformation',
            'Cloud migration to modern architectures',
            'ML pipeline design and implementation'
        ]
    },
    'Testing': {
        title: 'Rigorous Testing',
        description: 'We understand that perfection is the key to success and to perfect our system, we test every workload element which is a source of important data to your business. Our team of data engineers and data consultants will test the entire automated system for flawless execution and performance. The smooth functioning of real-time interactive analytics is carried out so that you can understand your customers\' data in order to make informed business decisions, which is the ultimate goal of our data engineering services.',
        icon: TestTube2,
        features: [
            'Comprehensive workload testing',
            'Automated system performance validation',
            'Real-time analytics functionality testing',
            'Data quality and integrity verification',
            'End-to-end pipeline testing'
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
        name: "Apache Airflow",
        logo: airflow,
        category: "Workflow Orchestration"
    },
    {
        name: "Tableau",
        logo: tableau,
        category: "Data Visualization"
    },
    {
        name: "Apache Spark",
        logo: spark,
        category: "Data Processing"
    },
    {
        name: "OCTOPAI",
        logo: octoai,
        category: "Data Lineage"
    },
    {
        name: "Databricks",
        logo: databricks,
        category: "Analytics Platform"
    },
    {
        name: "Apache Kafka",
        logo: kafka,
        category: "Stream Processing"
    },
    {
        name: "Snowflake",
        logo: snowflake,
        category: "Data Warehouse"
    }
];

const DataEngineering = () => {
    const [activeTab, setActiveTab] = useState('Analysis');

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
                            Data Engineering Services
                        </h1>
                        <p className="text-2xl text-blue-100 mb-8 max-w-4xl">
                            Unlock Software Innovation with Revolve
                        </p>
                        <p className="text-lg text-blue-200 max-w-4xl">
                            Your trusted partner for comprehensive data engineering services that transform raw data into valuable business insights through scalable, secure, and efficient data solutions.
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
                            We Provide <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Comprehensive</span>
                            <br />Data Engineering Solutions
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
                                Unlock Software Innovation with{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                                    Revolve: Your Trusted Partner for Data Engineering Services
                                </span>
                            </h2>

                            <div className="space-y-6 text-gray-600 leading-relaxed">
                                <p>
                                    Today, high volumes of data get generated through multiple channels in an organization. But sadly, data processing has become more time-consuming than data analysis for data analysts and data scientists. The requirement of data availability with required quality and security in a speedy manner is the need of the hour.
                                </p>

                                <p>
                                    We, Revolve , are experts in creating end-to-end data pipelines along with a data modernization platform, helping you to make accurate data-driven business decisions. Automated systems which include data ingestion, data cleaning, data storage, and ETL/ELT along with data modernization are created for real-time processing.
                                </p>

                                <p>
                                    Data engineering is undoubtedly an already vast, yet ever-growing, project considering the continuous accumulation of data in your business operations daily. Revolve ' data consultants, with their knowledge & years of experience, commit to finding solutions, fixing loopholes, and increasing cost efficiency for your business using one of the most valuable assets of your business, data.
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
                                        "End-to-end data pipeline development",
                                        "Data modernization platform creation",
                                        "Real-time data processing systems",
                                        "Automated data ingestion & cleaning",
                                        "Scalable data solutions design",
                                        "Expert data consultants & engineers"
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


            {/* Our Expertise Section */}
            <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-indigo-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center p-2 bg-indigo-100 rounded-full mb-6">
                            <div className="flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-sm">
                                <Code className="w-5 h-5 text-indigo-600" />
                                <span className="text-sm font-medium text-gray-700">Technologies</span>
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

export default DataEngineering;