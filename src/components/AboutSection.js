import React from 'react'

import AboutImg from "../image/min.jpg"
import pdf from "../image/min.pdf"
import './AboutSectionStyle.css'
import AboutInforItem from './AboutInforItem';



export default function AboutSection() {
  return (
    <div className='aboutsection_container'>
        <div className="container_brif">
            <div className='aboutSection__left'>
                <p className='aboutSection_p'>Let me introduce myself</p>
                <h2 className='aboutSection_h'>About Me</h2>
                <p>
                I graduate from the University Of South Australia.<br />
                I majored in software development.</p>
                <a variant="contained" href={pdf} download="min.pdf">Download CV</a>
            </div>
            

            <div className="aboutSection__right">
                <img className="aboutImg" src={AboutImg} alt="Img" />
            </div>
        </div>


        <div className='aboutSection_items'>
            
            <div className='aboutSection_item'>
                <h1 className="about__heading">Education</h1>
                <AboutInforItem 
                    title='School'
                    items={['University Of South Australia']}
                />
            </div>

            <div className='aboutSection_item'>
                <h1 className="about__heading">My Skills</h1>
                <AboutInforItem 
                    title='Front-end'
                    items={['HTML','CSS','JavaScript','JQuey','React']}
                />
                <AboutInforItem 
                    title='Back-end'
                    items={['Node JS','Express','Java']}
                />
                <AboutInforItem 
                    title='Database'
                    items={['MySQL','SQLite','MongoDB']}
                />
                <AboutInforItem 
                    title='Programming Language'
                    items={['C++','Java','Python','C#','Swift']}
                />
            </div>

            <div className='aboutSection_item'>
                <h1 className="about__heading">Experiences</h1>
                <AboutInforItem 
                    title='Jul 2020 - Dec 2020'
                    items={['Intership - Associate Software Engineer']}
                />
                <AboutInforItem 
                    title='Dec 2020 - Oct 2021'
                    items={['Full-time - Associate Software Engineer']}
                />
                <AboutInforItem 
                    title='Oct 2021 -'
                    items={['Full-time - Software Developer']}
                />
            </div>
        </div>
    </div>  
    
  )
}
