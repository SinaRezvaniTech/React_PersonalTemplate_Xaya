import React from 'react'

//components
import Hero from './Hero/Hero'
import About from './About/About'
import Skills from './Skills/Skills'
import CreativeWorks from './CreativeWorks/CreativeWorks'
import Contact from './Contact/Contact'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <CreativeWorks />
      <Contact />
    </>
  )
}

export default Home
