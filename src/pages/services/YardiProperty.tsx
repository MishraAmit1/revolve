import React from "react";
import { ArrowLeft, ClipboardList, Repeat, Users, Settings, BookOpen, FileText, Headphones, Database, BriefcaseBusiness } from "lucide-react";
import yardiLogo from "@/assets/yardi.png"; // apna path set karo
import residentialImg from "@/assets/residential.webp"; // apna path set karo
import commercialImg from "@/assets/commercial.webp"; // apna path set karo
import { Link, useNavigate } from "react-router-dom";

const expertise = [
    {
        title: "Process Analysis",
        desc: "Evaluating the series of steps essential to reach the apt solution.",
        icon: ClipboardList,
    },
    {
        title: "Project Management",
        desc: "Dedicated team of experts managing your Yardi project from start to end.",
        icon: Users,
    },
    {
        title: "Data Conversion",
        desc: "Our ETL services are the need of the hour to convert data securely.",
        icon: Repeat,
    },
    {
        title: "Customization",
        desc: "Designing tailor-made Yardi software according to the business dynamics.",
        icon: Settings,
    },
    {
        title: "Training",
        desc: "Live webinars and training for a better understanding of the Yardi software services.",
        icon: BookOpen,
    },
    {
        title: "Technical Support",
        desc: "Troubleshooting & guidance post delivery for flawless operations.",
        icon: Headphones,
    },
    {
        title: "Reporting",
        desc: "For report development and customization.",
        icon: FileText,
    },
];
const YardiProperty = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
            {/* Header Section */}
            <section className="py-20 bg-blue-gradient text-white relative overflow-hidden md:pt-40 pt-26">
                <div className="absolute inset-0 opacity-20">
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{
                            backgroundImage:
                                "url(https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1200&h=600&fit=crop)",
                        }}
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
                            Yardi Services
                        </h1>
                        <p className="text-2xl text-blue-100 mb-8 max-w-4xl">
                            Property Management Solutions for Residential & Commercial Real Estate
                        </p>
                        <p className="text-lg text-blue-200 max-w-4xl">
                            Unlock the full potential of Yardi software with our expert team—custom implementation, data conversion, reporting, and ongoing support for your property management needs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Residential / Commercial Buttons */}

            <section className="py-12">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 justify-center">

                    <Link to="/yardi/residential" className="relative w-full md:w-1/2 rounded-3xl overflow-hidden group shadow-lg block">
                        <img
                            src={residentialImg}
                            alt="Residential"
                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                    </Link>

                    <Link to="/yardi/commercial" className="relative w-full md:w-1/2 rounded-3xl overflow-hidden group shadow-lg block">
                        <img
                            src={commercialImg}
                            alt="Commercial"
                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                    </Link>

                </div>
            </section>

            {/* Our Expertise in Yardi Software */}
            <section className="py-16">
                <div className="max-w-5xl mx-auto">

                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-6">
                            <div className="flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-sm">
                                <BriefcaseBusiness className="w-5 h-5 text-blue-600" />
                                <span className="text-sm font-medium text-gray-700">BUSINESS BENEFITS</span>
                            </div>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Our Expertise in<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> Yardi Software</span>

                        </h2>
                    </div>
                    <div className="relative grid grid-cols-3 gap-x-0 items-center">
                        {/* Left Column */}
                        <div className="flex flex-col items-end space-y-10">
                            {expertise.slice(0, 3).map((item, i) => (
                                <div key={i} className="flex flex-col items-end text-right max-w-xs">
                                    <item.icon className="w-9 h-9 text-blue-900 mb-2" />
                                    <h3 className="font-bold text-lg text-blue-900">{item.title}</h3>
                                    <p className="text-gray-700 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                        {/* Center Yardi Logo */}
                        <div className="flex flex-col items-center justify-center">
                            <img src={yardiLogo} alt="Yardi" className="w-32 md:min-w-60 mb-8" />
                        </div>
                        {/* Right Column */}
                        <div className="flex flex-col items-start space-y-10">
                            {expertise.slice(3, 6).map((item, i) => (
                                <div key={i} className="flex flex-col items-start text-left max-w-xs">
                                    <item.icon className="w-9 h-9 text-blue-900 mb-2" />
                                    <h3 className="font-bold text-lg text-blue-900">{item.title}</h3>
                                    <p className="text-gray-700 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                        {/* Bottom Center Reporting */}
                        <div className="col-span-3 flex justify-center -mt-8">
                            <div className="flex flex-col items-center text-center max-w-xs">
                                <FileText className="w-9 h-9 text-blue-900 mb-2" />
                                <h3 className="font-bold text-lg text-blue-900">Reporting</h3>
                                <p className="text-gray-700 text-sm">For report development and customization.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Offer Section */}
            <section className="py-16 lg:py-24 bg-white/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-6">
                            <div className="flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-sm">
                                <Database className="w-5 h-5 text-blue-600" />
                                <span className="text-sm font-medium text-gray-700">What We Offer</span>
                            </div>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                            Software innovation made easy with Revolve as your partner
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            The Yardi team is a result-oriented professional with more than a decade of experience in the Implementation and Support of ERP Solutions, Business Analysis, and Project Management across various functions like:
                        </p>
                    </div>

                    {/* Grid of Offerings */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        <div className="bg-white rounded-3xl p-6 shadow-lg flex flex-col items-center text-center">
                            <BriefcaseBusiness className="w-10 h-10 text-blue-600 mb-4" />
                            <h3 className="font-bold text-lg text-blue-900 mb-2">Accounting</h3>
                            <p className="text-gray-600 text-sm">Expertise in accounting modules and financial management for property businesses.</p>
                        </div>
                        <div className="bg-white rounded-3xl p-6 shadow-lg flex flex-col items-center text-center">
                            <ClipboardList className="w-10 h-10 text-blue-600 mb-4" />
                            <h3 className="font-bold text-lg text-blue-900 mb-2">Projects Administration</h3>
                            <p className="text-gray-600 text-sm">Efficient project tracking, budgeting, and administration for real estate portfolios.</p>
                        </div>
                        <div className="bg-white rounded-3xl p-6 shadow-lg flex flex-col items-center text-center">
                            <Users className="w-10 h-10 text-blue-600 mb-4" />
                            <h3 className="font-bold text-lg text-blue-900 mb-2">Lease Administration</h3>
                            <p className="text-gray-600 text-sm">Comprehensive lease management for property and project-based businesses.</p>
                        </div>
                        <div className="bg-white rounded-3xl p-6 shadow-lg flex flex-col items-center text-center">
                            <Settings className="w-10 h-10 text-blue-600 mb-4" />
                            <h3 className="font-bold text-lg text-blue-900 mb-2">Project-based Businesses</h3>
                            <p className="text-gray-600 text-sm">Tailored Yardi solutions for project-centric organizations and operations.</p>
                        </div>
                    </div>

                    {/* Achievements & Description */}
                    <div className="max-w-3xl mx-auto text-gray-600 space-y-4">
                        <p>
                            Our Yardi team has a proven track record of successfully providing over <b>30+ Implementation/Data Migration</b>, <b>25+ Reporting Development</b> and <b>2 Support</b> to over 6 clients in various countries: AES Technologies, Lakeshore Management (India); Revive Consulting (USA); AL Ghurair, Dubai Development, and Nakheel (Dubai).
                        </p>
                        <p>
                            The 21st century is all about smart work. The market is crowded with people who are dreaming of investing in asset creation, and what better market than real estate to do that?
                        </p>
                        <p>
                            However, smart work is not just restricted to buyers and investors these days. It’s undoubtedly of elevated importance to all the professionals working in each & every vertical of the real estate market. Hence, Yardi software becomes crucial for the accelerated advancement of businesses with a real estate portfolio.
                        </p>
                        <p>
                            Revolve ’ Yardi Support is one of the most efficient and convenient solutions when it comes to simplifying property management and automating various operational needs of your real estate business. Five Decades of hands-on experience with property management software enable us to give our clients the most powerful, personalized, and economical solution.
                        </p>
                        <p>
                            Revolve has expertise across multiple Yardi modules and a suite of products, enabling us to cater to multiple verticals of property management, including residential, commercial, finance (AP/AR/GL), international, job costing, PayScan, retail and more.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-blue-gradient text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Ready to Optimize Your Property Management?
                    </h2>
                    <p className="text-xl mb-8">
                        Let's discuss how our Yardi services can streamline your operations and maximize your real estate investments.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors">
                            <Link to="/contact">Get Free Consultation</Link>
                        </button>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors">
                            <Link to="/services">View Other Services</Link>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default YardiProperty;