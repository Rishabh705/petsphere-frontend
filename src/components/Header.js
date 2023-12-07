import React from 'react'
import '../styles/header.css'
import { NavLink, Link } from 'react-router-dom'
import Hamburger from './Hamburger'
export default function Header() {
  return (
    <>
      <div className="navbar">
        <div className="heading-cont">
          <h1 className=""><Link to="/" end="true">Pet-Sphere</Link></h1>
        </div>
        {/* Menu Button */}
        <Hamburger />
        <nav className='navbar-nav' id='navbar-nav'>
          <ul className="navlist-1" id='navlist-1'>
            <li>
              <div className="overlay"></div>
              <NavLink to="/pets" end="true" className={({ isActive }) => isActive ? 'activate' : null}><span>All Pets</span></NavLink>
            </li>
            <li>
              <div className="overlay"></div>
              <NavLink to="/about" end="true" className={({ isActive }) => isActive ? 'activate' : null}><span>About</span></NavLink>
            </li>
            <li>
              <div className="overlay"></div>
              <NavLink to="/contact" end="true" className={({ isActive }) => isActive ? 'activate' : null}><span>Contact</span></NavLink>
            </li>
          </ul>
        </nav>
        <div className="menu-bg" id="menu-bg"></div>
      </div>
    </>
  )
}
