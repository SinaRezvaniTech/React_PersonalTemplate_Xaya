//library
import React, { useContext } from 'react'
//context
import ThemeContext from '../context/theme/ThemeContext'

const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  return { theme, setTheme }
}

export default useTheme
