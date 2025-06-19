
import "../Footer/Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
    <footer className="footer">
      {/* Part 1: Logo and Contact Info */}
      <div className="footer-section footer-contact">
        <img
          src="/images/Logo.jpeg" // Replace with your logo path
          alt="Gurukul Logo"
          className="footer-logo"
        />
        <address>
          वृद्धि आर्ष गुरुकुल विद्यापीठ ,<br />
          साम्भली- निसिंग रोड, साम्भली ,<br />
          करनाल, हरियाणा ,<br />
          
          <br />
          Phone: +91-9871501658, 9667136238<br />
          
          <br />
          Email: <a href="vriddhiarshgurukul@gmail.com">vriddhiarshgurukul@gmail.com</a><br />
          
          <br />
          {/* Website: <a href="https://gurukularsh.com" target="_blank" rel="noreferrer">gurukulArsh.com</a><br /> */}
          <br />
          No. of Visitors: <strong>415,982</strong>
        </address>
      </div>

      {/* Part 2: Page Links */}
      <div className="footer-section footer-links">
        <h4>Quick Links</h4>
        <ul>
          <li>About Us</li>
          <li>Admission Procedure</li>
          <li>Fee Structure</li>
          <li>Infrastructure</li>
          <li>Contact Us</li>
        </ul>
      </div>

      {/* Part 3: Social Media */}
      <div className="footer-section footer-social">
        <h4>Follow Us</h4>
        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://youtube.com/@vriddhiarshgurukul?si=BhUp13cIC3W41Z-W" target="_blank" rel="noreferrer" aria-label="YouTube">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>

      {/* Part 4: Map */}
      <div className="footer-section footer-map">
        <h4>Our Location</h4>
        <div className="map-container">
          <iframe
            title="Gurukul Kurukshetra Location"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3464.211793133605!2d76.78588437554221!3d29.74258307507693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDQ0JzMzLjMiTiA3NsKwNDcnMTguNSJF!5e0!3m2!1sen!2sin!4v1750336316341!5m2!1sen!2sin"
            width="100%"
            height="150"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          Made with <span className="heart">❤️</span> by Amit Gurjar
        </p>
      </div>
    </footer>
  );
};

export default Footer;
