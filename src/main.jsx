import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "@/App.jsx";
import { store } from "@/store/store.js";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);
