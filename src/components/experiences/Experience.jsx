import React, { useContext } from 'react'
import './Experience.css'
import { themeContext } from '../../context'


const Experience = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div className="experience" id='experience'>
        <div className="achievement">
            <div className="circle" style={{color:darkMode?'black':''}}>8+</div>
            <span>ML</span>
            <span>Projects</span>
        </div>
        <div className="achievement">
            <div className="circle" style={{color:darkMode?'black':''}}>2+</div>
            <span>Year Python</span>
            <span>Experience</span>
        </div>
        <div className="achievement">
            <div className="circle" style={{color:darkMode?'black':''}}>200+</div>
            <span>Leetcode</span>
            <span>Problems</span>
        </div>
    </div>
  )
}

export default Experience