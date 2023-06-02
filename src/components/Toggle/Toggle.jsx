import React, { useContext } from 'react'
import './Toggle.css'
import Sun from  '@iconscout/react-unicons/icons/uil-sun'
import Moon from  '@iconscout/react-unicons/icons/uil-moon'
import { themeContext } from '../../context'
const Toggle = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    function handleClick(){
        theme.dispatch({type:'toggle'})
    }
  return (
    <div className="toggle"
    onClick={handleClick}
    >
            <Sun></Sun>
            <Moon></Moon>
            <div className="t-button"
            style={darkMode?{left:'2px'}:{right:'2px'}}
            >
            </div>
    </div>
  )
}

export default Toggle