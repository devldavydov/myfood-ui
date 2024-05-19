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
              <a className="nav-link" href="/food">
                Еда
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/journal">
                Журнал
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/weight">
                Вес
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/settings">
                Настройки
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
