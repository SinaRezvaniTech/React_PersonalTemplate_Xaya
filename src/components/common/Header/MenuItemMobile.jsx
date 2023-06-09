//libraries
import React, { useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
//icons
import { HiChevronDown } from 'react-icons/hi'

//hooks
import useMobileSidebar from '../../../hooks/useMobileSidebar'

const MenuItemMobile = ({ item, isSubmenu }) => {
  //submenu handller
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  //sidebar
  const { sidebar, toggleSidebar, setSidebar } = useMobileSidebar()
  return (
    <>
      <li
        onClick={() => setIsOpenMenu(!isOpenMenu)}
        className={`${item.url} ${
          isSubmenu &&
          'hover:shadow-sm hover:scale-90 min-w-[8rem]  my-1 py-0 ml-16 '
        }  flex justify-start items-start  my-3  cursor-pointer ease-in-out duration-500 relative font-medium opacity-75 hover:opacity-100 text-black  ml-8 text-3xl h-full`}
      >
        {/*Single Link - if clicked on links who has url. this will be close*/}

        <Link
          onClick={() => item.url !== null && setSidebar(false)}
          to={item.url}
        >
          <p className={`${item.url}  text-[1.2rem]  mt-5 h-full`}>
            {item.text}
          </p>
        </Link>
        {item.children.length !== 0 && (
          <HiChevronDown className='mt-2 opacity-70 text-black ' />
        )}
      </li>
      {/*If Menu has sub menu*/}
      {item.children.length !== 0 && (
        <li>
          {/*Sub Menu (Children)*/}
          {isOpenMenu && (
            <div className={`flex flex-col top-7 left-0 gap-0  `}>
              {item.children.map((i) => (
                <MenuItemMobile item={i} isSubmenu={true} />
              ))}
            </div>
          )}
        </li>
      )}
    </>
  )
}

export default MenuItemMobile
