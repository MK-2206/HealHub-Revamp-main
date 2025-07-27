import React from "react";
import { FaShieldAlt, FaCertificate, FaHospital, FaUserMd, FaAward, FaCheckCircle } from "react-icons/fa";

const Trusted = () => {
  const healthcarePartners = [
    { name: "Mayo Clinic", logo: "🏥", type: "Academic Medical Center" },
    { name: "Cleveland Clinic", logo: "🏥", type: "Specialty Hospital" },
    { name: "Johns Hopkins", logo: "🏥", type: "Research Hospital" },
    { name: "Stanford Health", logo: "🏥", type: "University Medical Center" },
    { name: "UCLA Health", logo: "🏥", type: "Academic Medical Center" }
  ];

  const certifications = [
    { name: "HIPAA Compliant", icon: <FaShieldAlt />, color: "text-green-600", bgColor: "bg-green-50" },
    { name: "SOC 2 Type II", icon: <FaCertificate />, color: "text-blue-600", bgColor: "bg-blue-50" },
    { name: "HITRUST CSF", icon: <FaShieldAlt />, color: "text-purple-600", bgColor: "bg-purple-50" },
    { name: "ISO 27001", icon: <FaCertificate />, color: "text-indigo-600", bgColor: "bg-indigo-50" }
  ];

  const insurancePartners = [
    "Blue Cross Blue Shield", "Aetna", "Cigna", "UnitedHealth", "Humana", "Kaiser Permanente"
  ];

  const medicalAssociations = [
    "American Medical Association", "American Telemedicine Association", "Healthcare Information and Management Systems Society"
  ];

  const awards = [
    { title: "Best Telemedicine Platform 2025", organization: "Healthcare Innovation Awards", icon: <FaAward /> },
    { title: "Top Digital Health Solution", organization: "Medical Technology Review", icon: <FaAward /> },
    { title: "Excellence in Patient Care", organization: "American Healthcare Association", icon: <FaAward /> }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
            <FaCheckCircle className="text-blue-600" />
            <span>Enterprise Healthcare Partner</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900">
            Trusted by Leading Healthcare Systems
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Partnering with top-tier medical institutions and maintaining the highest standards in healthcare technology
          </p>
        </div>

        {/* Healthcare Partners */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Healthcare System Partners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {healthcarePartners.map((partner, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl mb-3">{partner.logo}</div>
                  <h4 className="font-semibold text-gray-900 mb-1">{partner.name}</h4>
                  <p className="text-sm text-gray-600">{partner.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications and Security */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Security & Compliance Certifications
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className={`${cert.bgColor} rounded-xl p-6 text-center border border-gray-100`}>
                <div className={`${cert.color} text-3xl mb-3 flex justify-center`}>
                  {cert.icon}
                </div>
                <h4 className="font-semibold text-gray-900">{cert.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Insurance Partnerships */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Accepted by 500+ Insurance Plans
              </h3>
              <p className="text-gray-600">
                Including all major insurance providers and Medicare/Medicaid
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {insurancePartners.map((insurance, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                  <span className="text-sm font-medium text-gray-700">{insurance}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Medical Associations */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Medical Association Memberships
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {medicalAssociations.map((association, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
                <FaUserMd className="text-blue-600 text-3xl mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900">{association}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Awards and Recognition */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Awards & Recognition
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                <div className="text-yellow-500 text-3xl mb-3">
                  {award.icon}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{award.title}</h4>
                <p className="text-sm text-gray-600">{award.organization}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Patient Statistics */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">
              Trusted by Healthcare Professionals & Patients
            </h3>
            <p className="text-xl opacity-90">
              Delivering exceptional care with proven results
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <div className="text-blue-100">Patients Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">2,000+</div>
              <div className="text-blue-100">Healthcare Partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Indicators */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <FaCheckCircle className="text-green-500" />
              <span>Board-certified physicians</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaCheckCircle className="text-green-500" />
              <span>State-licensed providers</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaCheckCircle className="text-green-500" />
              <span>FDA-compliant platform</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaCheckCircle className="text-green-500" />
              <span>Enterprise-grade security</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trusted;
