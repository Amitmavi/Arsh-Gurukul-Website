
import Alumnis from '../components/Alumni/Alumnis'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import ImgSlider from '../components/Slider/ImgSlider'
import TopNavBar from '../components/TopBar/TopNavBar'

function Alumni() {
  return (
    <div>
      <TopNavBar />
      <Navbar />
      <ImgSlider />
      <Alumnis />
      <Footer />
    </div>
  )
}

export default Alumni
