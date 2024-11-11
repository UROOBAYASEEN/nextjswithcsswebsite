import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";


const Footer = () => {
  const icons = [
    { component: <FaFacebookF />, name: 'facebook' },
    { component: <FaTwitter />, name: 'twitter' },
    { component: <RiInstagramFill />, name: 'instagram' },
  ];
  return (
    <div className='footerdiv'>

<div> @ The burgur shops</div>
<div>
<div className='flex'>
            {icons.map((val,ind)=>
            
          <p key={val.name} className='icon'>{val.component}</p>
          
          
          )
            
            
            
            
            }</div>
</div>



    </div>
  )
}

export default Footer