
import doctorsData from "./Doctorsdata";

function DoctorsPreview() {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4 text-primary">Our Doctors</h2>

        <div className="row justify-content-center g-4">
          {doctorsData.slice(0, 4).map((doc) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={doc.id}>
              <div className="card text-center shadow-sm h-100">
                <img
                  src={doc.image}
                  alt="doctor"
                  className="card-img-top"
                  style={{
                    // height: "200px",
                    objectFit: "cover",
                  }}
                />

                <div className="card-body">
                  <h6 className="fw-semibold mb-1">{doc.name}</h6>
                  <p className="text-muted mb-0">{doc.specialty}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default DoctorsPreview;
