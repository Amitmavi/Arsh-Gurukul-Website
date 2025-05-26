
import { useState } from "react";
import "../Faculty/TeachingSideBar.css";


const departments = [
  "English",
  "Sanskrit",
  "Commerce",
  "Hindi",
  "Computer Science",
  "Mathematics",
  "Science",
  "Social Science",
  "Physical Education",
  "Drawing",
];

const TeachingSidebar = () => {
  const [activeDept, setActiveDept] = useState("Commerce");

  return (
    <div className="sidebar-container">
      <h3 className="sidebar-title">Teaching Staff</h3>
      <ul className="sidebar-list">
        {departments.map((dept) => (
          <li
            key={dept}
            className={`sidebar-item ${activeDept === dept ? "active" : ""}`}
            onClick={() => setActiveDept(dept)}
          >
            <span className="arrow">›</span> {dept}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeachingSidebar;
