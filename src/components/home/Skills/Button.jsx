import React from 'react'

const Button = ({ item, setItem }) => {
  return (
    <div className='m-auto w-max border-4 border-primary py-3 px-5 rounded-full relative ease-in-out duration-200'>
      {/*button items*/}
      <div className='flex gap-7 text-xl  font-bold z-[1] relative cursor-pointer'>
        <p
          onClick={() => setItem('Skills')}
          className={`${item === 'Skills' && 'text-white opacity-100'}`}
        >
          Skills
        </p>
        <p
          onClick={() => setItem('Experience')}
          className={`${item === 'Experience' && 'text-white opacity-100'}`}
        >
          Experience
        </p>
      </div>

      {/*back drop*/}
      <div
        style={{
          width: item === 'Skills' ? '40%' : '65%',
          left: item === 'Skills' ? '-1%' : '36%',
        }}
        className='absolute top-0  bg-primary rounded-full h-full ease-in-out duration-200'
      ></div>
    </div>
  )
}

export default Button
