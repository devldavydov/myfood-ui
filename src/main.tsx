import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import FoodList from "./components/Food/FoodList.tsx";
import FoodItem from "./components/Food/FoodItem.tsx";
import Journal from "./components/Journal/Journal.tsx";
import Weight from "./components/Weight/Weight.tsx";
import Settings from "./components/Settings/Settings.tsx";
import RouteError from "./components/RouteError.tsx";
import Stats from "./components/Stats/Stats.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route errorElement={<RouteError />}>
        <Route index element={<Stats />} />
        <Route path="food" element={<FoodList />} />,
        <Route path="food/edit/:key" element={<FoodItem isEdit={true} />} />,
        <Route path="food/create" element={<FoodItem isEdit={false} />} />
        <Route path="journal" element={<Journal />} />,
        <Route path="weight" element={<Weight />} />
        <Route path="settings" element={<Settings />} />
        <Route
          path="*"
          element={
            <div className="alert alert-danger">Страница не найдена</div>
          }
        />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
