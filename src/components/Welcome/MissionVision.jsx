
import "../Welcome/MissionVision.css";

const WelcomeVision = () => {
  return (
    <div className="welcome-wrapper">
      <section className="hero-section">
        <h1 className="hero-title">Welcome To Gurukul Sambhli Karnal</h1>
      </section>

      <section className="plain-section">
        <h2 className="section-heading">Our Vision</h2>
        <p className="section-text">
          Build on Indian ethos and scientific temperament to prepare global
          leaders from this iconic learning center of the Country.
        </p>
      </section>

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
    </div>
  );
};

export default WelcomeVision;
