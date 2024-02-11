import React from "react";
import mainFirst from "../assets/mainFirst.jpg";


function Card() {
  return (
    <div className="bg-white rounded-lg shadow-xl h-[200px] w-[520px] flex flex-row">
      <div className="h-[200px] w-[47%]">
        <img
          src={mainFirst}
          alt=""
          className="h-full w-full shadow-xl rounded-lg"
        />
      </div>
      <div className="h-[240px] w-[53%] p-5">
        <h4 className="text-xl font-bold">PAYROLL</h4>
        <div className="h-1 bg-green-600 rounded-full w-14 my-2"></div>
        <p className="text-justify text-gray-600 font-medium mb-3">
          Maintaining Attendance record, Leave record, Salary wages registers
          etc.
        </p>
        <p className="font-bold text-green-600 cursor-pointer">
          Read More&nbsp;&gt;&nbsp;
        </p>
      </div>
    </div>
  );
}


export default Card;



