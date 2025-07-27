import React from "react";
import { FaStar, FaCheckCircle } from "react-icons/fa";

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      age: 34,
      location: "New York, USA",
      rating: 4.9,
      verified: true,
      condition: "Urgent Care - Migraine",
      comment: "I was suffering from a severe migraine and couldn't leave my house. Dr. Chen was available within 15 minutes and immediately prescribed medication that worked within hours. The quick response time literally saved my day.",
      date: "2 days ago"
    },
    {
      name: "David Chen",
      age: 45,
      location: "Toronto, Canada",
      rating: 4.8,
      verified: true,
      condition: "Prescription Refill - Hypertension",
      comment: "Getting my blood pressure medication refilled used to be such a hassle. Now I can do it from my living room in minutes. Dr. Rodriguez reviewed my recent readings and renewed my prescription seamlessly.",
      date: "1 week ago"
    },
    {
      name: "Maria Rodriguez",
      age: 28,
      location: "Madrid, Spain",
      rating: 4.9,
      verified: true,
      condition: "Mental Health Consultation",
      comment: "Dr. Wilson was incredibly understanding during my anxiety consultation. She took the time to listen to my concerns and created a comprehensive treatment plan. The follow-up care has been excellent.",
      date: "3 days ago"
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span>Patient Stories</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            What Our Patients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real experiences from patients who trust us with their care
          </p>
          
          {/* Overall Rating */}
          <div className="flex items-center justify-center space-x-4 pt-2">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-xl" />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-900">4.9</span>
            </div>
            <span className="text-gray-500">•</span>
            <span className="text-gray-600">Based on 1,200+ reviews</span>
          </div>
        </div>
        
        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group-hover:border-[#0066cc]/20 relative overflow-hidden h-full flex flex-col">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full -translate-y-12 translate-x-12 opacity-50"></div>
                
                {/* Header with Rating */}
                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar 
                            key={i} 
                            className={`text-sm ${i < Math.floor(review.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm font-bold text-gray-900">{review.rating}</span>
                    </div>
                    {review.verified && (
                      <div className="flex items-center space-x-1 bg-green-50 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                        <FaCheckCircle className="text-green-500" />
                        <span>Verified</span>
                      </div>
                    )}
                  </div>

                  {/* Patient Info */}
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{review.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{review.age} years old • {review.location}</p>
                    <div className="inline-block bg-blue-50 text-[#0066cc] px-3 py-1 rounded-lg text-xs font-semibold">
                      {review.condition}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="relative flex-1">
                    <div className="absolute -top-1 -left-1 text-2xl text-gray-200">"</div>
                    <p className="text-gray-700 leading-relaxed italic relative z-10 pl-3 text-sm">
                      {review.comment}
                    </p>
                  </div>
                  
                  <div className="mt-4 pt-3 border-t border-gray-100">
                    <p className="text-xs text-gray-500">
                      {review.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
