import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./views/pages";
import MainPage from "./views/pages/main";
import LoginBOQ from "./views/pages/loginPage";
import HomePage from "./views/pages/homePage";
import WarningPage from "./views/pages/warningPage";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="warning" element={<WarningPage />} />
      <Route path="login" element={<LoginBOQ />} />
      <Route path="main" element={<MainPage />} />
    </Route>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
