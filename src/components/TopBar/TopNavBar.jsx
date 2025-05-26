
import logo from "../../../public/images/12.png";  // adjust path as per your folder structure
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
        <button className="button pay">Pay Online Fees</button>
      </div>
    </div>
  );
}

export default TopNavBar;
