
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
    </div>
  )
}

export default Sports
