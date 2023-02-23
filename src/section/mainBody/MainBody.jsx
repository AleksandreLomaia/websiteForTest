import React from 'react'
import student1 from '../../assets/photos/student1.png'
import student2 from '../../assets/photos/student2.png'
import student3 from '../../assets/photos/student3.png'
import sphere from '../../assets/photos/sphere.png'
import sphere2 from '../../assets/photos/sphere2.png'
import arrow2 from '../../assets/photos/arrow2.png'
import planet from '../../assets/photos/planet.png'
import line from '../../assets/photos/line.png'
import engineer1 from '../../assets/photos/engineer1.png'
import engineer2 from '../../assets/photos/engineer2.png'
import engineer3 from '../../assets/photos/engineer3.png'
import insta from '../../assets/photos/insta.png'
import linkdin from '../../assets/photos/linkdin.png'
import './MainBody.css'
import Subscribe from '../subscribe/Subscribe'

const mainBody = () => {
  return (
    <div className="main-body">
        <img src={sphere} className="sphere-shadow" />
        <img src={sphere2} className="sphere-shadow2" />
        <img src={arrow2} className="arrow2" />
        <img src={planet} className="planet" />
        <img src={line} className="line" />
        <div className="studentsSay">
            <h1>What student’s say</h1>
            <p>Lorem Ipsum is simply dummy text of the printing.</p>
        </div>
        <div className="students-box">
            <div className="students-container">
                <div className="individual">
                <p>“Teachings of the great explore of truth, <br />
                    the master-builder of human happiness. <br />
                    no one rejects,dislikes, or avoids pleasure <br />
                    itself, pleasure itself”
                    </p>
                    <div className="profile">
                        <img src={student1} className="student1" />
                        <div className="text-box">
                            <h1>Finlay Kirk</h1>
                            <small>Web Developper</small>
                        </div>
                    </div>
                </div>
                <div className="individual">
                <p>“Complete account of the system and <br />
                    expound the actual Contrary to popular <br />
                    belief, Lorem Ipsum is not simply <br />
                    random text. It has roots”
                    </p>
                    <div className="profile">
                        <img src={student2} className="student1" />
                        <div className="text-box">
                            <h1>Dannette P. Cervantes</h1>
                            <small>Web Design</small>
                        </div>
                    </div>
                </div>
                <div className="individual">
                <p>“There are many variations of passages <br />
                    of Lorem Ipsum available, but the majority <br />
                    have suffered alteration in some form,<br />
                    by injected humour”
                    </p>
                    <div className="profile">
                        <img src={student3} className="student1" />
                        <div className="text-box">
                            <h1>Clara R. Altman</h1>
                            <small>UI&UX Design</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="studentsSay">
            <h1>Our Tracks</h1>
            <p>Lorem Ipsum is simply dummy text of the printing.</p>
        </div>
        <div className="profile-container">
            <div className="profile-box">
                <div className="imgPlace">
                    <img src={engineer1} className="engineer1" />
                </div>
                <div className="text-container">
                    <h4>Matthew E. McNatt</h4>
                    <p>Professor @George Brown College</p>
                    <small>Ut enim ad minim veniam, quis nost exercitation <br />
                        ullamco laboris nisi ut allquip ex commodo.</small>
                    <div className="icon-box">
                        <span>Engineering physics</span>
                        <div className="icons">
                         <img src={insta} className="insta" />
                        <img src={linkdin} className="linkdin" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="profile-box">
                <div className="imgPlace">
                    <img src={engineer2} className="engineer1" />
                </div>
                <div className="text-container">
                    <h4>Tracy D. Wright</h4>
                    <p>Professor @George Brown College</p>
                    <small>Ut enim ad minim veniam, quis nost exercitation <br />
                        ullamco laboris nisi ut allquip ex commodo.</small>
                    <div className="icon-box">
                        <span>Engineering physics</span>
                        <div className="icons">
                         <img src={insta} className="insta" />
                        <img src={linkdin} className="linkdin" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="profile-box">
                <div className="imgPlace">
                    <img src={engineer3} className="engineer1" />
                </div>
                <div className="text-container">
                    <h4>Cynthia A. Nelson</h4>
                    <p>Professor @George Brown College</p>
                    <small>Ut enim ad minim veniam, quis nost exercitation <br />
                        ullamco laboris nisi ut allquip ex commodo.</small>
                    <div className="icon-box">
                        <span>Engineering physics</span>
                        <div className="icons">
                         <img src={insta} className="insta" />
                        <img src={linkdin} className="linkdin" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Subscribe />
    </div>
  )
}

export default mainBody