import React from 'react'
import ExperienceInforItem from './ExperienceInforItem'
import SectionTitle from './SectionTitle'
export default function ExperiencesSection() {
  return (
    <div className='project_container'>
        <SectionTitle heading="experiences" subheading="some of my works"/>
        
        <div className='project_item'>
          <ExperienceInforItem />
        </div>

    </div>
  )
}
