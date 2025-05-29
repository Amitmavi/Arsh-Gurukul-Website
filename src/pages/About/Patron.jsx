import PatronMessage from "../../components/AboutUsBox/PatronMessage"
import Footer from "../../components/Footer/Footer"

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
      <Footer />
    </div>
  )
}

export default Patron
