import React,{useEffect} from 'react'
import { useState } from 'react';

function Main() {

    const  [users, setusers] = useState([]);

    const getUsers=async()=>{
        const response=await fetch('https://6171c3fac20f3a001705fecd.mockapi.io/api/users');
        setusers(await response.json());
        // console.log(data);
    }
useEffect(() => {
   getUsers();
},[]);
    return (
        <div>
            <table className="table">
  <thead>
    <tr>
      
      <th scope="col">Name</th>
      <th scope="col">Experience</th>
      <th scope="col">See More</th>
    </tr>
  </thead>
  <tbody>
  {
      
      users.map((currentElement)=>{
    return(
        <>
    <tr key={currentElement.id}>
      <td >{currentElement.name}</td>
      <td>{currentElement.experience}</td>
      <td>View Profile</td>
    </tr>
  
        </>

    )
      })
}
   
      </tbody>
</table>
        </div>
    )
}

export default Main
