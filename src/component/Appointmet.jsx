function Appointment() {
  return (
    <section className="py-5">
      <div className="container">
        <h3 className="text-center fw-bold mb-4 text-primary p-2">Book Appointment</h3>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <form className="card p-4 shadow-sm">
              <input className="form-control mb-3" placeholder="Patient Name" />
              <input className="form-control mb-3" placeholder="Doctor Name" />
              <input type="date" className="form-control mb-3" />
              <button className="btn btn-primary w-100">
                Book Appointment
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Appointment;
