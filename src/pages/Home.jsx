import React from "react";
import HelmetSEO from "../components/HelmetSEO";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import mainFirst from "../assets/mainFirst.jpg";
import Card from "../components/Card";
import Button from "../components/Button";


function Home() {
  return (
    <>
      <HelmetSEO
        title={"Law Firm - Home"}
        description={
          "Elevate your legal experience with Law Firm. Expertise in All Areas of Law for tailored solutions. Trust us for results-driven representation."
        }
        keywords={
          "Law Firm, Legal Expertise, Attorney Services, Specialized Law Practice, Tailored Legal Solutions, Results-Driven, Expert Lawyers, Legal Consultation, Client Advocacy"
        }
      />
      <div>
        {/* // Slider Component  */}
        <Slider />


        {/* // First Content  */}
        <div className="bg-gray-200 px-24 py-24 flex flex-row gap-20">
          <div className="w-[50%]">
            <h4 className="text-2xl font-bold">
              WELCOME TO CORPBASE CONSULTANCY LLP
            </h4>
            <div className="h-1 bg-green-600 rounded-full w-36 mt-2 mb-4"></div>
            <p className="text-justify text-gray-600 font-medium mb-5">
              Welcome to Corpbase Consultancy LLP Labour Law Consultant,
              Employee's Provident Fund (EPF), Employee's State Insurance Corp.
              (ESIC) Maintenance of Records for various Labour Laws i.e.
              Employees Provident Fund & Miscellaneous Provisions Act, Employees
              State Insurance Act., Factories Act, 1948, Payment of Wages Under
              Minimum Wages Act, Bonus Act and Complete services for Payroll,
              TDS and Professional Tax etc.
            </p>
            <button className="bg-black py-2 px-6 rounded-xl shadow-xl text-green-600 text-lg font-bold mt-2">
              Read More
            </button>
          </div>
          <div className="w-[50%]">
            <div className="h-[280px] w-full">
              <img
                src={mainFirst}
                alt=""
                className="h-full w-full shadow-xl rounded-lg"
              />
            </div>
          </div>
        </div>


        {/* // Second Content  */}
        <div className="px-24 py-24">
          <h4 className="text-4xl font-bold">Why Us:</h4>
          <div className="h-1 bg-green-600 rounded-full w-20 mt-2 mb-4"></div>
          <p className="text-justify text-gray-600 font-medium">
            Mr.Rahul Kumar Jha, is the Co-founder of Corpbase Consultancy LLP.
            Mr. Jha is a qualified advocate and masters in Commerce and having
            an experience of over 8 years in the area of EPFO, ESIC & Labour Law
            Related Registration, Maintenance of Statutory Records and
            Consultation to various corporate clients.We have discovered the
            easiest way of dealing with the problems of regular and periodical
            maintenance of Payroll and statutory records under various labour
            statutes i.e. Employees Provident Fund & Miscellaneous Provision
            Acts, 1952 E.S.I.C Act, 1948 Payment of wages under Minimum Wages
            Act, Bonus Act and Labour Welfare Fund Rules 1997 and various other
            acts.
          </p>
        </div>


        {/* // Third Content  */}
        <div className="relative">
          <div className="bg_image_class relative w-full h-[550px]"></div>
          <div className="absolute top-24 px-28 flex flex-row gap-40">
            <div className="w-[50%] text-white">
              <h4 className="text-4xl font-bold">Vision Mission Values</h4>
              <div className="h-1 bg-green-600 rounded-full w-20 mt-2 mb-4"></div>
              <p className="text-justify font-medium mb-7">
                As a firm, we actively look for strategic opportunities and make
                proactive recommendations to enhance the performance of our
                clients; Personalized Service that deliver unbounded value;
                Focused on exceeding expectations End to End based solutions;
                Networking as a capacity building measure; Client relationships
                based on Mutual Respect and collaborations; Accessible &
                Aggressive Highly Sensitive to Client Needs; Ever Vigilant An
                Eye for Detail
              </p>
              <button className="bg-green-600 py-2 px-6 rounded-xl shadow-xl text-black text-lg font-bold mt-2">
                About Us
              </button>
            </div>
            <div className="w-[50%] flex flex-col gap-4 p-8">
              <div className="flex flex-row gap-4">
                <div className="bg-black rounded-lg px-20 py-7 flex flex-col justify-center items-center">
                  <span
                    class="material-symbols-outlined text-green-600"
                    style={{ fontSize: "50px", marginBottom: "11px" }}
                  >
                    domino_mask
                  </span>
                  <p className="text-white text-xl font-medium">Vision</p>
                </div>
                <div className="bg-black rounded-lg px-20 py-7 flex flex-col justify-center items-center">
                  <span
                    class="material-symbols-outlined text-green-600"
                    style={{ fontSize: "50px", marginBottom: "11px" }}
                  >
                    target
                  </span>
                  <p className="text-white text-xl font-medium">Mission</p>
                </div>
              </div>
              <div className="flex flex-row gap-4">
                <div className="bg-black rounded-lg px-20 py-7 flex flex-col justify-center items-center">
                  <span
                    class="material-symbols-outlined text-green-600"
                    style={{ fontSize: "50px", marginBottom: "11px" }}
                  >
                    hub
                  </span>
                  <p className="text-white text-xl font-medium">Values</p>
                </div>
                <div className="bg-black rounded-lg px-[58px] py-7 flex flex-col justify-center items-center">
                  <span
                    class="material-symbols-outlined text-green-600"
                    style={{ fontSize: "50px", marginBottom: "11px" }}
                  >
                    query_stats
                  </span>
                  <p className="text-white text-xl font-medium">Confidential</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* // Fourth Content  */}
        <div className="bg-gray-200 px-24 py-24">
          <h4 className="text-4xl text-center font-bold">OUR SERVICES</h4>
          <div className="h-1 bg-green-600 rounded-full w-64 mt-2 mb-14 m-auto"></div>
          <div className="flex flex-row justify-center items-center gap-6 flex-wrap">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>

        {/* // FIFTH Content  */}
        <div className="flex flex-row mt-5 mb-10 items-center justify-around">
          <div>
            <h4 className="text-xl font-bold mt-10">OFFICE ADDRESS-- T-16 Shree Krishna Complex, Sharma Market Sector-5, <br />Noida - Uttar Pradesh-201301</h4>
            <div className="h-1 bg-green-600 rounded-full w-20 mt-2 mb-4"></div>
          </div>

          <div>
            <Button text={"Contact Us"} />
          </div>
        </div>
      </div>
    </>
  );
}


export default Home;



