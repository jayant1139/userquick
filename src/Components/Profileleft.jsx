import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

export default function Profileleft() {
  const linkedin = {
    fontSize: "32px",
    color: "#0073b1",
    margin: "25px 7px 7px 7px",
  };
  const twitter = {
    fontSize: "32px",
    color: "rgb(29, 155, 240)",
    margin: "25px 7px 7px 7px",
  };
  const github = {
    fontSize: "32px",
    color: "black",
    margin: "25px 7px 7px 7px",
  };

  return (
    <>
      <div className="d-flex mr-auto my-3 ">
        <div className="d-flex flex-column  align-items-center my-3">
          <img
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
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
