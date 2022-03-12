import React from 'react'
import './SectionTitleStyle.css'

export default function SectionTitle({
    subheading,
    heading
}) {
  return (
    <div className='title_container'>
        <p className='title_sub'>{subheading}</p>
        <h2 className='title_heading'>{heading}</h2>
    </div>
  )
}
