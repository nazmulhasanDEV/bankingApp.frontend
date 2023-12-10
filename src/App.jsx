/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import {
  Dashboard,
  Product,
  Purchase,
  Bills,
  Expense,
  Vendors,
  Report,
  Sales,
  Customers,
  Estimate,
  Invoices,
  RecurringInvoice,
  Settings,
  BankingDetails,
  GeneralSettings,
  Pricing,
  UserRoles,
  Library,
  Profile
} from "./views/pages";
import { AuthProvider } from "./auth/AuthContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="product" element={<Product />} />
      <Route path="sales" element={<Sales />} />
      <Route path="sales">
        <Route path="customers" element={<Customers />} />
        <Route path="estimate" element={<Estimate />} />
        <Route path="invoices" element={<Invoices />} />
        <Route path="recurring-invoices" element={<RecurringInvoice />} />
      </Route>
      <Route path="purchase" element={<Purchase />} />
      <Route path="purchase">
        <Route path="bills" element={<Bills />} />
        <Route path="vendors" element={<Vendors />} />
        <Route path="expense" element={<Expense />} />
      </Route>
      <Route path="report" element={<Report />} />
      <Route path="settings" element={<Settings />} />
      <Route path="settings">
        <Route path="general-settings" element={<GeneralSettings />} />
        <Route path="user-roles" element={<UserRoles />} />
        <Route path="banking-details" element={<BankingDetails />} />
        <Route path="pricing" element={<Pricing />} />
      </Route>
      <Route path="/library" element={<Library />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>
  )
);

const App = () => {

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
