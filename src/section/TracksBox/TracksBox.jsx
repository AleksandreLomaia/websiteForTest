import React from 'react'
import './TracksBox.css'
import Photo1 from '../../assets/photos/Photo1.jpg'
import Photo2 from '../../assets/photos/Photo2.jpg'
import Photo3 from '../../assets/photos/Photo3.jpg'
import RateBox from '../../assets/photos/RateBox.jpg'
import StarrLogo from '../../assets/photos/StarrLogo.jpg'
import arrow from '../../assets/photos/arrow.png'
import lamp from '../../assets/photos/lamp.png'




function TracksBox() {
  return (
    <div className='tracks-container'>
        <img src={arrow} className="arrow" />
        <img src={lamp} className="lamp" />
        <h1>Our Tracks</h1>
        <small>Lorem Ipsum is simply dummy text of the printing.</small>
        <div className="boxes-container">
            <div className="designer-box">
                <img src={Photo1} className="photo1" />
                <div className="star-box">
                    <p>UI/UX Design</p>
    
                    <img src={StarrLogo} />
                </div>
                <h2>UI/UX Design for Beginners</h2>
                <h3>98$</h3>
                <img src={RateBox}  />
                <button className='join-btn'>Join Course</button>
            </div>
            <div className="designer-box">
                <img src={Photo2} className="photo2" />
                <div className="star-box">
                    <p>UI/UX Design</p>
                    <img src={StarrLogo} />
                </div>
                <h2>UI/UX Design for Beginners</h2>
                <h3>98$</h3>
                <img src={RateBox} />
                <button className='join-btn'>Join Course</button>
            </div>        
                <div className="designer-box">
                <img src={Photo3} className="photo3" />
                <div className="star-box">
                    <p>UI/UX Design</p>
                    <img src={StarrLogo} />
                </div>
                <h2>UI/UX Design for Beginners</h2>
                <h3>98$</h3>
                <img src={RateBox} />
                <button className='join-btn'>Join Course</button>
            </div>
        </div>
    </div>
  )
}

export default TracksBox