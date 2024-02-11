import React from "react";
import HelmetSEO from "../components/HelmetSEO";
import Navbar from "../components/Navbar";

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
      <div>Home Page</div>
    </>
  );
}

export default Home;
