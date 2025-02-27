import React from 'react'
import {assets} from '../assets/assets'

function Footer() {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/*--- left section -----*/}
            <div>
              <img src={assets.logo} alt=''/>
              <p>Lorem ipsum is simply dummy text of the printing.</p>

            </div>
            {/*--- center section -----*/}
            <div>
               <p>COMPANY</p> 
               <ul>
                <li>Home</li>
                <li>About</li>
                <li>Content</li>
                <li>Privacy policy</li>
               </ul>
            </div>
            {/*--- right section -----*/}
            <div>
               <p> Get in tough</p> 
               <ul>
                <li>+1-212-456-7890</li>
                <li>docter2025@gmail.com</li>
                <li>Hyderabad,telangana,india</li>
               </ul>
            </div>
        </div> 
        {/* --- copy right text ----*/}  
        <div>
          <hr/>
          <div>

          </div>
          </div> 
    </div>
  )
}

export default Footer