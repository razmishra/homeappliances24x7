import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./testimonial.css";
import { Parallax, Pagination, Navigation } from "swiper/modules";

export default function Testimonials() {
  return (
    <>
      <h1 className="clients">What our client says about us</h1>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            "background-image": `url('./testimonial.jpg')`,
            opacity: "0.4",
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Rajesh Kumar
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              After my washing machine broke down, I was worried about the
              hassle of getting it fixed. But thanks to the quick and reliable
              service from Home Appliance Solutions, my washing machine was up
              and running within no time! Raju, the technician, did an excellent
              job, and I couldn't be happier with the results. Highly
              recommended!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Ankit Patel
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              When my oven suddenly stopped working, I was worried about the
              expenses and the time it would take to repair it. However, Home
              Appliance Solutions proved me wrong. They sent over their
              technician, Vikram, who not only fixed the problem but also
              explained the issue in a way I could understand. The service was
              quick, and the cost was reasonable. I will definitely be coming
              back to them for any future appliance repairs!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Pooja Sharma
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              I recently faced a problem with my dishwasher, and it was causing
              a lot of inconvenience in my daily routine. A friend recommended
              Home Appliance Solutions, and I'm so glad I called them. The
              technician, Ravi, arrived promptly and efficiently fixed the
              issue. Now my dishwasher works like new, and I'm impressed with
              the professional service they provided. Thank you!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Sneha Gupta
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              My dryer was giving me a hard time, and I was concerned about
              finding a reliable repair service. Thankfully, I found Home
              Appliance Solutions, and I'm thrilled with their work. The
              technician, Anand, was polite, knowledgeable, and fixed the
              problem efficiently. It's been weeks since the repair, and my
              dryer is still working perfectly. I can't thank them enough for
              their excellent service!
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
