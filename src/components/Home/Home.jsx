import TopNavBar from "../TopBar/TopNavBar";
import Navbar from "../Navbar/Navbar"
import ImgSlider from "../Slider/ImgSlider";
import SliderMessages from "../../pages/SliderMessages";



function Home() {
  return (
    <div>
        <TopNavBar />
      <Navbar />
      <ImgSlider />
      <SliderMessages />
      
    </div>
  )
}

export default Home
