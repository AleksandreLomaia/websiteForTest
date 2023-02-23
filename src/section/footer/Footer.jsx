import React from 'react'
import './Footer.css'
import bookLogo from '../../assets/photos/bookLogo.png'

const Footer = () => {
  return (
    <div className="main-footer">
        <div className="navigation-box">
            <div className="colum-box">
                <div className="logoBox">
                    <img src={bookLogo} className='bookLogo' />
                    <h1>Book Store</h1>
                </div>
                <small>Lorem Ipsum is simply dummy text of <br /> the printing and typesetting industry.<br /> Lorem Ipsum has been the industry's <br /> standard dummy a type specimen <br /> book.</small>
            </div>
            <div className="colum-box">
                <h1>Company</h1>
                <small>About Us</small>
                <small>How to work?</small>
                <small>Populer Course</small>
                <small>Service</small>
            </div>
            <div className="colum-box">
                <h1>Courses</h1>
                <small>Categories</small>
                <small>Ofline Course</small>
                <small>Vidio Course</small>
            </div>
            <div className="colum-box">
                <h1>Support</h1>
                <small>FAQ</small>
                <small>Help Center</small>
                <small>Career</small>
                <small>Privacy </small>
            </div>
            <div className="colum-box">
                <h1>Contac Info</h1>
                <small>+0913-705-3875</small>
                <small>ElizabethJ@jourrapide.com</small>
                <small>4808 Skinner Hollow Road <br />
                        Days Creek, OR 97429</small>
            </div>
        </div>
        <div className="copyRight">BookStore All Right Reserved, 2022</div>
    </div>
  )
}

export default Footer