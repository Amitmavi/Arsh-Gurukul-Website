
import Location from "../components/Location/Location";
import ContactComponent from "../components/ContactComponent/ContactComponent";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import TopNavBar from "../components/TopBar/TopNavBar";
import ImgSlider from "../components/Slider/ImgSlider";

const Contact = () => {
  return (
    <>
    <TopNavBar />
      <Navbar />
      <ImgSlider />
      <Location />
      <ContactComponent />
      <Footer />
    </>
  );
};

export default Contact;
