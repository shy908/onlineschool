import React from 'react'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Services from '../components/Services/Services'
import Features from '../components/Features/Features';
import Reviews from '../components/Reviews/Reviews'
import Cta from '../components/QuickChat/cta'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero/>
      <About/>
      <Services/>
      <Features/>
      <Reviews/>
      <Cta/>
    </div>
  )
}

export default Home
