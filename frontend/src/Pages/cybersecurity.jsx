import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Shield, Search, Users, Hammer, Palette, Settings,
  CheckCircle, Star, AlertTriangle, Clock,
  Monitor, Database, Eye, Lock,
  Cpu, Globe, BarChart, Target, Zap,
  Code, Building, DollarSign, TrendingUp,
  Activity, Bot, HardDrive, Wifi, Router,
  FileText, Key, Layers, Smartphone, Server
} from 'lucide-react';
// import { url } from 'inspector';

const CybersecurityServicesPage = () => {
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
    'Advanced Cybersecurity Solutions for Modern Threats',
    'Protecting Your Digital Assets with Expert Security',
    'Your Trusted Partner in Cybersecurity Excellence'
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
      id: 'audit',
      label: 'Audit',
      icon: Search,
      title: 'What We Audit & Assess',
      subtitle: 'Comprehensive security auditing, vulnerability assessments, and risk evaluation services',
      description: 'Our cybersecurity audit services provide thorough assessment of your security posture, identifying vulnerabilities, compliance gaps, and potential threats. We conduct comprehensive security evaluations including penetration testing, vulnerability scanning, security architecture reviews, and compliance assessments to ensure your organization maintains robust defense against cyber threats.',
      keyFeatures: [
        { icon: Search, title: 'Penetration Testing', desc: 'Comprehensive ethical hacking and security testing' },
        { icon: Shield, title: 'Vulnerability Assessment', desc: 'Systematic identification of security weaknesses' },
        { icon: FileText, title: 'Compliance Audit', desc: 'Regulatory compliance assessment and documentation' },
        { icon: BarChart, title: 'Risk Evaluation', desc: 'Detailed security risk analysis and prioritization' }
      ]
    },
    {
      id: 'consult',
      label: 'Consult',
      icon: Users,
      title: 'What We Advise & Strategize',
      subtitle: 'Expert cybersecurity consulting, strategy development, and security program advisory services',
      description: 'Our cybersecurity consulting services provide strategic guidance to enhance your security posture and develop comprehensive security programs. We offer expert advice on security strategy, risk management, incident response planning, and security governance to help organizations build resilient defense mechanisms and maintain strong security practices.',
      keyFeatures: [
        { icon: Target, title: 'Security Strategy', desc: 'Comprehensive cybersecurity strategy development' },
        { icon: Users, title: 'Security Governance', desc: 'Security program governance and policy development' },
        { icon: AlertTriangle, title: 'Risk Management', desc: 'Enterprise risk assessment and mitigation planning' },
        { icon: Activity, title: 'Incident Response Planning', desc: 'Comprehensive incident response strategy and procedures' }
      ]
    },
    {
      id: 'build',
      label: 'Build',
      icon: Hammer,
      title: 'What We Build & Implement',
      subtitle: 'Security infrastructure implementation, solution deployment, and security system development',
      description: 'Our cybersecurity build services focus on implementing robust security infrastructure and deploying advanced security solutions. We build secure networks, implement security tools, develop custom security applications, and establish comprehensive security frameworks that protect your organization from various cyber threats while maintaining operational efficiency.',
      keyFeatures: [
        { icon: Lock, title: 'Security Infrastructure', desc: 'Secure network and system infrastructure implementation' },
        { icon: Code, title: 'Security Applications', desc: 'Custom security tools and application development' },
        { icon: Database, title: 'Secure Data Systems', desc: 'Encrypted database and data protection systems' },
        { icon: Smartphone, title: 'Mobile Security', desc: 'Mobile device security and application protection' }
      ]
    },
    {
      id: 'design',
      label: 'Design',
      icon: Palette,
      title: 'What We Design & Architect',
      subtitle: 'Security architecture design, framework development, and comprehensive security blueprints',
      description: 'Our cybersecurity design services create comprehensive security architectures and frameworks tailored to your organization\'s needs. We design zero-trust architectures, security frameworks, threat modeling systems, and comprehensive security blueprints that provide robust protection while supporting business objectives and operational requirements.',
      keyFeatures: [
        { icon: Layers, title: 'Security Architecture', desc: 'Comprehensive security framework and architecture design' },
        { icon: Eye, title: 'Threat Modeling', desc: 'Advanced threat modeling and attack surface analysis' },
        { icon: Globe, title: 'Zero-Trust Design', desc: 'Zero-trust security model implementation and design' },
        { icon: Server, title: 'Secure Infrastructure Design', desc: 'Resilient and secure infrastructure architecture' }
      ]
    },
    {
      id: 'operate-manage',
      label: 'Operate & Manage',
      icon: Settings,
      title: 'What We Operate & Manage',
      subtitle: '24/7 security operations, threat monitoring, and comprehensive security management services',
      description: 'Our cybersecurity operations and management services provide round-the-clock security monitoring, threat detection, and incident response. We operate security operations centers (SOC), manage security tools and systems, provide continuous threat hunting, and ensure your security infrastructure operates at peak performance with proactive threat management.',
      keyFeatures: [
        { icon: Monitor, title: '24/7 SOC Operations', desc: 'Continuous security monitoring and threat detection' },
        { icon: Eye, title: 'Threat Hunting', desc: 'Proactive threat hunting and advanced threat analysis' },
        { icon: Zap, title: 'Incident Response', desc: 'Rapid incident response and recovery services' },
        { icon: Settings, title: 'Security Tool Management', desc: 'Comprehensive security tool administration and optimization' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative text-white py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/servicesimages/cyberimage.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-black opacity-60" />

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="mb-8">
            <Shield className="w-20 h-20 mx-auto mb-6 opacity-90" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Cybersecurity Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
            Comprehensive cybersecurity solutions protecting your digital assets with advanced threat detection, robust security frameworks, and expert incident response
          </p>
          <div className="h-8 mb-8">
            <p className="text-lg">
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
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Strengthen Your Cybersecurity Posture?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Discover how our comprehensive cybersecurity services can protect your organization from evolving cyber threats
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => console.log('Get Security Assessment clicked')}
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Security Assessment
            </button>
            <button
              onClick={() => console.log('View Security Solutions clicked')}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
            >
              View Security Solutions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CybersecurityServicesPage;