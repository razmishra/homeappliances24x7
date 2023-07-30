import "./Footer.css";
import {
  AiOutlineCopyright
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <AiOutlineCopyright size={20} style={{color:'white'}}/>
      </div>
      <div>
        <p>homeappliences24x7.com All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
