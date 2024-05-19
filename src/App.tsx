import "./App.css";
import FoodItem from "./components/Food/FoodItem";
import FoodList from "./components/Food/FoodList";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="mb-3"></div>
        <div id="notifications"></div>
        {/* TODO: add routing */}
        <FoodList />
        {/* <FoodItem /> */}
      </div>
    </>
  );
}
