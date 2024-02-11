import React from "react";


function Footer() {
  return (
    <div className="bg-black py-11 px-24 text-white">
      {/* // Data Container  */}
      <div className="flex flex-col md:flex-row gap-11">
        {/* // Company Content */}
        <div className="md:w-[30%]">
          <h4 className="text-2xl font-medium">About Company</h4>
          <div className="h-1 bg-green-600 rounded-3xl w-20 mt-2 mb-4"></div>
          <h2 className="text-justify text-gray-400">
            Welcome to Corpbase Consultancy Labour Law Consultant, Employee's
            Provident Fund (EPF), Employee's State Insurance Corp. (ESIC)
            Maintenance of Records for various Labour Laws i.e. Employees
            Provident Fund & Miscellaneous Provisions Act, Employees State
            Insurance Act., Factories Act, 1948, Payment of Wages Under Minimum
            Wages Act
          </h2>
        </div>
        {/* // Quick Link  */}
        <div className="md:w-[30%] md:ml-24">
          <h4 className="text-2xl font-medium">Quick Links</h4>
          <div className="h-1 bg-green-600 rounded-3xl w-20 mt-2 mb-4"></div>
          <ul className="flex flex-col gap-2 text-gray-400">
            <li>&gt; &nbsp;Home</li>
            <li>&gt; &nbsp;About Us</li>
            <li>&gt; &nbsp;Team</li>
            <li>&gt; &nbsp;Career</li>
            <li>&gt; &nbsp;Contact Us</li>
          </ul>
        </div>
        {/* contect contect  */}
        <div className="md:w-[30%]">
          <h4 className="text-2xl font-medium">Connect With Us</h4>
          <div className="h-1 bg-green-600 rounded-3xl w-20 mt-2 mb-4"></div>
          <h3 className="text-[15px] flex items-center mb-1">
            <span class="material-symbols-outlined text-green-600">
              pin_drop
            </span>{" "}
            <span>&nbsp;&nbsp;OFFICE ADDRESS</span>
          </h3>
          <h4 className="text-gray-400 mb-1 ml-2">Laxmi Nagar, New Delhi</h4>
          <h3 className="text-[15px] flex items-center">
            <span class="material-symbols-outlined text-green-600 mb-1">
              support_agent
            </span>{" "}
            <span>&nbsp;&nbsp;PHONE NUMBER</span>
          </h3>
          <h4 className="text-gray-400 ml-2">+91 1234567890</h4>
          <h3 className="text-[15px] flex items-center mb-1 mt-1">
            <span class="material-symbols-outlined text-green-600">mail</span>{" "}
            <span>&nbsp;&nbsp;EMAIL ID</span>
          </h3>
          <h4 className="text-gray-400 ml-2">example@gmail.com</h4>
        </div>
      </div>
      {/* // Line Container  */}
      <div className="h-[1px] bg-gray-800 my-10"></div>
      {/* // All Right Content */}
      <div className="font-medium text-center">
        <span>
          © 2024. All Rights Corpbase Consultancy Reserved.{" "}
          <span className="text-green-600">
            Designed & Developed By CAPAPP IT SOLUTION PVT.LTD.
          </span>
        </span>
      </div>
    </div>
  );
}


export default Footer;



