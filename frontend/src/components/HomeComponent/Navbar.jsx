import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import logo from "/logo1.jpg";
import { useNavigate } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
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
  // const services = {
  //   "Infrastructure": "Enterprise-grade infrastructure solutions for scalable business growth",
  //   "Network Solution": "Comprehensive networking services for seamless connectivity",
  //   "Security": "Advanced cybersecurity solutions to protect your digital assets",
  //   "Cloud Solution": "Cloud migration and management services for modern businesses",
  //   "Artificial Intelligence": "AI-powered solutions to transform your business operations",
  //   "Consulting": "Strategic IT consulting to optimize your technology investments"
  // };

  const handleMenuItemClick = (label) => {
    setMenuOpen(false);

    // Define navigation routes and section IDs for different menu items
    const navigationMap = {
      // About section with specific section IDs
      "Concept of Cache": { route: "/about", sectionId: "concept-of-cache" },
      "Mission Vision": { route: "/about", sectionId: "mission-vision" },
      "Meaning of Logo": { route: "/about", sectionId: "meaning-of-logo" },
      "Certifications and Awards": { route: "/about", sectionId: "certifications-awards" },
      "Team": { route: "/about", sectionId: "team" },

      // Services section
      "Cyber Security": { route: "/cybersecurity", sectionId: null },
      "Data AI": { route: "/aianddataservice", sectionId: null },
      "Cloud": { route: "/cloudservices", sectionId: null },
      "Infrastructure & Networking": { route: "/infrastructureservice", sectionId: null },
      "Managed Services": { route: "/manageservices", sectionId: null },
      "Consulting & Auditing": { route: "/consultingservice", sectionId: null },
      "GRC": { route: "/grc-dashboard", sectionId: null },

      // Community section
      "Industry": { route: "/community", sectionId: "industries" },
      "Partners": { route: "/community", sectionId: "partners" },
      "Clients": { route: "/community", sectionId: "clients" },

      // Insights section
      "CEO": { route: "/insights", sectionId: "ceo" },
      "Blogs": { route: "/insights", sectionId: "blog" },
      "Case Studies": { route: "/insights", sectionId: "success-stories" },
      "Events & Social Activities": { route: "/insights", sectionId: "events" },

      // Contact section
      "Contact Us": { route: "/contactus", sectionId: null }
    };

    const navItem = navigationMap[label];
    if (!navItem) {
      navigate("/");
      return;
    }

    // Navigate to the route
    navigate(navItem.route);
    
    // If there's a specific section ID, scroll to it after navigation
    if (navItem.sectionId) {
      // Use hash-based navigation for better reliability
      navigate(`${navItem.route}#${navItem.sectionId}`);
    }
  };

  const renderSectionHeader = (title, sectionKey) => (
    <div 
      className="flex items-center justify-between text-lg font-bold text-black mt-6 cursor-pointer hover:text-red-600 transition-colors duration-200 py-2"
      onClick={() => setActiveSection(activeSection === sectionKey ? null : sectionKey)}
    >
      <span>{title}</span>
      <span className={`transition-transform duration-200 ${activeSection === sectionKey ? 'rotate-90' : ''}`}>
        &gt;
      </span>
    </div>
  );

  const renderSubsections = (items, startIndex, sectionKey) => (
    <div 
      className={`
        fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-[2100]
        transition-transform duration-500 ease-out border-l border-gray-200
        ${activeSection === sectionKey 
          ? 'transform translate-x-0' 
          : 'transform translate-x-full'
        }
      `}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-black">
            {sectionKey === 'about' && 'About'}
            {sectionKey === 'services' && 'Our Services'}
            {sectionKey === 'community' && 'Community'}
            {sectionKey === 'insights' && 'Insights'}
            {sectionKey === 'contact' && 'Contact'}
          </h3>
          <span
            className="text-2xl font-bold cursor-pointer text-black hover:text-red-600 transition-colors duration-200"
            onClick={() => setActiveSection(null)}
          >
            ✕
          </span>
        </div>
        <div className="space-y-2">
          {items.map((item, i) => renderMenuItem(item, i + startIndex))}
        </div>
      </div>
    </div>
  );

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

      <nav className="fixed left-1/2 md:left-34 top-9 z-[1000] flex w-[80%] -translate-x-1/2 items-center justify-between rounded-3xl border border-red-200 bg-white px-3 py-2 shadow-lg md:w-auto md:max-w-none md:justify-start md:px-3 md:py-3">
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
        fixed top-0 left-0 w-64 h-full bg-white/30  backdrop-blur-md z-[2000] flex flex-col transition-transform duration-500 ease-out shadow-2xl border-r border-white/20
        ${menuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}
      `}>
        {/* Overlay Header */}
        <div className="
          flex items-center py-6 px-6 gap-4
            backdrop-blur-md bg-white 
        ">
          {/* Close Button with < symbol */}
          <span
            className="
              text-2xl font-bold cursor-pointer text-black 
              transition-all duration-300 ease-out p-2 rounded-full
              hover:bg-gray-200 w-10 h-10 flex items-center justify-center
            "
            onClick={() => setMenuOpen(false)}
          >
            &lt;
          </span>
          
          {/* Cache Digitech Logo */}
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="Cache Digitech Logo" 
              className="w-30 h-30 object-contain cursor-pointer" 
              onClick={() => {
                navigate("/");
                setMenuOpen(false);
              }}
            />
          </div>
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
    max-h-full bg-white 
  ">
            {/* About Section */}
            <div>
              {renderSectionHeader("About", "about")}
            </div>

            {/* Our Services Section */}
            <div>
              {renderSectionHeader("Our Services", "services")}
            </div>

            {/* Community Section */}
            <div>
              {renderSectionHeader("Community", "community")}
            </div>

            {/* Insights Section */}
            <div>
              {renderSectionHeader("Insights", "insights")}
            </div>

            {/* Contact Section */}
            <div>
              {renderSectionHeader("Contact", "contact")}
            </div>
          </div>
        </div>

      </div>

      {/* Subsection Panels */}
      {renderSubsections(["Concept of Cache", "Mission Vision", "Certifications and Awards", "Team"], 0, "about")}
      {renderSubsections(["Cyber Security", "Data AI", "Cloud", "Infrastructure & Networking", "Managed Services", "Consulting & Auditing", "GRC"], 5, "services")}
      {renderSubsections(["Industry", "Partners", "Clients"], 12, "community")}
      {renderSubsections(["CEO", "Blogs", "Case Studies", "Events & Social Activities"], 15, "insights")}
      {renderSubsections(["Contact Us"], 19, "contact")}
    </>
  );
}

export default Navbar;