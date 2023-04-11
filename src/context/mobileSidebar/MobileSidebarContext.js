import React, { useState, createContext } from 'react'

const MobileSidebarContext = createContext()
export function MobileSidebarContextProvider({ children }) {
  const [sidebar, setSidebar] = useState(false)

  const toggleSidebar = () => {
    setSidebar((currentStatus) => !currentStatus)
  }

  return (
    <MobileSidebarContext.Provider
      value={{
        setSidebar,
        sidebar,
        toggleSidebar,
      }}
    >
      {children}
    </MobileSidebarContext.Provider>
  )
}

export default MobileSidebarContext
