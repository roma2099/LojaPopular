import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { MdDarkMode, MdLightMode, MdMenu, MdClose,MdAccountCircle, MdSearch } from "react-icons/md";

import { useEffect, useState } from 'react';
const Navbar = () => {
    const [theme, setTheme] = useState('light')
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    useEffect(() => {
        const selectedTheme = localStorage.getItem('theme');

        if (selectedTheme) {
            document.body.classList.add(selectedTheme);
        } else if (window.matchMedia('(prefers-color-scheme: dark)')) {
            document.body.classList.add('dark')
        }
        else {
            document.body.classList.add('light')
        }
    }, [])
    const hadleChangeTheme = () => {
        if (document.body.classList.contains('dark')) {
            document.body.classList.remove('dark')
            localStorage.setItem('theme', 'light')
            setTheme('light');
        } else {
            document.body.classList.add('dark')
            localStorage.setItem('theme', 'dark')
            setTheme('dark');
        }
    }
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <nav className="flex h-14 w-full  items-center justify-between px-2 md:px-10 " >
            <div className="flex items-center gap-2">
            <button className="rounded-full p-2 hover:bg-text/10 text-3xl md:hidden" onClick={toggleMenu}>
                {isMenuOpen ? <MdClose /> : <MdMenu />}
            </button>
            <h1 className=" font-bold w-20">Loja xpto</h1>
            </div>
            
            <div className="hidden sm:flex sm:flex-1  sm:max-w-xs mx-2    rounded-full bg-background border-2 border-text/50 focus-within:ring-2 focus-within:ring-accent focus-within:border-transparent ">
                <input
                    type="search"
                    name="search"
                    placeholder="Search"
                    className="rounded-md flex-1 p-1 ml-2  bg-transparent focus:outline-none " />
                <button
                    type="submit"
                    className="rounded-full  p-2 hover:bg-text/10">
                    <FaSearch />
                </button>

            </div>
            <div className="flex items-center md:gap-2">
        
    <button 
    hidden={isSearchOpen}
    className="sm:hidden text-2xl rounded-full p-2 hover:bg-text/10" onClick={() => setIsSearchOpen(!isSearchOpen)}>
        <FaSearch />
    </button>
    
    {/* Full width search bar for small screens */}
  
        <div 
        style={{ display: isSearchOpen ? 'block' : 'none' }}
        className="absolute top-14 left-0 right-0 p-2 bg-background sm:hidden">
            <button className="pl-2 text-2xl"><MdClose onClick={() => setIsSearchOpen(!isSearchOpen)} /></button>
            <div className="flex   sm:max-w-xs mx-2    rounded-full bg-background border-2 border-text/50 focus-within:ring-2 focus-within:ring-accent focus-within:border-transparent ">
                <input
                    type="search"
                    name="search"
                    placeholder="Search"
                    className="rounded-md flex-1 p-1 ml-2  bg-transparent focus:outline-none " />
                <button
                    type="submit"
                    className="rounded-full  p-2 hover:bg-text/10">
                    <FaSearch />
                </button>

            </div>
        </div>
   

</div>

            <div className="flex items-center md:gap-2 ">

            <ul className={`md:flex md:gap-4 ${isMenuOpen ? 'flex' : 'hidden'} flex-col md:flex-row absolute md:relative top-14 md:top-0 left-0 w-full md:w-auto bg-background md:bg-transparent p-4 md:p-0 space-y-2 md:space-y-0`}>
                <li><Link to="/" className="hover:text-accent">Home</Link></li>
                <li><Link to="/products" className="hover:text-accent">Products</Link></li>
                <li><Link to="/cart" className="hover:text-accent">Cart</Link></li>
            </ul>

                <button className="text-3xl rounded-full  p-2 hover:bg-text/10 " onClick={hadleChangeTheme}>
                    {theme === 'light' ? <MdLightMode /> : <MdDarkMode />}
                </button>
            <button className="text-3xl rounded-full  p-2 hover:bg-text/10" onClick={hadleChangeTheme}>
                    <MdAccountCircle />
            </button>

            </div>


        </nav>
    )
}

export default Navbar