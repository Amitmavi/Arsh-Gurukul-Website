import Donate from "../components/Donation/Donate";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import ImgSlider from "../components/Slider/ImgSlider";
import TopNavBar from "../components/TopBar/TopNavBar";


function Donation() {
  return (
    <>
      
      <TopNavBar />
      <Navbar />
      <ImgSlider />
      <Donate />
      <Footer />
    </>
  );
}

export default Donation;
