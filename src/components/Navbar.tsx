import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary sticky-top"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          MyFood
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/food">
                Еда
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/journal">
                Журнал
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/weight">
                Вес
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/settings">
                Настройки
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
