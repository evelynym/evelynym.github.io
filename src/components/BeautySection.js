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
                <li className = 'Beauty_li'>Software engineer</li>
                <li className = 'Beauty_li'>full-stack developer</li>
                <li className = 'Beauty_li'>Foodie</li>
            </ul>
            
            <h1>This is Min Yang, I'm a<br />
              <div class="c1">
                  <div class="type">
                    Software engineer
                  </div>
              </div>
              <br />
              <div class="c2">
                  <div class="type2">full-stack developer</div>
              </div>
              <br />
            
              <div class="c3">
                  <div class="type3">Foodie</div>
              </div>
            </h1>
        </div>

    </div>
  )
}
