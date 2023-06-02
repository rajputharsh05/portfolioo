import React, { useContext } from 'react'
import './Works.css'
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';
import { themeContext } from '../../context';

const Works = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;
  return (
    <div className="works" id='works'>
         <div className="awesome">
        <span style={{color:darkMode?'white':''}}>Projects</span>
        <span>Done My Me</span>
        <span style={{color:darkMode?'white':''}}>
        I am a 3rd-year Computer Science student with a keen interest in both Machine Learning and Web Development. With a solid foundation in programming and computer science principles, I am now venturing into the exciting worlds of ML and web technologies.
        </span>
        <button className='s-button'>Hire me</button>
        <div className='s-blur' style={{background:'#ABF1FF94'}}></div>
      </div>
      <div className="w-right">
        <div className="w-maincircle">
            <div className="m-secCircle">
                <img src={Upwork} alt=''></img>
            </div>
            <div className="m-secCircle">
                <img src={Fiverr} alt=''></img>
            </div>
            <div className="m-secCircle">
                <img src={Amazon} alt=''></img>
            </div>
            <div className="m-secCircle">
                <img src={Shopify} alt=''></img>
            </div>
            <div className="m-secCircle">
                <img src={Facebook} alt=''></img>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Works