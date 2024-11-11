import React from 'react'
interface data{

    image:string
    review:string

}
const Review:React.FC<data> = (data) => {
   
    
    
  return (
    <div className='review'>
        <div>
            <img src={data.image} alt='this is image'></img>
            <p className='reva'>{ data.review}</p>
        </div>


    </div>
  )
}

export default Review