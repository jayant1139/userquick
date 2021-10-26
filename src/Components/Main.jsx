import React,{useEffect} from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Profile from './Profile';

function Pro(index){
  index=index+1;
}
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
      
      users.map((currentElement,index)=>{
    return(
        <>
    <tr key={currentElement.id}>
      <td >{currentElement.name}</td>
      <td>{currentElement.experience}</td>
      <td><NavLink to='/Profile'>View Profile</NavLink></td>
      
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
