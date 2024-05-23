import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FoodList from "./components/Food/FoodList.tsx";
import { notifStore } from "./components/Notifications";
import FoodItem from "./components/Food/FoodItem.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "food",
        element: <FoodList store={notifStore} />,
      },
      {
        path: "food/:key",
        element: <FoodItem />,
      },
      {
        path: "*",
        element: <div className="alert alert-danger">Страница не найдена</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
