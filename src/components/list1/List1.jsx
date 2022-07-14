import React from 'react'
import"./list1.css"
const List1 = ({img,link}) => {
  return (
    <div className="p">
     <div className="l-browser">
      <div className="ls-circle"></div>
      <div className="ls-circle"></div>
      <div className="ls-circle"></div>
     </div>
     <a href={link} target="_blank" rel="noreferrer">
       <img src={img} alt="" className="l-img" />
     </a>
    </div>
  )
}

export default List1
