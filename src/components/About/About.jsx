import React, { useContext } from 'react'
import './About.css'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../cards/Card'
import resume from "./resume.pdf"
import { themeContext } from '../../context'

const About = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div className="about" id='about'>
      <div className="awesome">
        <span style={{color:darkMode?'white':''}}>Hello Visitor</span>
        <span>I'm Harsh !</span>
        <span style={{color:darkMode?'white':''}}>
        I am a Final Year Computer Science student with a keen interest in Full Stack Development . With a solid foundation in programming and computer science principles, I am now venturing into the exciting worlds of BACKEND and web technologies.
        </span>
        <a href={resume} download>
        <button className='s-button'>Download CV</button>
        </a>
        <div className='s-blur' style={{background:'#ABF1FF94'}}></div>
      </div>
      <div className="cards">
        <div style={{left:'14rem'}} className='cards-inner'>
          <Card
            emoji = {HeartEmoji}
            heading = {'FULL STACK'}
            detail = {'Express, Node, MonogoDB and React'}
          />
        </div>

        <div style={{left:'-4rem' , top:"12rem"}}>
          <Card
            emoji = {Humble}
            heading = {'Communication Skills'}
            detail = {'English, Hindi'}
          />
        </div>


        <div style={{left:'12rem' , top:"19rem"}}>
          <Card
            emoji = {Glasses}
            heading = {'Problem Solving'}
            detail = {'C++ , JAVA'}
          />
        </div>
      </div>
    </div>
  )
}

export default About