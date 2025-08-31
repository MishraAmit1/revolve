import React from "react";
import { ArrowLeft, Building2, Users, FileText, Wrench, Database, TrendingUp, Settings, DollarSign, ClipboardList } from "lucide-react";
import { Link } from "react-router-dom";

const YardiCommercial = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
            {/* Header Section */}
            <section className="py-20 bg-blue-gradient text-white relative overflow-hidden md:pt-40 pt-26">
                <div className="absolute inset-0 opacity-20">
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{
                            backgroundImage:
                                "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop)",
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
                            Commercial Real Estate Software
                        </h1>
                        <p className="text-2xl text-blue-100 mb-8 max-w-4xl">
                            Enterprise Solutions for Commercial Property Management
                        </p>
                        <p className="text-lg text-blue-200 max-w-4xl">
                            Streamline operations, improve efficiency, and maximize profitability with our specialized Yardi Commercial module expertise.
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
                                <Building2 className="w-5 h-5 text-blue-600" />
                                <span className="text-sm font-medium text-gray-700">COMMERCIAL MODULE</span>
                            </div>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Optimize Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Commercial Real Estate</span> Operations
                        </h2>
                    </div>

                    <div className="prose prose-lg max-w-none text-gray-600">
                        <p className="mb-8 text-lg leading-relaxed">
                            As Yardi consultants at Revolve , we specialize in optimizing commercial real estate software to meet the unique needs of property management companies. With our expertise and in-depth knowledge of Yardi software, we help streamline operations, improve efficiency, and maximize profitability within the Commercial module. Here are the key services we provide:
                        </p>

                        {/* Services Sections */}
                        <div className="space-y-12">
                            {/* Yardi Implementation */}
                            {/* Yardi Implementation */}
                            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-blue-600">
                                <div className="flex items-start">
                                    <Settings className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Yardi Implementation</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Our experienced consultants guide you through a smooth and successful implementation of the Yardi Commercial module. We work closely with your team to understand your unique requirements, configure the system accordingly, and ensure a seamless transition. From setting up leases and tenants to managing financials and maintenance, we ensure that Yardi is fully aligned with your business processes.
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
                                            Our comprehensive training programs equip your staff with the necessary skills to effectively use the Yardi Commercial module. We provide on-site or remote sessions that cover all aspects of the software, including lease administration, rent escalations, financial analysis, budgeting, etc. Also, our support team is available to address any questions or concerns that arise after implementation.
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
                                            We understand that each commercial property management company has its own unique workflows and requirements. Our consultants specialize in customizing the Yardi Commercial module to suit your specific needs. Whether it's custom reports, user-defined fields, or tailored workflows, we can adapt Yardi to optimize its functionality for your organization.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Lease Management and Administration */}
                            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-indigo-600">
                                <div className="flex items-start">
                                    <ClipboardList className="w-8 h-8 text-indigo-600 mr-4 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Lease Management and Administration</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            We assist in setting up and managing lease agreements within the Yardi Commercial module. Our consultants ensure accurate lease tracking, rent roll management, and streamlined lease administration processes. We can configure the system to handle complex lease structures, rent calculations, and lease renewals, helping you stay organized and compliant.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Financial Management */}
                            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-blue-600">
                                <div className="flex items-start">
                                    <DollarSign className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Financial Management</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Our expertise in the Yardi Commercial module extends to financial management. We assist in configuring financial workflows, setting up charts of accounts, managing budgets, handling accounts payable and receivable, and generating financial reports. With accurate financial data at your fingertips, you can make informed decisions and maintain financial control.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Property Maintenance and Work Orders */}
                            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-indigo-600">
                                <div className="flex items-start">
                                    <Building2 className="w-8 h-8 text-indigo-600 mr-4 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Property Maintenance and Work Orders</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            We help optimize your property maintenance processes using the Yardi Commercial module. Our consultants assist in setting up preventive maintenance schedules, managing work orders, tracking vendor contracts, and streamlining communication between tenants, property managers, and maintenance staff. This results in improved efficiency, reduced downtime, and enhanced tenant satisfaction.
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
                                            We leverage Yardi's robust reporting and business intelligence tools to provide you with valuable insights into your commercial property operations. Our consultants can create customized reports, dashboards, and analytics that enable you to monitor key performance indicators, track occupancy rates, analyze lease performance, and make data-driven decisions.
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
                                            As Yardi continues to release updates and new features, we ensure that your Commercial module stays up to date. Our consultants handle system upgrades, perform compatibility checks, and assist with implementing enhancements that can further optimize your use of Yardi.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Commitment Section */}
                        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-10">
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                At Revolve , our dedicated Yardi consultants specialize in serving commercial property management companies. We focus on maximizing the potential of Yardi's Commercial module, streamlining operations, and improving efficiency.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Our goal is to drive success for your business through optimized commercial real estate software. With our expertise and personalized approach, we deliver exceptional service and value to our clients.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-blue-gradient text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Ready to Transform Your Commercial Property Management?
                    </h2>
                    <p className="text-xl mb-8">
                        Let's discuss how our Yardi Commercial expertise can elevate your business
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors">
                            <Link to="/contact"> Get Started Today</Link>
                        </button>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors">
                            <Link to="/contact">Request Consultation</Link>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default YardiCommercial;