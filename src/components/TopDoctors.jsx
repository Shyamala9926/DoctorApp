import React from 'react'
import { doctors } from '../assets/assets'

function TopDoctors() {
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
        <h1 className='text-31 font-mediu'>Top Doctors to Book</h1>
        <p className='sm:1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors.</p>
        <div>
            {doctors.slice(0,10).map((item,index)=>(
                <div>
                    <img src={item.image} alt ="" />
                    <div>
                        <div>
                            <P><P>Available</P></P>
                        </div>
                        <p>{item.name}</p>
                        <p>{item.speciality}</p>
                  </div>    
                </div>
            ))}
        </div>
        <button>More</button>
    </div>

  )
}

export default TopDoctors