import "../Faculty/TeachingFaculty.css"; // Reusing the same CSS for consistency

const adminStaffData = [
  {
    name: "Mr. Ramesh Kumar",
    designation: "Registrar",
    mobile: "9876543001",
    photo: "/images/1.jpg",
  },
  {
    name: "Ms. Sunita Joshi",
    designation: "Office Assistant",
    mobile: "9876543002",
    photo: "/images/2.jpg",
  },
  {
    name: "Mr. Prakash Singh",
    designation: "Clerk",
    mobile: "9876543003",
    photo: "/images/2.jpg",
  },
  {
    name: "Mr. Prakash Singh",
    designation: "Clerk",
    mobile: "9876543003",
    photo: "/images/2.jpg",
  },
  {
    name: "Mr. Prakash Singh",
    designation: "Clerk",
    mobile: "9876543003",
    photo: "/images/2.jpg",
  },
  {
    name: "Mr. Prakash Singh",
    designation: "Clerk",
    mobile: "9876543003",
    photo: "/images/2.jpg",
  },
];

function AdmistrativeStaff() {
  return (
    <div className="faculty-container">
      <h2 className="faculty-heading"> Administrative Staff</h2>
      <div className="faculty-grid">
        {adminStaffData.map((staff, index) => (
          <div className="faculty-card" key={index}>
            <img
              className="faculty-photo"
              src={staff.photo}
              alt={staff.name}
            />
            <div className="faculty-info">
              <h3>{staff.name}</h3>
              <p><strong>Designation:</strong> {staff.designation}</p>
              {staff.mobile && (
                <p><strong>Mobile:</strong> <a href={`tel:${staff.mobile}`}>{staff.mobile}</a></p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdmistrativeStaff;
