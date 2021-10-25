import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
export default function Profilecenter() {
  // Styling for selected things starts here
  const styletick = {
    color: "rgb(140, 82, 255)",
    fontSize: "22px",
    marginLeft: "15px",
  };
  const greystyle = {
    color: "rgb(161, 161, 161)",
    margin: "0px",
  };

  const greybold = {
    color: "gray",
  };
  // Styling for selected things ends here

  return (
    <>
      <div className="main-div my-4">
        <div className="d-flex justify-content-between">
          <h5>
            <b>Santosh Ram</b> <BsCheckCircleFill style={styletick} />
          </h5>
          <div className="">
            <BsBookmark />
            <BsThreeDotsVertical />
          </div>
        </div>
        <h6 style={greybold}>Software Engineering @Twitter</h6>
        <div className="d-flex my-3">
          <div className="d-flex flex-column  ">
            <p style={greystyle}>Experience</p>
            <p>5 years</p>
          </div>

          <div className="d-flex flex-column  mx-5 ">
            <p style={greystyle}>Languages</p>
            <p>English,Hindi,Telugu</p>
          </div>
        </div>

        <div className="bio">
          <p>
            Suscipit ea exercitationem tempore earum qui sed omnis. Provident
            reprehenderit et aut iusto qui perspiciatis quaerat tempore non.
            Magni laborum aut. Exercitationem quisquam qui
          </p>
        </div>

        <div className="static-div my-4">
          <h6>
            <b>What is Data Engineering?</b>
          </h6>
          <div className="d-flex justify-content-between">
            <p style={greystyle}>Lean the basic of Data Engineering</p>
            <button className="btn outline-book">Book</button>
          </div>
        </div>
        <div className="static-div my-4">
          <h6>
            <b>What is Data Engineering?</b>
          </h6>
          <div className="d-flex justify-content-between">
            <p style={greystyle}>Lean the basic of Data Engineering</p>
            <button className="btn outline-book">Book</button>
          </div>
        </div>
      </div>
    </>
  );
}
