
import "../Gallary/Gallary.css";

const images = [
  { src: "/images/S1.jpeg", alt: "Gurukul Event 1" },
  { src: "/images/S2.jpeg", alt: "Gurukul Event 2" },
  { src: "/images/S3.jpeg", alt: "Gurukul Event 3" },
  { src: "/images/S4.jpeg", alt: "Gurukul Event 4" },
  { src: "/images/S5.jpeg", alt: "Other Image 1" },
  { src: "/images/2.jpg", alt: "Other Image 2" },
  { src: "/images/1.jpg", alt: "Other Image 3" },
  { src: "/images/S7.jpeg", alt: "Other Image 4" },
   { src: "/images/S8.jpeg", alt: "Other Image 4" },
    { src: "/images/S9.jpeg", alt: "Other Image 4" },
     { src: "/images/S10.jpeg", alt: "Other Image 4" },
      { src: "/images/S14.jpeg", alt: "Other Image 4" },
       { src: "/images/S12.jpeg", alt: "Other Image 4" },
];

function Gallary() {
  return (
    <div className="gallery-container">
      <h2 className="gallery-heading">Gurukul Events & Gallery</h2>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="gallery-card" key={index}>
            <img src={img.src} alt={img.alt} className="gallery-image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallary;
