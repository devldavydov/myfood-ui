import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Notifications from "./components/Notifications";
import { notifStore } from "./store/NotificationStore";
import { OutletContext } from "./routing/OutletContext";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="mb-3"></div>

        <Notifications store={notifStore} />

        <Outlet context={{ notifStore: notifStore } as OutletContext} />
      </div>
    </>
  );
}
