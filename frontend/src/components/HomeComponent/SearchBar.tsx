import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const LoginButton: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [value, setValue] = useState("");
  const [notificationOpen, setNotificationOpen] = useState(false);
  const navigate = useNavigate();

  // Notification menu items
  const notificationItems = [
    { label: "Campaigns & Promotion", route: "/campaigns" },
    { label: "Newsletter", route: "/newsletter" },
    { label: "Offers", route: "/offers" }
  ];

  // All searchable menu items + routes
  const menuItems: Record<string, string> = {
    "Concept of Cache": "/about",
    "Mission Vision": "/about",
    // "Meaning of Logo": "/about",
    "Certifications and Awards": "/about",
    "Team": "/about",

    "Infrastructure": "/infrastructureservice",
    "Network Solution": "/networkingservice",
    "Cyber Security": "/cybersecurity",
    "Cloud Solution": "/cloudservices",
    "Artificial Intelligence": "/aianddataservice",
    "Consulting": "/consultingservice",

    "Industry": "/community",
    "Partners": "/community",
    "Clients": "/community",

    "CEO": "/insights",
    "Blogs": "/insights",
    "Case Studies": "/insights",
    "Events & Social Activities": "/insights",

    "Contact Us": "/contactus",
  };

  // Filter items by input
  const results = Object.keys(menuItems).filter((item) =>
    item.toLowerCase().includes(value.toLowerCase())
  );

  const containerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    background: "white",
    borderRadius: "25px",
    padding: expanded ? "8px 20px" : "8px",
    boxShadow: "0px 2px 8px rgba(0,0,0,0.15)",
    cursor: "pointer",
    transition: "all 0.3s ease",
    width: expanded ? "250px" : "55px",
    height: "55px",
    overflow: "hidden",
    border: "1px solid rgba(5, 5, 5, 0.3)",
    justifyContent: expanded ? "flex-start" : "center",
  };

  const iconStyle: React.CSSProperties = {
    fontSize: "20px",
    flexShrink: 0,
    color: "black",
  };

  const inputStyle: React.CSSProperties = {
    border: "2px solid white",
    outline: "none",
    marginLeft: "8px",
    fontSize: "14px",
    flex: 1,
    display: expanded ? "block" : "none",
    background: "transparent",
    color: "black",
  };

  const textStyle: React.CSSProperties = {
    fontWeight: "bold",
    fontSize: "14px",
    marginLeft: "8px",
    whiteSpace: "nowrap",
    color: "black",
  };

  const dropdownStyle: React.CSSProperties = {
    position: "absolute",
    right: 0,
    marginTop: "5px",
    // border: "1px solid black",
    background: "rgba(200, 200, 200, 0.3)", // light gray with transparency
    backdropFilter: "blur(10px)",            // blur effect
    WebkitBackdropFilter: "blur(10px)",
    borderRadius: "10px",
    boxShadow: "0px 2px 8px rgba(0,0,0,0.15)",
    maxHeight: "200px",
    overflowY: "auto",
    width: "250px",
    zIndex: 2000,
  };

  const bellIconStyle: React.CSSProperties = {
    width: "40px",
    height: "40px",
    cursor: "pointer",
    marginLeft: "10px",
    transition: "all 0.3s ease",
    borderRadius: "50%",
  };

  const notificationDropdownStyle: React.CSSProperties = {
    position: "absolute",
    right: 0,
    marginTop: "5px",
    background: "rgba(200, 200, 200, 0.3)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    borderRadius: "10px",
    boxShadow: "0px 2px 8px rgba(0,0,0,0.15)",
    width: "200px",
    zIndex: 2000,
  };

  const notificationItemStyle: React.CSSProperties = {
    padding: "12px 15px",
    cursor: "pointer",
    fontSize: "14px",
    borderBottom: "1px solid rgba(255,255,255,0.2)",
    transition: "background-color 0.2s ease",
  };

   const itemStyle: React.CSSProperties = {
     padding: "10px 15px",
     cursor: "pointer",
     fontSize: "14px",
     // borderBottom: "1px solid #f0f0f0",
   };

  return (
    <div className="fixed top-10 z-1000 right-10 hidden md:flex justify-end z-50">
      <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
        {/* Search Input */}
        <div style={containerStyle} onClick={() => setExpanded(true)}>
          <FiSearch style={iconStyle} />
          {expanded && (
            <input
              style={inputStyle}
              type="text"
              placeholder="Search..."
              value={value}
              onChange={(e) => setValue(e.target.value)}
              autoFocus
              onBlur={() => !value && setExpanded(false)}
            />
          )}
        </div>

        {/* Bell Icon */}
        <div style={{ position: "relative" }}>
          <img 
            src="/bell-icon.svg"
            alt="Notifications"
            style={bellIconStyle}
            onClick={() => setNotificationOpen(!notificationOpen)}
          />
          
          {/* Notification Dropdown */}
          {notificationOpen && (
            <div style={notificationDropdownStyle}>
              {notificationItems.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    ...notificationItemStyle,
                    borderBottom: idx === notificationItems.length - 1 ? "none" : "1px solid rgba(255,255,255,0.2)"
                  }}
                  onClick={() => {
                    navigate(item.route);
                    setNotificationOpen(false);
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  {item.label}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Search Dropdown results */}
        {expanded && value && results.length > 0 && (
          <div
            style={{
              ...dropdownStyle,
              top: "100%",   // position directly below input
              right: "0",
            }}
          >
            {results.map((item, idx) => (
              <div
                key={idx}
                style={itemStyle}
                onMouseDown={() => {
                  navigate(menuItems[item]);
                  setExpanded(false);
                  setValue("");
                }}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

};

export default LoginButton;
