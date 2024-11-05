import React from 'react'
import NavBar from './Navbar/NavBar'
import Main from './Main/Main'
import HeroSection from './Hero/HeroSection'
import UltimaSection from './Ultimo/UltimaSection'
import IconsSection  from './IconsSection/IconsSection'
function Home() {
  return (
    <div>
        <NavBar/>
        <HeroSection/>
        <IconsSection/>
        <Main/>
        <UltimaSection/>
    </div>
  )
}
export default Home