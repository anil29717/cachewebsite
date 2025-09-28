import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const LoginButton: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  // All searchable menu items + routes
  const menuItems: Record<string, string> = {
    "Concept of Cache": "/about",
    "Mission Vision": "/about",
    "Meaning of Logo": "/about",
    "Certifications and Awards": "/about",
    "Team": "/about",

    "Infrastructure": "/service/infra",
    "Network Solution": "/service/network",
    "Security": "/service/security",
    "Cloud Solution": "/service/cloud",
    "Artificial Intelligence": "/service/ai",
    "Consulting": "/service/consulting",

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
    borderRadius: "20px",
    padding: "12px 20px",
    boxShadow: "0px 2px 8px rgba(0,0,0,0.15)",
    cursor: "pointer",
    transition: "all 0.3s ease",
    width: expanded ? "250px" : "120px",
    overflow: "hidden",
  };

  const iconStyle: React.CSSProperties = {
    fontSize: "20px",
    flexShrink: 0,
  };

  const inputStyle: React.CSSProperties = {
    border: "none",
    outline: "none",
    marginLeft: "8px",
    fontSize: "14px",
    flex: 1,
    display: expanded ? "block" : "none",
  };

  const textStyle: React.CSSProperties = {
    fontWeight: "bold",
    fontSize: "14px",
    marginLeft: "8px",
    whiteSpace: "nowrap",
  };

  const dropdownStyle: React.CSSProperties = {
    position: "absolute",
    right: 0,
    marginTop: "5px",
    background: "white",
    borderRadius: "10px",
    boxShadow: "0px 2px 8px rgba(0,0,0,0.15)",
    maxHeight: "200px",
    overflowY: "auto",
    width: "250px",
    zIndex: 2000,
  };

  const itemStyle: React.CSSProperties = {
    padding: "10px 15px",
    cursor: "pointer",
    fontSize: "14px",
    borderBottom: "1px solid #f0f0f0",
  };

  return (
    <div className="fixed top-10 right-10 hidden md:flex justify-end z-50">
      {/* Search Input */}
      <div style={containerStyle} onClick={() => setExpanded(true)}>
        <FiSearch style={iconStyle} />
        {expanded ? (
          <input
            style={inputStyle}
            type="text"
            placeholder="Search..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
            autoFocus
            onBlur={() => !value && setExpanded(false)}
          />
        ) : (
          <span style={textStyle}>Search</span>
        )}
      </div>

      {/* Dropdown results */}
      {expanded && value && results.length > 0 && (
        <div style={dropdownStyle}>
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
  );
};

export default LoginButton;
