import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Error from "./Error";
import About from "../pages/About";
import Career from "../pages/Career";
import Contact from "../pages/Contact";
import Gallery from "../pages/Gallery";
import Services from "../pages/Services";
import Team from "../pages/Team";
import Tax from "../pages/Tax";

function AllRoutes() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="aboutUs" element={<About />} />
          <Route path="career" element={<Career />} />
          <Route path="contactUs" element={<Contact />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="services" element={<Services />}>
            <Route path="tax" element={<Tax />} />
          </Route>
          <Route path="team" element={<Team />} />
          <Route path="*" element={<Error />} />
        </Routes>
    </>
  );
}

export default AllRoutes;
