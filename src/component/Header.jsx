
import logo from "../../public/image/jp_logo.jpg";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container-fluid">
        <div className="navbar-brand fw-bold d-flex align-items-center" to="/">
          <img src={logo} alt="logo" width="50" height="50" className="rounded me-2"/>
            <h4>JP Hospital</h4>
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav w-100">
            <li className="nav-item">
              <a className="nav-link" to="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" to="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" to="/about">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" to="/doctors">Doctors</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" to="/services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" to="/appointment">Appointment</a>
            </li>
            <li className="nav-item ms-auto">
              <a className="btn btn-light" to="/login">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
