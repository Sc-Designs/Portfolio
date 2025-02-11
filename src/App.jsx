import React, { useState } from 'react'
import LandingPage from './pages/LandingPage'
import Navbar from './pages/Navbar'
import About from './pages/About'
import Projects from './pages/Projects'
import KnownLanguage from './utils/KnownLanguage'
import Hero from './pages/Hero'
import Footer from './pages/Footer'
import Loder from './utils/Loder'
import Mousefollow from './utils/Mousefollow'
import Sidenav from './utils/Sidenav'

const App = () => {
  const [theme, setTheme] = useState('dark')
  const [loders, setloders] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={`w-full h-fit bg-[#0E0E0E] bg-zinc-800" ${theme === "light" ? "text-black" : "text-yellow-500"} relative z-10`}>
      <Loder loder={{loders, setloders}} />
      <Mousefollow theme={theme} />
      <LandingPage theme={theme} loder={loders} />
      <Navbar theme={{ setTheme, theme }} isOpen={{isOpen, setIsOpen}} />
      <Sidenav theme={{ setTheme, theme }} isOpen={{isOpen, setIsOpen}} />
      <KnownLanguage theme={theme} />
      <About />
      <Projects theme={theme} />
      <Hero />
      <Footer theme={theme} />
    </div>
  )
}

export default App