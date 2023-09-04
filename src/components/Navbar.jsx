import React, { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
   const [toggle, setToggle] = useState(false)
  const ImgClickEvent = ()=>{

    setToggle((prev)=> !prev)}

  return (
    <>
      <nav className=' relative z-[10] w-full flex py-6 justify-between item-center '>
        <img src={logo} alt='hoobanklogo'
          className='w-[124px  h-[32px] justify-start' />

        <ul className='  list-none sm:flex  hidden  justify-end items-center flex-1 '>
         {navLinks.map((nav,index)=>(
          <li
           key={nav.id}
           className={`font-poppins font-normal cursor-pointer text-[16px] text-white ms-9`  }
           title={nav.title}
           link={nav.link}
           >
          
           <NavLink href={` ${nav.id}`} to={`${nav.link} `}>{nav.title}</NavLink>

           </li>
         ))}
        </ul>

        <div className='sm:hidden  justify-end items-center'>
       
          <img
           onClick={ImgClickEvent} 
          className='w-[28px] h-[28px] object-contain flex justify-end'
           src={toggle? close:menu } 
           />
          {toggle?
          <div className=' flex flex-col text-white p-6 bg-black-gradient absolute top-20 right-2 mx-4 my-2 min-w-[140px] rounded-xl sidebar '>


          <ul className='  list-none sm:hidden space-y-3  flex flex-col   justify-center items-center flex-1 '>
         {navLinks.map((nav,index)=>(
          <li
           key={nav.id}
           className={`font-poppins font-normal cursor-pointer text-[16px] text-white `  }
           title={nav.title}
           link={nav.link}
           >
       
            <NavLink href={` ${nav.id}`} to={`${nav.link} `}>{nav.title}</NavLink>
          
           </li>
         ))}
        </ul>

          </div>:null}
           
        </div>

      </nav>
    </>
  )
}

export default Navbar;