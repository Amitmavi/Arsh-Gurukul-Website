
import '../Donation/Donate.css';
// import upiQR from '../../../public/images/Scanner.jpeg'; // Place your QR image here

function Donate() {
  return (
    <div className="donate-container">
      <h2 className="donate-heading">Support Gurukul Education</h2>
      <p className="donate-subheading">
        Contribute to the noble mission of preserving ancient wisdom through your generous donation.
      </p>

      <div className="donate-info">
        <p><strong>Account Holder Name:</strong> Vipanyu innovative foundation </p>
        <p><strong>Account Number:</strong> 4062125577</p>
        <p><strong>IFSC Code:</strong> SBIN0004716</p>
        <p><strong>Bank Name:</strong> State Bank of India</p>
      </div>

      {/* <div className="qr-section">
        <p><strong>Scan this UPI QR to Donate:</strong></p>
        <img src={upiQR} alt="UPI QR Code" className="qr-image" />
      </div> */}

      <p className="thank-you">🙏 Thank you for supporting Gurukul 🙏</p>
    </div>
  );
}

export default Donate;
