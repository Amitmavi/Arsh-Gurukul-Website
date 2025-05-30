// TopScorer.jsx

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "../TopScorer/TopScorer.css";
import { Autoplay } from "swiper/modules";

const students = [
  {
    name: "Amit Gurjar",
    class: "Class 10",
    percentage: "95%",
    img: "/students/amit.jpg",
  },
  {
    name: "Priya Sharma",
    class: "Class 12",
    percentage: "97.6%",
    img: "/students/priya.jpg",
  },
  {
    name: "Ravi Mehta",
    class: "Class 8",
    percentage: "93.4%",
    img: "/students/ravi.jpg",
  },
];

function TopScorer() {
  return (
    <div className="slider-container">
      <h2 className="section-title">Our Top Scorers</h2>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {students.map((student, index) => (
          <SwiperSlide key={index}>
            <div className="student-card">
              <div className="card-bg-split"></div>
              <img src={student.img} alt={student.name} className="student-img" />
              <div className="student-info">
                <h3>{student.name}</h3>
                <p>{student.class}</p>
                <strong>{student.percentage}</strong>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TopScorer;
