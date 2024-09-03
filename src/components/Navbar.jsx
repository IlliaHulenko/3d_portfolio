import React, { useState, useRef } from 'react'
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const hamburgerRef = useRef();
    const menuRef = useRef();

    useEffect(() => {
        let handler = document.addEventListener('click', (e) => {
            if(e.target !== menuRef.current && e.target !== hamburgerRef.current) {
                setIsOpen(false);
            }
        });
        return () => {
            document.removeEventListener('click', handler);
        }
    }, [])

  return (
    <header className='header'>
        <NavLink to='/' className="w-10 h-10 rounded-lg bg-white 
            hidden sm:flex items-center justify-center font-bold shadow-md">            
            <img 
                src='../../public/main_photo.png' alt="Elijah's foto"
                className='w-9 h-9 rounded-full bg-transparent'
            />            
        </NavLink>
        <nav className='hidden sm:flex text-2xl gap-7 font-medium'>
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
            ref={hamburgerRef}              
        >
            <span></span>
            <span></span>
            <span></span>
        </div>   
        { isOpen && (
            <div className='side-panel' ref={menuRef}>
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