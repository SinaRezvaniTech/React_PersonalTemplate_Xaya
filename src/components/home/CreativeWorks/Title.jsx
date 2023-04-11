import React from 'react'
//react reveal
import Zoom from 'react-reveal/Zoom'

const Title = ({ title }) => {
  return (
    <div className='relative w-max '>
      <Zoom right cascade duration={2000}>
        <p className='text-3xl font-bold'>{title}</p>
      </Zoom>
      <div className='absolute w-5/6 h-[0.16rem] rounded-full -bottom-3 bg-primary opacity-60'></div>
    </div>
  )
}

export default Title
