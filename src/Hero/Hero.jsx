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
               {/* column 1 */}
                <div>
                    <h1>100</h1>
                    <div>PROJECTS ANNUALLY</div>
                </div>
            
            {/* column 2 */}
                <div>
                    <h1>45</h1>
                    <div>AWARDS</div>
                </div>
            {/* column 3 */}
                <div>
                    <h1>98%</h1>
                    <div>POSIVTIVE REWARDS</div>
                </div>

              {/* column 4 */}
                <div>
                    <h1>147k</h1>
                    <div>HAPPY CUSTOMERS</div>
                </div>
                
        </div>

      
    </>
  )
}

export default Hero