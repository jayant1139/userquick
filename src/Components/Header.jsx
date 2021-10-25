import React from "react";

function Header() {
  // Styling for selected things starts here
  const spanstyle = {
    color: "rgb(140, 82, 255)",
  };
  const logostyle = {
    color: "#fd7e31",
    fontWeight: "bold",
    fontSize: "1.3rem",
  };
  // Styling for selected things ends here
  return (
    <>
      {/* <div className="logo" style={logostyle}>&lt;Hyper <span style={spanstyle}>Learn</span> /&gt; </div>    */}

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid ">
          <div className="logo">
            <a className="navbar-brand" href="/" style={logostyle}>
              &lt;Hyper <span style={spanstyle}>Learn</span> /&gt;{" "}
            </a>
          </div>
          <form className="d-flex ml-auto">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}

export default Header;
