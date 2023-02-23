import React from 'react'
import './Hero.css'
import InputField from '../../components/InputField'
import Decor from '../../assets/photos/decor.png'

const Hero = () => {
  return (
    <div className="hero-box">
      <div className="textSide">
        <h1>The <span>Smart</span><br /> Choise For <span>Future</span></h1>
        <p>Elearn is a global training provider based across the UK that specialises in accredited and bespoke training courses. We crush the...</p>
        <InputField />
      </div>  
      <div className="decorSide">
        <img src={Decor} alt="decor" />
      </div>
    </div>  
  )
}

export default Hero