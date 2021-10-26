import React from 'react'

export default function Apicall(props) {
    const getUsers=async()=>{
        const response=await fetch("https://6171c3fac20f3a001705fecd.mockapi.io/api/users/"+props.apid);
      const data=(await response.json());

    }
    return (
        <div>
            
        </div>
    )
}

Apicall.defaultProp={
    apid="1"
}
