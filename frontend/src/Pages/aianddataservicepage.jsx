import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Brain, Database, BarChart, Cpu, TrendingUp, Users, 
  CheckCircle, XCircle, DollarSign, Target, 
  Clock, Star, ArrowRight, FileText, Shield,
  Monitor, Settings, Zap, Eye, AlertTriangle,
  Bot, ChartBar, Layers, Search, Lightbulb
} from 'lucide-react';

const AIDataServicesPage = () => {
  const [activeTab, setActiveTab] = useState('audit');
  const [animatedText, setAnimatedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);

  const navigate = useNavigate();

   useEffect(() => {
      window.scrollTo(0, 0); // scroll to top when page loads
    }, []);
  
    
  // Hero section animated texts
  const heroTexts = [
    'Transform Your Business with AI and Data Intelligence',
    'Unlock the Power of Data-Driven Decision Making',
    'Your Partner in AI and Analytics Excellence'
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
      heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      content: {
        title: 'Data & AI Readiness Assessment',
        subtitle: 'Comprehensive evaluation of your data infrastructure, AI capabilities, and analytics maturity',
        about: {
          description: 'Our AI and data audit services provide thorough assessment of your data ecosystem, analytics capabilities, and AI readiness. We evaluate data quality, infrastructure scalability, governance frameworks, and identify opportunities for AI implementation to drive business value and competitive advantage.',
          keyFeatures: [
            { icon: Database, title: 'Data Quality Assessment', desc: 'Comprehensive data quality and governance evaluation' },
            { icon: BarChart, title: 'Analytics Maturity', desc: 'Current analytics capabilities and maturity analysis' },
            { icon: Brain, title: 'AI Readiness Review', desc: 'AI implementation readiness and opportunity assessment' },
            { icon: Shield, title: 'Data Governance Audit', desc: 'Data security, privacy, and compliance evaluation' }
          ]
        },
        prosAndCons: {
          pros: [
            'Identifies data quality issues and improvement opportunities',
            'Reveals untapped potential for AI and analytics initiatives',
            'Provides clear roadmap for data-driven transformation',
            'Ensures compliance with data privacy and governance standards',
            'Helps prioritize AI/ML investments for maximum ROI'
          ],
          cons: [
            'Assessment requires access to sensitive data and systems',
            'May reveal more data quality issues than initially expected',
            'Comprehensive audit can be time-intensive for large datasets',
            'Recommendations may require significant infrastructure changes'
          ]
        },
        services: [
          {
            title: 'Data Quality & Governance Assessment',
            description: 'Comprehensive evaluation of data quality, lineage, governance frameworks, privacy controls, and compliance with regulations like GDPR and CCPA.',
            benefits: ['Data quality improvement', 'Governance framework', 'Compliance assurance']
          },
          {
            title: 'Analytics & BI Maturity Evaluation',
            description: 'Assessment of current analytics capabilities, business intelligence tools, reporting processes, and data visualization maturity across the organization.',
            benefits: ['Analytics optimization', 'BI enhancement', 'Process improvement']
          },
          {
            title: 'AI/ML Readiness & Opportunity Analysis',
            description: 'Evaluation of AI implementation readiness, use case identification, data science capabilities, and machine learning infrastructure assessment.',
            benefits: ['AI strategy development', 'Use case prioritization', 'Technical readiness']
          }
        ],
        relatedServices: ['Data Consulting', 'AI Strategy', 'Analytics Implementation', 'Data Governance']
      }
    },
    {
      id: 'consult',
      label: 'Consult',
      icon: Users,
      heroImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      content: {
        title: 'Strategic AI & Data Consulting',
        subtitle: 'Expert guidance for AI strategy, data transformation, and analytics roadmap development',
        about: {
          description: 'Our AI and data consulting services help organizations develop comprehensive strategies for leveraging artificial intelligence and data analytics. We provide expert guidance in AI implementation, data science strategy, analytics transformation, and building data-driven cultures that drive business innovation.',
          keyFeatures: [
            { icon: Target, title: 'AI Strategy Development', desc: 'Comprehensive AI and ML strategy roadmap' },
            { icon: Database, title: 'Data Strategy Planning', desc: 'Data architecture and governance strategy' },
            { icon: Lightbulb, title: 'Use Case Identification', desc: 'AI/ML use case discovery and prioritization' },
            { icon: Users, title: 'Team Development', desc: 'Data science team building and training' }
          ]
        },
        prosAndCons: {
          pros: [
            'Clear AI and data strategy aligned with business objectives',
            'Expert guidance on latest AI/ML technologies and best practices',
            'Prioritized use cases with defined business value and ROI',
            'Reduced risks through proven methodologies and frameworks',
            'Enhanced organizational data literacy and AI capabilities'
          ],
          cons: [
            'Requires significant executive commitment and cultural change',
            'Strategy implementation may require substantial technology investment',
            'Initial consulting engagement represents upfront costs',
            'Success depends on organizational adoption and change management'
          ]
        },
        services: [
          {
            title: 'AI/ML Strategy & Roadmap Development',
            description: 'Comprehensive AI strategy including use case prioritization, technology selection, implementation roadmap, and success metrics definition.',
            benefits: ['Strategic direction', 'Use case prioritization', 'Implementation roadmap']
          },
          {
            title: 'Data Science & Analytics Strategy',
            description: 'Development of data science capabilities, analytics operating model, tool selection, and team structure recommendations.',
            benefits: ['Analytics maturity', 'Capability building', 'Organizational alignment']
          },
          {
            title: 'Data Transformation & Modernization',
            description: 'Strategic planning for data architecture modernization, cloud migration, real-time analytics, and self-service BI implementation.',
            benefits: ['Modern data architecture', 'Scalable analytics', 'Self-service capabilities']
          }
        ],
        relatedServices: ['Data Assessment', 'AI Implementation', 'Change Management', 'Training Programs']
      }
    },
    {
      id: 'design',
      label: 'Design',
      icon: Layers,
      heroImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2125&q=80',
      content: {
        title: 'AI & Data Architecture Design',
        subtitle: 'Custom data platforms and AI solutions designed for scalability, performance, and business value',
        about: {
          description: 'Our AI and data design services create robust, scalable architectures tailored to your specific requirements. We design comprehensive solutions covering data lakes, AI/ML pipelines, real-time analytics, and intelligent automation that provide optimal performance while supporting future growth and innovation.',
          keyFeatures: [
            { icon: Database, title: 'Data Architecture', desc: 'Scalable data lakes, warehouses, and pipelines' },
            { icon: Brain, title: 'AI/ML Platform Design', desc: 'Machine learning and AI deployment platforms' },
            { icon: BarChart, title: 'Analytics Solutions', desc: 'Real-time analytics and visualization platforms' },
            { icon: Bot, title: 'Automation Design', desc: 'Intelligent process automation and workflows' }
          ]
        },
        prosAndCons: {
          pros: [
            'Custom-designed solutions that fit specific business needs',
            'Scalable architecture that grows with data and AI requirements',
            'Optimized performance for analytics and machine learning workloads',
            'Future-proof design with latest AI and data technologies',
            'Integrated security and governance by design'
          ],
          cons: [
            'Design process requires significant upfront analysis and planning',
            'Custom solutions may be more complex than standard offerings',
            'Higher initial design costs compared to off-the-shelf solutions',
            'May require specialized expertise for implementation and maintenance'
          ]
        },
        services: [
          {
            title: 'Modern Data Platform Design',
            description: 'Comprehensive data architecture design including data lakes, warehouses, ETL/ELT pipelines, and real-time streaming analytics platforms.',
            benefits: ['Scalable data platform', 'Real-time capabilities', 'Performance optimization']
          },
          {
            title: 'AI/ML Platform & MLOps Design',
            description: 'Machine learning platform design including model development, deployment, monitoring, and MLOps workflows for production AI systems.',
            benefits: ['AI platform scalability', 'MLOps automation', 'Model governance']
          },
          {
            title: 'Analytics & Visualization Architecture',
            description: 'Business intelligence and analytics platform design including self-service BI, embedded analytics, and advanced visualization solutions.',
            benefits: ['Self-service analytics', 'Embedded insights', 'User experience optimization']
          }
        ],
        relatedServices: ['Data Implementation', 'AI Development', 'Analytics Solutions', 'Platform Integration']
      }
    },
    {
      id: 'build',
      label: 'Build',
      icon: Cpu,
      heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80',
      content: {
        title: 'AI & Data Solution Implementation',
        subtitle: 'End-to-end development and deployment of AI models, data pipelines, and analytics solutions',
        about: {
          description: 'Our AI and data build services provide complete implementation of data science and AI solutions. From data pipeline development and machine learning model creation to analytics dashboard deployment and AI system integration, we handle every aspect of implementation while ensuring optimal performance and business value.',
          keyFeatures: [
            { icon: Database, title: 'Data Pipeline Development', desc: 'ETL/ELT pipelines and data integration solutions' },
            { icon: Brain, title: 'AI/ML Model Development', desc: 'Custom machine learning and AI model creation' },
            { icon: BarChart, title: 'Analytics Implementation', desc: 'Dashboard, reporting, and visualization development' },
            { icon: Bot, title: 'AI System Integration', desc: 'AI model deployment and system integration' }
          ]
        },
        prosAndCons: {
          pros: [
            'Professional development with best practices and standards',
            'Custom AI/ML models tailored to specific business problems',
            'Scalable data pipelines and analytics solutions',
            'Integration with existing systems and workflows',
            'Comprehensive testing and validation before deployment'
          ],
          cons: [
            'Development timeline depends on solution complexity',
            'May require significant data preparation and cleaning',
            'Custom AI models require ongoing maintenance and retraining',
            'Staff training may be needed for new AI and analytics tools'
          ]
        },
        services: [
          {
            title: 'Data Engineering & Pipeline Development',
            description: 'Development of robust data pipelines, ETL/ELT processes, data integration solutions, and real-time streaming analytics systems.',
            benefits: ['Automated data flows', 'Real-time processing', 'Data quality assurance']
          },
          {
            title: 'AI/ML Model Development & Deployment',
            description: 'Custom machine learning model development, training, validation, deployment, and production monitoring for various AI use cases.',
            benefits: ['Custom AI solutions', 'Production deployment', 'Model performance monitoring']
          },
          {
            title: 'Analytics & BI Solution Development',
            description: 'Development of interactive dashboards, automated reporting, self-service analytics, and embedded intelligence solutions.',
            benefits: ['Interactive dashboards', 'Automated insights', 'Self-service capabilities']
          }
        ],
        relatedServices: ['Data Architecture', 'AI Strategy', 'System Integration', 'Performance Optimization']
      }
    },
    {
      id: 'operate',
      label: 'Operate & Manage',
      icon: Monitor,
      heroImage: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80',
      content: {
        title: 'Managed AI & Data Operations',
        subtitle: '24/7 monitoring, management, and optimization of AI systems, data pipelines, and analytics platforms',
        about: {
          description: 'Our managed AI and data services provide round-the-clock monitoring and management of your data infrastructure and AI systems. With 24/7 operations coverage, proactive monitoring, model performance tracking, and rapid issue resolution, we ensure your AI and analytics solutions operate at peak performance.',
          keyFeatures: [
            { icon: Clock, title: '24/7 System Monitoring', desc: 'Continuous monitoring of data pipelines and AI systems' },
            { icon: TrendingUp, title: 'Model Performance Management', desc: 'AI model monitoring and performance optimization' },
            { icon: Database, title: 'Data Operations', desc: 'Data quality monitoring and pipeline management' },
            { icon: Zap, title: 'Proactive Optimization', desc: 'Performance tuning and system optimization' }
          ]
        },
        prosAndCons: {
          pros: [
            '24/7 professional monitoring of AI and data systems',
            'Proactive model drift detection and retraining',
            'Continuous data quality monitoring and issue resolution',
            'Access to specialized AI/ML and data engineering expertise',
            'Predictable operational costs with managed service agreements'
          ],
          cons: [
            'Ongoing operational costs for managed services',
            'Dependency on external service provider',
            'May require service provider access to sensitive data systems',
            'Potential communication delays for complex AI/data issues'
          ]
        },
        services: [
          {
            title: 'AI/ML Operations & Model Management',
            description: 'Comprehensive MLOps including model monitoring, performance tracking, drift detection, automated retraining, and model lifecycle management.',
            benefits: ['Model reliability', 'Automated monitoring', 'Performance optimization']
          },
          {
            title: 'Data Pipeline & Quality Management',
            description: 'Continuous monitoring of data pipelines, quality assurance, anomaly detection, and automated data validation processes.',
            benefits: ['Data reliability', 'Quality assurance', 'Automated validation']
          },
          {
            title: 'Analytics Platform Operations',
            description: 'Management of analytics platforms, dashboard performance optimization, user support, and system scaling recommendations.',
            benefits: ['Platform reliability', 'User support', 'Performance optimization']
          }
        ],
        relatedServices: ['System Monitoring', 'Performance Optimization', 'Technical Support', 'Data Governance']
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
            <h2 className="text-3xl font-bold mb-4">Unlock Your Data's Potential</h2>
            <p className="text-xl mb-8 opacity-90">
              Transform your business with our expert AI and data {currentTab.label.toLowerCase()} services
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={() => navigate('/contact')} className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contact AI & Data Experts
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

export default AIDataServicesPage;