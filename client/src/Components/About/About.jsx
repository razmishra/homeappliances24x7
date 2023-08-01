import "./About.css";
import { RiTeamFill, RiCustomerService2Line } from "react-icons/ri";
import { IoPricetag } from "react-icons/io5";
import { TbCloudLock } from "react-icons/tb";
import { MdCall } from "react-icons/md";

const About = () => {
  const phone = "tel:+918451067064";

  const cardsData = [
    {
      title: "Same day service",
      icon: <TbCloudLock size={30} />,
      description:
        "Swift solutions with same-day service - get your appliances up and running hassle-free, right when you need it. Experience unparalleled convenience and reliability today!",
    },
    {
      title: "Expert guidance",
      icon: <RiCustomerService2Line size={30} style={{ color: "#fff" }} />,
      description:
        "Our experienced professionals provide personalized recommendations, guiding you to make well-informed decisions on your purchases.",
    },
    {
      title: "Exceptional support",
      icon: <RiTeamFill size={25} />,
      description:
        "Our dedicated team is committed to delivering top-notch customer service and reliable after-sales assistance for your satisfaction.",
    },
    {
      title: "Affordable excellence",
      icon: <IoPricetag size={25} />,
      description:
        "Discover top-rated appliances at competitive prices and seize exclusive deals for unbeatable value. Elevate your home with premium choices today!",
    },
  ];

  return (
    <div id="about" className="pricing">
      <h2 className="choose-us">Why choose us</h2>
      <div className="card-container">
        {cardsData.map((card, index) => (
          <div className="card" key={index}>
            <h3>{card.title}</h3>
            {card.icon}
            <p>{card.description}</p>
            <div className="pro-btns btn">
              <MdCall size={30} />
              <a href={phone} className="btn">
                CALL US
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
