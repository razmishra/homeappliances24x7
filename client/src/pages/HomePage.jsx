import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Herosection from "../Components/Herosection/Herosection";
import Footer from "../Components/Footer/Footer";
import About from "../Components/About/About";
import Services from "../Components/Services/Services";
import Testimonials from "../Components/Testimonial/Testimonials";
import Contact from "../Components/Contact/Contact";
// import Inquiry from "../Components/Inquiry/Inquiry";
import Registration from "../Components/Registration/Registration";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Herosection />
      <About />
      <Services />
      <Testimonials />
      {/* <Inquiry /> */}
      <Registration />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
