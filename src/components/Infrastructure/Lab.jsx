import "../Infrastructure/Lab.css";

function Lab() {
  return (
    <div className="labs-page">
      <div className="labs-header">
        <h1>Our School Laboratories</h1>
        <div className="underline"></div>
        <p>Equipped with modern tools to encourage hands-on learning and scientific curiosity.</p>
      </div>

      <div className="labs-grid">
        <div className="lab-card">
          <img src="/images/Lab1.png" alt="Computer Lab" />
          <h2>Computer Lab</h2>
          <p>State-of-the-art computers with high-speed internet help students learn programming, digital skills, and creative software applications.</p>
        </div>

        <div className="lab-card">
          <img src="/images/Lab2.png" alt="Physics Lab" />
          <h2>Physics Lab</h2>
          <p>Fully equipped with apparatus for mechanics, optics, and electricity experiments that help students apply theoretical concepts practically.</p>
        </div>

        <div className="lab-card">
          <img src="/images/Lab3.png" alt="Chemistry Lab" />
          <h2>Chemistry Lab</h2>
          <p>Safety-first lab setup where students conduct chemical reactions and develop a deep understanding of matter and molecular interactions.</p>
        </div>

        <div className="lab-card">
          <img src="/images/Lab4.png" alt="Biology Lab" />
          <h2>Biology Lab</h2>
          <p>Features specimens, microscopes, and models to support practical understanding of anatomy, physiology, and life sciences.</p>
        </div>
      </div>
    </div>
  );
}

export default Lab;
