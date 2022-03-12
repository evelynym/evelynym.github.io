import React from 'react'
import './ContactInforItemStyle.css'

export default function ContactInforItem({
    icon,
    text,
    href
}) {
  return (
    <div className='contact_info_container'>
        <div className='contact_info_icon'>{icon}</div>
        <div className='contact_info_text'>
          <p >
          <a href={href} target='_blank'>{text}</a>
          </p>  
        </div>
    </div>
  )
}
