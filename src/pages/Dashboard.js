import React, { useState } from "react";
import { Link } from "react-router-dom";
import dashboardImg from "../assets/DashboardImg.png";
import carsImg from "../assets/CarsImg.png";
import "../styles/Dashboard.css";
import { DatePicker } from "antd";
import { BarElement, CategoryScale, Chart as ChartJs, Legend, LinearScale, Title, Tooltip } from "chart.js";
import APIOrder from "../apis/APIOrder";
import { Bar } from "react-chartjs-2";
import OrdersTable from "../components/OrdersTable";
import Header from "../components/Header";
import Sidebar1 from "../components/Sidebar1.js";
import Sidebar2 from "../components/Sidebar2.js";

ChartJs.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, Title);

export const options = {
  responsive: true,
  plugins: {
    Legend: {
      position: "top",
    },
  },
};

export const generateDataChart = (labels, datasets) => ({
  labels,
  datasets,
});

const lastDate = (y, m) => new Date(y, m, 0).getDate();

const Dashboard = () => {
  const [data, setData] = useState({});
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { month } = Object.fromEntries(formData);
    if (month) {
      const [y, m] = month.split("-");
      const last = lastDate(y, m);
      const from = `${y}-${m}-01`;
      const until = `${y}-${m}-${last}`;

      if (from && until)
        APIOrder.getOrderReports({ from, until }).then((res) => {
          const datasets = [];
          const labels = [];
          const datasetItem = {
            label: "Rented Car",
            data: [],
            backgroundColor: "#586B90",
          };
          res.forEach(({ day, orderCount }) => {
            labels.push(day.split("-")[2]);
            datasetItem.data.push(orderCount);
          });
          datasets.push(datasetItem);
          setData(generateDataChart(labels, datasets));
        });
    }
  };

  return (
    <div className="dashboard" role="dashboard">
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
      <div className="sidebar2">
        <div className="header-logo">
          <svg width="100" height="34" viewBox="0 0 100 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="34" fill="#CFD4ED" />
          </svg>
        </div>
        <div className="sidebar2-p">
          <div>
            <h5>DASHBOARD</h5>
          </div>
          <div className="sidebar2-name">
            <h5>Dashboard</h5>
          </div>
        </div>
      </div>
      <div className="content1">
        <Header />
        <div className="content">
          <div className="barchart">
            <div className="navigation">
              <p>Dashboard</p>
              <p> &gt;</p>
              <p>Dashboard</p>
            </div>
            <div>
              <div className="barchart-descrpition">
                <div className="barchart-des">
                  <svg width="4" height="24" viewBox="0 0 4 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="4" height="24" fill="#0D28A6" />
                  </svg>
                  <h4>Rented Car Data Visualization</h4>
                </div>
              </div>
              <form onSubmit={onSubmit} className="barchart-shift">
                <p>Month</p>
                <DatePicker className="barchart-input" picker="month" name="month" required />
                <button type="submit">Go</button>
              </form>
              <div className="barchart-main">
                {Object.values(data).length > 0 ? (
                  <>
                    <div className="diagram">
                      <div className="barchart-main1">
                        <p>Amount of Car Rented</p>
                      </div>
                      <Bar options={options} data={data} />
                      {""}
                    </div>
                    <p>Date</p>
                  </>
                ) : (
                  <p>Choose The Month</p>
                )}
              </div>
            </div>
            <div className="table">
              <div className="table-description">
                <h3>Dashboard</h3>
                <div>
                  <div>
                    <svg width="4" height="24" viewBox="0 0 4 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="4" height="24" fill="#0D28A6" />
                    </svg>
                  </div>

                  <p>List Order</p>
                </div>
              </div>
              <div className="table-main">
                <OrdersTable />
                {/* <img src="Table.png" alt="sementara" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
