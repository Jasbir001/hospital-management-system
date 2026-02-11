import Header from "../component/Header";

function About() {
  return (
    <>
    <Header/>
    <section className="py-5">
      <div className="container">
        <h3 className="text-center fw-bold mb-4 text-primary">
          About JP Hospital
        </h3>

        <div className="row align-items-center">
          <div className="col-md-6 mb-3">
            <p className="text-muted">
              JP Hospital is committed to providing quality healthcare services
              with experienced doctors and modern medical facilities.
            </p>
            <p className="text-muted">
              Our goal is to make healthcare accessible, reliable, and patient-friendly
              for everyone.
            </p>
          </div>

          <div className="col-md-6 text-center">
            <img
              src="/about.jpg"
              alt="about hospital"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default About;
