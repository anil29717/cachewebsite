import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Users, Target, TrendingUp, Lightbulb, Search, BarChart,
  CheckCircle, XCircle, Star, AlertTriangle, ArrowRight, 
  Clock, DollarSign, Globe, Zap, Settings, Database,
  FileText, Monitor, Network, Cpu, Building, 
  Briefcase, PieChart, LineChart, Activity, MapPin
} from 'lucide-react';

const ConsultingServicesPage = () => {

    useEffect(() => {
          window.scrollTo(0, 0); // scroll to top when page loads
        }, []);
      
        
  const [activeTab, setActiveTab] = useState('audit');
  const [animatedText, setAnimatedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);

  const navigate = useNavigate();

  // Hero section animated texts
  const heroTexts = [
    'Transform Your Business with Strategic Consulting',
    'Drive Innovation and Growth Through Expert Guidance',
    'Your Trusted Partner in Digital Transformation'
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
      heroImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      content: {
        title: 'Business Assessment & Strategic Analysis',
        subtitle: 'Comprehensive evaluation of your business processes, technology landscape, and market position',
        about: {
          description: 'Our business audit services provide thorough assessment of your organizational capabilities, operational efficiency, and strategic positioning. We conduct comprehensive analysis of your business processes, technology infrastructure, market opportunities, and competitive landscape to identify areas for improvement and growth potential.',
          keyFeatures: [
            { icon: Search, title: 'Process Analysis', desc: 'Comprehensive business process evaluation' },
            { icon: BarChart, title: 'Performance Assessment', desc: 'Detailed performance metrics analysis' },
            { icon: Target, title: 'Strategic Review', desc: 'Strategic positioning and market analysis' },
            { icon: FileText, title: 'Compliance Audit', desc: 'Regulatory and standards compliance review' }
          ]
        },
        prosAndCons: {
          pros: [
            'Identifies operational inefficiencies and cost-saving opportunities',
            'Provides objective assessment of business performance',
            'Uncovers hidden risks and compliance gaps',
            'Delivers actionable recommendations for improvement',
            'Establishes baseline for transformation initiatives'
          ],
          cons: [
            'Assessment process may disrupt normal operations',
            'Requires access to sensitive business information',
            'May reveal systemic issues requiring significant investment',
            'Success depends on leadership commitment to change'
          ]
        },
        services: [
          {
            title: 'Business Process Assessment',
            description: 'Comprehensive evaluation of business processes including workflow analysis, efficiency assessment, automation opportunities, and process optimization recommendations.',
            benefits: ['Process optimization', 'Efficiency improvement', 'Cost reduction']
          },
          {
            title: 'Technology Landscape Review',
            description: 'Detailed analysis of technology infrastructure, digital capabilities, system integration, and technology roadmap development for business enablement.',
            benefits: ['Technology alignment', 'Infrastructure optimization', 'Digital readiness']
          },
          {
            title: 'Market & Competitive Analysis',
            description: 'Strategic market analysis including competitive positioning, market opportunities, customer insights, and growth potential assessment.',
            benefits: ['Market insights', 'Competitive advantage', 'Growth opportunities']
          }
        ],
        relatedServices: ['Strategic Planning', 'Digital Transformation', 'Process Optimization', 'Technology Assessment']
      }
    },
    {
      id: 'consult',
      label: 'Consult',
      icon: Users,
      heroImage: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      content: {
        title: 'Strategic Business Consulting & Advisory',
        subtitle: 'Expert guidance for strategic planning, organizational development, and business transformation',
        about: {
          description: 'Our strategic consulting services help organizations navigate complex business challenges and capitalize on growth opportunities. We provide expert guidance in strategic planning, organizational development, change management, and business transformation to drive sustainable success and competitive advantage.',
          keyFeatures: [
            { icon: Target, title: 'Strategic Planning', desc: 'Comprehensive strategy development and execution' },
            { icon: Users, title: 'Organizational Development', desc: 'Leadership and team capability enhancement' },
            { icon: TrendingUp, title: 'Growth Strategy', desc: 'Market expansion and growth initiatives' },
            { icon: Lightbulb, title: 'Innovation Advisory', desc: 'Innovation strategy and culture development' }
          ]
        },
        prosAndCons: {
          pros: [
            'Access to specialized expertise and industry insights',
            'Objective perspective on business challenges and opportunities',
            'Accelerated strategy development and implementation',
            'Enhanced organizational capabilities and leadership',
            'Proven methodologies and best practices application'
          ],
          cons: [
            'Requires significant investment in consulting engagement',
            'Success depends on organizational commitment and culture',
            'May create dependency on external expertise',
            'Implementation challenges may arise without proper change management'
          ]
        },
        services: [
          {
            title: 'Strategic Planning & Execution',
            description: 'Comprehensive strategic planning including vision development, strategic objective setting, implementation roadmaps, and performance measurement frameworks.',
            benefits: ['Clear direction', 'Aligned execution', 'Performance tracking']
          },
          {
            title: 'Digital Transformation Strategy',
            description: 'End-to-end digital transformation consulting including digital strategy development, technology roadmaps, organizational change, and capability building.',
            benefits: ['Digital enablement', 'Competitive advantage', 'Innovation acceleration']
          },
          {
            title: 'Change Management & Organizational Development',
            description: 'Comprehensive change management services including stakeholder engagement, communication strategies, training programs, and culture transformation.',
            benefits: ['Smooth transitions', 'Employee engagement', 'Culture alignment']
          }
        ],
        relatedServices: ['Business Analysis', 'Project Management', 'Training & Development', 'Performance Management']
      }
    },
    {
      id: 'design',
      label: 'Design',
      icon: Lightbulb,
      heroImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2125&q=80',
      content: {
        title: 'Solution Design & Business Architecture',
        subtitle: 'Custom business solutions designed for optimal performance and sustainable growth',
        about: {
          description: 'Our solution design services create comprehensive, scalable business architectures tailored to your specific requirements. We design innovative solutions that optimize business processes, enhance operational efficiency, and support long-term strategic objectives while ensuring alignment with industry best practices.',
          keyFeatures: [
            { icon: Building, title: 'Business Architecture', desc: 'Comprehensive business model design' },
            { icon: Network, title: 'Process Design', desc: 'Optimized workflow and process architecture' },
            { icon: Database, title: 'Data Architecture', desc: 'Strategic data management and analytics design' },
            { icon: Zap, title: 'Innovation Framework', desc: 'Innovation processes and culture design' }
          ]
        },
        prosAndCons: {
          pros: [
            'Customized solutions aligned with business objectives',
            'Scalable architecture supporting future growth',
            'Integration of industry best practices and innovations',
            'Reduced operational complexity through optimized design',
            'Enhanced competitive positioning through differentiation'
          ],
          cons: [
            'Design process requires extensive stakeholder involvement',
            'Custom solutions may require specialized implementation skills',
            'Higher upfront investment compared to standard solutions',
            'Timeline dependencies on organizational decision-making'
          ]
        },
        services: [
          {
            title: 'Business Model Innovation',
            description: 'Development of innovative business models including value proposition design, revenue model optimization, customer experience design, and ecosystem development.',
            benefits: ['Revenue growth', 'Market differentiation', 'Customer value']
          },
          {
            title: 'Operating Model Design',
            description: 'Comprehensive operating model development including organizational structure, governance frameworks, process architecture, and performance management systems.',
            benefits: ['Operational excellence', 'Efficiency gains', 'Governance clarity']
          },
          {
            title: 'Digital Solution Architecture',
            description: 'End-to-end digital solution design including technology architecture, data strategy, user experience design, and integration frameworks.',
            benefits: ['Digital capabilities', 'User satisfaction', 'System integration']
          }
        ],
        relatedServices: ['Technology Architecture', 'Process Optimization', 'User Experience Design', 'Data Strategy']
      }
    },
    {
      id: 'build',
      label: 'Build',
      icon: Settings,
      heroImage: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80',
      content: {
        title: 'Solution Implementation & Program Delivery',
        subtitle: 'End-to-end implementation of business solutions with comprehensive project management',
        about: {
          description: 'Our implementation services provide complete solution delivery from initial setup through full operational status. We manage every aspect of solution deployment while ensuring minimal business disruption, stakeholder alignment, and successful adoption throughout the organization.',
          keyFeatures: [
            { icon: Settings, title: 'Program Management', desc: 'Comprehensive project and program delivery' },
            { icon: Users, title: 'Team Development', desc: 'Capability building and skills transfer' },
            { icon: Monitor, title: 'Implementation Oversight', desc: 'Quality assurance and progress monitoring' },
            { icon: Zap, title: 'Change Management', desc: 'Organizational change and adoption support' }
          ]
        },
        prosAndCons: {
          pros: [
            'Professional implementation with proven methodologies',
            'Comprehensive project management and risk mitigation',
            'Knowledge transfer and capability building included',
            'Minimal business disruption through careful planning',
            'Ongoing support during transition period'
          ],
          cons: [
            'Implementation timeline depends on organizational readiness',
            'May require temporary resources and budget allocation',
            'Success depends on stakeholder engagement and commitment',
            'Post-implementation optimization may be required'
          ]
        },
        services: [
          {
            title: 'Program & Project Management',
            description: 'Comprehensive program management including project planning, resource coordination, risk management, stakeholder communication, and delivery oversight.',
            benefits: ['On-time delivery', 'Budget control', 'Risk mitigation']
          },
          {
            title: 'Technology Implementation',
            description: 'End-to-end technology solution implementation including system deployment, integration, testing, training, and go-live support.',
            benefits: ['System reliability', 'User adoption', 'Technical excellence']
          },
          {
            title: 'Process Implementation & Training',
            description: 'Business process implementation including workflow deployment, user training, documentation, performance monitoring, and continuous improvement.',
            benefits: ['Process adoption', 'User competency', 'Performance improvement']
          }
        ],
        relatedServices: ['Project Management', 'Training Services', 'Quality Assurance', 'Technical Support']
      }
    },
    {
      id: 'operate',
      label: 'Operate & Manage',
      icon: Monitor,
      heroImage: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80',
      content: {
        title: 'Managed Services & Ongoing Support',
        subtitle: 'Continuous business support, performance optimization, and strategic guidance',
        about: {
          description: 'Our managed services provide ongoing support and optimization for your business operations. With continuous monitoring, performance analysis, and strategic guidance, we ensure your organization maintains peak performance while adapting to changing market conditions and business requirements.',
          keyFeatures: [
            { icon: Clock, title: 'Continuous Support', desc: '24/7 business operation support and monitoring' },
            { icon: BarChart, title: 'Performance Analytics', desc: 'Ongoing performance measurement and reporting' },
            { icon: TrendingUp, title: 'Optimization Services', desc: 'Continuous improvement and optimization' },
            { icon: Briefcase, title: 'Strategic Advisory', desc: 'Ongoing strategic guidance and consulting' }
          ]
        },
        prosAndCons: {
          pros: [
            'Continuous professional support and expertise access',
            'Proactive issue identification and resolution',
            'Ongoing optimization and performance improvement',
            'Predictable operational costs with service agreements',
            'Access to latest industry insights and best practices'
          ],
          cons: [
            'Ongoing operational costs for managed services',
            'Potential dependency on external service provider',
            'May require integration with internal teams and processes',
            'Service level agreements need careful definition and monitoring'
          ]
        },
        services: [
          {
            title: 'Business Operations Support',
            description: 'Comprehensive operational support including process monitoring, performance analysis, issue resolution, and continuous improvement initiatives.',
            benefits: ['Operational stability', 'Performance optimization', 'Issue resolution']
          },
          {
            title: 'Strategic Advisory & Planning',
            description: 'Ongoing strategic guidance including market analysis, strategic planning support, opportunity identification, and executive advisory services.',
            benefits: ['Strategic direction', 'Market insights', 'Executive support']
          },
          {
            title: 'Performance Management & Analytics',
            description: 'Comprehensive performance management including KPI monitoring, analytics and reporting, benchmarking, and improvement recommendations.',
            benefits: ['Performance visibility', 'Data-driven decisions', 'Competitive benchmarking']
          }
        ],
        relatedServices: ['Business Intelligence', 'Performance Consulting', 'Strategic Planning', 'Operations Management']
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

export default ConsultingServicesPage;