import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import ItemListPage from "../pages/ItemListPage";
import OrderListPage from "../pages/OrderListPage";
import DeliveryVehicleListPage from "../pages/DeliveryVehicleListPage";
import CustomerListPage from "../pages/CustomerListPage";
import RegisterPage from "../pages/RegisterPage";
import PrivateRoute from "./PrivateRoute";
import HomePage from "../pages/HomePage";
import PaymentPage from "../pages/PaymentPage"; 
import SearchBox from "../components/SearchBar";
import TrackPage from "../pages/TrackPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/items"
        element={
          <PrivateRoute>
            <ItemListPage />{" "}
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/orders"
        element={
          <PrivateRoute>
            <OrderListPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/delivery-vehicles"
        element={
          <PrivateRoute>
            <DeliveryVehicleListPage />{" "}
          </PrivateRoute>
        }
      />
      <Route
        path="/customers"
        element={
          <PrivateRoute>
            <CustomerListPage />{" "}
          </PrivateRoute>
        }
      />
      <Route
        path="/payments"
        element={
          <PrivateRoute>
            <PaymentPage />{" "}
          </PrivateRoute>
        }
      />
      <Route
        path="/track"
        element={
          <PrivateRoute>
            <TrackPage />{" "}
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
