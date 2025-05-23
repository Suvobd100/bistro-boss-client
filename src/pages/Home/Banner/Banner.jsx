import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import React from "react";

import img1 from "../../../assets/home/01.jpg";
import img2 from "../../../assets/home/02.jpg";
import img3 from "../../../assets/home/03.png";
import img4 from "../../../assets/home/04.jpg";
import img5 from "../../../assets/home/05.png";
import img6 from "../../../assets/home/06.png";

const Banner = () => {
  return (
    <div className="w-full">
    {/* <div className="max-w-4xl mx-auto"> */}
      {/* Don't override renderThumbs - use CSS instead */}
      <Carousel
        showThumbs={true}
        thumbWidth={80}
        className="w-full centered-thumbs"
        // className="centered-thumbs"
        autoPlay={true}          // Enable auto-sliding
        infiniteLoop={true}      // Loop continuously
        interval={5000}         // 5 seconds between slides
      >
        <div className="mt-10">
          <img src={img1} alt="Slide 1" />
        </div>
        <div className="mt-10">
          <img src={img2} alt="Slide 2" />
        </div>
        <div className="mt-10">
          <img src={img3} alt="Slide 3" />
        </div>
        <div className="mt-10">
          <img src={img4} alt="Slide 4" />
        </div>
        <div className="mt-10">
          <img src={img5} alt="Slide 5" />
        </div>
        <div className="mt-10">
          <img src={img6} alt="Slide 6" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;