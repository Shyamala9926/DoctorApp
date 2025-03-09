import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'

function Doctors() {

  const {speciality}=useParams()
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
      

        </div>
      </div>
    </div>
  )
}

export default Doctors