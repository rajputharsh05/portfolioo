import React, { useContext } from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
import { themeContext } from '../../context'
import {Link} from 'react-scroll'
import Experience from '../experiences/Experience'
import { Contacts } from '../Contacts/Contacts'
import Works from '../works/Works'


const Navbar = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div className="n-wrapper">
        <div className="n-left">
                <div className="n-name" style={{color:darkMode?'white':''}}>RUPA</div>
                <span><Toggle></Toggle></span>
        </div> 
        <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType:'none'}}>
                      <Link spy={true} smooth={true} to='Navbar' activeClass='activeClass'>
                        <li style={{color:darkMode?'white':''}} >Home</li>
                      </Link>
                      <Link spy={true} smooth={true} to='experience' activeClass='activeClass'>
                        <li style={{color:darkMode?'white':''}} >Experience</li>
                        </Link>
                        <Link spy={true} smooth={true} to='works' activeClass='activeClass'>
                        <li style={{color:darkMode?'white':''}} >Works</li>
                        </Link>
                        <Link spy={true} smooth={true} to='contact' activeClass='activeClass'>
                        <li style={{color:darkMode?'white':''}} >Contact</li>
                        </Link>
                    </ul>
                </div>
                <button className='button'>
                    Contact
                </button>
        </div>
    </div>
  )
}

export default Navbar