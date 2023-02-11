import React from "react";
import { Link } from "react-router-dom";
import dashboardImg from "../assets/DashboardImg.png";
import carsImg from "../assets/CarsImg.png";
import "../styles/ListCars.css";
// import { getCarsList } from "../apis/APIOrder";
import CarCards from "../components/CarCards";
import Header from "../components/Header";
import Sidebar1 from "../components/Sidebar1.js";
import Sidebar2 from "../components/Sidebar2.js";

const ListCars = () => {
  return (
    <div className="listcars" role="listcars">
      <div className="sidebar">
        <div className="sidebar-logo">
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="34" height="34" fill="#CFD4ED" />
          </svg>
        </div>
        <div className="sidebar-menu">
          <div>
            <Link to="/">
              <img src={dashboardImg} alt="dashboardimg" />
              <p>Dashboard</p>
            </Link>
          </div>
          <div className="listcars-menu">
            <Link to="/list-cars">
              <img src={carsImg} alt="carsimg" />
              <p>List Cars</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="sidebar2">
        <div className="header-logo">
          <svg width="100" height="34" viewBox="0 0 100 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="34" fill="#CFD4ED" />
          </svg>
        </div>
        <div className="sidebar2-p">
          <div>
            <h5>CARS</h5>
          </div>
          <div className="sidebar2-name">
            <h5>List car</h5>
          </div>
        </div>
      </div>
      <div className="content1">
        <Header />
        <div className="content">
          <div className="listcar-content">
            <div className="listcar-features">
              <div className="navigation">
                <p>Cars</p>
                <p>&gt;</p>
                <p>List Car</p>
              </div>
              <div className="feature">
                <h3>List Car</h3>
                <Link to="/add-car">
                  <button>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 3.75V14.25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M3.75 9H14.25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Add New Car
                  </button>
                </Link>
              </div>
            </div>
            <div className="car-cards">
              <CarCards />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCars;
