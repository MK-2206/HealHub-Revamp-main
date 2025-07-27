import React from "react";
import { FaClock, FaCreditCard, FaUserMd, FaShieldAlt } from "react-icons/fa";

const Benefits = () => {
  const benefits = [
    {
      title: "24/7 Access",
      description: "Connect with doctors anytime, day or night. No waiting for office hours.",
      icon: <FaClock className="text-2xl" />
    },
    {
      title: "Transparent Pricing",
      description: "Clear, upfront costs starting at $75. No hidden fees or surprise charges.",
      icon: <FaCreditCard className="text-2xl" />
    },
    {
      title: "Licensed Doctors",
      description: "Board-certified physicians with years of experience in their specialties.",
      icon: <FaUserMd className="text-2xl" />
    },
    {
      title: "Secure Platform",
      description: "HIPAA-compliant platform that protects your privacy and medical information.",
      icon: <FaShieldAlt className="text-2xl" />
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            <span>Why Choose Us</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Why Choose HealHub?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional healthcare that puts you first
          </p>
        </div>
        
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group-hover:border-[#0066cc]/20 h-full flex flex-col">
                {/* Icon */}
                <div className="text-[#0066cc] mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                
                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm flex-1">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
