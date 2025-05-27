import OurCommittee from "../../components/AboutUsBox/OurCommittee"
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
    </div>
  )
}

export default Committee
