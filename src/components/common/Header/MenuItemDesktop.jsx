//libraries
import React, { useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link'

//icons
import { GrFormDown } from 'react-icons/gr'

const MenuItemDesktop = ({ item, isSubmenu }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  return (
    <li
      onClick={() => item.children.length !== 0 && setIsOpenMenu(!isOpenMenu)}
      className={`${item.url} ${
        isSubmenu
          ? 'hover:shadow-sm hover:scale-90 min-w-[8rem]  my-0 py-3 bg-white'
          : 'my-3'
      }  flex justify-center items-center   cursor-pointer ease-in-out duration-500 relative font-medium z-[9999] opacity-75 hover:opacity-100 text-gray-900  m-auto h-full`}
    >
      {/*Single Link*/}
      <Link to={item.url}>
        <p className={`${item.url}  text-[1.3rem]   h-full`}>{item.text}</p>
      </Link>

      {/*If Menu has sub menu*/}
      {item.children.length !== 0 && (
        <ul>
          <GrFormDown className=' opacity-70' />
          {/*Sub Menu (Childern)*/}
          {isOpenMenu && (
            <div className={`flex flex-col top-10 left-0 gap-0  absolute`}>
              {item.children.map((i, index) => (
                <MenuItemDesktop key={index} item={i} isSubmenu={true} />
              ))}
            </div>
          )}
        </ul>
      )}
    </li>
  )
}

export default MenuItemDesktop
