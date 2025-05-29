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
              GURUKUL KURUKSHETRA<br />
              Near III Gate Kurukshetra,<br />
              University Kurukshetra,<br />
              Haryana 136119
            </div>
          </div>

          <div className="info-item">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <div>gurukul_kkr@yahoo.com</div>
          </div>

          <div className="info-item">
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <div>
              +91-9996026311<br />
              01744-238048<br />
              01744-238648
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
