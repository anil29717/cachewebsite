import React from "react";
import { Award, Star, Users, TrendingUp } from "lucide-react";

function PartnershipCards() {
  const partnerships = [
    {
      icon: Award,
      title: "Microsoft Gold Partner",
      description: "Certified for cloud solutions and enterprise integration",
    },
    {
      icon: Star,
      title: "AWS Premier Partner",
      description: "Advanced tier partner with migration and security competencies",
    },
    {
      icon: Users,
      title: "Google Cloud Partner",
      description: "Specialized in data analytics and machine learning solutions",
    },
    {
      icon: TrendingUp,
      title: "Oracle Platinum Partner",
      description: "Enterprise applications and database solutions expertise",
    },
  ];

  return (
    <div className="w-full bg-gray-50 py-16 px-6 flex justify-center">
      <div className="max-w-6xl w-full">
        {/* Awards Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-red-600 mb-4">Awards</h2>
          <p className="text-gray-600 text-lg">Our certifications and partnerships with industry leaders</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {partnerships.map((partner, index) => {
            const IconComponent = partner.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm text-center 
                           transition-all duration-300 cursor-pointer 
                           hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-red-50 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-red-500" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug">
                  {partner.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {partner.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PartnershipCards;