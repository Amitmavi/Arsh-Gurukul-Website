import Library from "../../components/Infrastructure/Library"
import Navbar from "../../components/Navbar/Navbar"
import ImgSlider from "../../components/Slider/ImgSlider"
import TopNavBar from "../../components/TopBar/TopNavBar"

function Librarys() {
  return (
    <div>
      <TopNavBar />
      <Navbar />
      <ImgSlider />
      <Library />
    </div>
  )
}

export default Librarys
