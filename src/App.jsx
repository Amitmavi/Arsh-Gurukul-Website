import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AppRoutes from "./routes/AppRoutes";

import OurFounders from "./pages/About/OurFounders";
import Aim from "./pages/About/Aim";

import Value from "./pages/About/Value";
import Committee from "./pages/About/Committee";
import Patron from "./pages/About/Patron";
import PresidentMessages from "./pages/About/PresidentMessages";
import DirectorMessages from "./pages/About/DirectorMessages";
import PrincipleMessages from "./pages/About/PrincipleMessages";
import Alumni from "./pages/Alumni";
import Labs from "./pages/Infrastructure/Labs";
import Hostels from "./pages/Infrastructure/Hostels";
import Librarys from "./pages/Infrastructure/Librarys";
import Sports from "./pages/Infrastructure/Sports";
import Hospitals from "./pages/Infrastructure/Hospitals";
import Transports from "./pages/Infrastructure/Transports";
import Procedures from "./pages/Addmission/Procedures";
import FeesStructures from "./pages/Addmission/FeesStructures";
import InstructionParents from "./pages/Addmission/InstructionParents";
import Academics from "./pages/Academics";
import Donation from "./pages/Donation";
import TeachingFaculties from "./pages/Faculty/TeachingFaculties";
import AdmistrativeStaffs from "./pages/Faculty/AdmistrativeStaffs";
import Gallarys from "./pages/Gallary/Gallarys";



const App = () => {
  return (
    <Router>
      
      <AppRoutes />
      
      <Routes>
        <Route path="/about/our-founders" element={<OurFounders />} />
        <Route path="/about/our-aim" element={<Aim />} /> 
        <Route path="/about/core-values" element={<Value />} /> 
        <Route path="/about/management-committee" element={<Committee />} />
        <Route path="/about/patrons-message" element={<Patron />} />  
        <Route path="/about/president-message" element={<PresidentMessages />} />  
        <Route path="/about/director-message" element={<DirectorMessages />} />  
        <Route path="/about/principal-message" element={<PrincipleMessages />} />  
        {/*  Alumni path */}
        <Route path="/alumni" element={<Alumni />} /> 
        {/* Infrastructure Path */}
        <Route path="/infrastructure/labs" element={<Labs />} /> 
        <Route path="/infrastructure/hostel" element={<Hostels />} /> 
        <Route path="/infrastructure/library" element={<Librarys />} /> 
        <Route path="/infrastructure/sports" element={<Sports />} /> 
        <Route path="/infrastructure/hospital" element={<Hospitals />} /> 
        <Route path="/infrastructure/transport" element={<Transports />} />
        {/* Addmission Path */}
        <Route path="/admission/procedure" element={<Procedures />} /> 
        <Route path="/admission/fee-structure" element={<FeesStructures />} />
        <Route path="/admission/instructions-parents" element={<InstructionParents />} /> 

        {/* Academic Path */}
        <Route path="/academic" element={<Academics />} /> 
        {/* Donation Path */}
        <Route path="/donation" element={<Donation />} /> 
        {/* Faculty Path */}
        <Route path="/faculty/teaching" element={<TeachingFaculties />} /> 
        <Route path="/faculty/administrative-staff" element={<AdmistrativeStaffs />} /> 
        {/* Gallary Path */}
         <Route path="/gallery/image" element={<Gallarys />} /> 

      </Routes>
      
     
    </Router>
  );
};

export default App;
