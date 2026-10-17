import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#4A2C22] text-[#F5EFE6]  w-full  pt-15 px-20 flex flex-col justify-between gap-10'>
      <div className='flex flex-row justify-between items-start font-serif gap-10'>
          <div className='flex flex-col justify-center items-start pr-30'>
             <h1 className='text-3xl text-[#FFFFFF]  font-bold font-sans text-left mb-1'>Coffee&Co.     </h1>
             <hr/>
             <p className='text-[#cdc3ba] mt-5'>123 Maple Street <br/> Portland, OR 97201 <br/> hello@coffeeandco.com <br/>(503) 555-0148</p>
          </div>
          <div>
        <h1 className='text-3xl text-[#FFFFFF]  font-bold font-sans text-left mb-1'>Explore     </h1>
        <hr/>
        <p className='text-[#C9BBAE] mt-5'>Menu <br/> About <br/> Gallery <br/>Contact</p>
      </div>
      <div>
        <h1 className='text-3xl text-[#FFFFFF]  font-bold font-sans text-left mb-1'>Hours      </h1>
        <hr/>
        <p className='text-[#C9BBAE] mt-5'>Mon – Fri: 7:00 AM – 9:00 PM <br/> Saturday: 7:00 AM – 9:00 PM <br/> Sunday: 8:00 AM – 8:00 PM</p>
      </div>
      <div>
        <h1 className='text-3xl text-[#FFFFFF]  font-bold font-sans text-left mb-1'>Support       </h1>
        <hr/>
        <p className='text-[#C9BBAE] mt-5'>Delivery info <br/> FAQs <br/>Careers</p>
        </div>
      </div>
      <div>
        <hr />
        <p className='text-center  py-5 '>© 2026 Coffee&Co. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
