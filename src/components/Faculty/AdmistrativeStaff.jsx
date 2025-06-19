import "../Faculty/TeachingFaculty.css"; // Reusing the same CSS for consistency

const adminStaffData = [
 {
    name: "आदित्य आर्य",
    designation: "गणित, विज्ञान",
    photo: "/images/2.jpg",
  },
  {
    name: "सुधीर आर्य",
    designation: "संस्कृत साहित्य, हिंदी",
   
    photo: "/images/1.jpg",
  },
   {
    name: "रीत जी",
    designation: "सामाजिक विज्ञान ",
  
    photo: "/images/1.jpg",
  },
   {
    name: "आर्यवीर आर्य",
    designation: "हिंदी व्याकरण, कला, कंप्यूटर",
 
    photo: "/images/1.jpg",
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
