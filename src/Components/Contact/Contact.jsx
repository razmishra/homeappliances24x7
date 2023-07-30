import "./Contact.css";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
const Contact = () => {
    const phone = "tel:+918451067064";
    const mailTo = "mailto:mangeshverma047@gmail.com";
  return (
    <div id="contact" className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact">
        <div className="left">
            <p className="heading">Contact details</p>
          <div className="call">
            <FiPhoneCall size={20} style={{ color: "white" }} />
            <a href={phone}><p>918451067064</p></a>
          </div>
          <div className="email">
            <MdOutlineEmail size={20} style={{ color: "white" }} />
            <a href={mailTo}><p>mangeshvarma047@gmail.com</p></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
