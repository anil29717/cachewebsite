import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Server, HardDrive, Cpu, Monitor, Network, Users, 
  CheckCircle, XCircle, TrendingUp, DollarSign, 
  Clock, Star, ArrowRight, Target, Database,
  FileText, Shield, Settings, Zap, Eye,
  Globe, Router, Wifi, Cable, MemoryStick
} from 'lucide-react';

const InfrastructureServicesPage = () => {

   useEffect(() => {
      window.scrollTo(0, 0); // scroll to top when page loads
    }, []);
  
    
  const [activeTab, setActiveTab] = useState('audit');
  const [animatedText, setAnimatedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);

  const navigate = useNavigate();

  // Hero section animated texts
  const heroTexts = [
    'Build Robust Infrastructure for Digital Excellence',
    'Scalable, Reliable, and High-Performance Solutions',
    'Your Partner in Infrastructure Transformation'
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
      icon: Eye,
      heroImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      content: {
        title: 'Infrastructure Assessment & Audit',
        subtitle: 'Comprehensive evaluation of your IT infrastructure, performance analysis, and optimization opportunities',
        about: {
          description: 'Our infrastructure audit services provide thorough assessment of your entire IT environment, including servers, storage, networking, and virtualization platforms. We analyze performance metrics, capacity utilization, and identify optimization opportunities to ensure your infrastructure meets current and future business requirements.',
          keyFeatures: [
            { icon: Server, title: 'Server Assessment', desc: 'Complete server hardware and software evaluation' },
            { icon: Network, title: 'Network Analysis', desc: 'Comprehensive network performance and security review' },
            { icon: HardDrive, title: 'Storage Evaluation', desc: 'Storage capacity, performance, and efficiency analysis' },
            { icon: Monitor, title: 'Performance Monitoring', desc: 'Real-time performance metrics and bottleneck identification' }
          ]
        },
        prosAndCons: {
          pros: [
            'Identifies performance bottlenecks and capacity constraints',
            'Uncovers cost optimization and efficiency improvement opportunities',
            'Provides detailed inventory and documentation of infrastructure assets',
            'Helps plan for future growth and technology upgrades',
            'Ensures infrastructure aligns with business requirements'
          ],
          cons: [
            'Assessment process may require temporary performance monitoring',
            'Requires access to critical infrastructure systems',
            'May reveal more upgrade needs than initially budgeted',
            'Comprehensive audit can be time-intensive for large environments'
          ]
        },
        services: [
          {
            title: 'Server & Compute Assessment',
            description: 'Detailed evaluation of server hardware, CPU utilization, memory usage, virtualization efficiency, and compute resource optimization across physical and virtual environments.',
            benefits: ['Performance optimization', 'Resource efficiency', 'Capacity planning']
          },
          {
            title: 'Storage & Data Management Audit',
            description: 'Comprehensive analysis of storage systems, data growth patterns, backup strategies, disaster recovery capabilities, and storage performance optimization.',
            benefits: ['Storage optimization', 'Data protection', 'Cost reduction']
          },
          {
            title: 'Network Infrastructure Review',
            description: 'Complete network assessment including bandwidth utilization, security configurations, network topology analysis, and performance bottleneck identification.',
            benefits: ['Network optimization', 'Security enhancement', 'Performance improvement']
          }
        ],
        relatedServices: ['Infrastructure Consulting', 'Performance Optimization', 'Capacity Planning', 'Asset Management']
      }
    },
    {
      id: 'consult',
      label: 'Consult',
      icon: Users,
      heroImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      content: {
        title: 'Strategic Infrastructure Consulting & Planning',
        subtitle: 'Expert guidance for infrastructure strategy, technology roadmaps, and digital transformation initiatives',
        about: {
          description: 'Our infrastructure consulting services help organizations develop comprehensive technology strategies aligned with business objectives. We provide expert guidance in infrastructure planning, technology selection, capacity planning, and modernization roadmaps to ensure optimal performance and scalability.',
          keyFeatures: [
            { icon: Target, title: 'Strategy Development', desc: 'Comprehensive infrastructure roadmap creation' },
            { icon: Cpu, title: 'Technology Planning', desc: 'Hardware and software technology selection' },
            { icon: TrendingUp, title: 'Capacity Planning', desc: 'Future growth and scalability planning' },
            { icon: FileText, title: 'Documentation', desc: 'Complete infrastructure documentation and standards' }
          ]
        },
        prosAndCons: {
          pros: [
            'Clear infrastructure strategy aligned with business goals',
            'Expert guidance on latest technologies and best practices',
            'Optimized technology investments and budget planning',
            'Reduced risks through proven methodologies and planning',
            'Enhanced team capabilities through knowledge transfer'
          ],
          cons: [
            'Requires significant time investment from technical teams',
            'Strategy implementation may require substantial capital investment',
            'Initial consulting engagement represents upfront costs',
            'Success depends on organizational commitment to recommendations'
          ]
        },
        services: [
          {
            title: 'Infrastructure Strategy & Roadmap Development',
            description: 'Comprehensive planning for infrastructure modernization including technology selection, migration strategies, timeline development, and budget planning.',
            benefits: ['Strategic direction', 'Technology optimization', 'Risk mitigation']
          },
          {
            title: 'Capacity Planning & Scalability Design',
            description: 'Advanced capacity planning services including growth projections, resource optimization, scalability design, and performance forecasting.',
            benefits: ['Future-ready infrastructure', 'Optimal resource allocation', 'Cost efficiency']
          },
          {
            title: 'Technology Selection & Vendor Management',
            description: 'Expert guidance on hardware/software selection, vendor evaluation, procurement strategies, and technology lifecycle management.',
            benefits: ['Optimal technology choices', 'Vendor optimization', 'Cost control']
          }
        ],
        relatedServices: ['Infrastructure Audit', 'Technology Planning', 'Vendor Management', 'Project Management']
      }
    },
    {
      id: 'design',
      label: 'Design',
      icon: Settings,
      heroImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2125&q=80',
      content: {
        title: 'Infrastructure Architecture Design & Engineering',
        subtitle: 'Custom infrastructure solutions designed for performance, scalability, and reliability',
        about: {
          description: 'Our infrastructure design services create robust, scalable architectures tailored to your specific requirements. We design comprehensive solutions covering servers, storage, networking, virtualization, and cloud integration that provide optimal performance while supporting future growth and business requirements.',
          keyFeatures: [
            { icon: Server, title: 'Server Architecture', desc: 'High-performance server and compute design' },
            { icon: Network, title: 'Network Design', desc: 'Scalable and secure network architecture' },
            { icon: Database, title: 'Storage Solutions', desc: 'Advanced storage and data management design' },
            { icon: Globe, title: 'Cloud Integration', desc: 'Hybrid and multi-cloud architecture design' }
          ]
        },
        prosAndCons: {
          pros: [
            'Custom-designed solutions that fit specific business needs',
            'Scalable architecture that grows with business requirements',
            'Optimized performance and resource utilization',
            'Future-proof design with latest technologies',
            'Comprehensive documentation and specifications'
          ],
          cons: [
            'Design process requires significant upfront planning time',
            'Custom solutions may be more complex than standard offerings',
            'Higher initial design costs compared to off-the-shelf solutions',
            'May require specialized expertise for implementation and maintenance'
          ]
        },
        services: [
          {
            title: 'Data Center & Server Design',
            description: 'Complete data center design including server architecture, rack layout, power and cooling systems, and environmental controls for optimal performance and efficiency.',
            benefits: ['Optimal performance', 'Energy efficiency', 'Scalable design']
          },
          {
            title: 'Network Infrastructure Design',
            description: 'Comprehensive network design including LAN/WAN architecture, security integration, wireless solutions, and high-availability configurations.',
            benefits: ['Network performance', 'Security integration', 'High availability']
          },
          {
            title: 'Storage & Virtualization Architecture',
            description: 'Advanced storage design and virtualization architecture including SAN/NAS solutions, backup strategies, and virtualization platforms for maximum efficiency.',
            benefits: ['Storage optimization', 'Virtualization efficiency', 'Data protection']
          }
        ],
        relatedServices: ['Infrastructure Implementation', 'Performance Optimization', 'Disaster Recovery', 'Cloud Integration']
      }
    },
    {
      id: 'build',
      label: 'Build',
      icon: Cpu,
      heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80',
      content: {
        title: 'Infrastructure Implementation & Deployment',
        subtitle: 'End-to-end infrastructure deployment with seamless integration and minimal business disruption',
        about: {
          description: 'Our infrastructure build services provide complete implementation and deployment of IT infrastructure solutions. From server provisioning and network setup to storage configuration and system integration, we handle every aspect of infrastructure deployment while ensuring minimal business disruption and optimal performance.',
          keyFeatures: [
            { icon: Server, title: 'Server Deployment', desc: 'Complete server provisioning and configuration' },
            { icon: Network, title: 'Network Implementation', desc: 'Network infrastructure setup and configuration' },
            { icon: HardDrive, title: 'Storage Integration', desc: 'Storage systems deployment and optimization' },
            { icon: Settings, title: 'System Integration', desc: 'Seamless integration with existing systems' }
          ]
        },
        prosAndCons: {
          pros: [
            'Professional deployment with minimal business disruption',
            'Expert configuration for optimal performance and reliability',
            'Comprehensive testing and validation before go-live',
            'Integration with existing infrastructure and applications',
            'Ongoing support during initial operational period'
          ],
          cons: [
            'Implementation timeline depends on infrastructure complexity',
            'May require planned downtime for certain deployments',
            'Requires coordination across multiple teams and vendors',
            'Staff training may be needed for new infrastructure technologies'
          ]
        },
        services: [
          {
            title: 'Server & Hardware Deployment',
            description: 'Complete server deployment including hardware installation, operating system configuration, application setup, and performance optimization.',
            benefits: ['Rapid deployment', 'Expert configuration', 'Performance optimization']
          },
          {
            title: 'Network Infrastructure Implementation',
            description: 'Comprehensive network deployment including switch/router configuration, security implementation, wireless setup, and connectivity testing.',
            benefits: ['Network reliability', 'Security integration', 'Optimal performance']
          },
          {
            title: 'Storage & Virtualization Setup',
            description: 'Advanced storage deployment and virtualization implementation including SAN/NAS configuration, backup systems, and virtual environment setup.',
            benefits: ['Storage efficiency', 'Data protection', 'Virtualization benefits']
          }
        ],
        relatedServices: ['Infrastructure Design', 'System Integration', 'Performance Tuning', 'Migration Services']
      }
    },
    {
      id: 'operate',
      label: 'Operate & Manage',
      icon: Monitor,
      heroImage: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80',
      content: {
        title: 'Managed Infrastructure Services & Operations',
        subtitle: '24/7 infrastructure monitoring, management, and support for optimal performance and reliability',
        about: {
          description: 'Our managed infrastructure services provide round-the-clock monitoring and management of your IT infrastructure. With 24/7 operations center coverage, proactive monitoring, and rapid issue resolution, we ensure your infrastructure operates at peak performance while you focus on core business activities.',
          keyFeatures: [
            { icon: Clock, title: '24/7 Monitoring', desc: 'Continuous infrastructure monitoring and alerting' },
            { icon: Shield, title: 'Proactive Management', desc: 'Preventive maintenance and optimization' },
            { icon: Zap, title: 'Rapid Response', desc: 'Quick issue resolution and support' },
            { icon: TrendingUp, title: 'Performance Optimization', desc: 'Ongoing performance tuning and improvements' }
          ]
        },
        prosAndCons: {
          pros: [
            '24/7 professional monitoring and infrastructure management',
            'Proactive issue detection and prevention',
            'Reduced internal IT overhead and operational costs',
            'Access to specialized infrastructure expertise',
            'Predictable operational costs with managed service agreements'
          ],
          cons: [
            'Ongoing operational costs for managed services',
            'Dependency on external service provider',
            'May require service provider access to critical systems',
            'Potential communication delays for complex infrastructure issues'
          ]
        },
        services: [
          {
            title: '24/7 Infrastructure Monitoring',
            description: 'Comprehensive monitoring of servers, networks, storage, and applications with real-time alerting, performance tracking, and automated response capabilities.',
            benefits: ['Continuous oversight', 'Proactive alerts', 'Performance tracking']
          },
          {
            title: 'Managed IT Operations',
            description: 'Complete operational management including system administration, patch management, backup monitoring, and infrastructure maintenance.',
            benefits: ['Operational efficiency', 'Reduced downtime', 'Expert management']
          },
          {
            title: 'Performance & Capacity Management',
            description: 'Ongoing performance optimization, capacity planning, resource monitoring, and infrastructure scaling recommendations for optimal efficiency.',
            benefits: ['Optimal performance', 'Capacity optimization', 'Proactive scaling']
          }
        ],
        relatedServices: ['Infrastructure Monitoring', 'Technical Support', 'Backup Services', 'Performance Optimization']
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
                  <XCircle className="w-6 h-6" />
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

export default InfrastructureServicesPage;