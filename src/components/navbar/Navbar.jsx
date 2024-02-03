import React from 'react'
import { useState } from 'react';
import './Navbar.css'
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (


        <>
            <div className="header py-[3rem]   m-auto  h-8 flex items-center justify-between  mt-8 " >
                <div className="logo text-3xl font-bold text-white">port<span className='text-[#0EA4EC]'>folio</span></div>
                <div className={showMenu ? "list list-active " : "list border  border-gray-700"}>
                    <NavLink exact='true' to='/' className="menu-list">home</NavLink>
                    <NavLink exact='true' to='/about' className="menu-list">About</NavLink>
                    <NavLink exact='true' to='/skills' className="menu-list">Skills</NavLink>
                    <NavLink exact='true' to='/projects' className="menu-list">Projects</NavLink>
                    <NavLink exact='true' to='/contact' className="menu-list">Contact</NavLink>
                    <NavLink exact='true' to='/certificate' className="menu-list">Certificate</NavLink>

                </div>
                <div className="btn flex gap-2 text-2xl ">
                    <FaGithubSquare className='hover:text-[#0EA4EC]' />
                    <FaLinkedin className='hover:text-[#0EA4EC] ' />
                    <a href="#" className='hamburger' onClick={(e) => {
                        e.preventDefault()
                        setShowMenu(!showMenu)
                    }} >
                        {showMenu ? <RxCross2 /> : <GiHamburgerMenu />}
                    </a>


                </div>
            </div>
        </>
    )
}

export default Navbar