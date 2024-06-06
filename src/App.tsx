import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar, { ILink } from "./components/common/Navbar";
import { Container } from "react-bootstrap";

export default function App() {
  return (
    <>
      <Navbar
        brand={{
          name: "MyFood",
          to: "/",
        }}
        links={[
          {
            name: "Статистика",
            to: "/stats",
          },
          {
            name: "Еда",
            to: "/food",
          },
          {
            name: "Журнал",
            to: "/journal",
          },
          {
            name: "Вес",
            to: "/weight",
          },
          {
            name: "Настройки",
            to: "/settings",
          },
        ]}
      />
      <Container>
        <div className="mb-3"></div>
        <Outlet />
      </Container>
    </>
  );
}
