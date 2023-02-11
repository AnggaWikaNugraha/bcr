import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Auth from "../utils/Auth";
import Layout from "../components/Layout.js";

function PrivateRoute() {
  const location = useLocation();
  const { pathname } = location;
  let path = "/sign-in";
  if (pathname !== "/") {
    path += `?return_to=${pathname.slice(1, pathname.length)}`;
  }

  if (Auth.isAuthorization()) return <Outlet />;

  return <Navigate to={path} />;
}

export default PrivateRoute;
