import React, { useState, useEffect, use } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FileText,
  Shield,
  Users,
  Globe,
  Building,
  Award,
  Settings,
  AlertTriangle,
  CheckCircle,
  ArrowUp,
  Menu,
  X,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Target,
  Eye,
  Briefcase,
  Star,
  Network,
  Lock
} from 'lucide-react';

const TermsOfUsePage = () => {
  const [activeSection, setActiveSection] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const certifications = [
    {
      name: 'ISO 9001:2015',
      logo: '/iso9001.jpeg',
      description: 'Quality Management System'
    },
    {
      name: 'ISO 27001:2022',
      logo: '/iso27001.png',
      description: 'Information Security Management'
    },
    {
      name: 'CMMI Level 5',
      logo: '/cmmilevel.jpeg',
      description: 'Capability Maturity Model Integration'
    },
    {
      name: 'MSME Registered',
      logo: '/msme.jpeg',
      description: 'Micro, Small & Medium Enterprises'
    },
    {
      name: 'NSIC Registered',
      logo: '/nisc.png',
      description: 'National Small Industries Corporation'
    },
    {
      name: 'WEConnect International',
      logo: '/weconnect.jpeg',
      description: 'Women-Owned Business Certification'
    }
  ];

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
    { id: 'about', title: 'About Cache DigTech', icon: Building },
    { id: 'acceptance', title: 'Acceptance of Terms', icon: CheckCircle },
    // { id: 'services', title: 'Our Services', icon: Settings },
    { id: 'user-obligations', title: 'User Obligations', icon: Users },
    { id: 'intellectual-property', title: 'Intellectual Property', icon: Shield },
    // { id: 'limitation', title: 'Limitation of Liability', icon: AlertTriangle },
    // { id: 'modifications', title: 'Modifications', icon: FileText },
    // { id: 'contact', title: 'Contact Information', icon: Mail }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      {/* Header */}


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-28">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Sidebar Navigation - Desktop */}

          {/* Main Content */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-xl shadow-lg border border-red-100 overflow-hidden">
              {/* Hero Section */}
              <div className="bg-gradient-to-r from-red-500 to-red-600 px-8 py-12 text-white">
                <div className="flex items-center space-x-4 mb-4">
                  <FileText className="h-12 w-12" />
                  <div>
                    <h1 className="text-4xl font-bold">Terms of Use</h1>
                    <p className="text-red-100 mt-2">Cache DigTech Technology Solutions</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6 text-red-100">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>Effective Date: January 15, 2025</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="h-4 w-4" />
                    <span>ISO 9001:2015 Certified</span>
                  </div>
                </div>
              </div>

              {/* Content Sections */}
              <div className="px-8 py-8 space-y-12">
                {/* About Cache DigTech */}
                <section id="about">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-red-100 p-3 rounded-lg">
                      <Building className="h-6 w-6 text-red-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">About Cache DigTech</h2>
                  </div>

                  {/* Company Overview */}
                  <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-lg p-8 mb-8">
                    <p className="text-gray-700 leading-relaxed text-lg mb-6">
                      With 34+ years of experience as a leading system integration company in India's IT landscape, Cache DigTech specializes in Technology Integration, Digital Transformation, Infrastructure, and IT Consulting Solutions.
                    </p>

                    {/* Key Stats */}
                    <div className="grid md:grid-cols-4 gap-6 mb-8">
                      <div className="text-center">
                        <div className="bg-red-500 text-white p-4 rounded-lg mb-2">
                          <Award className="h-8 w-8 mx-auto" />
                        </div>
                        <p className="font-bold text-2xl text-red-600">34+</p>
                        <p className="text-sm text-gray-600">Years Experience</p>
                      </div>
                      <div className="text-center">
                        <div className="bg-red-500 text-white p-4 rounded-lg mb-2">
                          <Users className="h-8 w-8 mx-auto" />
                        </div>
                        <p className="font-bold text-2xl text-red-600">500+</p>
                        <p className="text-sm text-gray-600">Technocrats</p>
                      </div>
                      <div className="text-center">
                        <div className="bg-red-500 text-white p-4 rounded-lg mb-2">
                          <MapPin className="h-8 w-8 mx-auto" />
                        </div>
                        <p className="font-bold text-2xl text-red-600">750+</p>
                        <p className="text-sm text-gray-600">Support Locations</p>
                      </div>
                      <div className="text-center">
                        <div className="bg-red-500 text-white p-4 rounded-lg mb-2">
                          <Star className="h-8 w-8 mx-auto" />
                        </div>
                        <p className="font-bold text-2xl text-red-600">500+</p>
                        <p className="text-sm text-gray-600">Years Combined</p>
                      </div>
                    </div>
                  </div>

                  {/* Vision & Mission */}
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-white border-2 border-red-100 rounded-lg p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <Eye className="h-6 w-6 text-red-600" />
                        <h3 className="text-xl font-semibold text-gray-900">Our Vision</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        As a technology enabler, our vision is to build empowered and digitally resilient ecosystems that help our partners, vendors and customers become well-oiled machines and serve economies to create meaningful impact across all cross-cutting domains.
                      </p>
                    </div>
                    <div className="bg-white border-2 border-red-100 rounded-lg p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <Target className="h-6 w-6 text-red-600" />
                        <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        To provide innovative technology solutions and services that enable both our customers and teams to thrive, enterprises to flourish, and individuals to lead more fulfilling lives through cutting-edge technologies and strategic partnerships.
                      </p>
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6 text-center">
                      Quality Assurance & Compliance
                    </h3>

                    {/* Logo Display */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mb-8">
                      {certifications.map((cert, index) => (
                        <div key={index} className="flex flex-col items-center justify-center bg-white p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                          <div className="w-16 h-16 sm:w-20 sm:h-20 mb-2 bg-gray-100 rounded-lg flex items-center justify-center">
                            <img
                              src={cert.logo}
                              alt={cert.name}
                              className="max-w-full max-h-full object-contain"
                            />
                          </div>
                          <span className="text-xs sm:text-sm font-medium text-gray-700 text-center leading-tight">
                            {cert.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Acceptance of Terms */}
                <section id="acceptance">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-red-100 p-3 rounded-lg">
                      <CheckCircle className="h-6 w-6 text-red-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Acceptance of Terms</h2>
                  </div>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      By accessing and using Cache DigTech's services, website, or any related platforms, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use and all applicable laws and regulations.
                    </p>
                    <div className="bg-red-50 border-l-4 border-red-500 p-6">
                      <div className="flex items-start space-x-3">
                        <AlertTriangle className="h-6 w-6 text-red-600 mt-1" />
                        <div>
                          <h4 className="text-lg font-semibold text-red-800 mb-2">Important</h4>
                          <p className="text-red-700">
                            If you do not agree with any part of these terms, you must not use our services or access our platforms.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Our Services */}


                {/* User Obligations */}
                <section id="user-obligations">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-red-100 p-3 rounded-lg">
                      <Users className="h-6 w-6 text-red-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">User Obligations</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    By using our services, you agree to the following obligations and responsibilities:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-gray-900">Permitted Use</h3>
                      {[
                        'Use services for legitimate business purposes',
                        'Comply with all applicable laws and regulations',
                        'Maintain confidentiality of access credentials',
                        'Provide accurate and complete information'
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-gray-900">Prohibited Activities</h3>
                      {[
                        'Unauthorized access to systems or data',
                        'Interference with service operations',
                        'Violation of intellectual property rights',
                        'Use for illegal or harmful activities'
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg">
                          <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Intellectual Property */}
                <section id="intellectual-property">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-red-100 p-3 rounded-lg">
                      <Shield className="h-6 w-6 text-red-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Intellectual Property Rights</h2>
                  </div>
                  <div className="space-y-6">
                    <p className="text-gray-700 leading-relaxed">
                      All intellectual property rights in our services, including but not limited to software, documentation, trademarks, and proprietary methodologies, remain the exclusive property of Cache DigTech or our licensors.
                    </p>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Intellectual Property Includes</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        {[
                          'Proprietary software solutions',
                          'Technical documentation',
                          'Training materials',
                          'System architectures',
                          'Best practice methodologies',
                          'Brand assets and trademarks'
                        ].map((item, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Lock className="h-4 w-4 text-red-500" />
                            <span className="text-gray-700 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                {/* Limitation of Liability */}


                {/* Modifications */}


                {/* Contact Information */}

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

export default TermsOfUsePage;