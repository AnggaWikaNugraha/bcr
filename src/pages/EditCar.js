import React from "react";
import { Link, useParams } from "react-router-dom";
import dashboardImg from "../assets/DashboardImg.png";
import carsImg from "../assets/CarsImg.png";
import "../styles/AddCar.css";
import Header from "../components/Header";
import EditCarForm from "../components/EditCarForm.js";
import APIOrder from "../apis/APIOrder.js";

const EditCar = () => {
  const params = useParams();

  return (
    <div className="editcar d-flex flex-direction-row " role="editcar" style={{ background: "#f7f6fa" }}>
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
          <div className="addcar-content">
            <div className="addcar-feature">
              <div className="navig">
                <p>Cars</p>
                <p>&gt;</p>
                <Link to="/list-cars">
                  <p>List Car</p>
                </Link>
                <p>&gt;</p>
                <p>Edit car</p>
              </div>
              <h3>Edit car</h3>
            </div>
            <EditCarForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCar;
