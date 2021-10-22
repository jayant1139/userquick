import React from 'react'

function Header() {
const spanstyle={
    color:'rgb(140, 82, 255)',
    
};
const logostyle={
color:'#fd7e31',
fontWeight:'bold',
fontSize:'20px'
};
    return (
        <>
         <div className="logo" style={logostyle}>&lt;Hyper <span style={spanstyle}>Learn</span> /&gt; </div>   
        </>
    )
}

export default Header
