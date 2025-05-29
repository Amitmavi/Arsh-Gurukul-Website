
import OurFounder from "../../components/AboutUsBox/OurFounder"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import ImgSlider from "../../components/Slider/ImgSlider"
import TopNavBar from "../../components/TopBar/TopNavBar"


function OurFounders() {
  return (
    <div>
        
        <TopNavBar />
      <Navbar />
      <ImgSlider />
      
        <OurFounder />
        <Footer />
    </div>
  )
}

export default OurFounders
