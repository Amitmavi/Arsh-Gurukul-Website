import "../Faculty/TeachingFaculty.css";

const facultyData = [

   {
    name: " डॉ. सुधा आर्य",
    designation: "अंग्रेजी, संस्कृत",
   
    photo: "/images/S9.jpeg",
  },
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
    designation: "(सामाजिक विज्ञान )",
  
    photo: "/images/1.jpg",
  },
   {
    name: "आर्यवीर आर्य",
    designation: "(हिंदी व्याकरण, कला, कंप्यूटर)",
 
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
