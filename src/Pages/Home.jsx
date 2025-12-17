import React from 'react'
import Hero from '../Components/Hero'
import AboutMe from '../Components/AboutMe'
import Footer from '../layout/Footer'
import WorkBadge from '../Components/WorkBadge'

const Home = () => {
  return (
    <div className='h-screen w-full'>
      <Hero/>
      <WorkBadge/>
      <Footer/>
      {/* <AboutMe/> */}
    </div>
  )
}

export default Home