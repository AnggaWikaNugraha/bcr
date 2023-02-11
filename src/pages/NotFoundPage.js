import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: "center", background: "#f7f6fa", minHeight: "100vh" }} role="notFoundPage">
      <h1 style={{ color: "#0d28a6", fontWeight: 900, fontSize: "300px" }}>404</h1>
      <h1 style={{ fontWeight: 700, fontFamily: "serif", marginTop: "30px", marginBottom: "30px" }}>PAGE NOT FOUND</h1>
      <em>Maybe you entered the wrong word</em>
      <br />
      <Link to="/">
        <strong>Back To Dashboard</strong>
      </Link>
    </div>
  );
};

export default NotFoundPage;
