import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import PrivacyPolicyPage from "../../Pages/PrivacyPolicyPage";
import TermsOfUsePage from "../../Pages/TermsOfUse";

// Modal for Privacy Policy
function PrivacyPolicyModal({ onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm "
      onClick={onClose}
    >
      <div
        className="bg-gray-800 backdrop-blur-lg rounded-lg shadow-lg w-full max-w-2xl mx-4 sm:mx-8 p-0 relative max-h-[80vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex-1 overflow-y-auto ">
          <PrivacyPolicyPage />
        </div>
        <div className="flex justify-end p-4">
          <button
            className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-red-600 hover:text-white transition-colors"
            onClick={onClose}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

// Modal for Terms of Use
function TermsOfUseModal({ onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-gray-800 backdrop-blur-lg rounded-lg shadow-lg w-full max-w-2xl mx-4 sm:mx-8 p-0 relative max-h-[80vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex-1 overflow-y-auto ">
          <TermsOfUsePage />
        </div>
        <div className="flex justify-end p-4">
          <button
            className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-red-600 hover:text-white transition-colors"
            onClick={onClose}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  const navigate = useNavigate();
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  return (
    <div className="bg-black text-white px-6 sm:px-8 py-12 sm:py-16 font-sans relative">
      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto relative md:ml-14">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row relative justify-between items-start mb-12 lg:mb-20 gap-10 lg:gap-0">
          {/* Left: Main Promise */}
          <div className="max-w-md">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-glacial leading-tight">
              Growth is Guaranteed
            </h2>
            <div className="relative">
              <p className="text-xl sm:text-2xl mb-2 font-holiday">
                That's Cache's Promise
              </p>
              {/* Decorative underline */}
              <img src="/footerline.png" className="h-5 sm:h-6" alt="underline" />
            </div>
          </div>

          {/* Right: Navigation Links */}
          <div className="flex flex-col space-y-3 sm:space-y-4 text-base sm:text-lg relative lg:right-20 font-glacial">
            <Link to="/careers" className="hover:text-gray-300 transition-colors cursor-pointer">
              Careers
            </Link>
            <Link to="/about" className="hover:text-gray-300 transition-colors cursor-pointer">
              About
            </Link>
            <Link to="/developerteam" className="hover:text-gray-300 transition-colors cursor-pointer">
              Developers
            </Link>
          </div>
        </div>

        {/* Middle Section - Contact */}
        <div className="mb-12 sm:mb-20 max-w-lg">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 font-glacial">
            Still a Question?
          </h3>
          <p className="text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 text-gray-300 font-glacial">
            We value the opportunity to connect with you. Please submit your
            inquiries and feedback, and our experienced professionals are ready
            to assist you.
          </p>
          <button
            onClick={() => navigate("/contactus")}
            className="bg-pink-100 font-glacial text-black px-10 sm:px-16 py-2 rounded-full text-base sm:text-lg font-medium hover:bg-pink-200 transition-colors cursor-pointer"
          >
            Contact Us
          </button>
        </div>

        {/* Logo + Social Section */}
        <div className="mb-10 sm:mb-12 flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0">
          <div className="flex items-center">
            <img
              src="/cachefootercut.jpg"
              alt="Cache Digitech Logo"
              className="h-20 sm:h-28 w-auto"
            />
          </div>
          <div className="flex flex-col items-center sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0">
            <span className="text-base sm:text-lg">Follow us</span>
            <div className="flex space-x-4">
              {[
                {
                  d: "M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.09 9.09 0 01-2.88 1.1A4.52 4.52 0 0016.11 0c-2.63 0-4.66 2.56-4.07 5.09A12.94 12.94 0 013 1.64a4.52 4.52 0 001.39 6.05 4.48 4.48 0 01-2.05-.57v.06c0 2.22 1.57 4.07 3.67 4.49a4.52 4.52 0 01-2.04.08 4.52 4.52 0 004.22 3.14A9.07 9.07 0 012 19.54 12.94 12.94 0 008.29 21c7.55 0 11.68-6.29 11.68-11.75 0-.18 0-.35-.01-.53A8.18 8.18 0 0023 3z",
                  href: "https://x.com/i/flow/login?redirect_after_login=%2Fdigitech_cache",
                },
                {
                  d: "M7.5 2h9a5.5 5.5 0 015.5 5.5v9a5.5 5.5 0 01-5.5 5.5h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2zm0 2A3.5 3.5 0 004 7.5v9A3.5 3.5 0 007.5 20h9a3.5 3.5 0 003.5-3.5v-9A3.5 3.5 0 0016.5 4h-9zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm5.75-.75a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z",
                  href: "https://www.instagram.com/cachetechnologies/",
                },
                {
                  d: "M22.675 0H1.325C.593 0 0 .594 0 1.326v21.348C0 23.406.593 24 1.325 24H12.82v-9.294H9.692V11.29h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.318h3.587l-.467 3.416h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .594 23.406 0 22.675 0z",
                  href: "https://www.facebook.com/CacheDigitech01",
                },
                {
                  d: "M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z",
                  href: "mailto:info@cachedigitech.com",
                },
                {
                  d: "M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.06 2.06 0 11.001-4.121 2.06 2.06 0 010 4.12zM6.902 20.452H3.773V9h3.129v11.452z",
                  href: "https://www.linkedin.com/company/cache-digitech-pvt-ltd/",
                },
              ].map(({ d, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center hover:text-gray-300 transition-colors cursor-pointer"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 text-xs sm:text-sm">
              <button
                className="underline hover:text-gray-300 transition-colors"
                onClick={() => setShowPrivacy(true)}
              >
                Privacy Policy
              </button>
              <button
                className="underline hover:text-gray-300 transition-colors"
                onClick={() => setShowTerms(true)}
              >
                Terms of use
              </button>
              {/* <a href="/site-map" className="underline hover:text-gray-300 transition-colors">
                Site-map
              </a>
              <a href="/cookie-policy" className="underline hover:text-gray-300 transition-colors">
                Cookie-policy
              </a> */}
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-800 text-center sm:text-left">
            <p className="text-xs sm:text-sm text-gray-400">
              © 2025 Cache Digitech Pvt. Ltd.
            </p>
          </div>
        </div>
      </div>
      {showPrivacy && (
        <PrivacyPolicyModal onClose={() => setShowPrivacy(false)} />
      )}
      {showTerms && (
        <TermsOfUseModal onClose={() => setShowTerms(false)} />
      )}
    </div>
  );
}

export default Footer;
