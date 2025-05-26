import "../Faculty/TeachingFaculty.css";

const facultyData = [
  {
    name: "Dr. A. K. Verma",
    designation: "HOD, Computer Science",
    mobile: "9876543210",
    photo: "/images/2.jpg",
  },
  {
    name: "Ms. Pooja Sharma",
    designation: "Assistant Professor",
    mobile: "9876512345",
    photo: "/images/1.jpg",
  },
   {
    name: "Ms. Pooja Sharma",
    designation: "Assistant Professor",
    mobile: "9876512345",
    photo: "/images/1.jpg",
  },
   {
    name: "Ms. Pooja Sharma",
    designation: "Assistant Professor",
    mobile: "9876512345",
    photo: "/images/1.jpg",
  },
   {
    name: "Ms. Pooja Sharma",
    designation: "Assistant Professor",
    mobile: "9876512345",
    photo: "/images/1.jpg",
  },
  {
    name: "Ms. Pooja Sharma",
    designation: "Assistant Professor",
    mobile: "9876512345",
    photo: "/images/1.jpg",
  },
];

function TeachingFaculty() {
  return (
    <div className="faculty-container">
      <h2 className="faculty-heading"> Teaching Faculty</h2>
      <div className="faculty-grid">
        {facultyData.map((faculty, index) => (
          <div className="faculty-card" key={index}>
            <img
              className="faculty-photo"
              src={faculty.photo}
              alt={faculty.name}
            />
            <div className="faculty-info">
              <h3>{faculty.name}</h3>
              <p><strong>Designation:</strong> {faculty.designation}</p>
              {faculty.mobile && (
                <p><strong>Mobile:</strong> <a href={`tel:${faculty.mobile}`}>{faculty.mobile}</a></p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeachingFaculty;
