import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import FoodList from "./components/food/FoodList.tsx";
import FoodItem from "./components/food/FoodItem.tsx";
import Journal from "./components/journal/Journal.tsx";
import Weight from "./components/weight/Weight.tsx";
import Settings from "./components/settings/Settings.tsx";
import RouteError from "./components/common/RouteError.tsx";
import Stats from "./components/stats/Stats.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route errorElement={<RouteError />}>
        <Route index element={<Navigate to="/stats" replace />} />
        <Route path="food" element={<FoodList />} />,
        <Route path="food/edit/:key" element={<FoodItem isEdit={true} />} />,
        <Route path="food/create" element={<FoodItem isEdit={false} />} />
        <Route path="journal" element={<Journal />} />,
        <Route path="weight" element={<Weight />} />
        <Route path="settings" element={<Settings />} />
        <Route path="stats" element={<Stats />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
