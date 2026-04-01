import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import PayrollDashboard from "../components/admin/payroll/PayrollDashboard";
import PayrollReports from "../components/admin/payroll/PayrollReports";
import PayrollStaff from "../components/admin/payroll/PayrollStaff";
import EmployeeSalaries from "../components/admin/payroll/EmployeeSalaries";
import GeneratePayslip from "../components/admin/payroll/GeneratePayslip";

const PayrollRoutes = () => (
  <Routes>
    <Route
      path="/*"
      element={
        <ProtectedRoute>
          <PayrollDashboard />
        </ProtectedRoute>
      }
    >
      {/* Default landing page */}
      <Route index element={<PayrollReports />} />

      {/* Nested routes */}
      <Route path="reports" element={<PayrollReports />} />
      <Route path="staff" element={<PayrollStaff />} />
      <Route path="salaries" element={<EmployeeSalaries />} />
      <Route path="payslip" element={<GeneratePayslip />} />
    </Route>
  </Routes>
);

export default PayrollRoutes;