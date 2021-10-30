import React from "react";

export default function Coreskill(props) {
  // getting skills string via props
  const str = `${props.skill}`;
  // splitting into substring to get individual skills
  const skill_arr = str.split(" ");
  // console.log(skill_arr);
  return (
    <div className="d-flex flex-column align-items-start mx-2 ">
      <p className="mx-3">
        <b>Core Skills</b>
      </p>

      <div className="coreskills ">
        {/* using map to get individual skill in a loop  */}
        {skill_arr.map((index) => {
          return (
            <>
              <button type="button" className="btn-skills">
                {index}
              </button>
            </>
          );
        })}
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

// Coreskill.defaultProps = {
//   skill1: "node",
//   skill2: "nodejs",
//   skill3: "react",
//   skill4: "reactjs",
//   skill5: "js",
// };
