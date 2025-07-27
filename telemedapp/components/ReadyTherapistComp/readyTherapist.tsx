import React from "react";
import { GoDotFill } from "react-icons/go";
import { FaUserMd, FaClock, FaShieldAlt } from "react-icons/fa";
import Link from "next/link";

const ReadyTherapist = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-10 shadow-xl border border-blue-100 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-100 to-blue-100 rounded-full translate-y-12 -translate-x-12 opacity-50"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Left side - Logo and branding */}
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0066cc] to-[#0052a3] rounded-2xl p-3 shadow-lg">
                  <img 
                    className="w-full h-full object-contain" 
                    src="/assets/logo.png" 
                    alt="HealHub Logo" 
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-xl">HealHub</h3>
                  <p className="text-sm text-gray-600 flex items-center space-x-1">
                    <FaShieldAlt className="text-green-500 text-xs" />
                    <span>Trusted Healthcare Partner</span>
                  </p>
                </div>
              </div>
              
              {/* Center - Main message and features */}
              <div className="text-center lg:text-left flex-1 max-w-md">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                  Need immediate care?
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                  Connect with board-certified doctors in minutes, not hours
                </p>
                
                {/* Availability status */}
                <div className="flex items-center justify-center lg:justify-start space-x-3 mb-4">
                  <div className="flex items-center space-x-2 bg-green-50 px-3 py-2 rounded-full">
                    <GoDotFill className="text-green-500 animate-pulse" />
                    <span className="text-sm font-semibold text-green-700">
                      5 doctors available now
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <FaClock className="text-blue-500" />
                    <span className="text-sm font-medium">Response in 5-15 min</span>
                  </div>
                </div>
                
                {/* Trust indicators */}
                <div className="flex items-center justify-center lg:justify-start space-x-4 text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <FaUserMd className="text-blue-500" />
                    <span>Licensed MDs</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaShieldAlt className="text-green-500" />
                    <span>HIPAA Secure</span>
                  </div>
                </div>
              </div>
              
              {/* Right side - CTA button */}
              <div className="flex-shrink-0">
                <Link href="/doctors">
                  <button className="group bg-gradient-to-r from-[#0066cc] to-[#0052a3] hover:from-[#0052a3] hover:to-[#004080] text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    <div className="flex items-center space-x-2">
                      <span>Start Consultation</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </button>
                </Link>
                <p className="text-xs text-gray-500 text-center mt-2">
                  No appointment needed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyTherapist;
