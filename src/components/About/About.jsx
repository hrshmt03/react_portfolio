import React from "react";
import "./about.css";
import aboutimg from "../../img/aboutimg.jpg";
const About = (props) => {
  return (
    <div className="about" style={{backgroundColor:props.mode,color:props.mode==='black'?'white':'black'}}>
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card"></div>
        <img src={aboutimg} alt="" className="about-img" />
      </div>
      <div className="about-right">
        <h1 className="about-title">About me</h1>
        <p className="about-sub">
         I am a Btech 4th year student at IIITDM Jabalpur and pursuing my degree in Electronics and Communication engineering.
        </p>
        <p className="about-desc">
          I have a keen interest in exloring new opportunities and getting a desire to pursuing them.I have Interset in cometitive Programming and web development and therefore wnat to make my career in this field.
        </p>
      </div>
    </div>
  );
};

export default About;
