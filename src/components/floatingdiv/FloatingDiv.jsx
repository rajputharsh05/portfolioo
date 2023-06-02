import React, { useContext } from 'react'
import './FloatingDiv.css'
import { themeContext } from '../../context'
const FloatingDiv = ({image, text1, text2}) => {

  return (
    <div className="floatingdiv">
        <img src={image}></img>
        <span>
            {text1}
            <br></br>
            {text2}
        </span>
    </div>
  )
}

export default FloatingDiv