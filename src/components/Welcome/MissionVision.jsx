import "../Welcome/MissionVision.css";

function MissionVision() {
  return (
    <div className="mission-container">
      <h1 className="mission-welcome">Welcome To Gurukul Kurukshetra</h1>

      <section className="mission-section">
        <h2 className="mission-heading">Our Vision</h2>
        <p className="mission-text">
          Build on Indian ethos and scientific temperament to prepare global leaders from this iconic learning center of the Country.
        </p>
      </section>

      <section className="mission-section">
        <h2 className="mission-heading">Our Mission</h2>
        <p className="mission-text">
          Founded in 1912 by Swami Shardhanand Ji with grand vision of inculcating Indian ethos and scientific temperament in the young minds, Gurukul Kurukshetra has been on mission mode ever since its inception to provide public school education from its sprawling 40 Acres campus to create safe, secure, happy and stimulating learning environment to instill honor, respect and compassion in each student and prepare him for success throughout his life.
        </p>
      </section>
    </div>
  );
}

export default MissionVision;
