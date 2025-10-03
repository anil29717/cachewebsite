import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Network, Shield, Cloud, FileText, Activity, Brain,
  CheckCircle, Star, Search, BarChart, Target,
  Users, Settings, Monitor, Database, Server,
  Globe, Cpu, AlertTriangle, TrendingUp,
  Zap, Code, Building, Clock, DollarSign, Lock,
  Wifi, Router, HardDrive, Eye, Bot, Layers
} from 'lucide-react';

const NetworkingConsultingPage = () => {
  const [animatedText, setAnimatedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
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
    'Expert Networking and Technology Consulting Services',
    'Driving Digital Excellence Through Strategic Innovation',
    'Your Trusted Partner in Technology Transformation'
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
      const headerOffset = 80;
      const elementPosition = element.offsetTop - headerOffset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const services = [
    {
      id: 'infra-network',
      label: 'Infra & Network',
      icon: Network,
      title: 'What We Build & Connect',
      subtitle: 'Comprehensive infrastructure design, network architecture, and enterprise connectivity solutions',
      description: 'Our infrastructure and networking services deliver robust, scalable network architectures and IT infrastructure solutions. We specialize in enterprise network design, data center infrastructure, network security implementation, and performance optimization to ensure your technology foundation supports current operations and future growth with maximum reliability and efficiency.',
      keyFeatures: [
        { icon: Router, title: 'Network Architecture', desc: 'Enterprise-grade network design and topology planning' },
        { icon: Server, title: 'Infrastructure Design', desc: 'Scalable server, storage, and compute infrastructure' },
        { icon: Wifi, title: 'Wireless Solutions', desc: 'Comprehensive wireless network design and deployment' },
        { icon: Monitor, title: 'Network Monitoring', desc: 'Real-time network performance monitoring and analytics' }
      ]
    },
    {
      id: 'cybersecurity',
      label: 'Cybersecurity',
      icon: Shield,
      title: 'What We Secure',
      subtitle: 'Advanced cybersecurity solutions, threat protection, and comprehensive security consulting',
      description: 'Our cybersecurity consulting services provide end-to-end security solutions to protect your digital assets, ensure compliance, and maintain business continuity. We offer security assessments, threat detection and response, security architecture design, and comprehensive security program development to safeguard your organization against evolving cyber threats.',
      keyFeatures: [
        { icon: Lock, title: 'Security Assessment', desc: 'Comprehensive security audits and vulnerability assessments' },
        { icon: Eye, title: 'Threat Detection', desc: 'Advanced threat monitoring and incident response' },
        { icon: Shield, title: 'Security Architecture', desc: 'Zero-trust security framework design and implementation' },
        { icon: Users, title: 'Security Training', desc: 'Cybersecurity awareness and training programs' }
      ]
    },
    {
      id: 'cloud',
      label: 'Cloud',
      icon: Cloud,
      title: 'What We Migrate & Optimize',
      subtitle: 'Strategic cloud transformation, migration services, and multi-cloud management solutions',
      description: 'Our cloud consulting services guide organizations through successful cloud adoption and digital transformation. We provide cloud strategy development, architecture design, migration planning, and ongoing cloud optimization to help you leverage cloud technologies for improved scalability, cost efficiency, and business agility while ensuring security and compliance.',
      keyFeatures: [
        { icon: Globe, title: 'Cloud Strategy', desc: 'Comprehensive cloud adoption and migration strategy' },
        { icon: Settings, title: 'Cloud Architecture', desc: 'Scalable cloud-native architecture design' },
        { icon: Database, title: 'Migration Services', desc: 'Seamless application and data migration to cloud' },
        { icon: DollarSign, title: 'Cost Optimization', desc: 'Cloud cost management and resource optimization' }
      ]
    },
    {
      id: 'grc',
      label: 'GRC',
      icon: FileText,
      title: 'What We Govern & Comply',
      subtitle: 'Governance, Risk & Compliance frameworks ensuring regulatory adherence and risk mitigation',
      description: 'Our GRC consulting services help organizations establish robust governance frameworks, implement effective risk management strategies, and maintain regulatory compliance. We provide comprehensive risk assessments, policy development, compliance program implementation, and ongoing GRC program management to protect your organization and ensure adherence to industry standards and regulations.',
      keyFeatures: [
        { icon: FileText, title: 'Policy Development', desc: 'Comprehensive governance policies and procedures' },
        { icon: AlertTriangle, title: 'Risk Management', desc: 'Enterprise risk assessment and mitigation strategies' },
        { icon: CheckCircle, title: 'Compliance Management', desc: 'Regulatory compliance monitoring and reporting' },
        { icon: BarChart, title: 'GRC Analytics', desc: 'Risk metrics, dashboards, and compliance reporting' }
      ]
    },
    {
      id: 'performance-audit',
      label: 'Application Performance Audit',
      icon: Activity,
      title: 'What We Optimize & Monitor',
      subtitle: 'Comprehensive application performance analysis, optimization, and monitoring services',
      description: 'Our application performance consulting services provide thorough analysis and optimization of application performance, scalability, and user experience. We conduct comprehensive performance audits, identify bottlenecks, implement optimization strategies, and establish monitoring frameworks to ensure your applications deliver optimal performance and support business objectives.',
      keyFeatures: [
        { icon: Activity, title: 'Performance Testing', desc: 'Comprehensive load testing and performance analysis' },
        { icon: Code, title: 'Code Optimization', desc: 'Application code review and optimization strategies' },
        { icon: Database, title: 'Database Optimization', desc: 'Database performance tuning and query optimization' },
        { icon: TrendingUp, title: 'Performance Monitoring', desc: 'Real-time application performance monitoring and alerting' }
      ]
    },
    {
      id: 'data-ai',
      label: 'Data AI',
      icon: Brain,
      title: 'What We Analyze & Automate',
      subtitle: 'Strategic AI implementation, data analytics, and intelligent automation consulting services',
      description: 'Our Data AI consulting services help organizations harness the power of artificial intelligence and advanced analytics to drive business innovation and competitive advantage. We provide AI strategy development, machine learning implementation, data platform design, and intelligent automation solutions that transform data into actionable insights and automated business processes.',
      keyFeatures: [
        { icon: Brain, title: 'AI Strategy & Implementation', desc: 'Comprehensive AI roadmap and implementation planning' },
        { icon: Bot, title: 'Machine Learning Solutions', desc: 'Custom ML models and predictive analytics development' },
        { icon: BarChart, title: 'Data Analytics Platform', desc: 'Advanced analytics and business intelligence solutions' },
        { icon: Cpu, title: 'Intelligent Automation', desc: 'AI-powered process automation and optimization' }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/servicesimages/consultingimage.jpg')" }}
      >
        {/* Semi-transparent black overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-black opacity-60 bg-opacity-60"></div>

        {/* Text content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-18 text-center flex flex-col justify-center h-full">
          <div>
            <Network className="w-20 h-20 mx-auto mb-6 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Networking & Consulting Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto">
            Expert technology consulting services driving digital transformation and operational excellence through strategic innovation
          </p>
          <div className="h-8 mb-8">
            <p className="text-lg text-white">
              {animatedText}<span className="animate-pulse">|</span>
            </p>
          </div>
        </div>
      </div>


      {/* Sticky Navigation */}
      <div className="bg-white shadow-lg sticky top-20 md:top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex flex-wrap justify-center gap-2">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <button
                  key={service.id}
                  onClick={() => scrollToSection(service.id)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all text-sm text-gray-600 hover:text-red-600 hover:bg-red-50"
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{service.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Service Sections */}
      <div className="py-16">
        {services.map((service, index) => (
          <section key={service.id} id={service.id} className="mb-32">
            <div className="max-w-6xl mx-auto px-6">
              {/* Service Header */}
              <div className="text-center mb-16">
                <div className="mb-6">
                  {React.createElement(service.icon, { className: "w-16 h-16 text-red-600 mx-auto mb-4" })}
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                  {service.title}
                </h2>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  {service.subtitle}
                </p>
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

              {/* Separator */}
              {index < services.length - 1 && (
                <div className="border-t border-gray-200 pt-16">
                  <div className="w-16 h-1 bg-red-600 mx-auto rounded-full"></div>
                </div>
              )}
            </div>
          </section>
        ))}
      </div>

      {/* Call to Action */}
      
    </div>
  );
};

export default NetworkingConsultingPage;