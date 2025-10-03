import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Cloud, Shield, Users, Target, Search, Eye,
  CheckCircle, TrendingUp, DollarSign, Settings,
  Clock, Star, ArrowRight, Database, FileText,
  Zap, Globe, Lock, Monitor, Code, Server
} from 'lucide-react';

const CloudServicesPage = () => {
  const [animatedText, setAnimatedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if there's a hash in the URL for section navigation
    if (location.hash) {
      const sectionId = location.hash.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0); // scroll to top when page loads
    }
  }, [location]);

  // Hero section animated texts
  const heroTexts = [
    'Transform Your Business with Cloud Excellence',
    'Scalable, Secure, and Future-Ready Cloud Solutions',
    'Your Partner in Cloud Innovation and Growth'
  ];

  useEffect(() => {
    const currentText = heroTexts[textIndex];
    let charIndex = 0;

    const typeWriter = setInterval(() => {
      if (charIndex < currentText.length) {
        setAnimatedText(currentText.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeWriter);
        setTimeout(() => {
          setTextIndex((prev) => (prev + 1) % heroTexts.length);
          setAnimatedText('');
        }, 3000);
      }
    }, 100);

    return () => clearInterval(typeWriter);
  }, [textIndex]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      id: 'audit',
      label: 'Audit',
      icon: Search,
      title: 'What We Audit',
      subtitle: 'Comprehensive cloud infrastructure assessment and optimization recommendations',
      description: 'Our cloud audit services provide thorough evaluation of your existing cloud infrastructure, identifying opportunities for cost optimization, security enhancements, and performance improvements. We assess your cloud architecture, compliance posture, and operational efficiency to deliver actionable insights for cloud excellence.',
      keyFeatures: [
        { icon: Shield, title: 'Security Assessment', desc: 'Comprehensive security and compliance evaluation' },
        { icon: DollarSign, title: 'Cost Optimization', desc: 'Identify cost savings and resource optimization opportunities' },
        { icon: TrendingUp, title: 'Performance Analysis', desc: 'Evaluate system performance and scalability' },
        { icon: FileText, title: 'Compliance Review', desc: 'Assess adherence to industry standards and regulations' }
      ]
    },
    {
      id: 'consult',
      label: 'Consult',
      icon: Users,
      title: 'What We Consult',
      subtitle: 'Strategic cloud consulting for digital transformation and technology roadmap development',
      description: 'Our cloud consulting services help organizations develop comprehensive cloud strategies aligned with business objectives. We provide expert guidance in cloud platform selection, migration planning, architecture design, and governance frameworks to ensure successful cloud adoption and maximize business value.',
      keyFeatures: [
        { icon: Target, title: 'Strategy Development', desc: 'Comprehensive cloud strategy and roadmap creation' },
        { icon: Globe, title: 'Platform Selection', desc: 'AWS, Azure, GCP evaluation and selection guidance' },
        { icon: Code, title: 'Architecture Planning', desc: 'Cloud-native architecture design and planning' },
        { icon: Settings, title: 'Governance Framework', desc: 'Cloud governance and operational model design' }
      ]
    },
    {
      id: 'design',
      label: 'Design',
      icon: Settings,
      title: 'What We Design',
      subtitle: 'Custom cloud architectures designed for scalability, resilience, and optimal performance',
      description: 'Our cloud design services create robust, scalable cloud architectures tailored to your specific requirements. We design comprehensive solutions covering multi-cloud strategies, serverless architectures, microservices, and cloud-native applications that provide optimal performance while supporting future growth and innovation.',
      keyFeatures: [
        { icon: Cloud, title: 'Multi-Cloud Architecture', desc: 'Hybrid and multi-cloud solution design' },
        { icon: Zap, title: 'Serverless Design', desc: 'Event-driven and serverless architecture planning' },
        { icon: Database, title: 'Data Architecture', desc: 'Cloud data lakes, warehouses, and analytics design' },
        { icon: Lock, title: 'Security Architecture', desc: 'Zero-trust and cloud security framework design' }
      ]
    },
    {
      id: 'build',
      label: 'Build',
      icon: Code,
      title: 'What We Build',
      subtitle: 'End-to-end cloud solution implementation with automation and best practices',
      description: 'Our cloud build services provide complete implementation and deployment of cloud solutions. From infrastructure provisioning and application migration to CI/CD pipeline setup and automation, we handle every aspect of cloud implementation while ensuring security, scalability, and operational excellence.',
      keyFeatures: [
        { icon: Server, title: 'Infrastructure Provisioning', desc: 'Automated cloud infrastructure deployment' },
        { icon: ArrowRight, title: 'Migration Services', desc: 'Application and data migration to cloud platforms' },
        { icon: Settings, title: 'Automation Implementation', desc: 'CI/CD pipelines and infrastructure automation' },
        { icon: Monitor, title: 'Integration Services', desc: 'Seamless integration with existing systems' }
      ]
    },
    {
      id: 'operate',
      label: 'Operate & Manage',
      icon: Monitor,
      title: 'What We Operate & Manage',
      subtitle: '24/7 cloud operations management with proactive monitoring and optimization',
      description: 'Our managed cloud services provide round-the-clock monitoring and management of your cloud infrastructure. With 24/7 cloud operations center coverage, proactive monitoring, automated scaling, and continuous optimization, we ensure your cloud environment operates at peak performance while you focus on core business activities.',
      keyFeatures: [
        { icon: Clock, title: '24/7 Cloud Operations', desc: 'Continuous cloud monitoring and management' },
        { icon: Zap, title: 'Auto-Scaling Management', desc: 'Dynamic resource scaling and optimization' },
        { icon: Shield, title: 'Security Operations', desc: 'Continuous security monitoring and threat response' },
        { icon: TrendingUp, title: 'Performance Optimization', desc: 'Ongoing performance tuning and cost optimization' }
      ]
    }
  ];

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <div
        className="relative py-24 bg-cover bg-center  bg-gradient-to-br from-black via-black to-black opacity-100"
        style={{ backgroundImage: "url('/servicesimages/cloudimage.jpg')" }}
      >
        {/* Black overlay only */}
        <div className="absolute inset-0 "></div>

        {/* Text content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
          <Cloud className="w-16 h-16 mx-auto mb-4 text-white" />
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            Cloud Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl">
            Accelerate your digital transformation with comprehensive cloud solutions
          </p>
          <p className="text-lg text-white">
            {animatedText}<span className="animate-pulse">|</span>
          </p>
        </div>
      </div>


      {/* Navigation */}
      <div className="bg-white shadow-lg sticky top-20 md:top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex flex-wrap justify-center gap-2">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <button
                  key={service.id}
                  onClick={() => scrollToSection(service.id)}
                  className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all text-gray-600 hover:text-red-600 hover:bg-red-50"
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{service.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Services Sections */}
      {services.map((service, index) => (
        <section key={service.id} id={service.id} className="py-16 px-6 mt-3">
          <div className="max-w-6xl mx-auto mt-4">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="mb-6">
                {React.createElement(service.icon, { className: "w-16 h-16 text-red-600 mx-auto mb-4" })}
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">{service.title}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{service.subtitle}</p>
            </div>

            {/* Content Section */}
            <div className="mb-16">
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
                {service.description}
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.keyFeatures.map((feature, featureIndex) => (
                  <div key={featureIndex} className="text-center p-6 bg-gray-50 rounded-lg">
                    {React.createElement(feature.icon, { className: "w-12 h-12 text-red-600 mx-auto mb-4" })}
                    <h4 className="font-semibold text-gray-800 mb-2">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            {index < services.length - 1 && (
              <div className="border-t border-gray-200 my-16"></div>
            )}
          </div>
        </section>
      ))}

      {/* Call to Action */}
      
    </div>
  );
};

export default CloudServicesPage;