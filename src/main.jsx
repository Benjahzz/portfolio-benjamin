import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter, RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Layout from "./components/layout";
import "./styles/app.scss";
import Index from "./pages";
import View from "./pages/view";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout navbar={true}><Index /></Layout>,
    
  },
  {
    path : "/project/:name",
    element: <Layout navbar={false}><View/></Layout>
  },
  {
    path: "*",
    element: <h4>Error</h4>
  }


])
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
