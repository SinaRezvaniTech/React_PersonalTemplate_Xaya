import React, { useState } from 'react'

//hooks
import useTheme from '../../../../hooks/useTheme'

//icons
import { FaPaintBrush } from 'react-icons/fa'

//setting config file
import settings from '../../../../config/settings.json'

const ColorSelector = () => {
  const { setTheme, theme } = useTheme()
  // for open & close color selector
  const [isOpen, setIsOpen] = useState(false)

  //func color changer
  const themeHandler = (mode) => {
    //get body
    let body = document.querySelector('body')
    body.classList.remove(theme)
    body.classList.add(mode)
    setTheme(mode)
  }
  return settings.showColorpicker == true ? (
    <div
      style={{ height: isOpen ? '235px' : '60px' }}
      className={`bg-[#f0f0f0c4] mr-2  backdrop-blur-sm p-4 rounded-full  min-h-max ease-in-out duration-200 overflow-hidden ${
        !isOpen && 'hover:scale-105'
      }`}
    >
      {/* brush icon */}
      <FaPaintBrush
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          !isOpen ? 'text-black opacity-70' : 'text-primary opacity-100 '
        }  text-2xl ease-in-out duration-500 w-full  text-center cursor-pointer m-auto`}
      />

      {/* colors // orange-mode, red-mode, blue-mode, purple-mode,  =>  orange mode is default */}
      <div className='mt-5 flex flex-col gap-3'>
        <div
          onClick={() => themeHandler('orange-mode')}
          className='w-7 h-7 rounded-full bg-[#fca311] cursor-pointer ease-in-out duration-200 hover:scale-110'
        ></div>

        <div
          onClick={() => themeHandler('red-mode')}
          className='w-7 h-7 rounded-full bg-[#ab256c] cursor-pointer ease-in-out duration-200 hover:scale-110'
        ></div>

        <div
          onClick={() => themeHandler('purple-mode')}
          className='w-7 h-7 rounded-full bg-[#ab26ba] cursor-pointer ease-in-out duration-200 hover:scale-110'
        ></div>

        <div
          onClick={() => themeHandler('blue-mode')}
          className='w-7 h-7 rounded-full bg-[#2470bb] cursor-pointer ease-in-out duration-200 hover:scale-110'
        ></div>
      </div>
    </div>
  ) : (
    <></>
  )
}

export default ColorSelector
