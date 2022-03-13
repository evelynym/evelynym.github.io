import React from 'react'
import "./BeautySectionStyle.css"
import beautyPhoto from "../image/minyang.jpg"

export default function BeautySection() {
  return (
    <div className='Beauty_wrap'>
        <div className='Beatuty_brif'>
            <img src={beautyPhoto} className='Beatuty_img' alt='beautiful girl'></img> 

            <h2>Welecome to my webpage!</h2> 
            <ul className = 'Beauty_ul'>
                <li className = 'Beauty_li'>Software Engineer</li>
                <li className = 'Beauty_li'>Full-Stack Developer</li>
                <li className = 'Beauty_li'>Foodie</li>
            </ul>
            
            <h1>This is Min Yang, I'm a<br />
              <div className="c1">
                  <div className="type">
                    Software Engineer
                  </div>
              </div>
              <br />
              <div className="c2">
                  <div className="type2">Full-Stack Developer</div>
              </div>
              <br />
            
              <div className="c3">
                  <div className="type3">Foodie</div>
              </div>
            </h1>
        </div>

    </div>
  )
}
