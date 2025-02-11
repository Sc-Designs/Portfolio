import React from 'react'
import Light_Dark from '../utils/Light_Dark'
const Navbar = ({theme, isOpen}) => {
  return (
    <>
    <Light_Dark isOpen={isOpen.isOpen} />
    <div id="navbar" className='fixed hidden z-40 px-5 w-fit top-5 left-1/2 -translate-x-1/2 h-16 lg:flex items-center justify-center gap-x-10 rounded-lg uppercase xl:flex'>
        {[{name:'Home', href:'#home'},
        {name:'About', href:'#about'},
        {name:'Projects', href:'#projects'}
      ].map((link,index)=>{
          return (
            <a href={link.href} key={index} id="links" className='text-2xl py-1 group font-thin cursor-pointer relative px-2'><span className='relative z-10  transition-all duration-300 ease-in-out'>{link.name}</span></a>
          )
        })}
        <p
        onClick={()=>{
          theme.setTheme(theme.theme === 'light' ? 'dark' : 'light')
          isOpen.setIsOpen(!isOpen.isOpen)
        }} 
        className='cursor-pointer ml-20 relative z-20 transition-all duration-300 ease-in-out'>
        {theme.theme === 'dark' ? "Light" : "Dark"}
        <i className={`${theme.theme === 'light' ? "ri-moon-clear-line" : "ri-sun-line"} ml-5`}></i>
        </p>
    </div>
          </>
  )
}
export default Navbar