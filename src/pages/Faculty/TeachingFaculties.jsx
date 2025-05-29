import TeachingFaculty from "../../components/Faculty/TeachingFaculty"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import ImgSlider from "../../components/Slider/ImgSlider"
import TopNavBar from "../../components/TopBar/TopNavBar"


function TeachingFaculties() {
  return (
    <div>
      <TopNavBar />
      <Navbar />
      <ImgSlider />
      <TeachingFaculty />
      <Footer />
    </div>
  )
}

export default TeachingFaculties
