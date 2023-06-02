import React, { useContext, useState } from 'react'
import './Context.css'
import { themeContext } from '../../context';
export const Contacts = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;
  const [done,setDone] = useState(false)
  
  const handleClick =(e)=>{
    e.preventDefault();
    setDone(true)
  }

  return (
    <div className="contact-form" id='contact'>
        <div className="w-left">
            <div className="awesome">
                <span style={{color:darkMode?'white':''}}>Get in touch</span>
                <span>Contact me</span>
                <div className="blur s-blur" style={{background : 'ABF1FF94'}}></div>
            </div>
        </div>
        <div className="c-right">
            <form action="">
                <input type="text" className='user' name='user_name' placeholder='Name' />
                <input type="email" className='user' name='user_email' placeholder='Email' />
                <textarea name='message' className='user' placeholder='Message'></textarea>
                <button onClick={handleClick} type="submit" className='btn' >Send</button>
                <span>{done && "Thanks for contacting me !"}</span>
                <div
                className='blur c-blur'
                style={{background:'rgb(238 210 255)'}}
                ></div>

            </form>
        </div>
    </div>
  )
}
