import React from 'react'

import './AboutInforItemStyle.css'

export default function AboutInforItem({
    title,
    items
}) {
  return (
    <div className='items_detail'>
 
      <h3 className="title">{title}</h3>
      
      <ul className="items">
      {items.map((item, index) =>
        <li key={index} className="item">
          {item}
        </li>
      )}
      </ul>     
    </div>

    
  )
}
