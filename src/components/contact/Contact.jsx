import React, { useState} from "react";
import "./contact.css";
import phone from "../../img/phone.png";
import email from "../../img/email.jpg";
import address from "../../img/address.jpg";
import {useRef} from "react";
import emailjs from "emailjs-com"
// import { ThemeContext } from "../../context";
const Contact = (props) => {
  // const theme=useContext(ThemeContext);
  // const darkMode=theme.state.darkMode;
    const formRef=useRef()
    const [done,setDone]=useState(false)
    const handlesubmit=(e)=>{
        e.preventDefault()
        emailjs.sendForm('service_w2nx659', 'template_0b5a9ma', formRef.current, 'BzcD4HP1NwS9axTEk')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        })
    }
  return (
    <div className="con" style={{backgroundColor:props.mode,color:props.mode==='black'?'white':'black'}}>
      <div className="c-bg"></div>
      <div className="c-wrap">
        <div className="c-left">
          <h1 className="c-title">Let's Give feedback to our Portfolio</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={phone} alt="" className="c-icon" />
              +918957167679
            </div>
            <div className="c-info-item">
              <img src={email} alt="" className="c-icon" />
              iamharshmai@gmail.com
            </div>
            <div className="c-info-item">
              <img src={address} alt="" className="c-icon" />
              Jaunpur,Uttar Pradesh(222201)
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>It's your story </b>
            <br />
            Based on assesing my above mentioned description about myself what are the suggations you want to give me as a feedback and some other messages which you want to convey.
          </p>
          <form ref={formRef} onSubmit={handlesubmit}>
              <input style={{backgroundColor:props.mode==='black'?'black':'white',color:props.mode==='black'?'white':'black'}}  type="text" placeholder="Name" name="user_name"/>
              <input style={{backgroundColor:props.mode==='black'?'black':'white',color:props.mode==='black'?'white':'black'}} type="text" placeholder="Subject" name="user_subject"/>
              <input style={{backgroundColor:props.mode==='black'?'black':'white',color:props.mode==='black'?'white':'black'}} type="text" placeholder="Email" name="user_email"/>
              <textarea style={{backgroundColor:props.mode==='black'?'black':'white',color:props.mode==='black'?'white':'black'}} placeholder="Message" name="Message" rows="9"></textarea>
              <button>Submit</button>
              {done && " Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
