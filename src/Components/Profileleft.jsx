import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

export default function Profileleft(props) {
  const linkedin = {
    fontSize: "1.7rem",
    color: "#0073b1",
    margin: "1.7rem 0.7rem 0.7rem 0.7rem",
  };
  const twitter = {
    fontSize: "1.7rem",
    color: "rgb(29, 155, 240)",
    margin: "1.7rem 0.7rem 0.7rem 0.7rem",
  };
  const github = {
    fontSize: "1.7rem",
    color: "black",
    margin: "1.7rem 0.7rem 0.7rem 0.7rem",
  };

  return (
    <>
      <div className="d-flex mr-auto my-3 ">
        <div className="d-flex flex-column  align-items-center my-3">
          <img
            src={props.src}
            className="left-img"
            alt=""
          />

          <div>
            <AiFillLinkedin style={linkedin} />
            <AiFillTwitterCircle style={twitter} />
            <AiFillGithub style={github} />
          </div>
        </div>
      </div>
    </>
  );
}

Profileleft.defaultProps={
  src:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
}