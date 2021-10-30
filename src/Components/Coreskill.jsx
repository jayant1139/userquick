import React from "react";

export default function Coreskill(props) {
  return (
    <div className="d-flex flex-column align-items-start mx-2 ">
      <p className="mx-3">
        <b>Core Skills</b>
      </p>

      <div className="coreskills ">
        {props.skill.map((index) => {
          return (
            <>
              <button type="button" className="btn-skills">
                {index}
              </button>
            </>
          );
        })}

        {/* <button type="button" className="btn-skills">
        {props.skill2}
        </button>
        <button type="button" className="btn-skills">
        {props.skill3}
        </button>
        <button type="button" className="btn-skills">
        {props.skill4}
        </button>
        <button type="button" className="btn-skills">
        {props.skill5}
        </button> */}
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
