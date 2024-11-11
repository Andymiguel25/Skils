import React from 'react'
import "./Hero.css"
import { PiPlayCircleDuotone } from "react-icons/pi";

const Hero = () => {

  return (
    
    <>
    
       <div className='heroBox'> 
            <h1>High-Quality Business <br />Solutions</h1>
            <h3>Our company provides various services and solutions for <br /> businesses worldwide.</h3>
            <button>Contact US</button>
           <span>
            <PiPlayCircleDuotone className='icon'/>
           </span>
        </div>
      
    </>
  )
}

export default Hero