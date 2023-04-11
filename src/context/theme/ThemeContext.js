//library
import React, { createContext, useState } from 'react'

//content config file
import settings from '../../config/settings.json'

//create context
export const ThemeContext = createContext()

//func provider
export const ThemeContextProvider = ({ children }) => {
  // orange-mode, red-mode, blue-mode, purple-mode,  =>  blue mode is default
  const [theme, setTheme] = useState(settings.defaultColorMode)

  //init
  let body = document.querySelector('body')
  body.classList.remove(theme)
  body.classList.add(theme)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
