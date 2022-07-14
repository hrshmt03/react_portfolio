import React from "react";
import "./list.css";
import List1 from "../list1/List1";
import { listofitem } from "../../data";
const List = (props) => {
  return (
    <div
      className="ls"
      style={{
        backgroundColor: props.mode,
        color: props.mode === "black" ? "white" : "black",
      }}
    >
      <div className="ls-texts">
        <h1 className="ls-title">Something you can grasp from here</h1>
        <p className="ls-desc">
          These are various possible opportunities Provided to me to get there and
          explore the domain and try to pick the Best posiible domain where my
          interest lies in and accordingly Picking up the Best Possible path to proceed on.
        </p>
      </div>
      <div className="ls-list">
        {listofitem.map((item) => (
          <List1 key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default List;
