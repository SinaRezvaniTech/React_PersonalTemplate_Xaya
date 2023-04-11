//library
import React, { useContext } from 'react'
//context
import MobileSidebarContext from '../context/mobileSidebar/MobileSidebarContext'

const useMobileSiebar = () => {
  //use sidebar context
  const { toggleSidebar, sidebar, setSidebar } =
    useContext(MobileSidebarContext)
  return { toggleSidebar, sidebar, setSidebar }
}

export default useMobileSiebar
