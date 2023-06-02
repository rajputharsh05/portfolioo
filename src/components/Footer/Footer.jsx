import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-linkedin'
import Github from '@iconscout/react-unicons/icons/uil-github'


const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width:'100%'}}></img>
        <div className='f-content'>
            <span>rupamohanty02@gmail.com</span>
            <div className="f-icons">
              <a href='https://instagram.com/rupa_0032?igshid=ZDc4ODBmNjlmNQ=='>
                <Insta color='white' size='3rem'></Insta>
              </a>
              <a href='https://www.linkedin.com/in/rupa-mohanty-960897218'>

                <Facebook color='white' size='3rem'></Facebook>
              </a>
              <a href='https://github.com/RupaMohanty'>
                <Github color='white' size='3rem'></Github>
              </a>
            </div>
        </div>
    </div>
  )
}

export default Footer