import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaThLarge,
  FaProjectDiagram,
  FaCalendarAlt,
  FaTasks,
  FaChartBar,
  FaCog,
  FaQuestionCircle,
  FaBars,
  FaPowerOff
} from "react-icons/fa";

import "../CSS/sidebar.css";
import "../App.css"

export const Left_Side_Nav = () => {
  const [open, setOpen] = useState(true);

  const menu = [
    { name: "Home", icon: <FaHome /> , path:'/' },
    { name: "Dashboard", icon: <FaThLarge /> , path:'/Dashboard' },
    { name: "Projects", icon: <FaProjectDiagram /> , path:'/Projects' },
    { name: "Calendar", icon: <FaCalendarAlt />, path:'/Calendar' },
    { name: "Tasks", icon: <FaTasks /> , path:'/Tasks' },
    { name: "Reporting", icon: <FaChartBar /> , path:'/Reporting' },
  ];

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (

    <div className="Left_Side_Nav">
      <div className={ open ? "sidebar active" : "sidebar" }>
        
        {/* Toggle Button */}
        <div className="top">
          <h2 className="logo">{open ? "Genius" : "G"}</h2>
          <FaBars onClick={() => setOpen(!open)} className="menu-icon" />
        </div>
    
        {/* Menu */}
        <div className="menu">
          {menu.map((item, i) => (
            <Link to={item.path} key={i}  className="menu-item" >
              <span className="icon">{item.icon}</span>
              {open && <span>{item.name}</span>}
            </Link >
          ))}
        </div>
        
        {/* Bottom */}
        <div className="bottom">
          <div className="menu-item">
            <FaCog /> {open && <span>Settings</span>}
          </div>
          <div className="menu-item">
            <FaQuestionCircle /> {open && <span>Help</span>}
          </div>
          <div className="menu-item" onClick={handleLogout}>
            <FaPowerOff /> {open && <span>LogOut</span>}
          </div>
        </div>        
      </div>
    </div>
  );
};

