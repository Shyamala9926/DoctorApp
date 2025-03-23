/*import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function RelatedDoctors() {

    const {doctors}=useContext(AppContext)
    const navigate = useNavigate()
    const [relDoc,setRelDocs]=useState([])

    useEffect(()=>{
if(doctors.length>0&& speciality){
    const doctorsData =doctors.filter((doc)=>doc.speciality===speciality && doc._id !==docId )
}
    },[doctors,speciality,docId])
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
           <h1 className='text-31 font-mediu'>Top Doctors to Book</h1>
             <p className='sm:1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors.</p>
            <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
                 {relDoc.slice(0,5).map((item,index)=>(
                     <div onClick={()=>navigate('/appointment/${item._id}'); scrollTo(0,0)}} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[10px] transition-all duration-500'>
                         <img className='bg-blue-50' src={item.image} alt ="" />
                         <div className='p-4'>
                             <div className='flex item-center gap-2 text-sm text-center text-green-500'>
                                 <P className="w-2 h-2 bg-green-500 rounded-full"><P>Available</P></P>
                             </div>
                             <p className='text-gray-900 text-lg front-medium'>{item.name}</p>
                             <p className='text-gray-600 text-sm'>{item.speciality}</p>
                       </div>    
                     </div>
                 ))}
             </div>
             <button className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10'>More</button>
         </div>
    
       )
 }
  


export default RelatedDoctors*/


import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

function RelatedDoctors() {
    const { doctors } = useContext(AppContext);
    const navigate = useNavigate();
    const { docId } = useParams(); // Extracting docId from URL params
    const [relDoc, setRelDocs] = useState([]);

    useEffect(() => {
        if (doctors.length > 0) {
            const currentDoctor = doctors.find(doc => doc._id === docId);
            if (currentDoctor) {
                const speciality = currentDoctor.speciality;
                const doctorsData = doctors.filter(doc => doc.speciality === speciality && doc._id !== docId);
                setRelDocs(doctorsData);
            }
        }
    }, [doctors, docId]);

    return (
        <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
            <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
            <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors.</p>

            <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
                {relDoc.slice(0, 5).map((item, index) => (
                    <div
                        key={index}
                        onClick={() => {
                            navigate(`/appointment/${item._id}`);
                            window.scrollTo(0, 0);
                        }}
                        className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500'
                    >
                        <img className='bg-blue-50 w-full h-48 object-cover' src={item.image} alt={item.name} />
                        <div className='p-4'>
                            <div className='flex items-center gap-2 text-sm text-green-500'>
                                <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                                <p>Available</p>
                            </div>
                            <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                            <p className='text-gray-600 text-sm'>{item.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>

            <button className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10'>More</button>
        </div>
    );
}

export default RelatedDoctors;
