import React from 'react'
import Red from './Red'



const Header = () => {
  return (
    <div className='Header'>
<div><Red text='BURGERS' /></div>
<div className='centerdiv'>
    
    {["home","about","flavour","contact"].map((val)=>



<ul className='center'>
    <li key={val}> {val}</li>
</ul>

)





    }
</div>
<div><Red text='Shop now'/></div>
 </div>
  )
}

export default Header