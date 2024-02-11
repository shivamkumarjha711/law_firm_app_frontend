import React from "react";
import HelmetSEO from "../components/HelmetSEO";


function Gallery() {
  return (
    <>
      <HelmetSEO
        title={"Law Firm - Gallery"}
        description={
          "Elevate your legal experience with Law Firm. Expertise in All Areas of Law for tailored solutions. Trust us for results-driven representation."
        }
        keywords={
          "Law Firm, Legal Expertise, Attorney Services, Specialized Law Practice, Tailored Legal Solutions, Results-Driven, Expert Lawyers, Legal Consultation, Client Advocacy"
        }
      />
      <div>
        <div className="bg-black py-16 mb-2">
          <h1 className="text-green-600 text-center font-bold text-4xl">
            GALLERY
          </h1>
          <p className="text-white text-center font-medium mt-2">
            Home&nbsp;&nbsp;&gt;&nbsp;&nbsp;Gallery
          </p>
        </div>


        <div className="my-16 mx-24">
          <h4 className="text-4xl font-bold">Gallery</h4>
          <div className="h-1 bg-green-600 rounded-full w-20 mt-2 mb-4"></div>
        </div>
      </div>
    </>
  );
}


export default Gallery;



