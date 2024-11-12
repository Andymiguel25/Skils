import React from 'react'
import "./Hero.css"
import { PiPlayCircleDuotone } from "react-icons/pi";

const Hero = () => {

  return (
    
    <>
    {/* hero box with image */}
       <div className='heroBox'> 
            <h1>High-Quality Business <br />Solutions</h1>
            <h3>Our company provides various services and solutions for <br /> businesses worldwide.</h3>
          <div className='buttonAndIcon'>
            <button>Contact US</button>
           <div>
            <PiPlayCircleDuotone className='icon'/>
           </div>
           </div>  
        </div>
        {/* second layer with numbers */}

        <div className='numberContainer'>
            <ol>
                <li>100 <br />PROJECTS ANNUALLY</li>
                <li>45<br />AWARDS</li>
                <li>98%<br />POSIVTIVE REWARDS </li>
                <li>147K <br />HAPPY CUSTOMERS</li>
            </ol>
        </div>

      
    </>
  )
}

export default Hero