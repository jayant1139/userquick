import React,{useEffect} from 'react'
import Coreskill from './Coreskill'
import Profilecenter from './Profilecenter'
import Profileleft from './Profileleft'
import Profileright from './Profileright'
import { useState } from 'react';
export default function Profile(index) {
  const  [source, setsource] = useState([]);
    const getsource=async()=>{
        const response=await fetch('https://6171c3fac20f3a001705fecd.mockapi.io/api/users/'+index);
      setsource(await response.json());
        
    }
    useEffect(() => {
      getsource();
   },[]);
   
  //  console.log(source.skills.split(','));
    return (
        <>
         <div className="d-flex justify-content-around">
        <div className="d-flex flex-column">
          
          <Profileleft src={source.avatar} />
          <Coreskill pastsrc1={source.pastCompanies} pastsrc2={source.pastCompanies}/>
        </div>
        <Profilecenter  name={source.name} shortbio={source.shortBio}
  
  experience={source.experience}
  description={source.description}
 />
        <Profileright/>
      </div>   
        </>
    )
}
