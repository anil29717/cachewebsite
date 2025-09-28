import React from 'react';
import { Users, TrendingUp, Zap } from 'lucide-react';

const PartnershipSection = () => {
  const partnerships = [
    {
      icon: <Users className="w-10 h-10 sm:w-12 sm:h-12 text-red-500" />,
      title: 'Best-in-Class Solutions',
      description:
        'Access to cutting-edge technologies and enterprise-grade platforms',
    },
    {
      icon: <Zap className="w-10 h-10 sm:w-12 sm:h-12 text-red-500" />,
      title: 'Expert Support',
      description:
        'Direct access to vendor support and specialized technical expertise',
    },
    {
      icon: <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 text-red-500" />,
      title: 'Future-Ready',
      description:
        'Stay ahead with early access to new features and technologies',
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div
          className="rounded-3xl shadow-lg p-6 sm:p-12 max-w-6xl mx-auto"
          style={{ backgroundColor: '#fdf0f1' }}
        >
          {/* Heading */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Our Partnerships Matter
            </h2>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-3 gap-8">
            {partnerships.map((partnership, index) => (
              <Card key={index} {...partnership} />
            ))}
          </div>

          {/* Mobile Grid (no scrollbar) */}
          <div className="grid grid-cols-1 gap-6 md:hidden">
            {partnerships.map((partnership, index) => (
              <Card key={index} {...partnership} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Card = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="bg-white rounded-2xl p-6 text-center h-full flex flex-col items-center justify-center shadow-md">
    <div className="mb-4">{icon}</div>
    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
      {title}
    </h3>
    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
      {description}
    </p>
  </div>
);

export default PartnershipSection;
