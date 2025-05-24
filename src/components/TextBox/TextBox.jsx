import { Link } from "react-router-dom";

import "./TextBox.css";

const TextBox = () => {
  return (
    <div className="text-box">
      <h1>🌿 Welcome to the Gurukul</h1>
      <p>
        Our mission is to revive the essence of ancient education through holistic learning <br /> where discipline, wisdom, and spirituality converge to shape extraordinary lives. <br /> 🕉️ Vidya Dadati Vinayam — Knowledge brings humility.
      </p>
      <Link to="/" className="hero-btn">
        Visit us To Know More
      </Link>
    </div>
  );
};

export default TextBox;
