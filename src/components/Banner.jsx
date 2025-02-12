import React from 'react'

function Banner() {
  return (
    <div>
      {/*----- left side-----*/}
      <div>
        <div>
          <p> Book Appointment</p>
          <p>With 100+ Trusted Docters</p>
        </div>
        <button>Create account</button>

      </div>

       {/*----- right side-----*/}
       <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
       <img className='w-full absolute bottom-0 right-0 max-w-md' ></img>
        
        </div>

    </div>
  )
}

export default Banner