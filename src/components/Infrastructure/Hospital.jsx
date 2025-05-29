import "../Infrastructure/Hospital.css";

function Hospital() {
  return (
    <div className="hospital-page">
      <div className="hospital-header">
        <h1>Hospital (Practical Knowledge of Yoga & Nature Therapy)</h1>
        <div className="underline"></div>
      </div>

      <div className="hospital-images">
        <img src="/images/Hos1.png" alt="Hospital building" />
        <img src="/images/Hos2.png" alt="Yoga and therapy session" />
      </div>

      <div className="hospital-content">
        <p>
          Gurukul Management Committee ensures the successful functioning of Naturopathy Hospital ‘Arogya Dham’ consisting of 30 air-conditioned rooms and 30 air-cooled rooms with separate accommodation for women patients.
        </p>
        <p>
          Hospital natural treatment therapies include Colon Irrigation Therapy, Shirodhara, Jagn-G, Sauna Bath, etc., which help people keep fit by correcting mental disorders, skin disorders, obesity, and blood disorders fast and efficiently.
        </p>
        <p>
          In addition, Sampooran Panch Karma, Physio Therapy, Acupressure, Pranayam, and Yoga are widely used to treat all kinds of health problems. Some incurable diseases are also treated by medicines prepared through Panchgavya.
        </p>
      </div>
    </div>
  );
}

export default Hospital;
