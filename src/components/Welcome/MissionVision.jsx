import { Link } from "react-router-dom";
import "../Welcome/MissionVision.css";

const WelcomeVision = () => {
  return (
    <div className="welcome-wrapper">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">Welcome To Gurukul Sambhli Karnal</h1>
      </section>

      {/* Vision Section */}
      <section className="plain-section">
        <h2 className="section-heading">Our Vision</h2>
        <p className="section-text">
          Build on Indian ethos and scientific temperament to prepare global
          leaders from this iconic learning center of the Country.
        </p>
      </section>

      {/* Mission Section */}
      <section className="plain-section">
        <h2 className="section-heading">Our Mission</h2>
        <p className="section-text">
          Founded in 1912 by Swami Shardhanand Ji with grand vision of
          inculcating Indian ethos and scientific temperament in the young
          minds, Gurukul Kurukshetra has been on mission mode ever since its
          inception to provide public school education from its sprawling 40
          Acres campus to create safe, secure, happy and stimulating learning
          environment to instill honor, respect and compassion in each student
          and prepare him for success throughout his life.
        </p>
      </section>

      {/* Messages Section */}
      <section className="plain-section">
        <h2 className="section-heading">Messages</h2>

        <div className="messages-grid">
          

          {/* President's Message */}
          <div className="message-card">
            <div className="message-content">
              <h3>PRESIDENTS MESSAGE</h3>
              <p>
                संस्कारित शिक्षा की संभावनाओं में राह तलाशना अनेक समस्याओं के समाधान को संभव बनाता है। ...
              </p>
              <Link to="/about/president-message" className="read-more-btn">Read More</Link>
            </div>
            <img src="/images/1.jpg" alt="President" className="message-image" />
          </div>

          {/* Director's Message */}
          <div className="message-card">
            <div className="message-content">
              <h3>DIRECTORS MESSAGE</h3>
              <p>
                Gurukul Kurukshetra empowers all students to excel in their chosen field. ...
              </p>
              <Link to="/about/director-message" className="read-more-btn">Read More</Link>
            </div>
            <img src="/images/S9.jpeg" alt="Director" className="message-image" />
          </div>

          {/* Principal's Message */}
          <div className="message-card">
            <div className="message-content">
              <h3>PRINCIPALS MESSAGE</h3>
              <p>
                Dear Parents, With great pleasure I welcome you all to our website of Gurukul Kurukshetra. ...
              </p>
              <Link to="/about/principal-message" className="read-more-btn">Read More</Link>
            </div>
            <img src="/images/S9.jpeg" alt="Principal" className="message-image" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default WelcomeVision;
