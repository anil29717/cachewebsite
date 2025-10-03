import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Brain, Database, BarChart, Cpu, TrendingUp, Users,
  CheckCircle, XCircle, DollarSign, Target,
  Clock, Star, ArrowRight, FileText, Shield,
  Monitor, Settings, Zap, Eye, AlertTriangle,
  Bot, ChartBar, Layers, Search, Lightbulb,
  Code, Sparkles, PieChart, Smartphone, Palette
} from 'lucide-react';

const AIDataServicesPage = () => {
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
      id: 'generative-ai',
      label: 'Generative AI',
      icon: Sparkles,
      title: 'What We Generate with AI',
      subtitle: 'Advanced generative AI solutions for content creation, automation, and intelligent business processes',
      description: 'Our generative AI services harness the power of large language models, computer vision, and creative AI to transform how your business creates content, automates processes, and engages with customers. From chatbots and content generation to code automation and creative workflows, we implement cutting-edge AI solutions that drive innovation and efficiency.',
      keyFeatures: [
        { icon: Bot, title: 'AI Chatbots & Assistants', desc: 'Intelligent conversational AI for customer service and support' },
        { icon: Code, title: 'Code Generation', desc: 'Automated code generation and development assistance' },
        { icon: Lightbulb, title: 'Content Creation', desc: 'AI-powered content generation for marketing and communications' },
        { icon: Zap, title: 'Process Automation', desc: 'Intelligent workflow automation and decision making' }
      ]
    },
    {
      id: 'data-analytics',
      label: 'Data Analytics',
      icon: PieChart,
      title: 'What We Analyze',
      subtitle: 'Comprehensive data analytics solutions for business intelligence, predictive modeling, and data-driven insights',
      description: 'Our data analytics services transform raw data into actionable business insights through advanced analytics, machine learning, and business intelligence solutions. We help organizations make data-driven decisions, predict trends, optimize operations, and discover new opportunities through comprehensive analytics platforms and custom analytical models.',
      keyFeatures: [
        { icon: BarChart, title: 'Business Intelligence', desc: 'Interactive dashboards and real-time reporting solutions' },
        { icon: TrendingUp, title: 'Predictive Analytics', desc: 'Machine learning models for forecasting and trend analysis' },
        { icon: Database, title: 'Data Mining', desc: 'Advanced data exploration and pattern recognition' },
        { icon: Eye, title: 'Data Visualization', desc: 'Interactive charts, graphs, and visual analytics' }
      ]
    },
    {
      id: 'application-build',
      label: 'Application Build',
      icon: Smartphone,
      title: 'What We Build',
      subtitle: 'Custom AI-powered applications and intelligent software solutions for modern business needs',
      description: 'Our application build services create intelligent, AI-enhanced applications that solve complex business problems. From mobile apps with ML capabilities to web platforms with integrated AI features, we develop scalable, user-friendly applications that leverage artificial intelligence to provide superior user experiences and business value.',
      keyFeatures: [
        { icon: Smartphone, title: 'Mobile AI Apps', desc: 'Intelligent mobile applications with AI capabilities' },
        { icon: Brain, title: 'AI-Powered Web Apps', desc: 'Web applications with integrated machine learning features' },
        { icon: Bot, title: 'Intelligent Automation', desc: 'Process automation applications with AI decision making' },
        { icon: Target, title: 'Custom AI Solutions', desc: 'Tailored applications for specific business requirements' }
      ]
    },

    {
      id: 'design',
      label: 'Design',
      icon: Palette,
      title: 'What We Design',
      subtitle: 'Strategic AI and data architecture design for scalable, future-ready intelligent systems',
      description: 'Our design services create comprehensive blueprints for AI and data ecosystems. We design scalable data architectures, AI platform frameworks, and intelligent system architectures that support your current needs while providing flexibility for future growth and technological advancement.',
      keyFeatures: [
        { icon: Layers, title: 'Data Architecture', desc: 'Scalable data lake, warehouse, and analytics architecture' },
        { icon: Brain, title: 'AI Platform Design', desc: 'Machine learning operations and AI platform architecture' },
        { icon: Target, title: 'Solution Architecture', desc: 'End-to-end intelligent system architecture design' },
        { icon: Cpu, title: 'Cloud AI Design', desc: 'Cloud-native AI and data platform architecture' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div
        className="relative py-24 bg-cover bg-center"
        style={{ backgroundImage: "url('/servicesimages/aiimage.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-black opacity-70 bg-opacity-60"></div>

        {/* Text */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
          <Brain className="w-20 h-20 mb-6 text-white opacity-90" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            AI & Data Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl">
            Transform your business with intelligent AI solutions and data-driven
            insights that drive innovation and competitive advantage
          </p>
          <p className="text-lg text-white">
            {animatedText}
            <span className="animate-pulse">|</span>
          </p>
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
            Ready to Transform Your Business with AI & Data?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Discover how our comprehensive AI and data services can drive innovation and growth for your organization
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your AI Journey
            </button>
            <button
              onClick={() => navigate('/portfolio')}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
            >
              View Our Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIDataServicesPage;