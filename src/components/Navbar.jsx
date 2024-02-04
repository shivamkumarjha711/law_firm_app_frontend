import React, { useState } from "react";
import "../styles/Navbar.css";
import logo from "../assets/law_logo.png";
import Button from "./Button";
import {Link} from "react-router-dom";
import { IoIosArrowDropdown } from "react-icons/io"

function Navbar() {
  const [isDropDownOpen, setDropDownOpen] = useState(false);

  const toggleDropDown = () => {
    setDropDownOpen(!isDropDownOpen)
  };

  return (
    <div className="container">
      <div>
        <img className="main_image" src={logo}></img>
      </div>

      <div className="link_container">
        <ul className="navbar_link">
          <li><Link className="link" to={"#"}>ABOUT US</Link></li>
          <li><Link className="link" to={"#"}>TEAM</Link></li>
          <li><Link className="link" to={"#"}>CONTACT</Link></li>
          <li onClick={toggleDropDown}><Link className="link">SERVICE <IoIosArrowDropdown /></Link>
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
          <li><Link className="link" to={"#"}>GALLERY</Link></li>
          <li><Link className="link" to={"#"}>CAREER</Link></li>
          <li><Link className="link" to={"#"}>CONTACT US</Link></li>
        </ul>
      </div>

      <div className="btn">
        <Button text={"Sign Up"} />
        <Button text={"Login"} />
      </div>
    </div>
  );
}

export default Navbar;
