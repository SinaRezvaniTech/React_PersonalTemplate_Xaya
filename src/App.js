import React from 'react'
import { Helmet } from 'react-helmet'
//css
import './global.scss'

//components
import HeaderDesktop from './components/common/Header/HeaderDesktop'
import HeaderMobile from './components/common/Header/HeaderMobile'

//hooks
import useViewportWidth from './hooks/useViewportWidth'
import Home from './components/home/Home'

//content config file
import settings from './config/settings.json'

function App() {
  //for responsibility
  const { viewportWidth } = useViewportWidth()
  return (
    <div className=''>
      {/* Seo options */}
      <Helmet>
        <title>{settings.siteTitle}</title>
        <meta name='description' content={settings.siteDescription} />
      </Helmet>

      {/*Headers*/}
      <div className='header z-10 relative'>
        {viewportWidth >= 1024 ? <HeaderDesktop /> : <HeaderMobile />}
      </div>
      {/*Contents*/}
      <div className='content z-0'>
        <Home />
      </div>
    </div>
  )
}

export default App
