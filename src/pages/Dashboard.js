import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Client from "./Client";
import Main1 from "../component/Main1";
import Main2 from "../component/Main2";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Client Management</h2>
      <div className="ds_link">
        <div className="und">
          <NavLink to="/">Dashboard</NavLink>
          <div className="underline"></div>
        </div>
        <br />
        <NavLink to="/client" style={{color:"lightGray"}}>Clients Details</NavLink>
      </div>
      <Main1 />
      <Main2 />

      <Routes>
        <Route path="/client" element={<Client />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
