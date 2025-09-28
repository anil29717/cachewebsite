import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Cloud, Shield, Zap, Settings, Monitor, Users, 
  CheckCircle, XCircle, TrendingUp, DollarSign, 
  Clock, Star, ArrowRight, Target, Database,
  Lock, Cpu, Network, FileText, AlertTriangle
} from 'lucide-react';

const CloudServicesPage = () => {
  const [activeTab, setActiveTab] = useState('audit');
  const [animatedText, setAnimatedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);

  const navigate = useNavigate();

  // Hero section animated texts
  
  const heroTexts = [
    'Transform Your Business with Cloud Excellence',
    'Secure, Scalable, and Seamless Solutions',
    'Your Partner in Digital Innovation'
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
      icon: Shield,
      heroImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      content: {
        title: 'Cloud Infrastructure Audit & Assessment',
        subtitle: 'Comprehensive evaluation of your cloud environment for security, performance, and cost optimization',
        about: {
          description: 'Our cloud audit services provide thorough assessment of your existing infrastructure, identifying vulnerabilities, optimization opportunities, and compliance gaps. We evaluate every component of your cloud setup to ensure it meets industry standards and business requirements.',
          keyFeatures: [
            { icon: Lock, title: 'Security Assessment', desc: 'Comprehensive security vulnerability analysis' },
            { icon: DollarSign, title: 'Cost Analysis', desc: 'Detailed cost optimization recommendations' },
            { icon: TrendingUp, title: 'Performance Review', desc: 'System performance and bottleneck identification' },
            { icon: FileText, title: 'Compliance Check', desc: 'Regulatory compliance verification' }
          ]
        },
        prosAndCons: {
          pros: [
            'Identifies potential security vulnerabilities before they become threats',
            'Uncovers significant cost-saving opportunities',
            'Provides clear roadmap for infrastructure improvements',
            'Ensures compliance with industry regulations',
            'Improves overall system performance and reliability'
          ],
          cons: [
            'Requires temporary system access and potential downtime',
            'Initial audit process can be time-intensive',
            'May reveal more issues than initially anticipated',
            'Recommendations require additional investment to implement'
          ]
        },
        services: [
          {
            title: 'Security & Compliance Management',
            description: 'Complete security posture evaluation including access controls, encryption standards, network security, and regulatory compliance verification across all cloud platforms.',
            benefits: ['Risk mitigation', 'Compliance assurance', 'Security framework implementation']
          },
          {
            title: 'Cost Optimization Analysis',
            description: 'Detailed financial analysis of cloud spending with recommendations for resource optimization, reserved instance opportunities, and automated cost controls.',
            benefits: ['20-40% cost reduction', 'Budget predictability', 'Resource efficiency']
          },
          {
            title: 'Performance Assessment',
            description: 'Comprehensive performance evaluation covering compute, storage, network, and application performance with optimization recommendations.',
            benefits: ['Improved response times', 'Enhanced scalability', 'Better user experience']
          }
        ],
        relatedServices: ['Cloud Migration', 'Security Implementation', 'Cost Optimization', 'Performance Tuning']
      }
    },
    {
      id: 'consult',
      label: 'Consult',
      icon: Zap,
      heroImage: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80',
      content: {
        title: 'Strategic Cloud Consulting & Planning',
        subtitle: 'Expert guidance for cloud strategy development, FinOps implementation, and digital transformation roadmaps',
        about: {
          description: 'Our consulting services help organizations develop comprehensive cloud strategies aligned with business objectives. We provide expert guidance throughout your cloud journey, ensuring optimal outcomes and maximum return on investment.',
          keyFeatures: [
            { icon: Target, title: 'Strategy Development', desc: 'Comprehensive cloud roadmap creation' },
            { icon: DollarSign, title: 'FinOps Implementation', desc: 'Financial operations and cost management' },
            { icon: Users, title: 'Team Training', desc: 'Staff education and skill development' },
            { icon: FileText, title: 'Documentation', desc: 'Complete process and policy documentation' }
          ]
        },
        prosAndCons: {
          pros: [
            'Clear strategic direction and roadmap for cloud adoption',
            'Significant cost optimization through FinOps practices',
            'Reduced risks through expert guidance and best practices',
            'Faster time-to-value with proven methodologies',
            'Enhanced team capabilities through knowledge transfer'
          ],
          cons: [
            'Requires significant time investment from leadership team',
            'Strategy implementation may require organizational changes',
            'Initial consulting engagement can be expensive',
            'Success depends on organizational buy-in and commitment'
          ]
        },
        services: [
          {
            title: 'FinOps Implementation & Management',
            description: 'Comprehensive financial operations setup including cost allocation, budgeting frameworks, automated cost controls, and financial reporting dashboards.',
            benefits: ['Cost transparency', 'Budget control', 'Financial accountability']
          },
          {
            title: 'Cloud Strategy Development',
            description: 'Strategic planning for cloud adoption including vendor selection, architecture planning, migration strategies, and timeline development.',
            benefits: ['Clear roadmap', 'Risk mitigation', 'Optimized resource allocation']
          },
          {
            title: 'Best Practices & Governance',
            description: 'Establishment of cloud governance frameworks, operational procedures, security policies, and compliance management systems.',
            benefits: ['Operational efficiency', 'Risk management', 'Standardized processes']
          }
        ],
        relatedServices: ['Cloud Audit', 'Migration Planning', 'Team Training', 'Governance Setup']
      }
    },
    {
      id: 'design',
      label: 'Design',
      icon: Settings,
      heroImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2125&q=80',
      content: {
        title: 'Cloud Architecture Design & Planning',
        subtitle: 'Custom cloud solutions designed for scalability, security, and optimal performance',
        about: {
          description: 'Our design services create robust, scalable cloud architectures tailored to your specific requirements. We leverage best practices and cutting-edge technologies to design solutions that support current needs while providing flexibility for future growth.',
          keyFeatures: [
            { icon: Database, title: 'Architecture Design', desc: 'Scalable and resilient system architecture' },
            { icon: Shield, title: 'DR Planning', desc: 'Comprehensive disaster recovery setup' },
            { icon: Network, title: 'Integration Design', desc: 'Seamless system connectivity solutions' },
            { icon: Cpu, title: 'Performance Planning', desc: 'Optimized resource allocation and scaling' }
          ]
        },
        prosAndCons: {
          pros: [
            'Custom-tailored solutions that fit specific business needs',
            'Future-proof architecture that scales with business growth',
            'Comprehensive disaster recovery and business continuity',
            'Optimized performance and cost-efficiency',
            'Reduced technical debt and maintenance overhead'
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
            title: 'DC and DR Setup',
            description: 'Comprehensive disaster recovery design including multi-region architecture, automated failover, data replication, and business continuity planning.',
            benefits: ['Business continuity', 'Data protection', 'Minimal downtime']
          },
          {
            title: 'Cloud-Native Architecture',
            description: 'Modern architecture design leveraging containers, microservices, serverless technologies, and DevOps-ready infrastructure.',
            benefits: ['Scalability', 'Flexibility', 'Modern technology stack']
          },
          {
            title: 'Integration & Connectivity',
            description: 'Seamless integration design for cloud services, on-premises systems, and third-party applications with secure connectivity solutions.',
            benefits: ['System interoperability', 'Data flow optimization', 'Secure connectivity']
          }
        ],
        relatedServices: ['Implementation', 'Migration Services', 'Security Design', 'Performance Optimization']
      }
    },
    {
      id: 'build',
      label: 'Build',
      icon: Cloud,
      heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
      content: {
        title: 'Cloud Implementation & Migration Services',
        subtitle: 'End-to-end cloud deployment with seamless migration from on-premises to cloud or cloud-to-cloud',
        about: {
          description: 'Our build services provide complete cloud implementation and migration solutions, transforming your IT infrastructure for optimal cloud performance. We handle every aspect of implementation with minimal business disruption.',
          keyFeatures: [
            { icon: ArrowRight, title: 'Migration Services', desc: 'On-premises to cloud and cloud-to-cloud migration' },
            { icon: Settings, title: 'DevOps Setup', desc: 'Complete DevOps and SecOps implementation' },
            { icon: Database, title: 'Infrastructure Build', desc: 'Comprehensive infrastructure deployment' },
            { icon: Shield, title: 'Security Integration', desc: 'Built-in security and compliance measures' }
          ]
        },
        prosAndCons: {
          pros: [
            'Comprehensive migration with minimal business disruption',
            'Expert handling of complex technical challenges',
            'Automated DevOps and SecOps implementation',
            'Reduced migration risks through proven methodologies',
            'Optimized cloud environment from day one'
          ],
          cons: [
            'Migration process can be lengthy for complex environments',
            'Requires careful planning and coordination across teams',
            'Potential for temporary performance impacts during migration',
            'May require staff training on new cloud technologies'
          ]
        },
        services: [
          {
            title: 'Migration: OnPrem to Cloud',
            description: 'Comprehensive migration services including assessment, planning, application refactoring, data transfer, and optimization for cloud environments.',
            benefits: ['Seamless transition', 'Minimal downtime', 'Optimized performance']
          },
          {
            title: 'Cloud to Cloud Migration',
            description: 'Expert migration between cloud providers including data transfer, service mapping, optimization, and cost analysis across platforms.',
            benefits: ['Platform optimization', 'Cost efficiency', 'Enhanced capabilities']
          },
          {
            title: 'DevOps/SecOps Implementation',
            description: 'Complete CI/CD pipeline setup, infrastructure as code, automated testing, security integration, and monitoring implementation.',
            benefits: ['Automation', 'Security integration', 'Faster deployment']
          }
        ],
        relatedServices: ['Cloud Design', 'Migration Planning', 'Security Implementation', 'Performance Optimization']
      }
    },
    {
      id: 'operate',
      label: 'Operate & Manage',
      icon: Monitor,
      heroImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      content: {
        title: 'Managed Cloud Operations & Support',
        subtitle: '24/7 monitoring, managed services, and comprehensive support for optimal cloud performance',
        about: {
          description: 'Our managed services provide round-the-clock support and management for your cloud infrastructure, ensuring optimal performance, security, and availability while you focus on core business activities.',
          keyFeatures: [
            { icon: Clock, title: '24/7 Monitoring', desc: 'Continuous infrastructure and application monitoring' },
            { icon: Users, title: 'Managed Services', desc: 'Complete operational management and support' },
            { icon: TrendingUp, title: 'Performance Optimization', desc: 'Ongoing performance tuning and optimization' },
            { icon: AlertTriangle, title: 'Incident Management', desc: 'Rapid incident response and resolution' }
          ]
        },
        prosAndCons: {
          pros: [
            '24/7 professional monitoring and support coverage',
            'Proactive issue detection and resolution',
            'Continuous performance optimization and cost management',
            'Access to specialized cloud expertise',
            'Predictable operational costs with managed service agreements'
          ],
          cons: [
            'Ongoing operational costs for managed services',
            'Dependency on external service provider',
            'Potential communication delays for complex issues',
            'May require service provider access to sensitive systems'
          ]
        },
        services: [
          {
            title: '24x7 Monitoring',
            description: 'Comprehensive monitoring of infrastructure, applications, security events, and performance metrics with immediate alerting and response.',
            benefits: ['Proactive monitoring', 'Immediate alerts', 'Quick resolution']
          },
          {
            title: 'Managed Services/On-site Support',
            description: 'Complete operational management including system administration, maintenance, optimization, and on-site technical support when needed.',
            benefits: ['Operational efficiency', 'Expert support', 'Reduced internal overhead']
          },
          {
            title: 'Cost Optimization',
            description: 'Continuous cost monitoring, resource optimization, right-sizing recommendations, and automated cost controls to maximize ROI.',
            benefits: ['Cost control', 'Resource efficiency', 'Budget optimization']
          }
        ],
        relatedServices: ['Performance Monitoring', 'Security Management', 'Backup Services', 'Technical Support']
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${currentTab.heroImage})`
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
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Transform your business with our expert {currentTab.label.toLowerCase()} services
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={() => navigate('/contactus')} className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contact Us
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudServicesPage;