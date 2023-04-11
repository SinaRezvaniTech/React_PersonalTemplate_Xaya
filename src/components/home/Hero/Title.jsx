import React, { useState, useEffect } from 'react'
//react reveal
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'

//content config file
import content from '../../../config/content.json'

const Title = () => {
  //for showing title after 500 ms
  const [showDes, setShowDes] = useState(false)
  const [show, setShow] = useState(false)
  useEffect(() => {
    setShow(true)
    setTimeout(() => {
      setShowDes(true)
    }, 500)
  }, [])

  return (
    <div
      to={'#portfolio'}
      className='w-max h-max mx-auto sm:mr-auto mt-0 lg:mt-20 xl:mt-40  py-3 px-6 backdrop-blur-sm
      text-xl border-0 rounded-3xl'
    >
      <Fade left cascade duration={1500} when={show}>
        <h1 className=' text-4xl sm:text-6xl text-primary drop-shadow-md break-words'>
          {content['hero-title']}
        </h1>
      </Fade>

      <Zoom right cascade duration={1500} when={showDes}>
        <h2 className='text-1xl sm:text-2xl font-medium text-[#525252] drop-shadow-md mt-5'>
          {content['hero-des']}
        </h2>
      </Zoom>
    </div>
  )
}

export default Title
