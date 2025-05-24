import { Link } from "react-router-dom";

import "./AboutUsBox.css";

const AboutUsBox = () => {
  return (
    <section className="about-us">
      <div className="row">
        <div className="about-col">
          <h1>The world&apos;s Largest Seat of Traditional Learning

</h1>
          <p>
            At our Gurukul, we uphold the timeless traditions of Bharatiya education, where learning is more than just academics — it is a sacred path to wisdom, character, and inner growth.

Rooted in ancient scriptures and enriched by modern insights, our Gurukul fosters a life of discipline, devotion, and discovery. We are committed to nurturing enlightened individuals who live with purpose, lead with values, and serve with humility.

Here, the Guru-Shishya parampara (teacher-disciple tradition) is not just practiced but lived — ensuring every student receives personal guidance, spiritual grounding, and a holistic education that transcends textbooks.
          </p>
          <Link to="#" className="hero-btn red-btn">
            EXPLORE NOW
          </Link>
        </div>
        <div className="about-col">
          <img src="images/about.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default AboutUsBox;
