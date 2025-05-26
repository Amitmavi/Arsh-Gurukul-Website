import { useEffect, useState } from "react";
import "./ImgSlider.css";

// Image imports (move images to /src/assets/images/ if possible)
import img1 from "../../../public/images/1.jpg";
import img2 from "../../../public/images/2.jpg";
import img3 from "../../../public/images/3.jpeg";
import img4 from "../../../public/images/4.png";
import img5 from "../../../public/images/8.png";
import img6 from "../../../public/images/18.jpg";
import img7 from "../../../public/images/21.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7];

function ImgSlider() {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  // Auto slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 4000);

    return () => clearInterval(timer);
  }, [length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + length) % length);
  };

  return (
    <div className="slider">
      <button className="arrow left" onClick={prevSlide}>❮</button>
      <img src={images[current]} alt={`Slide ${current}`} className="slide-img" />
      <button className="arrow right" onClick={nextSlide}>❯</button>
    </div>
  );
}

export default ImgSlider;
