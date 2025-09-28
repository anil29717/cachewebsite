import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import logo from "/logo1.jpg";
import { useNavigate } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [showServicePopup, setShowServicePopup] = useState(null);
  const [searchFocused, setSearchFocused] = useState(false);
  const [activePage, setActivePage] = useState("Welcome");
  const [buttonHovered, setButtonHovered] = useState(false);
  const navigate = useNavigate();

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  // Service data with descriptions
  const services = {
    "Infrastructure": "Enterprise-grade infrastructure solutions for scalable business growth",
    "Network Solution": "Comprehensive networking services for seamless connectivity",
    "Security": "Advanced cybersecurity solutions to protect your digital assets",
    "Cloud Solution": "Cloud migration and management services for modern businesses",
    "Artificial Intelligence": "AI-powered solutions to transform your business operations",
    "Consulting": "Strategic IT consulting to optimize your technology investments"
  };

  const handleMenuItemClick = (label) => {
    setMenuOpen(false);

    // Define navigation routes for different menu items
    const routes = {
      // About section
      "Concept of Cache": "/about",
      "Mission Vision": "/about",
      // "Meaning of Logo": "/about",
      "Certifications and Awards": "/about",
      "Team": "/about",

      // Services section
      "Infrastructure": "/infrastructureservice",
      "Network Solution": "/networkingservice",
      "Security": "/cybersecurity",
      "Cloud Solution": "/cloudservices",
      "Artificial Intelligence": "/aianddataservice",
      "Consulting": "/service/consulting",

      // Community section
      "Industry": "/community",
      "Partners": "/community",
      "Clients": "/community",

      // Insights section
      "CEO": "/insights",
      "Blogs": "/insights",
      "Case Studies": "/insights",
      "Events & Social Activities": "/insights",

      // Contact section
      "Contact Us": "/contactus"
    };

    const route = routes[label] || "/";
    navigate(route);
  };

  const renderMenuItem = (label, index, isService = false) => (
    <div key={index} className="relative">
      <p
        className={`
          m-0 my-2 cursor-pointer text-md font-semibold py-3 px-4 rounded-lg
          transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]
          ${hoveredItem === index
            ? 'text-white bg-gradient-to-br from-red-600 to-red-700 transform translate-x-2 scale-[1.02] shadow-lg shadow-red-600/30 border border-red-600'
            : 'text-black hover:text-gray-700 bg-transparent transform translate-x-0 scale-100 shadow-none border border-transparent'
          }
        `}
        onMouseEnter={() => setHoveredItem(index)}
        onMouseLeave={() => setHoveredItem(null)}
        onClick={() => handleMenuItemClick(label)}
      >
        {label}
      </p>
    </div>
  );

  const pageContent = {
    "Concept of Cache":
      <>
        <h1 className="text-3xl font-bold text-black mb-4">Concept Of Cache</h1>
        <p className="text-gray-700 mb-6">Cache improves speed by storing frequently used data for faster access.</p>
        <button
          onClick={() => {
            setMenuOpen(false);
            navigate("/about");
          }}
          className={`
          flex items-center justify-center backdrop-blur-md py-4 px-8 rounded-3xl
          relative z-[1000] ml-10 mt-10 transition-all duration-300 ease-out cursor-pointer
          ${buttonHovered
              ? 'bg-gradient-to-br from-red-600 to-red-700 text-white shadow-2xl shadow-red-600/30 border border-red-600'
              : 'bg-white text-black shadow-2xl shadow-red-600/10 border border-red-600/20'
            }
        `}
          onMouseEnter={() => setButtonHovered(true)}
          onMouseLeave={() => setButtonHovered(false)}

        >
          Explore more
        </button>
      </>,

    "Mission Vision":
      <>
        <h1 className="text-3xl font-bold text-black mb-4">Mission Vision</h1>
        <p className="text-gray-700 mb-6">Our mission is to accelerate digital growth with cutting-edge technology.</p>
        <button
          onClick={() => {
            setMenuOpen(false);
            navigate("/about");
          }}
          className={`
          flex items-center justify-center backdrop-blur-md py-4 px-8 rounded-3xl
          relative z-[1000] ml-10 mt-10 transition-all duration-300 ease-out cursor-pointer
          ${buttonHovered
              ? 'bg-gradient-to-br from-red-600 to-red-700 text-white shadow-2xl shadow-red-600/30 border border-red-600'
              : 'bg-white text-black shadow-2xl shadow-red-600/10 border border-red-600/20'
            }
        `}
          onMouseEnter={() => setButtonHovered(true)}
          onMouseLeave={() => setButtonHovered(false)}
        >
          Explore more
        </button>
      </>,

    "Meaning of Logo":
      <>
        <h1 className="text-3xl font-bold text-black mb-4">Meaning of Logo</h1>
        <p className="text-gray-700 mb-6">The logo symbolizes speed, connection, and reliability.</p>
        <button
          onClick={() => {
            setMenuOpen(false);
            navigate("/about");
          }}
          className={`
          flex items-center justify-center backdrop-blur-md py-4 px-8 rounded-3xl
          relative z-[1000] ml-10 mt-10 transition-all duration-300 ease-out cursor-pointer
          ${buttonHovered
              ? 'bg-gradient-to-br from-red-600 to-red-700 text-white shadow-2xl shadow-red-600/30 border border-red-600'
              : 'bg-white text-black shadow-2xl shadow-red-600/10 border border-red-600/20'
            }
        `}
          onMouseEnter={() => setButtonHovered(true)}
          onMouseLeave={() => setButtonHovered(false)}
        >
          Explore more
        </button>
      </>,

    "Certifications and Awards":
      <>
        <h1 className="text-3xl font-bold text-black mb-4">Certifications and Awards</h1>
        <p className="text-gray-700 mb-6">We are certified by ISO, CMMI, and recognized with global awards.</p>
        <button
          onClick={() => {
            setMenuOpen(false);
            navigate("/about");
          }}
          className={`
          flex items-center justify-center backdrop-blur-md py-4 px-8 rounded-3xl
          relative z-[1000] ml-10 mt-10 transition-all duration-300 ease-out cursor-pointer
          ${buttonHovered
              ? 'bg-gradient-to-br from-red-600 to-red-700 text-white shadow-2xl shadow-red-600/30 border border-red-600'
              : 'bg-white text-black shadow-2xl shadow-red-600/10 border border-red-600/20'
            }
        `}
          onMouseEnter={() => setButtonHovered(true)}
          onMouseLeave={() => setButtonHovered(false)}
        >
          Explore more
        </button>
      </>,

    "Team":
      <>
        <h1 className="text-3xl font-bold text-black mb-4">Team</h1>
        <p className="text-gray-700 mb-6">Our team consists of experts in IT, AI, and network solutions.</p>
        <button
          onClick={() => {
            setMenuOpen(false);
            navigate("/about");
          }}
          className={`
          flex items-center justify-center backdrop-blur-md py-4 px-8 rounded-3xl
          relative z-[1000] ml-10 mt-10 transition-all duration-300 ease-out cursor-pointer
          ${buttonHovered
              ? 'bg-gradient-to-br from-red-600 to-red-700 text-white shadow-2xl shadow-red-600/30 border border-red-600'
              : 'bg-white text-black shadow-2xl shadow-red-600/10 border border-red-600/20'
            }
        `}
          onMouseEnter={() => setButtonHovered(true)}
          onMouseLeave={() => setButtonHovered(false)}
        >
          Explore more
        </button>
      </>,

    "Infrastructure":
      <>
        <h1 className="text-3xl font-bold text-black mb-4">Infrastructure</h1>
        <p className="text-gray-700 mb-6">Enterprise-grade infrastructure solutions for scalable business growth.</p>
        <button
          onClick={() => {
            setMenuOpen(false);
            navigate("/service/infra");
          }}
          className={`
          flex items-center justify-center backdrop-blur-md py-4 px-8 rounded-3xl
          relative z-[1000] ml-10 mt-10 transition-all duration-300 ease-out cursor-pointer
          ${buttonHovered
              ? 'bg-gradient-to-br from-red-600 to-red-700 text-white shadow-2xl shadow-red-600/30 border border-red-600'
              : 'bg-white text-black shadow-2xl shadow-red-600/10 border border-red-600/20'
            }
        `}
          onMouseEnter={() => setButtonHovered(true)}
          onMouseLeave={() => setButtonHovered(false)}
        >
          Explore more
        </button>
      </>,

    "Network Solution":
      <>
        <h1 className="text-3xl font-bold text-black mb-4">Network Solution</h1>
        <p className="text-gray-700 mb-6">Seamless and secure networking solutions for enterprises.</p>
        <button
          onClick={() => {
            setMenuOpen(false);
            navigate("/service/network");
          }}
          className={`
          flex items-center justify-center backdrop-blur-md py-4 px-8 rounded-3xl
          relative z-[1000] ml-10 mt-10 transition-all duration-300 ease-out cursor-pointer
          ${buttonHovered
              ? 'bg-gradient-to-br from-red-600 to-red-700 text-white shadow-2xl shadow-red-600/30 border border-red-600'
              : 'bg-white text-black shadow-2xl shadow-red-600/10 border border-red-600/20'
            }
        `}
          onMouseEnter={() => setButtonHovered(true)}
          onMouseLeave={() => setButtonHovered(false)}
        >
          Explore more
        </button>
      </>,

    "Security":
      <>
        <h1 className="text-3xl font-bold text-black mb-4">Security</h1>
        <p className="text-gray-700 mb-6">Advanced cybersecurity services to safeguard your digital assets.</p>
        <button
          onClick={() => {
            setMenuOpen(false);
            navigate("/service/cybersecurity");
          }}
          className={`
          flex items-center justify-center backdrop-blur-md py-4 px-8 rounded-3xl
          relative z-[1000] ml-10 mt-10 transition-all duration-300 ease-out cursor-pointer
          ${buttonHovered
              ? 'bg-gradient-to-br from-red-600 to-red-700 text-white shadow-2xl shadow-red-600/30 border border-red-600'
              : 'bg-white text-black shadow-2xl shadow-red-600/10 border border-red-600/20'
            }
        `}
          onMouseEnter={() => setButtonHovered(true)}
          onMouseLeave={() => setButtonHovered(false)}
        >
          Explore more
        </button>
      </>,

    "Cloud Solution":
      <>
        <h1 className="text-3xl font-bold text-black mb-4">Cloud Solution</h1>
        <p className="text-gray-700 mb-6">End-to-end cloud migration and management solutions.</p>
        <button
          onClick={() => {
            setMenuOpen(false);
            navigate("/service/cloud-solutions");
          }}
          className={`
          flex items-center justify-center backdrop-blur-md py-4 px-8 rounded-3xl
          relative z-[1000] ml-10 mt-10 transition-all duration-300 ease-out cursor-pointer
          ${buttonHovered
              ? 'bg-gradient-to-br from-red-600 to-red-700 text-white shadow-2xl shadow-red-600/30 border border-red-600'
              : 'bg-white text-black shadow-2xl shadow-red-600/10 border border-red-600/20'
            }
        `}
          onMouseEnter={() => setButtonHovered(true)}
          onMouseLeave={() => setButtonHovered(false)}
        >
          Explore more
        </button>
      </>,

    "Artificial Intelligence":
      <>
        <h1 className="text-3xl font-bold text-black mb-4">Artificial Intelligence</h1>
        <p className="text-gray-700 mb-6">AI-powered solutions to transform industries.</p>
        <button
          onClick={() => {
            setMenuOpen(false);
            navigate("/service/AI");
          }}
          className={`
          flex items-center justify-center backdrop-blur-md py-4 px-8 rounded-3xl
          relative z-[1000] ml-10 mt-10 transition-all duration-300 ease-out cursor-pointer
          ${buttonHovered
              ? 'bg-gradient-to-br from-red-600 to-red-700 text-white shadow-2xl shadow-red-600/30 border border-red-600'
              : 'bg-white text-black shadow-2xl shadow-red-600/10 border border-red-600/20'
            }
        `}
          onMouseEnter={() => setButtonHovered(true)}
          onMouseLeave={() => setButtonHovered(false)}
        >
          Explore more
        </button>
      </>,

    "Consulting":
      <>
        <h1 className="text-3xl font-bold text-black mb-4">Consulting</h1>
        <p className="text-gray-700 mb-6">Strategic IT consulting to optimize investments.</p>
        <button
          onClick={() => {
            setMenuOpen(false);
            navigate("/service/consulting");
          }}
          className={`
          flex items-center justify-center backdrop-blur-md py-4 px-8 rounded-3xl
          relative z-[1000] ml-10 mt-10 transition-all duration-300 ease-out cursor-pointer
          ${buttonHovered
              ? 'bg-gradient-to-br from-red-600 to-red-700 text-white shadow-2xl shadow-red-600/30 border border-red-600'
              : 'bg-white text-black shadow-2xl shadow-red-600/10 border border-red-600/20'
            }
        `}
          onMouseEnter={() => setButtonHovered(true)}
          onMouseLeave={() => setButtonHovered(false)}
        >
          Explore more
        </button>
      </>,

    "Industry":
      <>
        <h1 className="text-3xl font-bold text-black mb-4">Industry</h1>
        <p className="text-gray-700 mb-6">We serve industries like healthcare, retail, finance, and more.</p>
        <button
          onClick={() => {
            setMenuOpen(false);
            navigate("/community");
          }}
          className={`
          flex items-center justify-center backdrop-blur-md py-4 px-8 rounded-3xl
          relative z-[1000] ml-10 mt-10 transition-all duration-300 ease-out cursor-pointer
          ${buttonHovered
              ? 'bg-gradient-to-br from-red-600 to-red-700 text-white shadow-2xl shadow-red-600/30 border border-red-600'
              : 'bg-white text-black shadow-2xl shadow-red-600/10 border border-red-600/20'
            }
        `}
          onMouseEnter={() => setButtonHovered(true)}
          onMouseLeave={() => setButtonHovered(false)}
        >
          Explore more
        </button>
      </>,

    "Partners":
      <>
        <h1 className="text-3xl font-bold text-black mb-4">Partners</h1>
        <p className="text-gray-700 mb-6">Trusted collaborations with leading technology providers.</p>
        <button
          onClick={() => {
            setMenuOpen(false);
            navigate("/community");
          }}
          className={`
          flex items-center justify-center backdrop-blur-md py-4 px-8 rounded-3xl
          relative z-[1000] ml-10 mt-10 transition-all duration-300 ease-out cursor-pointer
          ${buttonHovered
              ? 'bg-gradient-to-br from-red-600 to-red-700 text-white shadow-2xl shadow-red-600/30 border border-red-600'
              : 'bg-white text-black shadow-2xl shadow-red-600/10 border border-red-600/20'
            }
        `}
          onMouseEnter={() => setButtonHovered(true)}
          onMouseLeave={() => setButtonHovered(false)}
        >
          Explore more
        </button>
      </>,

    "Clients":
      <>
        <h1 className="text-3xl font-bold text-black mb-4">Clients</h1>
        <p className="text-gray-700 mb-6">Global clients across various sectors trust our services.</p>
        <button
          onClick={() => {
            setMenuOpen(false);
            navigate("/community");
          }}
          className={`
          flex items-center justify-center backdrop-blur-md py-4 px-8 rounded-3xl
          relative z-[1000] ml-10 mt-10 transition-all duration-300 ease-out cursor-pointer
          ${buttonHovered
              ? 'bg-gradient-to-br from-red-600 to-red-700 text-white shadow-2xl shadow-red-600/30 border border-red-600'
              : 'bg-white text-black shadow-2xl shadow-red-600/10 border border-red-600/20'
            }
        `}
          onMouseEnter={() => setButtonHovered(true)}
          onMouseLeave={() => setButtonHovered(false)}
        >
          Explore more
        </button>
      </>,

    "CEO":
      <>
        <h1 className="text-3xl font-bold text-black mb-4">CEO</h1>
        <p className="text-gray-700 mb-6">Insights from our CEO on leadership and innovation.</p>
        <button
          onClick={() => {
            setMenuOpen(false);
            navigate("/insights");
          }}
          className={`
          flex items-center justify-center backdrop-blur-md py-4 px-8 rounded-3xl
          relative z-[1000] ml-10 mt-10 transition-all duration-300 ease-out cursor-pointer
          ${buttonHovered
              ? 'bg-gradient-to-br from-red-600 to-red-700 text-white shadow-2xl shadow-red-600/30 border border-red-600'
              : 'bg-white text-black shadow-2xl shadow-red-600/10 border border-red-600/20'
            }
        `}
          onMouseEnter={() => setButtonHovered(true)}
          onMouseLeave={() => setButtonHovered(false)}
        >
          Explore more
        </button>
      </>,

    "Blogs":
      <>
        <h1 className="text-3xl font-bold text-black mb-4">Blogs</h1>
        <p className="text-gray-700 mb-6">Explore technology blogs and latest IT trends.</p>
        <button
          onClick={() => {
            setMenuOpen(false);
            navigate("/insights");
          }}
          className={`
          flex items-center justify-center backdrop-blur-md py-4 px-8 rounded-3xl
          relative z-[1000] ml-10 mt-10 transition-all duration-300 ease-out cursor-pointer
          ${buttonHovered
              ? 'bg-gradient-to-br from-red-600 to-red-700 text-white shadow-2xl shadow-red-600/30 border border-red-600'
              : 'bg-white text-black shadow-2xl shadow-red-600/10 border border-red-600/20'
            }
        `}
          onMouseEnter={() => setButtonHovered(true)}
          onMouseLeave={() => setButtonHovered(false)}
        >
          Explore more
        </button>
      </>,

    "Case Studies":
      <>
        <h1 className="text-3xl font-bold text-black mb-4">Case Studies</h1>
        <p className="text-gray-700 mb-6">Real-world implementations and success stories.</p>
        <button
          onClick={() => {
            setMenuOpen(false);
            navigate("/insights");
          }}
          className={`
          flex items-center justify-center backdrop-blur-md py-4 px-8 rounded-3xl
          relative z-[1000] ml-10 mt-10 transition-all duration-300 ease-out cursor-pointer
          ${buttonHovered
              ? 'bg-gradient-to-br from-red-600 to-red-700 text-white shadow-2xl shadow-red-600/30 border border-red-600'
              : 'bg-white text-black shadow-2xl shadow-red-600/10 border border-red-600/20'
            }
        `}
          onMouseEnter={() => setButtonHovered(true)}
          onMouseLeave={() => setButtonHovered(false)}
        >
          Explore more
        </button>
      </>,

    "Events & Social Activities":
      <>
        <h1 className="text-3xl font-bold text-black mb-4">Events & Social Activities</h1>
        <p className="text-gray-700 mb-6">We actively engage in global events and CSR activities.</p>
        <button
          onClick={() => {
            setMenuOpen(false);
            navigate("/insights");
          }}
          className={`
          flex items-center justify-center backdrop-blur-md py-4 px-8 rounded-3xl
          relative z-[1000] ml-10 mt-10 transition-all duration-300 ease-out cursor-pointer
          ${buttonHovered
              ? 'bg-gradient-to-br from-red-600 to-red-700 text-white shadow-2xl shadow-red-600/30 border border-red-600'
              : 'bg-white text-black shadow-2xl shadow-red-600/10 border border-red-600/20'
            }
        `}
          onMouseEnter={() => setButtonHovered(true)}
          onMouseLeave={() => setButtonHovered(false)}
        >
          Explore more
        </button>
      </>,

    "Contact Us":
      <>
        <h1 className="text-3xl font-bold text-black mb-4">Contact Us</h1>
        <p className="text-gray-700 mb-6">You can reach us at contact@cache.com or call +91-123456789.</p>
        <button
          onClick={() => {
            setMenuOpen(false);
            navigate("/contactus");
          }}
          className={`
          flex items-center justify-center backdrop-blur-md py-4 px-8 rounded-3xl
          relative z-[1000] ml-10 mt-10 transition-all duration-300 ease-out cursor-pointer
          ${buttonHovered
              ? 'bg-gradient-to-br from-red-600 to-red-700 text-white shadow-2xl shadow-red-600/30 border border-red-600'
              : 'bg-white text-black shadow-2xl shadow-red-600/10 border border-red-600/20'
            }
        `}
          onMouseEnter={() => setButtonHovered(true)}
          onMouseLeave={() => setButtonHovered(false)}
        >
          Explore more
        </button>
      </>,

    "Welcome":
      <>
        <h1 className="text-3xl font-bold text-black mb-4">Welcome</h1>
        <p className="text-gray-700">👋 Please select a menu item from the left to view details.</p>
      </>,
  };

  return (
    <>
      <style>
        {`
          @keyframes slideInFromLeft {
            from { 
              transform: translateX(-100%); 
            }
            to { 
              transform: translateX(0); 
            }
          }
          
          @keyframes slideOutToLeft {
            from { 
              transform: translateX(0); 
            }
            to { 
              transform: translateX(-100%); 
            }
          }
          
          @keyframes fadeInUp {
            from { 
              opacity: 0; 
              transform: translateY(30px); 
            }
            to { 
              opacity: 1; 
              transform: translateY(0); 
            }
          }
          
          @keyframes popupSlideIn {
            from { 
              opacity: 0; 
              transform: translateX(-50%) translateY(-10px); 
            }
            to { 
              opacity: 1; 
              transform: translateX(-50%) translateY(0); 
            }
          }
        `}
      </style>

      {/* Enhanced Top Navbar */}
      {/* <nav className="
        flex items-center bg-white backdrop-blur-md py-1 px-2 rounded-3xl
        shadow-2xl shadow-red-600/10 border border-red-600/20
        w-3/24 relative z-[1000] ml-18 mt-12 transition-all duration-300 ease-out
      ">
        <button 
          className="
            bg-red-600/90 border-none rounded-2xl p-2 cursor-pointer
            flex flex-col justify-center transition-all duration-300 ease-out
            relative overflow-hidden hover:scale-105
          "
          onClick={() => setMenuOpen(true)}
        >
          <div className={`
            w-6 h-1 bg-white my-1 rounded-sm transition-all duration-300 ease-out origin-center
            ${menuOpen ? 'rotate-45 translate-y-2' : 'rotate-0'}
          `}></div>
          <div className={`
            w-6 h-1 bg-white my-1 rounded-sm transition-all duration-300 ease-out origin-center
            ${menuOpen ? 'scale-x-0' : 'scale-x-100'}
          `}></div>
          <div className={`
            w-6 h-1 bg-white my-1 rounded-sm transition-all duration-300 ease-out origin-center
            ${menuOpen ? '-rotate-45 -translate-y-2' : 'rotate-0'}
          `}></div>
        </button>
        <div className="
          h-14 w-44 rounded-2xl flex items-center justify-center
          text-white font-bold text-2xl
        ">
          <img src={logo} alt="Logo1" className="h-12 w-20 ml-0" />     
        </div>
      </nav> */}

      <nav className="fixed left-1/2 md:left-34 top-9 z-[1000] flex w-[80%] -translate-x-1/2 items-center justify-between rounded-3xl border border-red-200 bg-white/70 px-3 py-2 shadow-lg backdrop-blur-md md:w-auto md:max-w-none md:justify-start md:px-3 md:py-3">
        {/* Hamburger Menu Button */}
        <button
          className="group flex flex-col items-center justify-center rounded-xl bg-red-600 p-2 transition-all duration-300 ease-in-out hover:scale-105"
          onClick={() => setMenuOpen(true)}
        >
          <Menu className="h-4 w-4 text-white transition-transform duration-300 group-hover:scale-110" />
        </button>

        {/* Logo */}
        <div className="ml-5 flex h-8 w-auto items-center justify-center md:ml-6">
          <img onClick={() => navigate("/")} src={logo} alt="CacheDigiTech Logo" className="h-full w-full object-contain" />
        </div>

        {/* <Search onClick={() => setMenuOpen(true)} className="h-6 w-6 text-red-600 md:hidden" /> */}
      </nav>

      {/* Enhanced Door-Sized Overlay - Sliding Door Effect */}
      <div className={`
        fixed top-0 left-0 w-64 h-full bg-white/70  backdrop-blur-md z-[2000] flex flex-col transition-transform duration-500 ease-out shadow-2xl border-r border-white/20
        ${menuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}
      `}>
        {/* Overlay Header */}
        <div className="
          flex items-center justify-between py-6 px-6
            backdrop-blur-md bg-white/70 
        ">
          <span
            className="
              text-2xl font-bold cursor-pointer text-black 
              transition-all duration-300 ease-out p-2 rounded-full
              hover:bg-gray-200
            "
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </span>

        </div>

        {/* Overlay Body */}
        <div className={`
  flex min-h-0
  ${menuOpen ? 'animate-[fadeInUp_0.6s_ease-out_0.2s_both]' : ''}
  flex-col
`}>
          {/* Left Menu */}
          <div className="
    w-full p-6 overflow-y-auto
    max-h-full bg-transparent backdrop-blur-sm
  ">
            <h3 className="text-lg font-bold text-black mt-6">About</h3>
            {["Concept of Cache", "Mission Vision", "Meaning of Logo", "Certifications and Awards", "Team"].map((item, i) => renderMenuItem(item, i))}

            <h3 className="text-lg font-bold text-black mt-6">Our Services</h3>
            {["Infrastructure", "Network Solution", "Security", "Cloud Solution", "Artificial Intelligence", "Consulting"].map((item, i) => renderMenuItem(item, i + 5, true))}

            <h3 className="text-lg font-bold text-black mt-6">Community</h3>
            {["Industry", "Partners", "Clients"].map((item, i) => renderMenuItem(item, i + 11, true))}

            <h3 className="text-lg font-bold text-black mt-6">Insights</h3>
            {["CEO", "Blogs", "Case Studies", "Events & Social Activities"].map((item, i) => renderMenuItem(item, i + 14, true))}

            <h3 className="text-lg font-bold text-black mt-6">Contact</h3>
            {["Contact Us"].map((item, i) => renderMenuItem(item, i + 18, true))}
          </div>
        </div>

      </div>
    </>
  );
}

export default Navbar;