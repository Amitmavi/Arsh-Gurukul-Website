import Footer from "../../components/Footer/Footer"
import Hostel from "../../components/Infrastructure/Hostel"
import Navbar from "../../components/Navbar/Navbar"
import ImgSlider from "../../components/Slider/ImgSlider"
import TopNavBar from "../../components/TopBar/TopNavBar"


function Hostels() {
  return (
    <div>
       <TopNavBar />
      <Navbar />
      <ImgSlider />
      <Hostel />
      <Footer />
    </div>
  )
}

export default Hostels
