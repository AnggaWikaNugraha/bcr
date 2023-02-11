import { MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import "../styles/Dummy.css";
import { Layout, Menu, theme } from "antd";
import React, { useState } from "react";
import "../styles/ListCars.css";
import dashboard from "../assets/DashboardImg.png";
import CarCards from "../components/CarCards.js";
import { Link } from "react-router-dom";
import dashboardImg from "../assets/DashboardImg.png";
import carsImg from "../assets/CarsImg.png";

const { Header, Sider, Content } = Layout;
const Dummy = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} theme="light" collapseWidth="290px">
        <div className="logo">
          <div style={{ margin: "18px", height: "34px", background: "#CFD4ED" }} />
        </div>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          // items={[
          //   {
          //     key: "1",
          //     icon: <UserOutlined />,
          //     label: "Dashboard",
          //   },
          //   {
          //     key: "2",
          //     // icon: <VideoCameraOutlined />,
          //     icon: <img src={dashboard} alt="dashboadr" />,
          //     label: "List Cars",
          //   },
          // ]}
        >
          <div className="bar-samping d-flex ">
            <div className="sb-1">
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
            <div className="sb-2">
              <div className="sidebar2-p">
                <div>
                  <h5>DASHBOARD</h5>
                </div>
                <div className="sidebar2-name">
                  <h5>Dashboard</h5>
                </div>
              </div>
            </div>
          </div>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: "trigger",
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 100,
            background: "#f7f6fa",
          }}
        >
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
        </Content>
      </Layout>
    </Layout>
  );
};
export default Dummy;
