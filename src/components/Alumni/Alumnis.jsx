
import "../Alumni/Alumni.css";

const alumniData = [
  {
    name: "Amit Gurjar",
    percentage: "87.5%",
    photo: "/images/Amit.jpeg",
  },
  {
    name: "Amit Gurjar",
    percentage: "91.2%",
    photo: "/images/Amit.jpeg",
  },
  {
    name: "Anuj kumar",
    percentage: "89.3%",
    photo: "/images/Anuj.jpeg",
  },
  {
    name: "Amit Gurjar",
    percentage: "93.1%",
    photo: "/images/Amit.jpeg",
  },
    {
    name: "Amit Gurjar",
    percentage: "93.1%",
    photo: "/images/Amit.jpeg",
  },
    {
    name: "Amit Gurjar",
    percentage: "93.1%",
    photo: "/images/Amit.jpeg",
  },
    {
    name: "Amit Gurjar",
    percentage: "93.1%",
    photo: "/images/Amit.jpeg",
  },
    {
    name: "Amit Gurjar",
    percentage: "93.1%",
    photo: "/images/Amit.jpeg",
  },
];

function Alumnis() {
  return (
    <div className="alumni-container">
      <h2 className="alumni-heading">Our Proud Alumni</h2>
      <div className="alumni-grid">
        {alumniData.map((alumni, index) => (
          <div className="alumni-card" key={index}>
            <img
              className="alumni-photo"
              src={alumni.photo}
              alt={alumni.name}
            />
            <div className="alumni-info">
              <h3>{alumni.name}</h3>
              <p><strong>Percentage:</strong> {alumni.percentage}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Alumnis;
