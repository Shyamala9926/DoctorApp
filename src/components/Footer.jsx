import React from 'react'
import {assets} from '../assets/assets'

function Footer() {
  return (
    <div>
        <div>
            {/*--- left section -----*/}
            <div>
              <img src={assets.logo} alt=''/>
              <p>Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>

            </div>
            {/*--- center section -----*/}
            <div>
               <p>COMPANY</p> 
               <ul>
                <li>Home</li>
                <li>About</li>
                <li>content</li>
                <li>privacy policy</li>
               </ul>
            </div>
            {/*--- right section -----*/}
            <div>
               <p> Get in tough</p> 
               <ul>
                <li>+1-212-456-7890</li>
                <li>docter2025@gmail.com</li>
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