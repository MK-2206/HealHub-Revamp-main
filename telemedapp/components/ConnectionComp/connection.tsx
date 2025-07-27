import React from "react";
import { PiSmileySad } from "react-icons/pi";
import { TbMoodSadDizzy } from "react-icons/tb";
import { IoSadOutline } from "react-icons/io5";
import { FaPumpMedical } from "react-icons/fa6";
import { PiSyringeDuotone } from "react-icons/pi";
import { MdNoFood } from "react-icons/md";
import { MdOutlinePeople } from "react-icons/md";
import { TbAppsFilled } from "react-icons/tb";

const Connection = () => {
  const specialties = [
    { icon: <PiSmileySad className="text-3xl" />, name: "Depression", color: "text-blue-600" },
    { icon: <TbMoodSadDizzy className="text-3xl" />, name: "Mood Disorders", color: "text-purple-600" },
    { icon: <IoSadOutline className="text-3xl" />, name: "Anxiety Disorders", color: "text-orange-600" },
    { icon: <FaPumpMedical className="text-3xl" />, name: "OCD", color: "text-red-600" },
    { icon: <PiSyringeDuotone className="text-3xl" />, name: "Addiction", color: "text-indigo-600" },
    { icon: <MdNoFood className="text-3xl" />, name: "Eating Disorders", color: "text-pink-600" },
    { icon: <MdOutlinePeople className="text-3xl" />, name: "Couple Therapy", color: "text-teal-600" },
    { icon: <TbAppsFilled className="text-3xl rotate-180" />, name: "Others", color: "text-gray-600" },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            We Connect You With Licensed Doctors
          </h2>
          <p className="text-xl text-[#0066cc] font-medium">
            Select the specialty that fits your needs
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {specialties.map((specialty, index) => (
            <div 
              key={index}
              className="medical-card p-6 text-center hover:scale-105 transition-transform duration-200"
            >
              <div className={`${specialty.color} mb-4 flex justify-center`}>
                {specialty.icon}
              </div>
              <h3 className="font-semibold text-gray-900 text-lg">
                {specialty.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Connection;
