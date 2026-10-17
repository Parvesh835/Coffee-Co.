import React from 'react'
import Header from './components/Header'
import About from './components/About'
import CoffeeArt from './components/CoffeeArt'
import Rating from './components/Rating'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='bg-[#E6E2D9]'>
      <Header />
      <About />
      <CoffeeArt />
      <Rating />
      <Footer/>
    </div>
  )
}

export default App
