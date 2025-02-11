import React from 'react'
import Light_Dark from './Light_Dark'

const Sidenav = ({theme,isOpen}) => {
  return (
    <>
    <div
    className={`lg:hidden w-fit right-5 top-5 rounded-lg px-4 py-2 h-fit fixed z-40 ${theme.theme === 'dark' ? 'bg-yellow-500 text-black' : 'bg-black text-yellow-500'}`}
    >
        <span
        onClick={()=>{
            theme.setTheme(theme.theme === 'light' ? 'dark' : 'light')
            isOpen.setIsOpen(!isOpen.isOpen)
        }}
        className='cursor-pointer relative z-20 transition-all duration-300 ease-in-out'>
        {theme.theme === 'dark' ? "Light" : "Dark"}
        <i className={`${theme.theme === 'light' ? "ri-moon-clear-line" : "ri-sun-line"} ml-5`}></i>
        </span>
    </div>
        <Light_Dark isOpen={isOpen.isOpen} />
            </>
  )
}

export default Sidenav