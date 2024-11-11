import React from 'react'
import Image from 'next/image';

interface data{

    image:string
    review:string

}
const Review:React.FC<data> = (data) => {
   
    
    
  return (
    <div className='review'>
        <div>
            <Image src={data.image} alt='this is image'/>
            <p className='reva'>{ data.review}</p>
        </div>


    </div>
  )
}

export default Review