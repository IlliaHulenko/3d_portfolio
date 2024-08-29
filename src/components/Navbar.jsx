import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <header className='header'>
        <NavLink to='/' className="w-10 h-10 rounded-lg bg-white 
            hidden sm:flex items-center justify-center font-bold shadow-md">
            <p className='blue-gradient_text'>IG</p>
        </NavLink>
        <nav className='hidden sm:flex text-lg gap-7 font-medium'>
            <NavLink to="/about" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                About
            </NavLink>
            <NavLink to="/projects" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                Projects
            </NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                Contact
            </NavLink>
        </nav>

        <div 
            className={`hamburger-menu ${isOpen ? 'active' : ''}`} 
            onClick={() => setIsOpen(prev => !prev)}
        >
            <span></span>
            <span></span>
            <span></span>
        </div>
        { isOpen && (
            <div className='side-panel'>
                <NavLink to='/' className={({isActive}) => isActive ? 'links' : ''}>
                    <p className='links-text'>Home</p>
                </NavLink>
                <NavLink to="/about" className={({isActive}) => isActive ? 'links' : ''}>
                    <p className='links-text'>About</p>
                </NavLink>
                <NavLink to="/projects" className={({isActive}) => isActive ? 'links' : ''}>
                    <p className='links-text'>Projects</p>
                </NavLink>
                <NavLink to="/contact" className={({isActive}) => isActive ? 'links' : ''}>
                <p className='links-text'>Contact</p>
                </NavLink>
            </div>
        )}
    </header>
  )
}

export default Navbar