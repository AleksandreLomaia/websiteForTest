import React from 'react'
import SkillsLogo from '../../assets/photos/rectangle.png'
import skills from '../../assets/photos/skills.png'
import exam from '../../assets/photos/exam.png'
import certification from '../../assets/photos/certification.png'
import './PurpleBox.css'


const PurpleBox = () => {
  return (
    <div className='purple-container'>
        <div className="skills-container">
            <img src={SkillsLogo} className="img1" />
            <img src={skills} className="img2" />
          <div className="text-container">  
            <h1>Learn The latest skills</h1>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.</p>
          </div>  
        </div>
        <div className="skills-container">
            <img src={SkillsLogo} className="img1" />
            <img src={exam} className="img2" />
          <div className="text-container">  
            <h1>Get Ready For a Career</h1>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old</p>
          </div>  
        </div>
        <div className="skills-container">
            <img src={SkillsLogo} className="img1" />
            <img src={certification} className="img3" />
          <div className="text-container">   
            <h1>Earn a Certification</h1>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old</p>
          </div>  
        </div>
    </div>
  )
}

export default PurpleBox