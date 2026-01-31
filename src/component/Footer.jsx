
function Footer() {
  return (
    <footer className="bg-dark text-white pt-4">
      <div className="container">
        <div className="row">

          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">JP Hospital</h5>
            <p className="text-primary">
              Trusted healthcare services with experienced doctors and modern facilities.
            </p>
          </div>

          <div className="col-md-4 mb-3">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>Doctors</li>
              <li>Services</li>
              <li>Appointment</li>
            </ul>
          </div>

          <div className="col-md-4 mb-3">
            <h6 className="fw-bold">Contact</h6>
            <p className="mb-1">📍 Sec-34A, Chandigarh, India</p>
            <p className="mb-1">📞 +91 XXXXX 96965</p>
            <p>✉️ jphospital@gmail.com</p>
          </div>

        </div>

        <div className="text-center border-top pt-3 mt-3 text-muted">
          © 2025 JP Hospital. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
