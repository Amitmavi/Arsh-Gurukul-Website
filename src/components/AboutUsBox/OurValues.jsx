import "../AboutUsBox/OurValues.css"; // Reuse the same styles

function OurValues() {
  return (
    <div className="aim-wrapper">
      <div className="aim-card">
        <h1 className="aim-heading">OUR CORE VALUES</h1>

        <ul className="values-list">
          <li>
            <strong>Propagation of Vedic Value System</strong><br />
            Emphasizing the timeless wisdom and ethical foundation of ancient Indian culture.
          </li>
          <li>
            <strong>Dispelling Avidya (Ignorance) and Promoting Vidya (Wisdom)</strong><br />
            Enlightening the mind through true knowledge, critical thinking, and self-realization.
          </li>
          <li>
            <strong>Accepting Truth and Renouncing Untruth</strong><br />
            Holding truth as the highest virtue in thoughts, words, and actions.
          </li>
          <li>
            <strong>Promoting Physical, Spiritual, and Social Good of Everyone</strong><br />
            Striving for holistic development and the well-being of the individual and society.
          </li>
          <li>
            <strong>Inculcating Love, Righteousness, and Justice</strong><br />
            Creating a society rooted in compassion, fairness, and moral integrity.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default OurValues;
