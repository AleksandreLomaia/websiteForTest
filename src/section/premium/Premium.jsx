import React from 'react'
import '../../section/premium/Premium.css'
import hearts from '../../assets/photos/hearts.png'
import jigsaw from '../../assets/photos/jigsaw.png'
import cira from '../../assets/photos/cira.png'
import heartsBox from '../../assets/photos/purple-background.png'

function Premium() {
  return (
    <div className="prem-box">
      <img src={cira} className="cira"/>
      <div className="prem-container">
        <h1>Premium <span> Learning</span><br />Experience</h1>
        <div className="logo-box">
          <div className="heartLogo">
            <img src={heartsBox} className="heartsBox" />
            <img src={hearts} className="hearts" />
          </div>
          <div className="text-box">
            <h2>Easily Accessible</h2>
            <small>Learning Will fell Very Comfortable With Courslab.</small>
          </div>
        </div>
        <div className="logo-box">
          <div className="heartLogo">
            <img src={heartsBox} className="heartsBox" />
            <img src={jigsaw} className="hearts" />
          </div>
          <div className="text-box">
            <h2>Fun learning expe</h2>
            <small>Learning Will fell Very Comfortable With Courslab.</small>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default Premium