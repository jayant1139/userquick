import React from 'react'

export default function Apicall() {
    const getUsers=async()=>{
        const response=await fetch("https://6171c3fac20f3a001705fecd.mockapi.io/api/users/");
      const data=(await response.json());

    }
    return (
        <div>
            
        </div>
    )
}

