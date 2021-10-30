import React,{useEffect} from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import Profile from './Profile';

// import Value from './Value';
// import Profile from './Profile';
// import Profile from './Profile';


function Main() {

    const  [users, setusers] = useState([]);

    const getUsers=async()=>{
        const response=await fetch('https://6171c3fac20f3a001705fecd.mockapi.io/api/users/');
      // const data=(await response.json());

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
    <tr>
      <td >{currentElement.name}</td>
      <td>{currentElement.experience}</td>
      <td><NavLink  to={{
   pathname:'/Profile',
   state: {ID:currentElement.id}  
 }}>View Profile</NavLink></td>
      
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
