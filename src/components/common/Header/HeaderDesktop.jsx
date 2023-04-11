//libraries
import React from 'react'
// Data
import HeaderData from './HeaderData'

// CSS
import style from './HeaderDesktop.module.scss'
import MenuItemDesktop from './MenuItemDesktop'

//components
import ColorSelector from './ColorSelector/ColorSelector'

const HeaderDesktop = () => {
  return (
    <>
      {/*Container*/}
      <div className='container relative  m-auto flex items-center'>
        {/*Color selector*/}
        <div className=' mt-5 absolute right-0 top-1'>
          <ColorSelector />
        </div>

        {/*Content - Menu items*/}
        <div className='fixed top-0'>
          <nav className='h-full z-50 shadow-sm backdrop-blur-sm bg-[#f8f8f8] bg-opacity-60 mt-5 rounded-3xl text-gray-900 text-center '>
            <ul className=' flex mx-10 my-1  gap-12 h-full '>
              {HeaderData.map((i, index) => (
                <MenuItemDesktop key={index} item={i} />
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default HeaderDesktop
