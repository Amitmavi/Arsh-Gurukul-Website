import OurCommittee from "../../components/AboutUsBox/OurCommittee"
import Footer from "../../components/Footer/Footer"
import SliderMessage from "../../components/Message/SliderMessage"
import Navbar from "../../components/Navbar/Navbar"
import ImgSlider from "../../components/Slider/ImgSlider"
import TopNavBar from "../../components/TopBar/TopNavBar"


function Committee() {
  return (
    <div>
      <TopNavBar />
      <Navbar />
      <ImgSlider />
      <SliderMessage />
      <OurCommittee />
      <Footer />
    </div>
  )
}

export default Committee
