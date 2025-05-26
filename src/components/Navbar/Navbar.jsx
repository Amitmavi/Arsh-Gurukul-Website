// src/components/Navbar.jsx
import "./Navbar.css";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import DropdownMenu from "../Navbar/DropdownMenu";

const Navbar = () => {
  const navLinkRef = useRef();
  const [openDropdown, setOpenDropdown] = useState(null);

  const showMenu = () => {
    if (navLinkRef.current) {
      navLinkRef.current.style.right = "0";
    }
  };

  const hideMenu = () => {
    if (navLinkRef.current) {
      navLinkRef.current.style.right = "-200px";
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  return (
    <nav>
      <div className="nav-links" ref={navLinkRef}>
        <FontAwesomeIcon icon={faTimes} className="fas" onClick={hideMenu} />
        <ul>
          <li><Link to="/">HOME</Link></li>

          <DropdownMenu
            title="ABOUT US"
            name="about"
            openDropdown={openDropdown}
            toggleDropdown={toggleDropdown}
            links={[
              { path: "/about/our-founders", 
                label: "OUR FOUNDERS" },
              { path: "/about/our-aim",
                 label: "Our AIM" },
              { path: "/about/core-values",
                 label: "Core Values of Gurukul" },
              { path: "/about/management-committee",
                 label: "Gurukul Management Committee" },
              { path: "/about/patrons-message",
                 label: "Patrons Message" },
              { path: "/about/president-message",
                 label: "Presidents Message" },
              { path: "/about/director-message",
                 label: "Directors Message" },
              { path: "/about/principal-message",
                 label: "Principal Message" },
            ]}
          />

          <li><Link to="/alumni">ALUMNI</Link></li>

          <DropdownMenu
            title="INFRASTRUCTURE"
            name="infrastructure"
            openDropdown={openDropdown}
            toggleDropdown={toggleDropdown}
            links={[
              { path: "/infrastructure/labs", label: "Labs" },
              { path: "/infrastructure/hostel", label: "Hostel" },
              { path: "/infrastructure/library", label: "Library" },
              { path: "/infrastructure/sports", label: "Sports" },
              { path: "/infrastructure/hospital", label: "Hospital" },
              { path: "/infrastructure/transport", label: "Transport" },
              
            ]}
          />

          <DropdownMenu
            title="ADMISSION"
            name="admission"
            openDropdown={openDropdown}
            toggleDropdown={toggleDropdown}
            links={[
              { path: "/admission/procedure", label: "Procedure" },
              { path: "/admission/fee-structure", label: "Fee Structure" },
              { path: "/admission/instructions-parents", label: "Instructions for Parents" },
            ]}
          />

          <li><Link to="/academic">ACADEMIC</Link></li>

          <DropdownMenu
            title="FACULTY"
            name="faculty"
            openDropdown={openDropdown}
            toggleDropdown={toggleDropdown}
            links={[
              { path: "/faculty/teaching", label: "TEACHING FACULTY" },
              { path: "/faculty/administrative-staff", label: "ADMINISTRATIVE STAFF" },
            ]}
          />

          <DropdownMenu
            title="GALLERY"
            name="gallery"
            openDropdown={openDropdown}
            toggleDropdown={toggleDropdown}
            links={[
              { path: "/gallery/image", label: "Image Gallery" },
              { path: "/gallery/media", label: "Media Gallery" },
              { path: "/gallery/natural-farming", label: "Natural Farming Gallery" },
            ]}
          />

          <li><Link to="/contact">CONTACT</Link></li>
        </ul>
      </div>
      <FontAwesomeIcon icon={faBars} className="fas" onClick={showMenu} />
    </nav>
  );
};

export default Navbar;
