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
            <span>harshkumarsingh600@gmail.com</span>
            <div className="f-icons">
            <a href='https://www.instagram.com/_rajput_harsh05/'>  
                <Insta color='white' size='3rem'></Insta>
              </a>
              <a href='https://www.linkedin.com/in/harsh-singh-600182212/'>

                <Facebook color='white' size='3rem'></Facebook>
              </a>
              <a href='https://github.com/rajputharsh05'>
                <Github color='white' size='3rem'></Github>
              </a>
            </div>
        </div>
    </div>
  )
}

export default Footer