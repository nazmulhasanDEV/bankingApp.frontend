import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Layout from "@/views/pages/index.jsx";
import MainPage from "@/views/pages/main";
import LoginBOQ from "@/views/pages/loginPage";
import HomePage from "@/views/pages/homePage";
import WarningPage from "@/views/pages/warningPage";
import AccountsHome from "./components/ui/tabComponent/home";
import AccountDetails from "./components/ui/tabComponent/accountDetails";
import ExistingPayee from "./components/ui/tabComponent/existingPayee";
import OthersPayee from "./components/ui/tabComponent/othersPayeeTab";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="warning" element={<WarningPage />} />
      <Route path="login" element={<LoginBOQ />} />
      <Route path="accounts" element={<MainPage />} />
      <Route path="account-home" element={<AccountsHome />} />
      <Route path="account-details" element={<AccountDetails />} />
      <Route path="existing-payee" element={<ExistingPayee />} />
      <Route path="others-payee" element={<OthersPayee />} />
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
