import "./App.css";
import FoodItem from "./components/Food/FoodItem";
import FoodList from "./components/Food/FoodList";
import Navbar from "./components/Navbar";
import Notifications from "./components/Notifications";
import { notifStore } from "./components/Notifications";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="mb-3"></div>

        <Notifications store={notifStore} />

        {/* App pages */}
        <FoodList store={notifStore} />
        {/* <FoodItem /> */}
      </div>
    </>
  );
}
