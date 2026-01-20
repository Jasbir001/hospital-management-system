
import { Link } from "react-router-dom";
import heroimage from "../../public/image/hero_image.jpg"

export function Main() {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <div className="row align-items-center">
         
          <div className="col-md-6">
            <h1 className="fw-bold text-primary">
              Caring for Your Health
            </h1>
            <p className=" mt-3">
              Book appointments with trusted doctors and get quality healthcare services.
            </p>

            <a to="/appointment" className="btn btn-primary me-2">
              Book Appointment
            </a>
            <a to="/services" className="btn btn-outline-primary">
              Our Services
            </a>
          </div>
          <div className="col-md-6 text-center mt-4">
            <img src={heroimage} alt="hero-image" className="img-fluid"/>
          </div>

        </div>
      </div>
    </section>
  );
}

