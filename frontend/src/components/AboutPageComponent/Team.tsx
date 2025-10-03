import React from 'react';

interface TeamMember {
  id: number;
  name: string;
  designation: string;
  image: string;
}

const TeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    { id: 1, name: "Prathna Gupta", designation: "CMD", image: "/team/prarthna.jpg" },
    { id: 2, name: "Shraddha Gupta", designation: "CEO", image: "/team/shraddha.jpg" },
    { id: 3, name: "Amit Chaudhary", designation: "Director - Cyber Security & Cloud", image: "/team/amit.jpg" },
    { id: 4, name: "Vinod Pulyani", designation: "CFO & CEO", image: "/team/Vinod.jpg" },
    { id: 5, name: "Saurabh Kumar Srivastava", designation: "VP of Cyber Security", image: "/team/saurabh.jpg" },
    { id: 6, name: "Manohar", designation: "Senior Sales Manager", image: "/team/manohar.jpg" },
    { id: 7, name: "Geetanjali", designation: "Legal Compliance", image: "/team/geetanjali.png" },
    { id: 8, name: "Naresh", designation: "Senior Sales Manager", image: "/team/naresh.png" },
    { id: 9, name: "Anurag", designation: "Operation Head", image: "/team/anurag.jpg" },
    { id: 10, name: "Sweta", designation: "HR Head", image: "/team/sweta.jpg" },
    // { id: 11, name: "Mehak", designation: "Employee Relation", image: "/team/member11.avif" },
    // { id: 12, name: "Aanya", designation: "Project Coordinator", image: "/team/member12.avif" },
    { id: 13, name: "Gajender", designation: "Senior Supply Chain Manager", image: "/team/gajender.png" },
    { id: 14, name: "Kapil", designation: "Senior Supply Chain Manager", image: "/team/kapil.jpg" }
  ];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            Our Leadership Team
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the experienced professionals driving our company's success
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 justify-items-center">
          {teamMembers.map((member, idx) => {
            const isLastRow = idx >= teamMembers.length - (teamMembers.length % 4 || 4);
            return (
              <div
                key={member.id}
                className={`bg-white rounded-lg transition-shadow duration-300 flex flex-col items-center w-full max-w-xs p-4 sm:p-6 ${
                  isLastRow ? 'justify-self-center' : ''
                }`}
              >
                {/* Circular Image */}
                <div className="flex items-center justify-center overflow-hidden w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                {/* Info */}
                <div className="mt-4 text-center flex-1 flex flex-col justify-center">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">
                    {member.designation}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
