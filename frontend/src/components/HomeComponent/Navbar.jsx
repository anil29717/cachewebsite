import React, { useState, useEffect } from "react";
import { Menu, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredSection, setHoveredSection] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

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

  // Main menu data
  const menuData = {
    "About Us": {
      items: ["Concept of Cache", "Mission", "Certifications and Awards", "Team"]
    },
    "Our Services": {
      items: ["Cyber Security", "Data AI", "Cloud", "Infrastructure & Networking", "Managed Services", "Consulting & Auditing", "GRC"]
    },
    "Community": {
      items: ["Industry", "Partners", "Clients"]
    },
    "Insights": {
      items: ["CEO", "Blogs", "Case Studies"]
    },
    "Contact": {
      items: ["Contact Us"]
    }
  };

  // Submenu routing map
  const submenuNavigation = {
    "Concept of Cache": { route: "/about", sectionId: "concept-of-cache" },
    "Mission": { route: "/about", sectionId: "mission-vision" },
    "Certifications and Awards": { route: "/about", sectionId: "certifications-awards" },
    "Team": { route: "/about", sectionId: "team" },
    "Cyber Security": { route: "/cybersecurity", sectionId: null },
    "Data AI": { route: "/aianddataservice", sectionId: null },
    "Cloud": { route: "/cloudservices", sectionId: null },
    "Infrastructure & Networking": { route: "/infrastructureservice", sectionId: null },
    "Managed Services": { route: "/manageservices", sectionId: null },
    "Consulting & Auditing": { route: "/consultingservice", sectionId: null },
    "GRC": { route: "/grc-dashboard", sectionId: null },
    "Industry": { route: "/community", sectionId: "industries" },
    "Partners": { route: "/community", sectionId: "partners" },
    "Clients": { route: "/community", sectionId: "clients" },
    "CEO": { route: "/insights", sectionId: "ceo" },
    "Blogs": { route: "/insights", sectionId: "blog" },
    "Case Studies": { route: "/insights", sectionId: "success-stories" },
    // "Events & Social Activities": { route: "/insights", sectionId: "events" },
    "Contact Us": { route: "/contactus", sectionId: null }
  };

  // Handle submenu item click
  const handleItemClick = (section, item) => {
    const navItem = submenuNavigation[item];
    if (!navItem) return;

    setMenuOpen(false);
    setActiveSubmenu(null);

    if (navItem.sectionId) {
      navigate(`${navItem.route}#${navItem.sectionId}`);
    } else {
      navigate(navItem.route);
    }
  };

  // Handle hover to open submenu
  const handleSectionHover = (section) => {
    setHoveredSection(section);
    setActiveSubmenu(section);
  };

  const handleSectionLeave = () => {
    // Keep submenu open briefly
    setTimeout(() => {
      if (!document.querySelector('.submenu-panel:hover')) {
        setHoveredSection(null);
      }
    }, 100);
  };

  return (
    <>
      <style>
        {`
          @keyframes slideInFromRight {
            from { opacity: 0; transform: translateX(-20px); }
            to { opacity: 1; transform: translateX(0); }
          }

          .submenu-panel:hover {
            display: block !important;
          }
        `}
      </style>

      {/* Navbar */}
      <nav className="fixed md:left-2/24 left-1/2 top-9 z-[1000] flex w-[80%] -translate-x-1/2 items-center justify-between rounded-3xl border border-red-200 bg-white/70 px-3 py-2 shadow-lg backdrop-blur-md md:w-auto md:max-w-none md:justify-start md:px-3 md:py-3">
        {/* Hamburger Menu Button */}
        <button
          className="group flex flex-col items-center justify-center rounded-xl bg-red-600 p-2 transition-all duration-300 ease-in-out hover:scale-105"
          onClick={() => setMenuOpen(true)}
        >
          <Menu className="h-4 w-4 text-white transition-transform duration-300 group-hover:scale-110" />
        </button>

        {/* Logo */}
        <div onClick={() => navigate('/')} className="ml-5 flex h-8 w-auto items-center justify-center md:ml-6">
          <img src="/logo1.jpg" alt="CacheDigiTech Logo" className="h-full w-full object-contain" />
        </div>
      </nav>

      {/* Backdrop Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[1999]"
          onClick={() => {
            setMenuOpen(false);
            setActiveSubmenu(null);
          }}
        />
      )}

      {/* Main Sidebar */}
      <div className={`
        fixed top-0 left-0 w-54 md:w-72 h-full bg-white z-[2000] flex flex-col transition-transform duration-500 ease-out shadow-2xl
        ${menuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}
      `}>
        {/* Sidebar Header */}
        <div className="flex items-center justify-between py-6 px-6 border-b border-gray-200 bg-white">
          <button
            className="text-gray-700 hover:bg-red-50 p-2 rounded-lg transition-all duration-300"
            onClick={() => {
              setMenuOpen(false);
              setActiveSubmenu(null);
            }}
          >
            <ChevronLeft className="h-5 w-5 text-red-600" />
          </button>
          <div className="flex items-center gap-3">
            <img src="/logo1.jpg" alt="CacheDigiTech Logo" className="h-10" />
          </div>
        </div>

        {/* Sidebar Menu */}
        <div className="flex-1 overflow-y-auto p-4">
          {Object.entries(menuData).map(([section, data], index) => (
            <div
              key={index}
              className="mb-2"
              onMouseEnter={() => handleSectionHover(section)}
              onMouseLeave={handleSectionLeave}
            >
              <div className={`
                flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer
                transition-all duration-300 group
                ${hoveredSection === section
                  ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg'
                  : 'text-gray-700 hover:bg-red-50'
                }
              `}>
                <span className="font-semibold text-sm">{section}</span>
                <ChevronRight className={`h-4 w-4 transition-transform duration-300 ${hoveredSection === section ? 'transform translate-x-1' : ''}`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Submenu Panel */}
      {activeSubmenu && menuOpen && (
        <div
          className="submenu-panel fixed top-0 left-1/2 md:left-72 w-64 h-full bg-white z-[2001] shadow-2xl border-l border-gray-200"
          style={{ animation: 'slideInFromRight 0.3s ease-out' }}
          onMouseEnter={() => setActiveSubmenu(activeSubmenu)}
          onMouseLeave={() => {
            setActiveSubmenu(null);
            setHoveredSection(null);
          }}
        >
          {/* Submenu Header */}
          <div className="py-6 px-6 border-b border-gray-200 bg-gray-50">
            <h3 className="font-bold text-lg text-gray-900">{activeSubmenu}</h3>
            <p className="text-xs text-gray-500 mt-1">Select an option</p>
          </div>

          {/* Submenu Items */}
          <div className="p-4">
            {menuData[activeSubmenu].items.map((item, index) => (
              <div
                key={index}
                className="px-4 py-3 rounded-lg cursor-pointer transition-all duration-300 mb-2
                  text-gray-700 hover:bg-gradient-to-r hover:from-red-600 hover:to-red-700 
                  hover:text-white hover:shadow-md hover:transform hover:translate-x-1"
                onClick={() => handleItemClick(activeSubmenu, item)}
              >
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
