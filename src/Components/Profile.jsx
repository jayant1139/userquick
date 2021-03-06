import React, { useEffect } from "react";
import Coreskill from "./Coreskill";
import Profilecenter from "./Profilecenter";
import Profileleft from "./Profileleft";
import Profileright from "./Profileright";
import { useState } from "react";

export default function Profile(props) {
  // Getting user id by passing props through NavLink in Main.jsx component
  const ID = props.location.state;
  // console.log(ID);
  const [source, setsource] = useState([]);
  const getsource = async () => {
    // ID.ID to get value of id
    const response = await fetch(
      `https://6171c3fac20f3a001705fecd.mockapi.io/api/users/${ID.ID}`
    );
    setsource(await response.json());
  };
  useEffect(() => {
    getsource();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-around">
        <div className="d-flex flex-column">
          <Profileleft src={source.avatar} />
          <Coreskill
            skill={source.skills}
            pastsrc1={source.pastCompanies}
            pastsrc2={source.pastCompanies}
          />
        </div>
        <Profilecenter
          name={source.name}
          shortbio={source.shortBio}
          experience={source.experience}
          description={source.description}
        />
        <Profileright />
      </div>
    </>
  );
}
