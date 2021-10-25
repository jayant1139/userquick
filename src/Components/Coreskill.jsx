import React from "react";

export default function Coreskill() {
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
        <img src="http://placeimg.com/640/480/business" alt="" />
        <img src="http://placeimg.com/640/480/business" alt="" />
      </div>
    </div>
  );
}
