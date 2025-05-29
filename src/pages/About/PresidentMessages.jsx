// import React from 'react'
import PresidentMessage from '../../components/AboutUsBox/PresidentMessage'
import Footer from '../../components/Footer/Footer'
import Navbar from "../../components/Navbar/Navbar"
import ImgSlider from "../../components/Slider/ImgSlider"
import TopNavBar from "../../components/TopBar/TopNavBar"

function PresidentMessages() {
  return (
    <div>
      <TopNavBar />
      <Navbar />
      <ImgSlider />
      <PresidentMessage />
      <Footer />
    </div>
  )
}

export default PresidentMessages
