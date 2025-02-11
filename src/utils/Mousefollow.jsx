import React from 'react';

const Mousefollow = ({theme}) => {
    window.addEventListener('mousemove',(e)=>{
        document.querySelector('.mouse').style.top = `${e.clientY}px`;
        document.querySelector('.mouse').style.left = `${e.clientX}px`;

    })
  return (
    <div className={`mouse hidden lg:block z-40 pointer-events-none blur-xl w-10 h-10 fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full ${theme === 'dark' ? 'bg-red-400': 'bg-lime-600'}`}></div>
  )
}

export default Mousefollow