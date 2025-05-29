
import logo from "../../../public/images/VRDDHI ARSH GURUKUL.png";  // adjust path as per your folder structure
import "../TopBar/TopNavBar.css";

function TopNavBar() {
  return (
    <div className="container">
      {/* Logo and banner */}
      <div className="banner">
        <img
          src={logo}
          alt="Gurukul Logo"
          className="logo"
        />
        
      </div>

      {/* Buttons */}
      <div className="buttonGroup">
        <button className="button student">Student App</button>
        <button className="button parent">Parent Login</button>
        <button className="button pay">Donation</button>
      </div>
    </div>
  );
}

export default TopNavBar;
