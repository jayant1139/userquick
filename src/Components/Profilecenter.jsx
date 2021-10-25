import React from 'react'
import {BsCheckCircleFill} from 'react-icons/bs'
import {BsBookmark} from 'react-icons/bs'
import {BsThreeDotsVertical} from 'react-icons/bs';
export default function Profilecenter() {
    const styletick={
        color:'rgb(140, 82, 255)',
        fontSize:'22px',
        marginLeft:'15px'
    }
    
    return (
        <>
        <div className="main-div my-4">
            <div className="d-flex justify-content-between">
         <h3>Santosh Ram <BsCheckCircleFill style={styletick}/></h3>   
            <div className="">
         <BsBookmark/>
         <BsThreeDotsVertical/>
         </div>
         </div>
         <h5>Software Engineering @Twitter</h5>
         <div className="d-flex my-3">
             <div className="d-flex flex-column  ">
                 <h5>Experience</h5>
                 <p><b>5 Year</b></p>
             </div>
             
             <div className="d-flex flex-column  mx-5 " >
                 <h5>Languages</h5>
                 <p><b>English,Hindi,Telugu</b></p>
             </div>
         </div>
         
         <div className="bio">
             <p>Suscipit ea exercitationem tempore earum qui sed omnis. Provident reprehenderit et aut iusto qui perspiciatis quaerat tempore non. Magni laborum aut. Exercitationem quisquam qui</p>
         </div>
        
         <div className="static-div my-4">
             <h5><b>What is Data Engineering?</b></h5>
             <div className="d-flex justify-content-between">
                 <p>Lean the basic of Data Engineering</p>
                 <button className="btn outline-book">Book</button>
             </div>
         </div>
         <div className="static-div my-4">
         <h5><b>What is Data Engineering?</b></h5>
             <div className="d-flex justify-content-between">
                 <p>Lean the basic of Data Engineering</p>
                 <button className="btn outline-book">Book</button>
             </div>
         </div>
         
         
         </div>
        </>
    )
}
