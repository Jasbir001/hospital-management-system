import { NavLink } from "react-router-dom";
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
     

              <ul className="navbar-nav w-100 d-flex align-items-center gap-2 list-unstyled mb-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">Home</NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">About</NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/doctors">Doctors</NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/services">Services</NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/appointment">Appointment</NavLink>
                </li>

                <li className="nav-item ms-auto">
                  <NavLink className="btn btn-light px-3" to="/login">Login</NavLink>
                </li>
              </ul>

        </div>
      </div>
    </nav>
  );
}

export default Header;
