import React from 'react'
import HeroSection from './Hero/HeroSection'
import NavBar from './Navbar/NavBar'
import UltimaSection from './Ultimo/UltimaSection'


function Home() {
  return (
    <div>
        <NavBar/>
        <HeroSection/>
        <UltimaSection/>
    </div>
  )
}

export default Home