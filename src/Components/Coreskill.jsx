import React from "react";

export default function Coreskill(props) {
  return (
    <div className="d-flex flex-column align-items-start mx-2 ">
      <p className="mx-3">
        <b>Core Skills</b>
      </p>
      <div className="coreskills ">
        <button type="button" className="btn-skills">
          React
        </button>
        <button type="button" className="btn-skills">
          Javascript
        </button>
        <button type="button" className="btn-skills">
          HTML
        </button>
        <button type="button" className="btn-skills">
          CSS
        </button>
        <button type="button" className="btn-skills">
          Node
        </button>
      </div>
      <p className="mx-2">
        <b>Past Companies</b>
      </p>
      <div className="coreskills">
        <img src={props.pastsrc1} alt="" />
        <img src={props.pastsrc2} alt="" />
      </div>
    </div>
  );
}

Coreskill.defaultProps={
  pastsrc1:"http://placeimg.com/640/480/business",
  pastsrc2:"http://placeimg.com/640/480/business"
}