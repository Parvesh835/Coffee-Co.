import React from 'react'

const Header = () => {
  return (
    <header  >
      <div className='h-10 w-full bg-[#4A2C22] font-serif text-base flex flex-row justify-between items-center text-[#F5EFE6] px-5'>
        <p>Free Delivery On Orders Above $30</p>
        <p>Open Daily: 7:00 AM – 9:00 PM</p>
        <p>🔍</p>
      </div>
      <div className='bg-[#E6E2D9] flex flex-3 h-20 items-center'>
          <h1 className='text-3xl text-[#4A2B21] ml-5 font-bold font-sans'>Coffee&Co.</h1>
          <div className='ml-auto flex gap-6'>
          <a href="/">Home</a>
          <a href="/">Menu</a>
          <a href="/">About</a>
          <a href="/">Gallery</a>
          </div>
        <button className='rounded-full bg-[#5B3427] text-[#E6E2D9] px-6 py-2 mx-4'>Contact</button>
      </div>
    </header>
  )
}

export default Header
