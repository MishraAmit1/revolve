import React from "react";
import { ArrowLeft, Home, Users, FileText, Wrench, Database, TrendingUp, Settings, HeadphonesIcon, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const YardiResidential = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
            {/* Header Section */}
            <section className="py-20 bg-blue-gradient text-white relative overflow-hidden md:pt-40 pt-26">
                <div className="absolute inset-0 opacity-20">
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{
                            backgroundImage:
                                "url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop)",
                        }}
                    />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="initial-animation">
                        <Link
                            to="/services/yardi-property-management-software"
                            className="inline-flex items-center text-blue-200 hover:text-white mb-8 transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            Back to Yardi Services
                        </Link>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Software for Property Manager
                        </h1>
                        <p className="text-2xl text-blue-100 mb-8 max-w-4xl">
                            Residential Property Management Solutions
                        </p>
                        <p className="text-lg text-blue-200 max-w-4xl">
                            Optimize your residential property management operations with our comprehensive Yardi solutions and expert consulting services.
                        </p>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-6">
                            <div className="flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-sm">
                                <Home className="w-5 h-5 text-blue-600" />
                                <span className="text-sm font-medium text-gray-700">RESIDENTIAL MODULE</span>
                            </div>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Comprehensive Yardi Services for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Residential Properties</span>
                        </h2>
                    </div>

                    <div className="prose prose-lg max-w-none text-gray-600">
                        <p className="mb-8 text-lg leading-relaxed">
                            As Yardi consultants at Revolve , we are proud to offer a comprehensive range of services under the Residential module. Our team of experienced professionals is dedicated to helping property management companies optimize their operations and maximize their efficiency using Yardi software for property manager. Here are some of the key services we provide:
                        </p>

                        {/* Services Sections */}
                        <div className="space-y-12">
                            {/* Yardi Implementation */}
                            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-blue-600">
                                <div className="flex items-start">
                                    <Settings className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Yardi Implementation</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            We specialize in seamless Yardi implementation for residential property management companies. Our consultants work closely with your team to understand your unique requirements and configure the system to align with your business processes. We ensure a smooth transition to Yardi, minimizing downtime and disruption.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Training and Support */}
                            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-indigo-600">
                                <div className="flex items-start">
                                    <Users className="w-8 h-8 text-indigo-600 mr-4 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Training and Support</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            We offer comprehensive training programs to help your staff become proficient in using Yardi's Residential module. Our consultants conduct on-site or remote sessions covering various aspects of the software, such as lease management, tenant screening, financials, maintenance, etc. We also provide ongoing support to address any questions or issues that may arise after implementation.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* System Customization */}
                            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-blue-600">
                                <div className="flex items-start">
                                    <Wrench className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">System Customization</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Every property management company has its own specific needs and workflows. Our consultants have extensive knowledge of Yardi's customization capabilities and can tailor the software to match your business requirements. We can customize screens, reports, workflows, and integrations to enhance the functionality of Yardi for your organization.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Data Migration */}
                            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-indigo-600">
                                <div className="flex items-start">
                                    <Database className="w-8 h-8 text-indigo-600 mr-4 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Migration</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            If you are migrating from another property management system to Yardi, we can assist with seamless data migration. Our consultants ensure that your data is accurately transferred to Yardi, maintaining data integrity and minimizing any potential disruptions during the migration process.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Reporting and Business Intelligence */}
                            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-blue-600">
                                <div className="flex items-start">
                                    <FileText className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Reporting and Business Intelligence</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Our consultants help you leverage Yardi's powerful reporting and business intelligence tools to gain valuable insights into your residential property operations. We assist in creating customized reports and dashboards, enabling you to make data-driven decisions and monitor KPIs.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* System Upgrades and Enhancements */}
                            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-indigo-600">
                                <div className="flex items-start">
                                    <TrendingUp className="w-8 h-8 text-indigo-600 mr-4 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">System Upgrades and Enhancements</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            As Yardi continues to release updates and new features, our consultants ensure that your Residential module stays up to date. We handle system upgrades and enhancements, ensuring compatibility, and helping you take advantage of the latest advancements in Yardi technology.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Workflow Optimization */}
                            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-blue-600">
                                <div className="flex items-start">
                                    <Settings className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Workflow Optimization</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            We work closely with your team to analyze and optimize your property management workflows using Yardi's robust features. By streamlining processes, eliminating inefficiencies, and automating repetitive tasks, we help you save time, reduce costs, and increase overall productivity.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Commitment Section */}
                        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-10">
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                At Revolve , we are committed to delivering exceptional service and value to our clients. Our Yardi consultants have a deep understanding of the residential property management industry and the specific challenges it faces.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                By partnering with us, you can optimize your use of Yardi's Residential module and unlock the full potential of your property management operations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-blue-gradient text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Maximize ROI with Powerful Software for Property Manager
                    </h2>
                    <p className="text-xl mb-8">
                        Try it now and transform your residential property management operations
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors">
                            <Link to="/contact">Get Free Consultation</Link>
                        </button>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors">
                            <Link to="/services"> View Other Services</Link>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default YardiResidential;