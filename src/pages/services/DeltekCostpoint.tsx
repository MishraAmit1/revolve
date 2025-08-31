import TestimonialsSection from '@/components/sections/TestimonialsSection';
import { ArrowLeft, CheckCircle, Zap, Database, Building, Cloud, Server, Layers } from 'lucide-react';
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

const serviceOfferings = [
    {
        title: "Deltek Costpoint Implementation",
        description: "End-to-end implementation of Deltek Costpoint ERP for US Govt. Contractors and Non-Profits, ensuring compliance and efficiency.",
        icon: Server,
        color: "blue"
    },
    {
        title: "System Customization & Integration",
        description: "Custom fields, screens, and integrations tailored to your business needs using Costpoint extensibility and third-party tools.",
        icon: Layers,
        color: "indigo"
    },
    {
        title: "Business Intelligence & Reporting",
        description: "Automated dashboards, Power BI, Cognos, and SSRS reporting for actionable insights and data-driven decisions.",
        icon: Database,
        color: "purple"
    },
    {
        title: "Master Data Management & Optimization",
        description: "New MDM engineering, re-engineering, and reverse engineering to optimize your ERP and business processes.",
        icon: Cloud,
        color: "pink"
    }
];

const DeltekCostpoint = () => {

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
                            Your Reliable Partner for <br /> Deltek® Products (ERP Software Solutions)
                        </h1>
                        <p className="text-2xl text-blue-100 mb-8 max-w-4xl">
                            ERP Software Solutions for US Govt. Contractors & Non-Profits
                        </p>
                        <p className="text-lg text-blue-200 max-w-4xl">
                            Unlock the full potential of Deltek Costpoint with our certified experts—custom implementations, reporting, and business intelligence for the GovCon sector.
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
                            <br />ERP Solutions
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
                                    Revolve: Your Trusted Partner
                                </span>
                            </h2>

                            <div className="space-y-6 text-gray-600 leading-relaxed">
                                <p>
                                    Every firm at today’s point in time looks for the right advisory solutions and best consultancy for effective & sustainable growth and higher financial gains. We at Revolve  have professionals with five decades of experience in the US Govt. Contractor (GovCon) industry, providing cost-effective and high-quality IT services. Discover the power of our ERP software solutions tailored for the GovCon sector, and elevate your business to new heights of efficiency and success.
                                </p>
                                <p>
                                    Our Deltek-certified professionals offer a combination of accounting, financial, and IT services to Non-Profit Organizations and the US Govt. Contractors (GovCon) keeping in mind the high competitive edge. We have implemented over 50 Deltek ERP Costpoint systems across USA and KSA. Using the extensibility feature, we can customize Costpoint by adding fields in the existing screens and adding new screens and tabs per the business requirement.
                                </p>
                                <p>
                                    The team has successfully demonstrated the engineering of New Master Data Management (MDM), re-engineering of existing system design, and reverse engineering to optimize management needs. Revolve  has an expert team comprising BI experts and Data Engineers, providing automated systems for end-to-end data pipelines and data visualization for US Govt. Contractors.
                                </p>
                                <p>
                                    Our Data analytics skill set plays a significant role for managers, executives, and business users to help them make business-driven decisions easily and precisely by understanding customer insights. Our team has a proven track record of multidimensional successful case studies like creating payroll interface reports for third-party payrolls such as Isault, ADP and Paylocity. We have certified Cognos BI, SQL Server Reporting Services (SSRS), and a Power BI pool of experts.
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
                                        "Deltek-certified professionals with 30+ years GovCon experience",
                                        "50+ successful Deltek Costpoint implementations (USA & KSA)",
                                        "Custom Costpoint screens, fields, and integrations",
                                        "Expertise in Master Data Management (MDM) and system optimization",
                                        "Automated BI dashboards and advanced reporting (Power BI, Cognos, SSRS)",
                                        "Proven track record with payroll and financial integrations",
                                        "Comprehensive support for Non-Profits and US Govt. Contractors",
                                        "End-to-end ERP, accounting, and IT consulting services"
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
            <TestimonialsSection />
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

export default DeltekCostpoint;