/*import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

function Doctors() {

  const {speciality}=useParams()
  const [filterDoc,setfilterDoc] =useState([])
  const navigate = useNavigate()

  const {doctors}= useContext(AppContext)

  const applyFilter =()=>{
    if (speciality){
      setfilterDoc(doctors.filterDoc(doc => doc.speciality === speciality))
    }
    else{
      setfilterDoc(doctors)
    }
  }

  useEffect(()=>{
applyFilter()
  },[doctors,speciality])
  //console.log(speciality)
  return (
    <div>
      <p className='text-gray-600'>Browse through the doctors specialist.</p>
      <div className='flex flex-coll sm:flex-row item-start gap-5 mt-5'>
        <div className=' flex flex-col gap-4 text-sm text-gray-600'>

          <p onClick={()=> speciality==='General physician'? navigate('/doctors'):navigate('/doctors/General physician')} className={'w-[94VW] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "General physician" ? "bg-indigo-100 text-black":""}'}>General physician</p>
          <p onClick={()=> speciality==='Gyneocologist'? navigate('/doctors'):navigate('/doctors/Gyneocologist')} className={'w-[94VW] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gyneocologist" ? "bg-indigo-100 text-black":""} '}>Gyneocologist</p>
          <p onClick={()=> speciality==='Dermatologist'? navigate('/doctors'):navigate('/doctors/Dermatologist')}className={'w-[94VW] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Dermatologist" ? "bg-indigo-100 text-black":""}'}>Dermatologist</p>
          <p onClick={()=> speciality==='pediatricians'? navigate('/doctors'):navigate('/doctors/pediatricians')}className={'w-[94VW] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "pediatricians" ? "bg-indigo-100 text-black":""}'}>pediatricians</p>
          <p onClick={()=> speciality==='Neurologist'? navigate('/doctors'):navigate('/doctors/Neurologist')}className={'w-[94VW] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Neurologist" ? "bg-indigo-100 text-black":""}'}>Neurologist</p>
          <p onClick={()=> speciality==='Gastroenterologist'? navigate('/doctors'):navigate('/doctors/Gastroenterologist')} className={'w-[94VW] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gastroenterologist" ? "bg-indigo-100 text-black":""}'}>Gastroenterologist</p>
          

        </div>
        <div className='w-full grid-col-auto gap-y-6'>
          {
            filterDoc.map((item, index) => (
              <div
                key={index}
                onClick={() => navigate(`/appointment/${item.id}`)}
                className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[10px] transition-all duration-500'
              >
                <img className='bg-blue-50' src={item.image} alt={item.name} />
                
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

export default Doctors before*/



import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

function Doctors() {
  const { speciality } = useParams();
  const [showFilter, setShowFilter] = useState(false);
  const { doctors } = useContext(AppContext);
  const [filteredDocs, setFilteredDocs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (speciality) {
      const decodedSpeciality = decodeURIComponent(speciality).toLowerCase();
      setFilteredDocs(
        doctors.filter(
          (doc) => doc.speciality.toLowerCase() === decodedSpeciality
        )
      );
    } else {
      setFilteredDocs(doctors);
    }
  }, [doctors, speciality]);

  const specialities = [
    'General physician',
    'Gynecologist',
    'Dermatologist',
    'Pediatrician',
    'Neurologist',
    'Gastroenterologist',
  ];

  return (
    <div>
      <p className="text-gray-600">
        {speciality
          ? `Showing doctors for ${decodeURIComponent(speciality)}`
          : 'Showing all available doctors'}
      </p>

      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        {/* Filter Toggle Button for Mobile */}
        <button
          className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${
            showFilter ? 'bg-primary text-white' : ''
          }`}
          onClick={() => setShowFilter((prev) => !prev)}
        >
          Filters
        </button>

        {/* Filter Sidebar section */}
        <div
          className={`flex-col gap-4 text-sm text-gray-600 ${
            showFilter ? 'flex' : 'hidden sm:flex'
          }`}
        >
          {specialities.map((spec) => (
            <p
              key={spec}
              onClick={() =>
                navigate(
                  speciality === spec ? '/doctors' : `/doctors/${encodeURIComponent(spec)}`
                )
              }
              className={`cursor-pointer border px-4 py-2 rounded-md transition-all ${
                decodeURIComponent(speciality || '') === spec
                  ? 'bg-indigo-100 text-black'
                  : 'border-gray-300'
              }`}
            >
              {spec}
            </p>
          ))}
        </div>

        {/* Doctor Cards section*/}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredDocs.length > 0 ? (
            filteredDocs.map((doctor) => (
              <div
                key={doctor._id}
                onClick={() => navigate(`/appointment/${doctor._id}`)}
                className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[5px] transition-all duration-300"
              >
                <img
                  className="w-full h-40 object-cover"
                  src={doctor.image}
                  alt={doctor.name}
                />
                <div className="p-4">
                  <div className="flex items-center gap-2 text-sm text-green-500">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <p>Available</p>
                  </div>
                  <p className="text-gray-900 text-lg font-medium">
                    {doctor.name}
                  </p>
                  <p className="text-gray-600 text-sm">{doctor.speciality}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-3">
              No doctors found for this specialty.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Doctors;
