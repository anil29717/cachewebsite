import React, { useState, useEffect } from 'react';
import { Shield, Database, Eye, Users, Lock, CheckCircle, ArrowUp } from 'lucide-react';

const PrivacyPolicyPage = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const sections = [
    {
      id: 'overview',
      title: 'Overview',
      icon: Shield,
      content: (
        <>
          <p>
            At DigTech Technology, we are committed to protecting your privacy and ensuring the security of your personal information. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
          <div className="bg-red-50 border-l-4 border-red-500 p-4 my-4">
            <strong>Important Notice:</strong> By using our services, you consent to the collection and use of information in accordance with this policy. We encourage you to read this policy carefully.
          </div>
        </>
      )
    },
    {
      id: 'information-collection',
      title: 'Information We Collect',
      icon: Database,
      content: (
        <>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Personal Information</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Name and contact information</li>
                <li>Email addresses and phone numbers</li>
                <li>Billing and payment information</li>
                <li>Account credentials</li>
                <li>Communication preferences</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Technical Information</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>IP addresses and device identifiers</li>
                <li>Browser type and version</li>
                <li>Operating system information</li>
                <li>Usage data and analytics</li>
                <li>Cookies and tracking data</li>
              </ul>
            </div>
          </div>
        </>
      )
    },
    {
      id: 'usage',
      title: 'How We Use Information',
      icon: Eye,
      content: (
        <>
          <p>
            We use the collected information for various purposes, including but not limited to:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
            <li>Service Delivery: Provide services, process transactions, customer support, account management</li>
            <li>Communication: Send updates, marketing materials, security alerts, policy changes</li>
            <li>Improvement: Analyze usage patterns, enhance user experience, develop new features, quality assurance</li>
          </ul>
        </>
      )
    },
    {
      id: 'sharing',
      title: 'Information Sharing',
      icon: Users,
      content: (
        <>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
            <li>Service providers who assist in our operations</li>
            <li>Legal compliance and law enforcement requests</li>
            <li>Business transfers or mergers</li>
            <li>Protection of rights and safety</li>
          </ul>
        </>
      )
    },
    {
      id: 'security',
      title: 'Data Security',
      icon: Lock,
      content: (
        <>
          <p>
            We implement comprehensive security measures to protect your personal information:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
            <li>Encryption: SSL/TLS encryption for data in transit</li>
            <li>Access Control: Restricted access to authorized personnel</li>
            <li>Secure Storage: Encrypted databases and secure servers</li>
            <li>Monitoring: 24/7 security monitoring and alerts</li>
          </ul>
        </>
      )
    },
    {
      id: 'rights',
      title: 'Your Rights',
      icon: CheckCircle,
      content: (
        <>
          <p>You have several rights regarding your personal information:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
            <li>Access your personal data</li>
            <li>Correct inaccurate information</li>
            <li>Request data deletion</li>
            <li>Data portability</li>
            <li>Withdraw consent</li>
            <li>Object to processing</li>
          </ul>
        </>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-28 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <Shield className="mx-auto h-12 w-12 text-red-600 mb-4" />
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-gray-600">Your privacy is our priority. Last updated: January 15, 2025</p>
      </div>

      {/* Sections */}
      <div className="max-w-4xl mx-auto space-y-12">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <section key={section.id} id={section.id}>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-red-50 p-2 rounded">
                  <Icon className="h-5 w-5 text-red-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">{section.title}</h2>
              </div>
              <div className="text-gray-700 leading-relaxed prose max-w-none">{section.content}</div>
            </section>
          );
        })}
      </div>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-colors"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};

export default PrivacyPolicyPage;
