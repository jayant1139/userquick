import React from "react";
// imported react icons from react and used below
import { BsCheckCircleFill } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function Profilecenter(props) {
  // Styling of different tags(mentioned below) starts here
  const fontmax = {
    fontSize: "1rem",
  };
  const fontsmall = {
    fontSize: "0.95rem",
  };
  const styletick = {
    color: "rgb(140, 82, 255)",
    fontSize: "1.2rem",
    marginLeft: "1.5rem",
  };
  const greystyle = {
    color: "rgb(161, 161, 161)",
    margin: "0px",
  };
  const greysmall = {
    color: "rgb(161, 161, 161)",
    margin: "0px",
    fontSize: "0.95rem",
  };
  const greybold = {
    color: "gray",
    fontSize: "1rem",
  };
  const pointer={
    cursor:"pointer"
  }
  // Styling of  different tags(mentioned below) ends here

  return (
    <>
      <div className="main-div my-4">
        <div className="d-flex justify-content-between">
          <h5>
            <b>{props.name}</b> <BsCheckCircleFill style={styletick} />
          </h5>
          <div className="">
            <BsBookmark style={pointer}/>
            <BsThreeDotsVertical style={pointer} />
          </div>
        </div>
        <h6 style={greybold}>{props.shortbio}</h6>
        <div className="d-flex my-3">
          <div className="d-flex flex-column  ">
            <p style={greystyle}>Experience</p>
            <p style={fontsmall}>{props.experience}</p>
          </div>

          <div className="d-flex flex-column  mx-5 ">
            <p style={greystyle}>Languages</p>
            <p style={fontsmall}>{props.language}</p>
          </div>
        </div>

        <div className="bio">
          <p style={fontsmall}>{props.description}</p>
        </div>

        <div className="static-div my-4">
          <h6 style={fontmax}>
            <b>What is Data Engineering?</b>
          </h6>
          <div className="d-flex justify-content-between">
            <p style={greysmall}>Lean the basic of Data Engineering</p>
            <button className="btn outline-book">Book</button>
          </div>
        </div>
        <div className="static-div my-4">
          <h6 style={fontmax}>
            <b>What is Data Engineering?</b>
          </h6>
          <div className="d-flex justify-content-between">
            <p style={greysmall}>Lean the basic of Data Engineering</p>
            <button className="btn outline-book">Book</button>
          </div>
        </div>
      </div>
    </>
  );
}

// Set Default props below
Profilecenter.defaultProps = {
//   name: "Santosh Ram",
//   shortbio: "Software Engineering @Twitter",
  language: "English, Hindi, Telugu",
//   experience: "5 years",
//   description:
//     " Suscipit ea exercitationem tempore earum qui sed omnis. Providentreprehenderit et aut iusto qui perspiciatis quaerat tempore non.Magni laborum aut. Exercitationem quisquam qui",
};
