import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./components/AllRoutes";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import React from "react";
import Header from "./components/Header";


function App() {
  return (
    <>
      <Header />
      <Navbar />
      <AllRoutes />
      <Footer />
    </>
  );
}


export default App;



