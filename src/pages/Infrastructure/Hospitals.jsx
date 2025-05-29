import Footer from "../../components/Footer/Footer"
import Hospital from "../../components/Infrastructure/Hospital"
import Navbar from "../../components/Navbar/Navbar"
import ImgSlider from "../../components/Slider/ImgSlider"
import TopNavBar from "../../components/TopBar/TopNavBar"


function Hospitals() {
  return (
    <div>
      <TopNavBar />
      <Navbar />
      <ImgSlider />
      <Hospital />
      <Footer />
    </div>
  )
}

export default Hospitals
