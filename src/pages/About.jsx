import React from 'react'

function About() {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT<span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360]' src={assets.About_image} alt="" />
      
<div>
      <p>Welcome to prescripto,you trusted partner in managing you healthcare needs </p>
      <p>Prescripto is committed to excellence in healthcare technology.</p>
      <b className='text-gray-800'>Our vision</b>
      <p>Our vision at prescripto is to create a seamless healthcare experience for every</p>
    </div>
    </div>

    <div className='text-xl my-4'>
      <p>WHY <spam className="text-gray-700 font-semibold">CHOOSE US</spam></p>
    </div>

<div>
  <div>
    <b>Efficiency:</b>
    <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
  </div>

  <div>
    <b>Convenience:</b>
    <p>Access to a network of truested healthcare professionals in the area.</p>
  </div>

  <div>
    <b>Personalization:</b>
    <p>Tailored recommendations and reminders to help your health.</p>
  </div>
</div>


    </div>
  )
}

export default About