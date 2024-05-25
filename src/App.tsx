import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="mb-3"></div>

        <Outlet />
      </div>
    </>
  );
}
