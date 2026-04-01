import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";

// Core admin modules
import AdminDashboard from "../components/admin/AdminDashboard";
import AdminReports from "../components/admin/AdminReports";
import ManageUsers from "../components/admin/ManageUsers";
import CreateUser from "../components/admin/CreateUser";
import LoginHistory from "../components/admin/LoginHistory";
import Attendance from "../components/admin/Attendance"; // nested under reports
import AdminProfile from "../components/admin/AdminProfile";

// Payroll modules (inside admin folder)
import PayrollDashboard from "../components/admin/payroll/PayrollDashboard";
import EmployeeSalaries from "../components/admin/payroll/EmployeeSalaries";
import GeneratePayslip from "../components/admin/payroll/GeneratePayslip";
import PayrollReports from "../components/admin/payroll/PayrollReports";
import PayrollStaff from "../components/admin/payroll/PayrollStaff";

const AdminRoutes = () => (
  <Routes>
    <Route
      path="/*"
      element={
        <ProtectedRoute>
          <AdminDashboard />
        </ProtectedRoute>
      }
    >
      {/* Default index route → dashboard overview */}
      <Route index element={<AdminReports />} />

      {/* Core admin routes */}
      <Route path="profile" element={<AdminProfile />} />
      <Route path="users" element={<ManageUsers />} />
      <Route path="users/create" element={<CreateUser />} />
      <Route path="reports" element={<AdminReports />}>
        <Route path="attendance" element={<Attendance />} /> {/* nested */}
      </Route>
      <Route path="login-history" element={<LoginHistory />} />

      {/* Payroll routes */}
      <Route path="payroll" element={<PayrollDashboard />} />
      <Route path="payroll/salaries" element={<EmployeeSalaries />} />
      <Route path="payroll/payslip" element={<GeneratePayslip />} />
      <Route path="payroll/reports" element={<PayrollReports />} />
      <Route path="payroll/staff" element={<PayrollStaff />} />
    </Route>
  </Routes>
);

export default AdminRoutes;