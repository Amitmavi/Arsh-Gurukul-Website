import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <section className="footer">
      <h4>About Us</h4>
      <p>
      Committed to preserving the ancient spirit of learning, our Gurukul stands as a sacred place where
       knowledge is not just taught but experienced. We believe in holistic education — one that shapes the body, mind, and soul.

       Our mission is to awaken the inner potential of every student through the timeless teachings of the Vedas, 
       the discipline of daily practice, and the guidance of enlightened mentors. Here, 
       learning is not confined to books but embedded in every aspect of life — from moral values and meditation to science, art, and culture.

      In a nurturing environment filled with devotion and discipline, 
      we cultivate curiosity, foster character, and empower students to become wise, compassionate, and responsible individuals.
      <br /> Join us in a journey where tradition meets transformation — where education is a sacred path, not just a destination.


      </p>

      <div className="icons">
        <FontAwesomeIcon icon={faFacebookF} className="fab" />
        <FontAwesomeIcon icon={faTwitter} className="fab" />
        <FontAwesomeIcon icon={faInstagram} className="fab" />
        <FontAwesomeIcon icon={faLinkedinIn} className="fab" />
      </div>

      <p>
        Made with <FontAwesomeIcon icon={faHeart} className="fa-heart" /> by Amit Gurjar
      </p>
    </section>
  );
};

export default Footer;
