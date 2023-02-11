import React from "react";
import Sidebar1 from "../components/Sidebar1.js";
import Sidebar2 from "../components/Sidebar2.js";
import Header from "../components/Header.js";

const Layout = ({ children }) => {
  return (
    <>
      <Sidebar1 />
      <Sidebar2 />
      <Header />
      {children}
    </>
  );
};

export default Layout;
