import React from "react";

import "../../CSS/ProfileLayout.css";

import {
  NavLink,
  Outlet,
} from "react-router-dom";

const ProfileLayout = () => {

  const menuItems = [

    {
      name: "My Profile",
      icon: "👤",
      path: "/profile",
    },

    {
      name: "My Rewards",
      icon: "🏆",
      path: "/profile/rewards",
    },

    {
      name: "My Address",
      icon: "📍",
      path: "/profile/address",
    },

    {
      name: "My Orders",
      icon: "🛍️",
      path: "/profile/orders",
    },

    {
      name: "Return Requests",
      icon: "↩️",
      path: "/profile/returns",
    },

    {
      name: "Help / Support",
      icon: "💁‍♂️",
      path: "/profile/support",
    },

  ];

  return (

    <div className="profile-container">

      {/* SIDEBAR */}
      <aside className="sidebar">

        <ul className="menu-list">

          {
            menuItems.map((item) => (

              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/profile"}
                className={({ isActive }) =>
                  isActive
                    ? "menu-item active"
                    : "menu-item"
                }
              >

                <span className="icon">

                  {item.icon}

                </span>

                {item.name}

              </NavLink>

            ))
          }

        </ul>

      </aside>

      {/* PAGE CONTENT */}
      <main className="content-area">

        <div className="card">

          <Outlet />

        </div>

      </main>

    </div>

  );

};

export default ProfileLayout;