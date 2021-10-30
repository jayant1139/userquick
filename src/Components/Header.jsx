import React from "react";

function Header() {
  // Styling for Logo starts here
  const spanstyle = {
    color: "rgb(140, 82, 255)",
  };
  const logostyle = {
    color: "#fd7e31",
    fontWeight: "bold",
    fontSize: "1.3rem",
  };
  // Styling for Logo ends here
  return (
    <>
      <nav className="navbar navbar-expand-lg nav-shadow">
        <div className="container-fluid ">
          <div className="logo">
            <a className="navbar-brand" href="/" style={logostyle}>
              &lt;Hyper <span style={spanstyle}>Learn</span> /&gt;{" "}
            </a>
          </div>
          <div className="imgcon mx-5">
            {/* Random Profile image url in src  */}
            <img src="https://i.pravatar.cc/" alt="" />
          </div>
         
        </div>
      </nav>
    </>
  );
}

export default Header;
