import { Link, NavLink } from "react-router-dom";
import { Container, Nav, Navbar as NavbarRB } from "react-bootstrap";

export default function Navbar() {
  return (
    <NavbarRB
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
      sticky="top"
      data-bs-theme="dark"
    >
      <Container fluid>
        <NavbarRB.Brand>
          <Link className="navbar-brand" to="/">
            MyFood
          </Link>
        </NavbarRB.Brand>
        <NavbarRB.Toggle aria-controls="responsive-navbar-nav" />
        <NavbarRB.Collapse id="responsive-navbar-nav">
          <Nav>
            <NavLink to="/stats" className="nav-link">
              Статистика
            </NavLink>
            <NavLink className="nav-link" to="/food">
              Еда
            </NavLink>
            <NavLink className="nav-link" to="/journal">
              Журнал
            </NavLink>
            <NavLink className="nav-link" to="/weight">
              Вес
            </NavLink>
            <NavLink className="nav-link" to="/settings">
              Настройки
            </NavLink>
          </Nav>
        </NavbarRB.Collapse>
      </Container>
    </NavbarRB>
  );
}
