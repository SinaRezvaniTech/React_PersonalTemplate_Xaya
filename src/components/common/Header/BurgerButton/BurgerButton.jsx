import React from 'react'

//css
import './BurgerButton.scss'

const BurgerButton = ({ toggleSidebar, sidebar }) => {
  return (
    <div class={`menu-btn  ${sidebar && 'open'}`}>
      <div class='menu-btn__burger'></div>
    </div>
  )
}

export default BurgerButton
