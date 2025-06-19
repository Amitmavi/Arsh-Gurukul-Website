import "./ContactComponent.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const ContactComponent = () => {
  return (
    <section className="contact-us">
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-subtitle">Lets Get in Touch.</p>

      <div className="row">
        {/* Contact Info */}
        <div className="contact-col contact-info">
          <h3>Contact Info</h3>

          <div className="info-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
            <div>
              वृद्धि आर्ष गुरुकुल विद्यापीठ<br />
              साम्भली- निसिंग रोड, साम्भली,<br />
              करनाल, हरियाणा<br />
              
            </div>
          </div>

          <div className="info-item">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <div>vriddhiarshgurukul@gmail.com</div>
          </div>

          <div className="info-item">
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <div>
              +91-9871501658, <br />
              9667136238<br />
             
            </div>
          </div>

          <div className="follow-on">
            <strong>Follow on:</strong> Instagram | Facebook | Twitter | YouTube
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-col contact-form">
          <form action="">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Enter your name" required />

            <label htmlFor="phone">Phone</label>
            <input id="phone" type="tel" placeholder="Enter your phone number" required />

            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Enter email address" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" rows="6" placeholder="Your message" required></textarea>

            <button type="submit" className="hero-btn red-btn">
              Send Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
