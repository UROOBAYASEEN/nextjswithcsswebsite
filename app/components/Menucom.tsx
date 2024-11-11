import React from 'react'



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
        <div><img src={param.image} className='myimg' alt='this  is iamge'></img></div>
        <div>
<p>{param.details}</p>
<h4>{param.price}</h4>
        </div>
      </div>

        
    </div>
  )
}

export default Menucom