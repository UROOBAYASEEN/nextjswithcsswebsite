import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";


const Footer = () => {
  return (
    <div className='footerdiv'>

<div> @ The burgur shops</div>
<div>
<div className='flex'>
            {[<FaFacebookF/>,<FaTwitter/>,<RiInstagramFill />].map((val,ind)=>
            
          <p    key={ind} className='icon'>{val}</p>
          
          
          )
            
            
            
            
            }</div>
</div>



    </div>
  )
}

export default Footer