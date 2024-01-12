import React, { useContext } from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Rupa from '../../img/rupa.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../floatingdiv/FloatingDiv'
import { themeContext } from '../../context'

const Intro = () => {

  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div className="Intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{color:darkMode?'white':''}} >Hy! I'am</span>
                <span>Harsh Kumar Singh</span>
                <spam style={{color:darkMode?'white':''}}>
                A passionate fresher with solid understanding of Full stack Development With MERN stack + Typescript. With a strong programming background, I'm eager to explore the world of backend development. Excited about open soure contributions and Web3, I'm also keen to learn advanced and modern technologies, and programming languages . As a Full Stack Developer, I'm ready to embrace challenges, expand my knowledge, and contribute to the future of Web Development
                   </spam>
            </div>
            <button className='i-button'>Hire Me</button>
            <div className="i-icons">
              <a href='https://github.com/rajputharsh05'>
              <img src={Github} alt="" ></img>
              </a>
              <a href='https://www.linkedin.com/in/harsh-singh-600182212/'>
              <img src={LinkedIn} alt="" ></img>
              </a>
              <a href='https://www.instagram.com/_rajput_harsh05/'>
              <img src={Instagram} alt="" ></img>
              </a>
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt=''></img>
            <img src={Vector2} alt=''></img>
            
            <div 
            style={{top:'4%' ,left:'38%'}}>
              <FloatingDiv image={Crown} text1={'MERN'} text2={'STACK'}></FloatingDiv>
            </div>
            <div style={{top:'18rem' ,left:'0rem'}}>
              <FloatingDiv image={thumbup} text1={'Backend'} text2={'Enthusiast'}></FloatingDiv>
            </div>
            <div className="blur" style={{backgroundColor: "#c1F5FF", top:"17rem", width:"21rem", height:"11rem",left:'-9rem'}}></div>
        </div>
    </div>
  )
}

export default Intro