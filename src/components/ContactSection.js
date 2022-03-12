import React from 'react'
import './ContactSectionStyle.css'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


import ContactInforItem from './ContactInforItem'
import SectionTitle from './SectionTitle'


export default function ContactSection() {
  return (
    <div className='contact_container'>
        
            
        <SectionTitle heading="CONTACT" subheading="get in touch" />

        <div className='container_wrapper'>
            <div className='container_wrapper_left'>
                <ContactInforItem icon= {<LocalPhoneIcon />} text='+86 15307110190'/>
                <ContactInforItem icon= {<LocalPhoneIcon />} text='+0452300805'/>
                <ContactInforItem icon= {<EmailIcon />} text='evelynym@outlook.com'/>
            </div>

            <div className='container_wrapper_right'>
                <ContactInforItem icon= {<FacebookIcon />} text='click me' href='https://www.facebook.com/min.yang.54379236/'/>
                <ContactInforItem icon= {<GitHubIcon />} text='click me' href='https://github.com/evelynym'/>
                <ContactInforItem icon= {<LinkedInIcon />} text='click me' href='https://www.linkedin.com/in/MinYang-evelyn' />
            </div>
            
        </div>
    </div>
  )
}
