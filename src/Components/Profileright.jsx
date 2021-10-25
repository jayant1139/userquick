import React, { useState } from "react";
import Calendar from "react-calendar";

export default function Profileright() {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <div className="">
        <div className="heading d-flex flex-column align-items-center my-3 ">
          <div className="my-3 booksession">
            <h6>
              <b>Book Your Session</b>
            </h6>
          </div>
          <Calendar onChange={onChange} value={value} />
          <button className="btn my-4 request-demo">Request Demo</button>
        </div>
      </div>
    </>
  );
}
