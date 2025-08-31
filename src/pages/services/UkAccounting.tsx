import React from 'react';
import { ArrowLeft } from 'lucide-react';

// Unsplash se UK accounting/finance image
const bgImage = "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80";
// UK flag ya accounting icon (optional, aap apni image bhi use kar sakte hain)
const ukFlag = "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg";

const UkAccounting = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
            {/* Header Section */}
            <section className="relative flex items-center justify-center min-h-[60vh] md:min-h-[100vh]">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src={bgImage}
                        alt="UK Accounting Background"
                        className="w-full h-full object-cover object-center"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-blue-900/60" />
                </div>
                {/* Centered Content */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 ">
                    <img
                        src={ukFlag}
                        alt="UK Flag"
                        className="h-28 w-28 md:h-36 md:w-36 object-contain rounded-full shadow-lg border-4 border-white mb-8 animate-float"
                    />
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
                        We are updating and will be back soon...
                    </h1>
                    <button
                        onClick={() => window.history.back()}
                        className="mt-6 inline-flex items-center px-6 py-3 bg-white/90 hover:bg-white text-blue-700 font-semibold rounded-full shadow transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Go Back
                    </button>
                </div>
            </section>
        </div>
    );
};

export default UkAccounting;