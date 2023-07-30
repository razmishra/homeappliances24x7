import "./Services.css";
import { MdCall } from "react-icons/md";
const Services = () => {
  const phone = "tel:+918451067064";

  // Array of service details
  const services = [
    {
      id: 1,
      imageSrc: "./washingmachine.jpg",
      title: "Washing Machine Repair",
      description:
        "Fast and reliable washing machine repair service, ensuring your laundry appliances work smoothly and efficiently.",
    },
    {
      id: 1,
      imageSrc: "./oven.jpg",
      title: "Oven Repair",
      description:
        "Professional oven repair solutions to restore your cooking appliance's performance, so you can enjoy delightful meals again.",
    },
    {
      id: 1,
      imageSrc: "./dryer.jpg",
      title: "Dryer Repair",
      description:
        "Expert dryer repair services for swift and effective fixes, ensuring your clothes dry efficiently and without delays.",
    },
    {
      id: 1,
      imageSrc: "./dishwasher.jpg",
      title: "Dishwasher Repair",
      description:
        "Hassle-free dishwasher repair to keep your dishes sparkling clean, saving you time and effort in the kitchen.",
    },
  ];

  return (
    <div id="services" className="work-container">
      <h1 className="project-heading">Here is our services</h1>
      <div className="project-container">
        {services.map((service) => (
          <div className="project-card" key={service.id}>
            <img src={service.imageSrc} alt="" />
            <h2 className="project-title">{service.title}</h2>
            <div className="pro-details">
              <p>{service.description}</p>
              <div className="pro-btns btn">
                  <MdCall size={30} />
                <a href={phone} className="btn">
                  CALL US
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
