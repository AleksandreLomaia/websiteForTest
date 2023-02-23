import React from 'react'
import './Header.css'
import MainLogo from '../assets/svgs/mainLogo'

function Header() {
  return (
    <div className="navBar-contaniner">
        <div  className="book-store">
          <MainLogo />
        </div>
            <ul className='navBar-list'>
                <a href='#_blanck'>Home</a>
                <a href="">About-u`s</a>
                <a href="">Courses</a>
                <a href="">Our-service</a>
                <a href="">Contact-us</a>
            </ul>
        <button className="sign-in">
            Sign-in
        </button>
    </div>
  )
}

export default Header