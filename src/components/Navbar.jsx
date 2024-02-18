import React, { useState } from "react";
import "../styles/Navbar.css";
import logo from "../assets/law_logo.png";
import Button from "./Button";
import {Link} from "react-router-dom";
import { IoIosArrowDropdown } from "react-icons/io"

function Navbar() {
  const [isDropDownOpen, setDropDownOpen] = useState(false);

  const mouseEnterHandle = () => {
    setDropDownOpen(!isDropDownOpen)
  };

  return (
    <div className="container">
      <div>
        <Link to={"/"}><img className="main_image" src={logo}></img></Link>
      </div>

      <div className="link_container">
        <ul className="navbar_link">
          <li><Link className="link" to={"/"}>HOME</Link></li>
          <li><Link className="link" to={"/aboutUs"}>ABOUT US</Link></li>
          <li><Link className="link" to={"/team"}>TEAM</Link></li>
          <li onClick={mouseEnterHandle}><div><Link className="link">SERVICES</Link></div>
          {
            isDropDownOpen ? (
              <div className="drop_down_container">
                <ul className="drop_down_link">
                  <li><Link className="link" to={"#"}>ABOUT US</Link></li>
                  <li><Link className="link" to={"#"}>TEAM</Link></li>
                  <li><Link className="link" to={"#"}>CONTACT</Link></li>
                  <li><Link className="link" to={"#"}>SERVICE</Link></li>
                </ul>
              </div>
            ) : (
              null
            )
          }
          </li>
          <li><Link className="link" to={"/gallery"}>GALLERY</Link></li>
          <li><Link className="link" to={"/career"}>CAREER</Link></li>
          <li><Link className="link" to={"/contactUs"}>CONTACT US</Link></li>
        </ul>
      </div>

      

      <div className="btn">
        <Link to={"/signup"}><Button text={"Signup"} /></Link>
        <Link to={"/login"}><Button text={"Login"} /></Link>
      </div>
    </div>
  );
}

export default Navbar;
