import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Shield, Lock, Eye, AlertTriangle, Search, Users, 
  CheckCircle, XCircle, TrendingUp, DollarSign, 
  Clock, Star, ArrowRight, Target, Database,
  FileText, Monitor, Network, Cpu, Settings,
  Globe, Zap, Bug, KeyRound, Fingerprint
} from 'lucide-react';

const CybersecurityServicesPage = () => {
  const [activeTab, setActiveTab] = useState('audit');
  const [animatedText, setAnimatedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);

  const navigate = useNavigate();

   useEffect(() => {
      window.scrollTo(0, 0); // scroll to top when page loads
    }, []);
  
    
  // Hero section animated texts
  const heroTexts = [
    'Protect Your Digital Assets with Advanced Security',
    'Comprehensive Cybersecurity Solutions for Modern Threats',
    'Your Trusted Partner in Digital Defense'
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

  const tabs = [
    {
      id: 'audit',
      label: 'Audit',
      icon: Search,
      heroImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      content: {
        title: 'Cybersecurity Audit & Risk Assessment',
        subtitle: 'Comprehensive evaluation of your security posture, vulnerabilities, and compliance status',
        about: {
          description: 'Our cybersecurity audit services provide thorough evaluation of your entire IT infrastructure, identifying vulnerabilities, security gaps, and compliance issues. We conduct comprehensive penetration testing, vulnerability assessments, and security audits to ensure your organization is protected against evolving cyber threats.',
          keyFeatures: [
            { icon: Search, title: 'Vulnerability Assessment', desc: 'Comprehensive security vulnerability scanning' },
            { icon: Bug, title: 'Penetration Testing', desc: 'Ethical hacking and exploitation testing' },
            { icon: FileText, title: 'Compliance Audit', desc: 'Regulatory compliance verification' },
            { icon: Shield, title: 'Risk Analysis', desc: 'Detailed security risk assessment' }
          ]
        },
        prosAndCons: {
          pros: [
            'Identifies critical security vulnerabilities before attackers do',
            'Provides comprehensive view of your security posture',
            'Ensures compliance with industry regulations and standards',
            'Delivers actionable remediation recommendations',
            'Helps prioritize security investments and resources'
          ],
          cons: [
            'Assessment process may temporarily impact system performance',
            'Requires access to sensitive systems and data',
            'May reveal more security issues than initially expected',
            'Remediation efforts require additional time and resources'
          ]
        },
        services: [
          {
            title: 'Vulnerability Assessment & Penetration Testing',
            description: 'Comprehensive security testing including automated vulnerability scanning, manual penetration testing, social engineering assessments, and wireless security testing.',
            benefits: ['Critical vulnerability identification', 'Real-world attack simulation', 'Detailed remediation guidance']
          },
          {
            title: 'Compliance & Risk Assessment',
            description: 'Thorough evaluation of compliance with standards like ISO 27001, NIST, SOC 2, HIPAA, and PCI DSS, including gap analysis and remediation planning.',
            benefits: ['Regulatory compliance', 'Risk mitigation', 'Audit readiness']
          },
          {
            title: 'Security Architecture Review',
            description: 'Detailed analysis of security controls, network architecture, access management, and data protection mechanisms across your entire infrastructure.',
            benefits: ['Architecture optimization', 'Control effectiveness', 'Security enhancement']
          }
        ],
        relatedServices: ['Security Consulting', 'Incident Response', 'Security Monitoring', 'Compliance Management']
      }
    },
    {
      id: 'consult',
      label: 'Consult',
      icon: Users,
      heroImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      content: {
        title: 'Strategic Cybersecurity Consulting & Planning',
        subtitle: 'Expert guidance for security strategy development, governance, and risk management programs',
        about: {
          description: 'Our cybersecurity consulting services help organizations develop comprehensive security strategies aligned with business objectives. We provide expert guidance in security governance, risk management, compliance planning, and security program development to ensure optimal protection and business continuity.',
          keyFeatures: [
            { icon: Target, title: 'Security Strategy', desc: 'Comprehensive security roadmap development' },
            { icon: FileText, title: 'Policy Development', desc: 'Security policies and procedures creation' },
            { icon: Users, title: 'Team Training', desc: 'Security awareness and skill development' },
            { icon: TrendingUp, title: 'Program Management', desc: 'Security program implementation guidance' }
          ]
        },
        prosAndCons: {
          pros: [
            'Clear security strategy aligned with business objectives',
            'Expert guidance on industry best practices and standards',
            'Reduced security risks through proven methodologies',
            'Enhanced team capabilities through knowledge transfer',
            'Cost-effective security program development'
          ],
          cons: [
            'Requires significant executive and team commitment',
            'Strategy implementation may require organizational changes',
            'Initial consulting engagement represents substantial investment',
            'Success depends on organizational adoption and culture change'
          ]
        },
        services: [
          {
            title: 'Security Governance & Risk Management',
            description: 'Development of security governance frameworks, risk management programs, incident response procedures, and business continuity planning.',
            benefits: ['Risk reduction', 'Governance framework', 'Incident preparedness']
          },
          {
            title: 'Compliance & Regulatory Guidance',
            description: 'Expert guidance on regulatory requirements, compliance frameworks, audit preparation, and ongoing compliance management across various industries.',
            benefits: ['Regulatory compliance', 'Audit readiness', 'Legal protection']
          },
          {
            title: 'Security Awareness & Training',
            description: 'Comprehensive security awareness programs, specialized training for IT teams, phishing simulation, and ongoing security education initiatives.',
            benefits: ['Human firewall', 'Reduced incidents', 'Security culture']
          }
        ],
        relatedServices: ['Security Assessment', 'Policy Development', 'Incident Response', 'Compliance Management']
      }
    },
    {
      id: 'design',
      label: 'Design',
      icon: Lock,
      heroImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2125&q=80',
      content: {
        title: 'Security Architecture Design & Planning',
        subtitle: 'Robust security frameworks designed for comprehensive protection and scalability',
        about: {
          description: 'Our security design services create comprehensive, layered security architectures tailored to your specific requirements. We design and implement security solutions that provide multi-layered protection while maintaining operational efficiency and supporting business growth.',
          keyFeatures: [
            { icon: Shield, title: 'Defense in Depth', desc: 'Multi-layered security architecture design' },
            { icon: Network, title: 'Network Security', desc: 'Comprehensive network protection design' },
            { icon: Database, title: 'Data Protection', desc: 'Advanced data security and encryption' },
            { icon: KeyRound, title: 'Access Control', desc: 'Identity and access management systems' }
          ]
        },
        prosAndCons: {
          pros: [
            'Comprehensive protection against multiple attack vectors',
            'Scalable architecture that grows with your business',
            'Integration with existing systems and processes',
            'Reduced security gaps through holistic design approach',
            'Enhanced compliance and regulatory adherence'
          ],
          cons: [
            'Design process requires significant upfront time investment',
            'Custom solutions may be more complex to implement',
            'Higher initial design costs compared to standard solutions',
            'May require specialized skills for ongoing maintenance'
          ]
        },
        services: [
          {
            title: 'Zero Trust Architecture',
            description: 'Implementation of zero trust security models including micro-segmentation, continuous verification, least privilege access, and comprehensive monitoring.',
            benefits: ['Enhanced security posture', 'Reduced attack surface', 'Improved compliance']
          },
          {
            title: 'Identity & Access Management',
            description: 'Comprehensive IAM solutions including single sign-on, multi-factor authentication, privileged access management, and identity governance.',
            benefits: ['Access control', 'User management', 'Privileged account security']
          },
          {
            title: 'Data Protection & Encryption',
            description: 'Advanced data protection strategies including encryption at rest and in transit, data loss prevention, backup security, and privacy controls.',
            benefits: ['Data confidentiality', 'Privacy protection', 'Compliance adherence']
          }
        ],
        relatedServices: ['Network Security', 'Identity Management', 'Data Protection', 'Compliance Solutions']
      }
    },
    {
      id: 'build',
      label: 'Build',
      icon: Settings,
      heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80',
      content: {
        title: 'Security Solution Implementation & Deployment',
        subtitle: 'End-to-end deployment of security technologies and controls with minimal business disruption',
        about: {
          description: 'Our build services provide complete implementation of security solutions, from initial planning through full operational status. We handle every aspect of security technology deployment while ensuring minimal disruption to business operations and maintaining security throughout the process.',
          keyFeatures: [
            { icon: Settings, title: 'Technology Deployment', desc: 'Comprehensive security tool implementation' },
            { icon: Monitor, title: 'System Integration', desc: 'Seamless integration with existing systems' },
            { icon: Zap, title: 'Automation Setup', desc: 'Security automation and orchestration' },
            { icon: Eye, title: 'Monitoring Configuration', desc: 'Advanced security monitoring setup' }
          ]
        },
        prosAndCons: {
          pros: [
            'Professional deployment with minimal business disruption',
            'Expert configuration for optimal security effectiveness',
            'Comprehensive testing and validation before go-live',
            'Integration with existing security and IT infrastructure',
            'Ongoing support during initial operational period'
          ],
          cons: [
            'Implementation timeline depends on environment complexity',
            'May require temporary system downtime for certain deployments',
            'Staff training required for new security technologies',
            'Initial configuration tuning may be needed post-deployment'
          ]
        },
        services: [
          {
            title: 'Security Technology Deployment',
            description: 'Complete deployment of security solutions including firewalls, intrusion detection systems, endpoint protection, SIEM platforms, and security orchestration tools.',
            benefits: ['Technology optimization', 'Rapid deployment', 'Expert configuration']
          },
          {
            title: 'Endpoint & Network Protection',
            description: 'Comprehensive endpoint security deployment, network security implementation, wireless security setup, and mobile device management solutions.',
            benefits: ['Device protection', 'Network security', 'Mobile security']
          },
          {
            title: 'Security Automation & Orchestration',
            description: 'Implementation of security automation platforms, incident response automation, threat intelligence integration, and security workflow optimization.',
            benefits: ['Response automation', 'Efficiency improvement', 'Threat detection']
          }
        ],
        relatedServices: ['Security Architecture', 'Managed Services', 'System Integration', 'Technology Consulting']
      }
    },
    {
      id: 'operate',
      label: 'Operate & Manage',
      icon: Monitor,
      heroImage: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80',
      content: {
        title: 'Managed Security Services & 24/7 Operations',
        subtitle: 'Round-the-clock security monitoring, threat detection, and incident response services',
        about: {
          description: 'Our managed security services provide continuous monitoring and protection for your IT infrastructure. With 24/7 security operations center (SOC) coverage, advanced threat detection, and rapid incident response, we ensure your organization is protected around the clock against evolving cyber threats.',
          keyFeatures: [
            { icon: Clock, title: '24/7 SOC Monitoring', desc: 'Continuous security monitoring and analysis' },
            { icon: AlertTriangle, title: 'Threat Detection', desc: 'Advanced threat hunting and detection' },
            { icon: Zap, title: 'Incident Response', desc: 'Rapid incident response and remediation' },
            { icon: TrendingUp, title: 'Threat Intelligence', desc: 'Real-time threat intelligence integration' }
          ]
        },
        prosAndCons: {
          pros: [
            '24/7 professional security monitoring and response',
            'Access to advanced security technologies and expertise',
            'Proactive threat hunting and incident prevention',
            'Predictable security costs with managed service agreements',
            'Rapid response to security incidents and threats'
          ],
          cons: [
            'Ongoing operational costs for managed services',
            'Dependency on external security service provider',
            'May require integration with existing security tools',
            'Potential communication delays for complex incident resolution'
          ]
        },
        services: [
          {
            title: '24/7 Security Operations Center',
            description: 'Comprehensive SOC services including continuous monitoring, threat analysis, incident detection, security event correlation, and expert analyst support.',
            benefits: ['Continuous protection', 'Expert analysis', 'Rapid detection']
          },
          {
            title: 'Incident Response & Forensics',
            description: 'Professional incident response services including containment, investigation, forensic analysis, recovery assistance, and post-incident reporting.',
            benefits: ['Quick containment', 'Expert investigation', 'Business recovery']
          },
          {
            title: 'Managed Detection & Response',
            description: 'Advanced MDR services combining technology, threat intelligence, and expert analysis for proactive threat hunting and automated response.',
            benefits: ['Proactive hunting', 'Automated response', 'Threat intelligence']
          }
        ],
        relatedServices: ['Incident Response', 'Threat Intelligence', 'Security Monitoring', 'Forensic Services']
      }
    }
  ];

  const currentTab = tabs.find(tab => tab.id === activeTab);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Image */}
      <div 
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${currentTab.heroImage})`
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-6 max-w-4xl">
            <div className="mb-6">
              {React.createElement(currentTab.icon, { className: "w-16 h-16 mx-auto mb-4" })}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              {currentTab.content.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              {currentTab.content.subtitle}
            </p>
            <div className="h-8">
              <p className="text-lg">
                {animatedText}<span className="animate-pulse">|</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-red-600 hover:bg-red-50'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* About Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">About This Service</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {currentTab.content.about.description}
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentTab.content.about.keyFeatures.map((feature, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                  {React.createElement(feature.icon, { className: "w-12 h-12 text-red-600 mx-auto mb-4" })}
                  <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pros and Cons */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Advantages & Considerations</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6" />
                  Advantages
                </h3>
                <ul className="space-y-2">
                  {currentTab.content.prosAndCons.pros.map((pro, index) => (
                    <li key={index} className="text-green-700 flex items-start gap-2">
                      <Star className="w-4 h-4 mt-1 flex-shrink-0" />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
                <h3 className="text-xl font-semibold text-amber-800 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6" />
                  Considerations
                </h3>
                <ul className="space-y-2">
                  {currentTab.content.prosAndCons.cons.map((con, index) => (
                    <li key={index} className="text-amber-700 flex items-start gap-2">
                      <XCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Detailed Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Service Details</h2>
            <div className="space-y-8">
              {currentTab.content.services.map((service, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.benefits.map((benefit, bIndex) => (
                      <span 
                        key={bIndex}
                        className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Related Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Related Services</h2>
            <div className="flex flex-wrap gap-3">
              {currentTab.content.relatedServices.map((service, index) => (
                <div 
                  key={index}
                  className="bg-gray-100 hover:bg-red-100 px-4 py-2 rounded-lg cursor-pointer transition-colors group"
                >
                  <span className="text-gray-700 group-hover:text-red-700 font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-red-600 to-red-700 text-white p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Secure Your Digital Future</h2>
            <p className="text-xl mb-8 opacity-90">
              Protect your organization with our expert {currentTab.label.toLowerCase()} services
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={() => navigate('/contact')} className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contact Security Experts
              </button>
              <button onClick={() => navigate('/services')} className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors">
                View All Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CybersecurityServicesPage;