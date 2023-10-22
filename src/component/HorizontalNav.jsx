import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Companies from "../pages/Companies";
import Support from "../pages/Support";
import Admin from "../pages/Admin";
import { ReactComponent as Search_icon } from "../icons/search.svg";
import { ReactComponent as Flag } from "../icons/flag.svg";
import { ReactComponent as Bell } from "../icons/bell.svg";
import { ReactComponent as Users } from "../icons/ic_user_group.svg";
import { ReactComponent as Profile } from "../icons/profile.svg";

import Client from "../pages/Client";
const HorizontalNav = () => {
  return (
    <div className="hnav">
      <div className="hnav1">
        <div className="hnav_div">
          <Search_icon />
        </div>
        <div className="hnav_icons">
          <ul>
            <li>
              <Flag />
            </li>

            <li>
              <Bell />
            </li>
            <li>
              <Users />
            </li>
            <li>
              <Profile />
            </li>
          </ul>
        </div>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/companies%20&%20Tickets" element={<Companies />} />
          <Route path="/support" element={<Support />} />
          <Route path="/user%20Admins" element={<Admin />} />
        </Routes>
      </div>
    </div>
  );
};

export default HorizontalNav;
