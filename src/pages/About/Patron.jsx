import PatronMessage from "../../components/AboutUsBox/PatronMessage"
import Navbar from "../../components/Navbar/Navbar"
import ImgSlider from "../../components/Slider/ImgSlider"
import TopNavBar from "../../components/TopBar/TopNavBar"


function Patron() {
  return (
    <div>
      <TopNavBar />
      <Navbar />
      <ImgSlider />
      <PatronMessage />
    </div>
  )
}

export default Patron
