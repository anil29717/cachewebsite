import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Shield, 
  Eye, 
  Lock, 
  Database, 
  Users, 
  Mail, 
  Phone, 
  Globe, 
  Calendar,
  CheckCircle,
  AlertTriangle,
  ArrowUp,
  Menu,
  X
} from 'lucide-react';

const PrivacyPolicyPage = () => {
  const [activeSection, setActiveSection] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sections = [
    { id: 'overview', title: 'Overview', icon: Shield },
    { id: 'information-collection', title: 'Information We Collect', icon: Database },
    { id: 'usage', title: 'How We Use Information', icon: Eye },
    { id: 'sharing', title: 'Information Sharing', icon: Users },
    { id: 'security', title: 'Data Security', icon: Lock },
    // { id: 'cookies', title: 'Cookies & Tracking', icon: Globe },
    { id: 'rights', title: 'Your Rights', icon: CheckCircle },
    // { id: 'contact', title: 'Contact Us', icon: Mail }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white pt-28">
      {/* Header */}
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Sidebar Navigation - Desktop */}
          {/* <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white rounded-xl shadow-lg border border-red-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contents</h3>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeSection === section.id
                          ? 'bg-red-100 text-red-700 border-l-4 border-red-500'
                          : 'text-gray-600 hover:text-red-600 hover:bg-red-50'
                      }`}
                    >
                      <section.icon className="h-4 w-4" />
                      <span>{section.title}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div> */}

          {/* Main Content */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-xl shadow-lg border border-red-100 overflow-hidden">
              {/* Hero Section */}
              <div className="bg-gradient-to-r from-red-500 to-red-600 px-8 py-12 text-white">
                <div className="flex items-center space-x-4 mb-4">
                  <Shield className="h-12 w-12" />
                  <div>
                    <h1 className="text-4xl font-bold">Privacy Policy</h1>
                    <p className="text-red-100 mt-2">Your privacy is our priority</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6 text-red-100">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>Last updated: January 15, 2025</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>GDPR Compliant</span>
                  </div>
                </div>
              </div>

              {/* Content Sections */}
              <div className="px-8 py-8 space-y-12">
                {/* Overview */}
                <section id="overview">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-red-100 p-3 rounded-lg">
                      <Shield className="h-6 w-6 text-red-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Overview</h2>
                  </div>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed">
                      At DigTech Technology, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                    </p>
                    <div className="bg-red-50 border-l-4 border-red-500 p-6 my-6">
                      <div className="flex items-start space-x-3">
                        <AlertTriangle className="h-6 w-6 text-red-600 mt-1" />
                        <div>
                          <h4 className="text-lg font-semibold text-red-800 mb-2">Important Notice</h4>
                          <p className="text-red-700">
                            By using our services, you consent to the collection and use of information in accordance with this policy. We encourage you to read this policy carefully.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Information Collection */}
                <section id="information-collection">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-red-100 p-3 rounded-lg">
                      <Database className="h-6 w-6 text-red-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Information We Collect</h2>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Name and contact information</li>
                        <li>• Email addresses and phone numbers</li>
                        <li>• Billing and payment information</li>
                        <li>• Account credentials</li>
                        <li>• Communication preferences</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Information</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• IP addresses and device identifiers</li>
                        <li>• Browser type and version</li>
                        <li>• Operating system information</li>
                        <li>• Usage data and analytics</li>
                        <li>• Cookies and tracking data</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Usage */}
                <section id="usage">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-red-100 p-3 rounded-lg">
                      <Eye className="h-6 w-6 text-red-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">How We Use Information</h2>
                  </div>
                  <div className="space-y-6">
                    <p className="text-gray-700 leading-relaxed">
                      We use the collected information for various purposes, including but not limited to:
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                      {[
                        { title: 'Service Delivery', items: ['Provide our services', 'Process transactions', 'Customer support', 'Account management'] },
                        { title: 'Communication', items: ['Send updates', 'Marketing materials', 'Security alerts', 'Policy changes'] },
                        { title: 'Improvement', items: ['Analyze usage patterns', 'Enhance user experience', 'Develop new features', 'Quality assurance'] }
                      ].map((category, index) => (
                        <div key={index} className="bg-white border-2 border-red-100 rounded-lg p-6">
                          <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h3>
                          <ul className="space-y-2">
                            {category.items.map((item, idx) => (
                              <li key={idx} className="flex items-center space-x-2">
                                <CheckCircle className="h-4 w-4 text-red-500" />
                                <span className="text-gray-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Sharing */}
                <section id="sharing">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-red-100 p-3 rounded-lg">
                      <Users className="h-6 w-6 text-red-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Information Sharing</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                  </p>
                  <div className="space-y-4">
                    {[
                      'Service providers who assist in our operations',
                      'Legal compliance and law enforcement requests',
                      'Business transfers or mergers',
                      'Protection of rights and safety'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                        <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Security */}
                <section id="security">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-red-100 p-3 rounded-lg">
                      <Lock className="h-6 w-6 text-red-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Data Security</h2>
                  </div>
                  <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-lg p-8">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      We implement comprehensive security measures to protect your personal information:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        { icon: Lock, title: 'Encryption', desc: 'SSL/TLS encryption for data in transit' },
                        { icon: Shield, title: 'Access Control', desc: 'Restricted access to authorized personnel' },
                        { icon: Database, title: 'Secure Storage', desc: 'Encrypted databases and secure servers' },
                        { icon: Eye, title: 'Monitoring', desc: '24/7 security monitoring and alerts' }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="bg-red-500 p-2 rounded-lg">
                            <item.icon className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{item.title}</h4>
                            <p className="text-gray-600 text-sm">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Cookies */}
                {/* <section id="cookies">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-red-100 p-3 rounded-lg">
                      <Globe className="h-6 w-6 text-red-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Cookies & Tracking</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { type: 'Essential', color: 'red', desc: 'Required for website functionality' },
                      { type: 'Analytics', color: 'yellow', desc: 'Help us understand usage patterns' },
                      { type: 'Marketing', color: 'blue', desc: 'Personalized advertising content' }
                    ].map((cookie, index) => (
                      <div key={index} className={`bg-${cookie.color}-50 border border-${cookie.color}-200 rounded-lg p-4`}>
                        <h4 className={`font-semibold text-${cookie.color}-800 mb-2`}>{cookie.type} Cookies</h4>
                        <p className={`text-${cookie.color}-700 text-sm`}>{cookie.desc}</p>
                      </div>
                    ))}
                  </div>
                </section> */}

                {/* Rights */}
                <section id="rights">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-red-100 p-3 rounded-lg">
                      <CheckCircle className="h-6 w-6 text-red-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Your Rights</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    You have several rights regarding your personal information:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      'Access your personal data',
                      'Correct inaccurate information',
                      'Request data deletion',
                      'Data portability',
                      'Withdraw consent',
                      'Object to processing'
                    ].map((right, index) => (
                      <div key={index} className="flex items-center space-x-3 p-4 bg-white border-2 border-red-100 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-red-500" />
                        <span className="text-gray-700 font-medium">{right}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Contact */}
                {/* <section id="contact">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-red-100 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-red-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
                  </div>
                  <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-lg p-8 text-white">
                    <p className="mb-6">
                      If you have any questions about this Privacy Policy or our data practices, please contact us:
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5" />
                        <div>
                          <p className="font-semibold">Email</p>
                          <p className="text-red-100">privacy@digtech.com</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5" />
                        <div>
                          <p className="font-semibold">Phone</p>
                          <p className="text-red-100">+1 (555) 123-4567</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Globe className="h-5 w-5" />
                        <div>
                          <p className="font-semibold">Website</p>
                          <p className="text-red-100">www.digtech.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition-colors z-50"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default PrivacyPolicyPage;