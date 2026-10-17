import React from 'react'
import Rating1 from '../assets/Rating1.jpg'
import Rating2 from '../assets/Rating2.jpg'

const Rating = () => {
  return (
    <div className='m-10 flex flex-row items-center justify-between flex-wrap gap-5 '>
        <div className='h-120 w-110 shrink-0'>
          <img src={Rating1} className=' h-full w-full rounded-3xl'/>
        </div>
          <div className='h-120 w-110 font-sans text-[#4A2C22]'>
              <h1 className='text-4xl mt-5 font-bold '>About Our Café Espresso Connection</h1>
              <p className='text-2xl my-4'>Nestled in the heart of downtown, our café blends warm hospitality with craft coffee excellence. Every cup is roasted, ground, and poured with care by baristas who treat coffee as an art form.</p>
              <p className='text-3xl font-bold mt-10 mb-5'>★★★★★</p>
              <p className='text-xl mt-4'>Coffee & Fresh-Baked Croissants Daily</p>
          </div>
          <div className='h-120 w-110 shrink-0'>
              <img src={Rating2} alt="error" className='h-full w-full rounded-3xl'/>
          </div>
    </div>
  )
}

export default Rating
