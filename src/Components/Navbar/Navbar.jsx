import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY > 1) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <ScrollLink to="home" smooth={true} duration={500}>
        <h1>Home Appliences</h1>
      </ScrollLink>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink>
        </li>
        <li>
          <ScrollLink to="about" smooth={true} duration={500}>about</ScrollLink>
        </li>
        <li>
          <ScrollLink to="services" smooth={true} duration={500}>services</ScrollLink>
        </li>
        <li>
          <ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;