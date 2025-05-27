import { Routes, Route } from "react-router-dom";


import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Course from "../pages/Course";
import Homes from "../pages/Homes";




const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homes />} />
           
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />     
      <Route path="/course" element={<Course />} />
    </Routes>
  );
};

export default AppRoutes;
