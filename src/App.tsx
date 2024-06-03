import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/common/Navbar";
import { Container } from "react-bootstrap";

export default function App() {
  return (
    <>
      <Navbar />
      <Container>
        <div className="mb-3"></div>
        <Outlet />
      </Container>
    </>
  );
}
