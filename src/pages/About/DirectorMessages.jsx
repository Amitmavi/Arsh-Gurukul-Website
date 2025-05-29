import DirectorMessage from "../../components/AboutUsBox/DirectorMessage"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import ImgSlider from "../../components/Slider/ImgSlider"
import TopNavBar from "../../components/TopBar/TopNavBar"


function DirectorMessages() {
  return (
    <div>
      <TopNavBar />
      <Navbar />
      <ImgSlider />
      
      <DirectorMessage />
      <Footer />
    </div>
  )
}

export default DirectorMessages
