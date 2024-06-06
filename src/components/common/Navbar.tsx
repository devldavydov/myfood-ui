import { Link, NavLink } from "react-router-dom";
import { Container, Nav, Navbar as NavbarRB } from "react-bootstrap";

export interface ILink {
  name: string;
  to: string;
}

export interface INavbarProps {
  brand: ILink;
  links: ILink[];
}

export default function Navbar({ brand, links }: INavbarProps) {
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
          <Link className="navbar-brand" to={brand.to}>
            {brand.name}
          </Link>
        </NavbarRB.Brand>
        <NavbarRB.Toggle aria-controls="responsive-navbar-nav" />
        <NavbarRB.Collapse id="responsive-navbar-nav">
          <Nav>
            {links.map((l) => (
              <NavLink key={l.to} className="nav-link" to={l.to}>
                {l.name}
              </NavLink>
            ))}
          </Nav>
        </NavbarRB.Collapse>
      </Container>
    </NavbarRB>
  );
}
