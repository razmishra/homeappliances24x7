import "./Herosection.css";

import { Link } from "react-router-dom";
const Herosection = () => {
  return (
    <div id="home" className="hero">
      <div className="mask">
        <img className="intro-img" src="./herosection.jpg" alt=""  />
      </div>
      <div className="content">
        <h2>Welcome to</h2>
        <h2>Home Appliences</h2>
        <p> We are here to help you 24x7</p>
      </div>
    </div>
  );
};

export default Herosection;
