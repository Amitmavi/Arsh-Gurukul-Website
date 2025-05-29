import OurValues from "../../components/AboutUsBox/OurValues"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import ImgSlider from "../../components/Slider/ImgSlider"
import TopNavBar from "../../components/TopBar/TopNavBar"



function Value() {
  return (
    <div>
      <TopNavBar />
      <Navbar />
      <ImgSlider />
      <OurValues />
      <Footer />
    </div>
  )
}

export default Value
