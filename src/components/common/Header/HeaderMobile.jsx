import React from 'react'
import { Link } from 'react-router-dom'

//icons
import { BiMenu } from 'react-icons/bi'
import { RiCloseFill } from 'react-icons/ri'
// Data
import HeaderData from './HeaderData'

//hooks
import useMobileSidebar from '../../../hooks/useMobileSidebar'
// CSS
import style from './HeaderMobile.module.scss'
import MenuItemMobile from './MenuItemMobile'

//components
import BurgerButton from './BurgerButton/BurgerButton'
import ColorSelector from './ColorSelector/ColorSelector'

const HeaderMobile = () => {
  const { sidebar, toggleSidebar } = useMobileSidebar()

  return (
    <>
      {/*Color selector*/}
      <div className=' mt-5 absolute right-5 -top-2 z-[51]'>
        <ColorSelector />
      </div>

      {/*Icon Toggle Sidebar*/}
      <div
        id='navbar'
        className='w-full fixed   ease-in-out duration-300 bg-blue-dark  p-4  text-gray-800 z-50'
      >
        <div className=' flex items-center justify-between '>
          <div
            onClick={() => toggleSidebar()}
            className=' bg-[#dadada58] backdrop-blur-sm  -my-3 -mx-2 hover:bg-gray-transparent rounded-lg scale-75 ease-in-out duration-500 cursor-pointer  z-[9999999]'
          >
            <BurgerButton toggleSidebar={toggleSidebar} sidebar={sidebar} />
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        onClick={toggleSidebar}
        style={{ visibility: !sidebar ? 'hidden' : 'visible' }}
        className={`${
          sidebar ? 'bg-[#f0f0f0d6] ' : ' bg-[#ffffff00] '
        }  text-black  w-screen h-screen z-[2] fixed top-0  left-0 ease-in-out duration-500`}
      ></div>
      <div
        style={{ left: sidebar ? '0' : '-300px' }}
        className={`${style.scrollStyle} bg-blue-light top-0 left-0 rounded-l-lg flex	flex-col drop-shadow-md w-52 h-full z-[2]  text-black fixed ease-in-out duration-500 overflow-y-auto`}
      >
        {/* Nav Links */}
        <nav>
          <ul className=' flex flex-col pt-16 '>
            {HeaderData.map((i, index) => (
              <MenuItemMobile key={index} item={i} />
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}

export default HeaderMobile
