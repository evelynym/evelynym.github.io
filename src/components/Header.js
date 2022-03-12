import React from 'react'
import './HeaderStyle.css'
import { NavLink } from 'react-router-dom'
export default function Header() {
  return (
    <div className='NavMenuStyle'>
      <ul>
          <li>
            <NavLink to='/'>HOME</NavLink>
          </li>
          <li>
            <NavLink to='/about'>ABOUT</NavLink>
          </li>
          <li>
            <NavLink to='/experiences'>EXPERIENCE</NavLink>
          </li>
          <li>
            <NavLink to='/contact'>CONTACT</NavLink>
          </li>
      </ul>
    </div>
  )
}
