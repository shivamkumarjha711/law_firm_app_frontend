import React from "react";
import HelmetSEO from "../components/HelmetSEO";


function Contact() {
  return (
    <>
      <HelmetSEO
        title={"Law Firm - Contact Us"}
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
            CONTACT US
          </h1>
          <p className="text-white text-center font-medium mt-2">
            Home&nbsp;&nbsp;&gt;&nbsp;&nbsp;Contact Us
          </p>
        </div>


        <div className="m-5 md:my-16 md:mx-24 flex flex-col md:flex-row gap-4 md:gap-24">
          <div className="md:w-[55%]">
            <h4 className="text-4xl font-bold">Connect With Us</h4>
            <div className="h-1 bg-green-600 rounded-full w-36 mt-2 mb-11"></div>
            <form className="flex flex-col gap-6">
              <input
                type="text"
                placeholder="Enter Your Name *"
                required
                className="py-3 px-4 placeholder:text-black bg-gray-200 w-full rounded-md shadow-md"
              />
              <input
                type="text"
                placeholder="Enter Your E-mail Id *"
                required
                className="py-3 px-4 placeholder:text-black bg-gray-200 w-full rounded-md shadow-md"
              />
              <input
                type="text"
                placeholder="Enter Your Phone Number *"
                required
                className="py-3 px-4 placeholder:text-black bg-gray-200 w-full rounded-md shadow-md"
              />
              <textarea
                type="text"
                placeholder="Enter Your Message...."
                required
                className="py-3 px-4 placeholder:text-black bg-gray-200 w-full rounded-md shadow-md"
                rows={7}
              />


              <button className="bg-black p-3 rounded-md shadow-lg text-green-600 text-lg font-bold mt-2">
                Submit
              </button>
            </form>
          </div>
          <div className="md:w-[45%] m-auto md:m-0 mt-5 md:mt-20 md:ml-16">
            <h3 className="text-2xl font-bold flex items-center">
              <span
                class="material-symbols-outlined text-green-600"
                style={{ fontSize: "50px" }}
              >
                pin_drop
              </span>{" "}
              <span>&nbsp;&nbsp;OFFICE ADDRESS</span>
            </h3>
            <h4 className="text-green-600 text-lg font-medium my-2 ml-16">
              Laxmi Nagar, New Delhi
            </h4>
            <h3 className="text-2xl font-bold flex items-center">
              <span
                class="material-symbols-outlined text-green-600"
                style={{ fontSize: "50px" }}
              >
                support_agent
              </span>{" "}
              <span>&nbsp;&nbsp;PHONE NUMBER</span>
            </h3>
            <h4 className="text-green-600 text-lg font-medium my-2 ml-16">
              +91 1234567890
            </h4>
            <h3 className="text-2xl font-bold flex items-center">
              <span
                class="material-symbols-outlined text-green-600"
                style={{ fontSize: "50px" }}
              >
                mail
              </span>{" "}
              <span>&nbsp;&nbsp;EMAIL ID</span>
            </h3>
            <h4 className="text-green-600 text-lg font-medium my-2 ml-16">
              example@gmail.com
            </h4>
          </div>
        </div>


        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14007.176955020794!2d77.25929278653726!3d28.63592834377532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcac7381f671%3A0x531f06064145554a!2sLaxmi%20Nagar%2C%20Delhi!5e0!3m2!1sen!2sin!4v1707632421502!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
         
        </div>
      </div>
      ;
    </>
  );
}


export default Contact;



