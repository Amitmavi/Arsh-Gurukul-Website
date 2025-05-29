import "../Infrastructure/Sport.css";

function Sport() {
  return (
    <div className="sport-page">
      <div className="sport-header">
        <h1>Sports at Gurukul Kurukshetra</h1>
        <div className="underline"></div>
      </div>

      <div className="sport-images">
        <img src="/images/S1.png" alt="Football ground" />
        <img src="/images/S2.png" alt="Gymnasium hall" />
        <img src="/images/S3.png" alt="Swimming pool" />
      </div>

      <div className="sport-content">
        <p>
          To ensure proper physical development, there is a well-equipped multi-purpose gymnasium hall. Coaches for various sports such as Football, Volleyball, Kabaddi, Kho-Kho, Gymnastics, Handball, and Horse Riding provide round-the-clock training.
        </p>
        <p>
          Separate and spacious grounds are available to nurture true sportsmanship spirit. An ultra-modern shooting range paves the way to become international shooters.
        </p>
        <p>
          For self-defence, sports like Judo, Karate, and Boxing add to the gallery of sporting activities. Gurukul also has a large swimming pool and well-equipped halls for indoor games.
        </p>
        <p>
          Since its inception, Gurukul has produced national and international players who have brought laurel to their alma mater.
        </p>
      </div>
    </div>
  );
}

export default Sport;
