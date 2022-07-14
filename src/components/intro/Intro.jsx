import React from 'react'
import "./intro.css"
import me from "../../img/me.jpg";
const Intro = (props) => {
  return (
    <div className="in" style={{backgroundColor:props.mode,color:props.mode==='black'?'white':'black'}}>
      <div className="in-left">
      <div className="in-left-wrap">
        <h2 className="in-intro">Hello, My name is</h2>
        <h1 className="in-name">Harsh Mani Tripathi</h1>
        <div className="in-title">
            <div className="in-title-wrap">
                <div className="in-title-item">Web developer</div>
                <div className="in-title-item">Competitive Programmer</div>
                <div className="in-title-item">Front-end Developer</div>
                <div className="in-title-item">Maschine Learner</div>
                <div className="in-title-item">App developer</div>
            </div>
        </div>
        <div className="in-description">
            <h2>I am an Enthusiastic web developer and also interested in competitive programming</h2>
        </div>
      </div>
      </div>
      <div className="in-right">
          <div className="in-bm"></div>
          <img src={me} alt="" className="in-img" /></div>
    </div>
  )
}

export default Intro

