import React from 'react'
import { Link } from 'react-router-dom'
const Footer = ({theme}) => {
  return (
    <div className={`w-full h-52 flex items-center relative transition-all duration-300 ease-in-out delay-[0.4s] justify-center ${theme === "light" ? "bg-[#D08700]" : "bg-zinc-900"}`}>
        <div className='flex flex-col lg:flex-row'>
            <Link
            className='px-2 text-lg uppercase font-thin flex items-center lg:items-end group'
            to={'mailto:nfgaming4523@gmail.com'}
            target='_blank'
            >
                <i className="ri-mail-fill pr-1 text-4xl group-hover:rotate-45 transition-all duration-[1s] group-hover:drop-shadow-[0_0px_10px_rgba(255,0,8,1)] ease-in-out"></i>
            Gmail
            </Link>
            <Link
                className='px-2 text-lg uppercase font-thin flex items-center lg:items-end group'
                to={'https://github.com/Sc-Designs'}
                target='_blank'
                >
                    <i className="ri-github-fill pr-1 text-4xl group-hover:rotate-45 transition-all duration-[1s] group-hover:drop-shadow-[0_0px_10px_rgba(255,0,8,1)] ease-in-out"></i>
            Github
            </Link>
            <Link
                className='px-2 text-lg uppercase font-thin flex items-center lg:items-end group'
                to={'https://www.facebook.com/soham.banarjee.35'}
                target='_blank'
                >
                    <i className="ri-facebook-box-fill pr-1 text-4xl group-hover:rotate-45 transition-all duration-[1s] group-hover:drop-shadow-[0_0px_10px_rgba(255,0,8,1)] ease-in-out"></i>
            FaceBook
            </Link>
            <Link
                className='px-2 text-lg uppercase font-thin flex items-center lg:items-end group'
                to={'https://www.instagram.com/asyncsuvamchakraborti/'}
                target='_blank'
                >
                    <i className="ri-instagram-fill pr-1 text-4xl group-hover:rotate-45 transition-all duration-[1s] group-hover:drop-shadow-[0_0px_10px_rgba(255,0,8,1)] ease-in-out"></i>
            Instagram
            </Link>
        </div>
    </div>
  )
}
export default Footer