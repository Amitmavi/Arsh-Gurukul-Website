import OurCommittee from "../../components/AboutUsBox/OurCommittee"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import ImgSlider from "../../components/Slider/ImgSlider"
import TopNavBar from "../../components/TopBar/TopNavBar"


function Committee() {
  return (
    <div>
      <TopNavBar />
      <Navbar />
      <ImgSlider />
      <OurCommittee />
      <Footer />
    </div>
  )
}

export default Committee
