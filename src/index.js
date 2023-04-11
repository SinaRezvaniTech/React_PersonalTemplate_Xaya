//libraries
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

//components
import App from './App'
//context
import ContextProvider from './context/ContextProvider'

const root = createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <ContextProvider>
      <App />
    </ContextProvider>
  </BrowserRouter>
)
