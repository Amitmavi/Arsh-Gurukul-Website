
import PrincipleMessage from "../../components/AboutUsBox/PrincipleMessage"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import ImgSlider from "../../components/Slider/ImgSlider"
import TopNavBar from "../../components/TopBar/TopNavBar"



function PrincipleMessages() {
  return (
    <div>
        <TopNavBar />
      <Navbar />
      <ImgSlider />
      <PrincipleMessage/>
      <Footer />
    </div>
  )
}

export default PrincipleMessages
