import React from 'react'
import coffee1 from '../assets/coffee1.jpg';
import coffee2 from '../assets/coffee2.jpg';
import coffee3 from '../assets/coffee3.jpg';
import coffee4 from '../assets/coffee4.jpg';
const CoffeeArt = () => {
  return (
      <div className='flex flex-row justify-between flex-wrap m-10 gap-5'>
          <div className='flex flex-row flex-wrap gap-5 items-center '>
              <div className=' h-90 w-63 shrink-0'>
                  <img className=' w-full h-full rounded-2xl' src={coffee1} alt='error' />
              </div>
              <div className=' h-90 w-63 shrink-0 '>
                  <img className=' w-full h-full rounded-2xl' src={coffee2} alt='error' />
              </div>
              <div className='h-90 w-63 shrink-0 '>
                  <img className=' w-full  h-full rounded-2xl' src={coffee3} alt='error' />
              </div>
              <div className='h-90 w-83 shrink-0'>
                  <img className='w-ful h-full rounded-2xl  ' src={coffee4} alt='error' />
              </div>
          </div>
          
          <div className='felx flex-row justify-evenly  mr-10 w-auto md:w-[15%] text-[#4A2C22]'>
              <h1 className='text-2xl font-bold font-serif'>COFFEE</h1>
              <p className='mt-0.5 mb-3'> Slowly Crafted</p>
              <h1 className='text-2xl font-bold font-serif text-right'>MOMENTS</h1>
              <p className='text-right mt-0.5 mb-3'>Made to Savor</p>
              <h1 className='text-2xl font-bold font-serif'>CAFÉ</h1>
              <p className='mt-0.5 mb-3'>Warm. Calm. Cozy.</p>
              <h1 className='text-2xl font-bold font-serif text-right'>SIP SLOW</h1>
              <p className='text-right mt-0.5 mb-3'>Enjoy the Moment</p>
              <h1 className='text-2xl font-bold font-serif '>AROMA</h1>
              <p className=' mt-0.5 mb-3'>Bold & Beautiful</p>
          </div>
      
    </div>
  )
}

export default CoffeeArt
