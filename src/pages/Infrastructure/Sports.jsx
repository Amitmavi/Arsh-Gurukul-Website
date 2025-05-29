
import Footer from '../../components/Footer/Footer'
import Sport from '../../components/Infrastructure/Sport'
import Navbar from "../../components/Navbar/Navbar"
import ImgSlider from "../../components/Slider/ImgSlider"
import TopNavBar from "../../components/TopBar/TopNavBar"

function Sports() {
  return (
    <div>
      <TopNavBar />
      <Navbar />
      <ImgSlider />
      <Sport />
      <Footer />
    </div>
  )
}

export default Sports
