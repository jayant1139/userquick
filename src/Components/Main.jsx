import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Main() {
  // useState for setting users from API 
  const [users, setusers] = useState([]);
  // useState for input text(searchbar)  
  const [ques, setques] = useState("");
// Fetching API using async await 
  const getUsers = async () => {
    const response = await fetch(
      "https://6171c3fac20f3a001705fecd.mockapi.io/api/users/"
    );
    // const data=(await response.json());
    setusers(await response.json());
    // console.log(data);
  };
  useEffect(() => {
    getUsers();
  }, []);

// creating function to filter data on user input in seach-bar
  function search(data) {
    // if we write experience.toLowerCase() instead of experience.toSting.toLowerCase(), then error will occur since experience is number in the api so we need to convert into string 
    return data.filter(
      (row) =>
        row.name.toLowerCase().indexOf(ques.toLowerCase()) > -1 ||
        row.experience.toString().toLowerCase().indexOf(ques.toLowerCase()) > -1
    );
  }

  return (
    <div>
      <form className="d-flex my-2 width30 ">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={ques}
          onChange={(e) => setques(e.target.value)}
        />
      </form>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Experience</th>
            <th scope="col">See More</th>
          </tr>
        </thead>
        <tbody>
          {search(users).map((currentElement) => {
            return (
              <>
                <tr>
                  <td className="name-bold">{currentElement.name}</td>
                  <td>{currentElement.experience}</td>
                  <td>
                    <NavLink
                      to={{
                        pathname: "/Profile",
                        state: { ID: currentElement.id },
                      }}
                    >
                      View Profile
                    </NavLink>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Main;
