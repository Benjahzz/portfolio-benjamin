import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  HashRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import App from "./App";
import Layout from "./components/layout";
import "./styles/app.scss";
import Index from "./pages";
import View from "./pages/view";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
