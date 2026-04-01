import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import ReceptionistDashboard from "../components/receptionist/ReceptionistDashboard";
import AppointmentList from "../components/receptionist/AppointmentList";
import CheckInForm from "../components/receptionist/CheckInForm";
import CheckOutForm from "../components/receptionist/CheckOutForm";

const ReceptionistRoutes = () => (
  <Routes>
    <Route
      path="/*"
      element={
        <ProtectedRoute>
          <ReceptionistDashboard />
        </ProtectedRoute>
      }
    >
      <Route index element={<AppointmentList />} />
      <Route path="appointments" element={<AppointmentList />} />
      <Route path="checkin" element={<CheckInForm />} />
      <Route path="checkout" element={<CheckOutForm />} />
    </Route>
  </Routes>
);

export default ReceptionistRoutes;