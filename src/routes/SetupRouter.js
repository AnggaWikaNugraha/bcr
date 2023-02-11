import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import ListCars from "../pages/ListCars";
import AddCar from "../pages/AddCar";
import SignIn from "../pages/SignIn";
import NotFoundPage from "../pages/NotFoundPage";
import PrivateRoute from "./PrivateRoute";
import ProtectedRoute from "./ProtectedRoute";
import Dummy from "../components/Dummy";
import EditCar from "../pages/EditCar";
// import OrdersTable from "../components/OrdersTable";

function SetUpRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/sign-in" element={<SignIn />} />
        </Route>
        <Route path="/" element={<PrivateRoute />}>
          <Route index element={<Dashboard />} />
          <Route path="/list-cars" element={<ListCars />} />
          <Route path="/add-car" element={<AddCar />} />
          <Route path="/dummy" element={<Dummy />} />
          <Route path="/edit-car/:carId" element={<EditCar />} />
          {/* <Route path="/orders-table" element={<OrdersTable />} /> */}
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default SetUpRouter;
