import React from 'react';

interface TeamMember {
  id: number;
  name: string;
  designation: string;
  image: string;
}

const TeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    { id: 1, name: "DR Goyal", designation: "VP Technology", image: "/team/drgoyal.avif" },
    { id: 2, name: "Sourabh Kumar Srivastava", designation: "Vice president - Information Security & Compliance", image: "/team/saurabh.jpeg" },
    { id: 3, name: "Shraddha Gupta", designation: "Sales Director", image: "/team/shradhamam.avif" },
    { id: 4, name: "Manohar Singh", designation: "Senior BDM", image: "/team/manohar.avif" },
    { id: 5, name: "Naresh Kumar", designation: "SCM Head", image: "/team/naresh.avif" },
    { id: 6, name: "Vinod Pulyani", designation: "CFO & COO", image: "/team/vinod.avif" },
    { id: 7, name: "Navneet Kumar", designation: "Senior Finance Manager", image: "/team/navneetkumar.avif" }
  ];

  // Split into two groups
  const firstRow = teamMembers.slice(0, 4);
  const secondRow = teamMembers.slice(4);

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
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

        {/* First Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 justify-items-center mb-8">
          {firstRow.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg transition-shadow duration-300 flex flex-col w-full max-w-sm"
            >
              {/* Circular Image */}
              <div className="flex items-center justify-center overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-50 h-50 object-cover  rounded-full sm:w-50 sm:h-50 lg:w-60 lg:h-60"
                />
              </div>

              {/* Info */}
              <div className=" sm:p-6 text-center flex-1 flex flex-col justify-center">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base font-medium">
                  {member.designation}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row */}
        {/* Second Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
          {secondRow.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg transition-shadow duration-300 flex flex-col w-full max-w-sm"
            >
              {/* Smaller Circular Image */}
              <div className="flex items-center justify-center overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-40 object-cover rounded-full sm:w-50 sm:h-50 lg:w-60 lg:h-60"
                />
              </div>

              {/* Info */}
              <div className="p-4 sm:p-6 text-center flex-1 flex flex-col justify-center">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base font-medium">
                  {member.designation}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamSection;
