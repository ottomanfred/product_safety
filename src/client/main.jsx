import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import store from "./store";

import AuthForm from "./features/auth/AuthForm";
import Root from "./layout/Root.jsx";
import Home from "./features/reports/Home.jsx";
import Profile from "./features/profile/Profile.jsx";
import IncidentForm from "./features/profile/IncidentForm.jsx";
import Incident from "./features/reports/Incident.jsx";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Barcode from "./features/barcode/Barcode.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/barcode", element: <Barcode /> },
      { path: "/login", element: <AuthForm /> },
      { path: "/profile", element: <Profile /> },
      { path: "/incidents/submit", element: <IncidentForm /> },
      { path: "/incidents/:id", element: <Incident /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
