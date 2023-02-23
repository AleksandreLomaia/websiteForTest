import React from 'react'
import './Subscribe.css'
import eclipse from '../../assets/photos/eclipse.png'
import eclipse2 from '../../assets/photos/eclipse2.png'
import eclipse3 from '../../assets/photos/eclipse3.png'
import eclipse4 from '../../assets/photos/eclipse4.png'
import lamp2 from '../../assets/photos/lamp2.png'


const Subscribe = () => {
  return (
    <div className="subscribe-container">
        <img src={eclipse} className='eclipse' />
        <img src={eclipse2} className='eclipse2' />
        <h1>Subscribe to our newsletter</h1>
        <small>Lorem Ipsum is simply dummy text of the printing.</small>
        <div className="input-line">
            <input type="text" className="input2" placeholder='Email Adress'/>
            <button className="button">Send</button>
        </div>
        <img src={eclipse3} className="eclipse3" />
        <img src={eclipse4} className="eclipse4" />
        <img src={lamp2} className="lamp2" />
    </div>
  )
}

export default Subscribe