import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'

function Doctors() {

  const {speciality}=useParams()
  const [filterDoc,setfilterDoc] =useState([])
  const {doctors}= useContext(AppContext)
  console.log(speciality)
  return (
    <div>
      <p>Browse through the doctors specialist.</p>
      <div>
        <div>
          <p>General physician</p>
          <p>Gyneocologist</p>
          <p>Dermatologist</p>
          <p>pediatricians</p>
          <p>Neurologist</p>
          <p>Gastroenterologist</p>
          <p>Cardiologists</p>
          <p>Gastroenterologist</p>
          <p>Psychiatrist</p>
        </div>
        <div>
          {
            filterDoc.map((item, index) => (
              <div
                key={index}
                onClick={() => navigate(`/appointment/${item.id}`)}
                className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[10px] transition-all duration-500'
              >
                <img className='bg-blue-50 w-full h-40 object-cover' src={item.image} alt={item.name} />
                
                <div className='p-4'>
                  <div className='flex items-center gap-2 text-sm text-green-500'>
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <p>Available</p>
    
                  </div>
                  <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                  <p className='text-gray-600 text-sm'>{item.speciality}</p>
                </div>    
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Doctors