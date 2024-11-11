import React from 'react'
import './Nav.css'
import img from '../assets/Img/home.png'

const Nav = () => {
  return (
    <div>
        <nav>
           <div>
            <img src={img} alt="" />
            </div>

           <div>
                <ul>
                    <li>HOME</li>
                    <li>SERVICES</li>
                    <li>ABOUT</li>
                    <li>PORTFOLIO</li>
                    <li>TEAM</li>
                    <li>TESTIMONIALS</li>
                    <li>NEWS</li>
                    <li>CONTACT US</li>
                </ul>
           </div>
        </nav>

    </div>
  )
}

export default Nav