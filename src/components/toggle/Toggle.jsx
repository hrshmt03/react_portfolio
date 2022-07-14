

import React from 'react'
import "./toggle.css"
import darkmode from "../../img/darkmode.jpg"
import lightmode from "../../img/lightmode.jpg"
// import { ThemeContext } from '../../context'
// import { useContext } from 'react'
const Toggle = (props) => {
  return (
    <div className="to">
        <img src={darkmode} alt="" className="to-icon"/>
        <img src={lightmode} alt="" className="to-icon"/>
        <div className="to-button" onClick={props.toggleMode} style={{left:props.mode==='black'?35:0}}></div>
    </div>
  )
}

export default Toggle





// import React from 'react'
// import "./toggle.css"
// import darkmode from "../../img/darkmode.jpg"
// import lightmode from "../../img/lightmode.jpg"
// import { ThemeContext } from '../../context'
// import { useContext } from 'react'
// const Toggle = () => {
//     const theme=useContext(ThemeContext)
//     const handleClick=()=>{
//         theme.dispatch({type: "TOGGLE"});
//     }
//   return (
//     <div className="to">
//         <img src={darkmode} alt="" className="to-icon"/>
//         <img src={lightmode} alt="" className="to-icon"/>
//         <div className="to-button" onClick={handleClick} style={{left:theme.state.darkMode?0:35}}></div>
//     </div>
//   )
// }

// export default Toggle