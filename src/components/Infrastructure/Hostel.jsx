import "../Infrastructure/Hostel.css";

function Hostel() {
  return (
    <div className="hostel-page">
      <div className="hostel-header">
        <h1>Gurukul Hostels</h1>
        <div className="underline"></div>
        <p>
          Gurukul Kurukshetra is dedicated to the dream of Swami Shradhanand and Seth Jyoti Prasad, combining the rich traditions of ancient Gurukul systems with modern amenities.
        </p>
      </div>

      <div className="hostel-images">
        <img src="/images/H1.png" alt="Hostel 1" />
        <img src="/images/h2.png" alt="Hostel 2" />
        <img src="/images/H3.png" alt="Hostel 3" />
      </div>

      <div className="hostel-content">
        <p>
          Inspired by Maharishi Dayanand Saraswatis ideals, Gurukul Kurukshetra has become a beacon of modern-day Gurukul education. Students from across India and abroad join us yearly, supported by an advanced hostel infrastructure envisioned by Dr. Acharya Devvrat Ji (Hon ble Governor, Himachal Pradesh), our esteemed patron. Hostels here focus on discipline, cleanliness, modern facilities, and the holistic development of each student.
        </p>
      </div>

      <div className="hostel-list">
        <div className="hostel-card">
          <h2>Swami Dayanand Hostel</h2>
          <p>60 airy rooms for 270 students. Features include CCTV, solar energy, water heating, inverters, and backup generators. A dedicated assistant teacher supports the academic journey of senior students.</p>
        </div>

        

      </div>
    </div>
  );
}

export default Hostel;
