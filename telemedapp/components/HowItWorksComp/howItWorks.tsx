import React from "react";
import { FaCalendarAlt, FaVideo, FaFileMedical } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Book Consultation",
      description: "Choose your doctor and select an available time slot. Book in under 2 minutes with secure payment.",
      icon: <FaCalendarAlt className="text-3xl" />
    },
    {
      number: "2",
      title: "Video Call",
      description: "Connect via secure video call. Discuss symptoms and get expert medical advice in real-time.",
      icon: <FaVideo className="text-3xl" />
    },
    {
      number: "3",
      title: "Get Care Plan",
      description: "Receive prescriptions, treatment plans, and follow-up care instructions instantly.",
      icon: <FaFileMedical className="text-3xl" />
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            <span>Simple Process</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get the care you need in three simple steps
          </p>
        </div>
        
        {/* Steps with Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#0066cc] via-[#0052a3] to-[#0066cc] transform -translate-y-1/2 z-0"></div>
          
          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative h-full flex flex-col">
                  {/* Step Number Circle */}
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0066cc] to-[#0052a3] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6 shadow-lg relative z-10 group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                  
                  {/* Card */}
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group-hover:border-[#0066cc]/20 flex-1 flex flex-col">
                    {/* Icon */}
                    <div className="text-[#0066cc] mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-sm flex-1">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Mobile Timeline Connectors */}
          <div className="lg:hidden">
            {steps.slice(0, -1).map((_, index) => (
              <div key={index} className="flex justify-center my-6">
                <div className="w-1 h-8 bg-gradient-to-b from-[#0066cc] to-[#0052a3] rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
