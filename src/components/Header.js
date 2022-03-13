import React from 'react'
import './HeaderStyle.css'
import { NavLink } from 'react-router-dom'
export default function Header() {
  return (
    <div className='NavMenuStyle'>
      <ul className='header_ui'>
          <li>
            <NavLink to='/portfolio'>HOME</NavLink>
          </li>
          <li>
            <NavLink to='/portfolio/about'>ABOUT</NavLink>
          </li>
          <li>
            <NavLink to='/portfolio/experiences'>EXPERIENCE</NavLink>
          </li>
          <li>
            <NavLink to='/portfolio/contact'>CONTACT</NavLink>
          </li>
      </ul>
    </div>
  )
}
