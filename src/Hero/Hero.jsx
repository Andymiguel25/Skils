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
                <li>100 <br /> <span>PROJECTS ANNUALLY</span></li>
                <li>45<br /><span>AWARDS</span></li>
                <li>98%<br /> <span>POSIVTIVE REWARDS</span> </li>
                <li>147K <br /> <span>HAPPY CUSTOMERS</span></li>
            </ol>
        </div>

      
    </>
  )
}

export default Hero