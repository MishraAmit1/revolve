import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Clock, Users, ArrowLeft, CheckCircle } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const jobDetails = {
    'senior-data-engineer': {
        title: 'Senior Data Engineer',
        location: 'Remote',
        type: 'Full-time',
        experience: '6-7 years',
        summary: 'We are seeking a Senior Data Engineer to join our team and help us in developing and implementing data solutions for our clients. The ideal candidate should have experience in data engineering, data analysis, and data warehousing.',
        requirements: [
            "Bachelor's degree in Computer Science, Computer Engineering, or related fields.",
            "Minimum of 6-7 years of experience in data engineering, data modeling, and ETL",
            "Strong knowledge of programming languages such as Python, SQL, and Java",
            "Experience in data warehousing, big data technologies, and cloud-based data solutions such as AWS, GCP, or Azure",
            "Expertise in data integration and transformation tools such as Informatica, Talend, or Apache NiFi",
            "Excellent communication and presentation skills",
            "Strong analytical and problem-solving skills"
        ],
        responsibilities: [
            "Work with clients to understand their business requirements and design and implement data solutions to meet those needs",
            "Develop and implement data engineering processes, including data modeling, data integration, and ETL pipelines",
            "Design and develop scalable data pipelines to process large data sets",
            "Develop and maintain data warehouses, data marts, and data lakes",
            "Monitor data quality and proactively identify and resolve data issues",
            "Collaborate with cross-functional teams such as data scientists, business analysts, and software engineers to deliver high-quality data",
            "Develop and maintain technical documentation and provide training to end-users as needed"
        ]
    },
    'data-engineer': {
        title: 'Data Engineer',
        location: 'Remote / Onsite',
        type: 'Full-time',
        experience: '3+ years',
        summary: 'We are looking for a Data Engineer to design and implement robust data pipelines and analytics solutions for enterprise clients.',
        requirements: [
            "Bachelor's degree in Computer Science or related field",
            "3+ years of experience in data engineering",
            "Proficiency in Python, SQL, and data processing frameworks",
            "Experience with cloud platforms (AWS, GCP, or Azure)",
            "Knowledge of ETL/ELT processes and tools",
            "Strong problem-solving skills"
        ],
        responsibilities: [
            "Design and build data pipelines",
            "Implement data integration solutions",
            "Optimize data processing workflows",
            "Maintain data quality standards",
            "Collaborate with cross-functional teams"
        ]
    },
    'cognos-developer': {
        title: 'Cognos Developer',
        location: 'Remote / Onsite',
        type: 'Full-time',
        experience: '3+ years',
        summary: 'We need a Cognos Developer to develop and maintain reports and dashboards for business intelligence solutions.',
        requirements: [
            "Bachelor's degree in Computer Science or related field",
            "3+ years of experience with IBM Cognos",
            "Strong SQL and database knowledge",
            "Experience with BI reporting tools",
            "Excellent analytical skills"
        ],
        responsibilities: [
            "Develop Cognos reports and dashboards",
            "Maintain existing BI solutions",
            "Work with stakeholders to gather requirements",
            "Optimize report performance",
            "Provide technical documentation"
        ]
    }
};

const JobDetail = () => {
    const { jobId } = useParams();
    const navigate = useNavigate();
    const { toast } = useToast();
    const job = jobDetails[jobId];

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        coverLetter: '',
        agreeToTerms: false
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // WhatsApp number (replace with your actual WhatsApp business number)
    const WHATSAPP_NUMBER = "917777909218"; // Format: country code + number without + or spaces

    if (!job) {
        navigate('/careers');
        return null;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Create the WhatsApp message
            const message = `*New Job Application*
            
*Position:* ${job.title}
*Name:* ${formData.fullName}
*Email:* ${formData.email}
*Phone:* ${formData.phone}

*Cover Letter:*
${formData.coverLetter}

*Applied on:* ${new Date().toLocaleString('en-IN', {
                timeZone: 'Asia/Kolkata',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })}`;

            // Encode the message for URL
            const encodedMessage = encodeURIComponent(message);

            // Create WhatsApp URL
            const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

            // Show success message
            setIsSubmitted(true);
            toast({
                title: "Redirecting to WhatsApp",
                description: "Please send your resume along with the pre-filled message",
            });

            // Reset form
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                coverLetter: '',
                agreeToTerms: false
            });

            // Open WhatsApp in new tab after a short delay
            setTimeout(() => {
                window.open(whatsappURL, '_blank');
                // Redirect to careers page after 3 seconds
                setTimeout(() => {
                    navigate('/careers');
                }, 3000);
            }, 1000);

        } catch (error) {
            console.error('Error:', error);
            toast({
                title: "Something went wrong",
                description: "Please try again later",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen md:pt-20 pt-6">
            {/* Success Message */}
            {isSubmitted && (
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg z-50 flex items-center"
                >
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Redirecting to WhatsApp...
                </motion.div>
            )}

            {/* Header */}
            <section className="py-12 bg-blue-gradient text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <button
                        onClick={() => navigate('/careers')}
                        className="flex items-center text-blue-100 hover:text-white mb-6 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to Careers
                    </button>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">{job.title}</h1>
                        <div className="flex flex-wrap gap-4 text-blue-100">
                            <div className="flex items-center"><MapPin className="w-5 h-5 mr-2" />{job.location}</div>
                            <div className="flex items-center"><Clock className="w-5 h-5 mr-2" />{job.type}</div>
                            <div className="flex items-center"><Users className="w-5 h-5 mr-2" />{job.experience}</div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Job Details */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <section className="mb-10">
                                <h2 className="text-2xl font-bold text-navy mb-4">Job Summary</h2>
                                <p className="text-gray-700">{job.summary}</p>
                            </section>

                            <section className="mb-10">
                                <h2 className="text-2xl font-bold text-navy mb-4">Required Skill-set</h2>
                                <ul className="space-y-3">
                                    {job.requirements.map((req, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-orange-500 mr-2">•</span>
                                            <span className="text-gray-700">{req}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            <section className="mb-10">
                                <h2 className="text-2xl font-bold text-navy mb-4">Responsibilities</h2>
                                <ul className="space-y-3">
                                    {job.responsibilities.map((resp, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-orange-500 mr-2">•</span>
                                            <span className="text-gray-700">{resp}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </motion.div>
                    </div>

                    {/* Application Form */}
                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-gray-50 rounded-2xl p-8 sticky top-24"
                        >
                            <h2 className="text-2xl font-bold text-navy mb-6">Apply for this position</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                        value={formData.fullName}
                                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Phone *
                                    </label>
                                    <input
                                        type="tel"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Cover Letter *
                                    </label>
                                    <textarea
                                        required
                                        rows={4}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                        value={formData.coverLetter}
                                        onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                                    <p className="text-sm text-blue-700">
                                        <strong>Note:</strong> After clicking submit, you'll be redirected to WhatsApp. Please attach your resume/CV in the WhatsApp chat.
                                    </p>
                                </div>

                                <div className="flex items-start">
                                    <input
                                        type="checkbox"
                                        required
                                        id="agree-terms"
                                        className="mt-1 mr-2"
                                        checked={formData.agreeToTerms}
                                        onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                                        disabled={isSubmitting}
                                    />
                                    <label htmlFor="agree-terms" className="text-sm text-gray-600">
                                        By using this form you agree with the storage and handling of your data by this website. *
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full btn-orange justify-center ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Submitting...
                                        </>
                                    ) : (
                                        'Submit Application'
                                    )}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetail;