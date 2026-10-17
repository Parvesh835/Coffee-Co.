import React from 'react'

const About = () => {
  return (
    <div className="bg-[url('/Coffee.jpg')] min-w-fit h-155 m-10 rounded-4xl bg-cover bg-center flex flex-col justify-center items-start">
      <div className='flex flex-col justify-center items-start  text-left ml-10 font-serif'>
        <h1 className=' text-5xl  text-[#FFFFFF]'>Brewed Fresh,<br /> Served Warm</h1>
        <p className='text-2xl mt-3  text-[#FFFFFF]'>Experience the perfect cup every time.</p>
      <button className='bg-[#dccfc0] hover:bg-[rgb(144,123,99)] rounded-full  py-2 px-4 font-bold font-serif ml-5 mt-5 text-[#4A2C22]'>Visit us</button>
      </div>
    </div>
  )
}

export default About
