import React, { useState, useRef, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "../styles/LoginButton.css";

const LoginButton: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [value, setValue] = useState("");
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [hasNewNotification, setHasNewNotification] = useState(true);
  const navigate = useNavigate();
  const bellRef = useRef<HTMLDivElement>(null);

  const notificationItems = [
    { label: "Campaigns & Promotion", route: "/campaigns" },
    // { label: "Newsletter", route: "/newsletter" },
    // { label: "Offers", route: "/offers" },
  ];

  const menuItems: Record<string, string> = {
    "Concept of Cache": "/about",
    "Mission Vision": "/about",
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

  const results = Object.keys(menuItems).filter((item) =>
    item.toLowerCase().includes(value.toLowerCase())
  );

  useEffect(() => {
    if (!notificationOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (bellRef.current && !bellRef.current.contains(event.target as Node)) {
        setNotificationOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [notificationOpen]);

  // Styles
  const containerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    background: "white",
    borderRadius: "50px",
    padding: expanded ? "8px 20px" : "10px",
    marginRight: "5px",
    boxShadow: "0px 2px 8px rgba(0,0,0,0.15)",
    cursor: "pointer",
    transition: "all 0.3s ease",
    width: expanded ? "250px" : "55px",
    height: "55px",
    overflow: "hidden",
    border: "1px solid rgba(5, 5, 5, 0.3)",
    justifyContent: expanded ? "flex-start" : "center",
    position: "relative",
  };

  const iconStyle: React.CSSProperties = {
    fontSize: "20px",
    flexShrink: 0,
    color: "black",
  };

  const inputStyle: React.CSSProperties = {
    border: "none",
    outline: "none",
    marginLeft: "8px",
    fontSize: "14px",
    flex: 1,
    display: expanded ? "block" : "none",
    background: "transparent",
    color: "black",
  };

  const dropdownStyle: React.CSSProperties = {
    position: "absolute",
    top: "100%",
    right: 0,
    marginTop: "5px",
    background: "rgba(200,200,200,0.3)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    borderRadius: "10px",
    boxShadow: "0px 2px 8px rgba(0,0,0,0.15)",
    maxHeight: "200px",
    overflowY: "auto",
    width: "250px",
    zIndex: 2000,
  };

  const bellContainerStyle: React.CSSProperties = {
    position: "relative",
    display: "flex",
    alignItems: "center",
    marginLeft: "15px",
  };

  const bellIconStyle: React.CSSProperties = {
    width: "40px",
    height: "40px",
    cursor: "pointer",
    borderRadius: "50%",
    zIndex: 2,
    position: "relative",
  };

  const ringStyle: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: "rgba(255,0,0,0.3)",
    transform: "translate(-50%, -50%)",
    animation: "pulse 1.5s infinite",
    zIndex: 1,
  };

  const notificationDropdownStyle: React.CSSProperties = {
    position: "absolute",
    top: "100%",
    right: 0,
    marginTop: "5px",
    background: "rgba(200,200,200,0.3)",
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
  };

  return (
    <div className="fixed top-11 right-1 md:top-5 md:right-5 flex justify-end z-50">
      {/* 🔔 Mobile Bell Icon (visible on small only) */}
      <div className="flex md:hidden" ref={bellRef}>
        {hasNewNotification && !notificationOpen && <span style={ringStyle}></span>}
        <img
          src="/bell-icon.svg"
          alt="Notifications"
          style={{ ...bellIconStyle, width: "35px", height: "35px" }}
          onClick={() => setNotificationOpen(!notificationOpen)}
        />
        {notificationOpen && (
          <div style={notificationDropdownStyle}>
            {notificationItems.map((item, idx) => (
              <div
                key={idx}
                style={{
                  ...notificationItemStyle,
                  borderBottom:
                    idx === notificationItems.length - 1 ? "none" : "1px solid rgba(255,255,255,0.2)",
                }}
                onClick={() => {
                  navigate(item.route);
                  setNotificationOpen(false);
                  setHasNewNotification(false);
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
              >
                {item.label}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 🖥️ Desktop Search + Bell */}
      <div className="hidden md:flex items-center">
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
        <div style={bellContainerStyle} ref={bellRef}>
          {hasNewNotification && !notificationOpen && <span style={ringStyle}></span>}
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
                    borderBottom:
                      idx === notificationItems.length - 1 ? "none" : "1px solid rgba(255,255,255,0.2)",
                  }}
                  onClick={() => {
                    navigate(item.route);
                    setNotificationOpen(false);
                    setHasNewNotification(false);
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "transparent")
                  }
                >
                  {item.label}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Search Dropdown */}
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
    </div>
  );
};

export default LoginButton;
