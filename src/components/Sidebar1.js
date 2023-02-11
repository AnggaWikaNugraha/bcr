import React from "react";
import dashboardImg from "../assets/DashboardImg.png";
import carsImg from "../assets/CarsImg.png";
import { Link } from "react-router-dom";

function Sidebar1() {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="34" height="34" fill="#CFD4ED" />
        </svg>
      </div>
      <div className="sidebar-menu">
        <div className="dashboard-menu">
          <Link to="/">
            <img src={dashboardImg} alt="dashboardimg" />
            <p>Dashboard</p>
          </Link>
        </div>
        <div>
          <Link to="/list-cars">
            <img src={carsImg} alt="carsimg" />
            <p>List Cars</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar1;
