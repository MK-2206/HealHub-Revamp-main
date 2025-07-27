import React from "react";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="bg-gradient-to-br from-white to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="space-y-4">
                <span className="inline-block px-4 py-2 bg-blue-100 text-[#0066cc] text-sm font-semibold rounded-full animate-pulse">
                  YOU TALK WE HELP
                </span>
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                  Talk to your doctor online{" "}
                  <span className="text-[#0066cc] bg-gradient-to-r from-[#0066cc] to-[#0052a3] bg-clip-text text-transparent">
                    privately
                  </span>{" "}
                  anytime anywhere!
                </h1>
              </div>
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-normal tracking-wide">
                Connect with board-certified doctors 24/7. Get care for urgent needs, 
                prescription refills, and ongoing health concerns from the comfort of home.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/doctors">
                <button className="group relative overflow-hidden bg-[#0066cc] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <span className="relative z-10">Start Consultation</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0052a3] to-[#0066cc] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </Link>
              <button className="group border-2 border-[#0066cc] text-[#0066cc] px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#0066cc] hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                View Doctors
              </button>
            </div>
            
            {/* Trust indicators with animations */}
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2 group">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                <span className="group-hover:text-green-600 transition-colors duration-300">Licensed doctors</span>
              </div>
              <div className="flex items-center space-x-2 group">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                <span className="group-hover:text-green-600 transition-colors duration-300">24/7 available</span>
              </div>
              <div className="flex items-center space-x-2 group">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                <span className="group-hover:text-green-600 transition-colors duration-300">Secure & private</span>
              </div>
            </div>
          </div>

          {/* Enhanced Image */}
          <div className="relative">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-3xl blur-xl opacity-50"></div>
              
              {/* Main image container */}
              <div className="relative bg-white rounded-3xl p-6 shadow-2xl border border-gray-100 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  className="w-full h-auto rounded-2xl shadow-lg" 
                  src="assets/int.png" 
                  alt="Online doctor consultation" 
                />
                
                {/* Floating elements */}
                <div className="absolute -top-3 -right-3 bg-white rounded-full p-2 shadow-lg">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-3 -left-3 bg-white rounded-full p-2 shadow-lg">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
