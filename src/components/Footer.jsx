import React from 'react'
import {assets} from '../assets/assets'

function Footer() {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm: grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/*--- left section -----*/}
            <div>
              <img className='mb-5 w-40' src={assets.logo} alt=''/>
              <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum is simply dummy text of the printing.Simply browse through our extensive list of trusted doctors,
              Schedule your appointment hassle-free.</p>
              </div>

            {/*--- center section -----*/}
            <div>
               <p className='text-xl font-medium mb-5'>COMPANY</p> 
               <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About</li>
                <li>Content</li>
                <li>Privacy policy</li>
               </ul>
            </div>
            {/*--- right section -----*/}
            <div>
               <p className='text-xl font-medium mb-5'> Get in tough</p> 
               <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+1-212-456-7890</li>
                <li>docter2025@gmail.com</li>
                <li>Hyderabad,telangana,india</li>
               </ul>
            </div>
        </div> 

        {/* --- copy right text ----*/}  
        <div>
          <hr/>
          <p className='py-5 text-sm text-center'>copy right paragraph</p>
          </div> 
    </div>
  )
}

export default Footer