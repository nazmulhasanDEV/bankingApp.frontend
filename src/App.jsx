import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Layout from "@/views/pages/index.jsx";
import LoginBOQ from "@/views/pages/loginPage";
import HomePage from "@/views/pages/homePage";
import WarningPage from "@/views/pages/warningPage";
import AccountsHome from "./components/ui/tabComponent/home";
import AccountDetails from "./components/ui/tabComponent/accountDetails";
import ExistingPayee from "./components/ui/tabComponent/existingPayee";
import OthersPayee from "./components/ui/tabComponent/othersPayeeTab";
import ProtectedRoute from "./views/AuthProvider";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="warning" element={<WarningPage />} />
      <Route path="login" element={<LoginBOQ />} />
      <Route path="account-home" element={<ProtectedRoute><AccountsHome /></ProtectedRoute>} />
      <Route path="account-details" element={<ProtectedRoute><AccountDetails /></ProtectedRoute>} />
      <Route path="existing-payee" element={<ProtectedRoute><ExistingPayee /></ProtectedRoute>} />
      <Route path="others-payee" element={<ProtectedRoute><OthersPayee /></ProtectedRoute>} />
    </Route>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
};

export default App;
