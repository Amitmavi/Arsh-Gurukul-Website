import "./Testimonials.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h1>What Our Student Says</h1>
      <p>
        Discover what our students have to say about their transformative
        experiences.
      </p>
      <div className="row">
        <div className="testimonial-col">
          <img src="/images/user1.jpg" alt="" />
          <div>
            <p>
              &quot;Studying at this Gurukul has been a life-changing experience. Here, I learned not just subjects, 
              but the values of discipline, respect, and self-awareness. I feel more confident and focused than ever before.&quot;
            </p>
            <h3>Amit Gurjar</h3>
            <div className="stars">
              {[...Array(4)].map((_, i) => (
                <FontAwesomeIcon
                  key={i}
                  icon={faStar}
                  className="filled-star"
                />
              ))}
              <FontAwesomeIcon icon={faStar} className="empty-star" />
            </div>
          </div>
        </div>

        <div className="testimonial-col">
          <img src="/images/user2.jpg" alt="" />
          <div>
            <p>
              &quot; From yoga in the mornings to interactive classes during the day, 
              every part of this journey has been enriching. I learned to think deeply, act wisely, and live peacefully. &quot;
            </p>
            <h3>Anuj Kumar</h3>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon
                  key={i}
                  icon={faStar}
                  className="filled-star"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
