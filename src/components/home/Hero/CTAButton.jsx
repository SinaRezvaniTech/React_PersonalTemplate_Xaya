import React, { useState, useEffect } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
//react reveal
import Fade from 'react-reveal/Fade'

const CTAButton = () => {
  //for showing btn after 800 ms
  const [showDes, setShowDes] = useState(false)
  const [show, setShow] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 800)
  }, [])

  return (
    <Link
      to={'#portfolio'}
      className='w-max h-max mx-auto sm:mr-auto mb-10  py-3 px-6 backdrop-blur-sm
     bg-[#f8f8f888] border-primary border-2 rounded-full text-xl font-bold hover:shadow-md ease-in-out duration-300 hover:-translate-y-1'
    >
      <Fade top cascade duration={1200} when={show}>
        <p>Creative works</p>
      </Fade>
    </Link>
  )
}

export default CTAButton
