import React from 'react'
import Image from 'next/image';



interface burgermenu{
image:string
price:number
burgurname:string
details:string


}
const Menucom:React.FC<burgermenu> = (param) => {
  return (
    <div className='menubox'>
      <h3 className='heading3'>{param.burgurname}</h3>
      <div className='burgur'>
        <div><Image src={param.image} className='myimg' alt='this  is iamge'/></div>
        <div>
<p>{param.details}</p>
<h4>{param.price}</h4>
        </div>
      </div>

        
    </div>
  )
}

export default Menucom