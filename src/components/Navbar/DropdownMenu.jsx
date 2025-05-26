// src/components/DropdownMenu.jsx
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const DropdownMenu = ({ title, name, links, openDropdown, toggleDropdown }) => {
  return (
    <li className="dropdown">
      <span className="dropbtn" onClick={() => toggleDropdown(name)}>
        {title} <FontAwesomeIcon icon={faChevronDown} className="dropdown-arrow" />
      </span>
      <ul className={`dropdown-content ${openDropdown === name ? "show" : ""}`}>
        {links.map((link) => (
          <li key={link.path}>
            <Link to={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

// ✅ Props Validation
DropdownMenu.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  openDropdown: PropTypes.string,
  toggleDropdown: PropTypes.func.isRequired,
};

export default DropdownMenu;
