import React from "react";
import Startupcard from "./Startupcard";
import p1 from "../images/p1.png";
import p2 from "../images/p2.png";
import p3 from "../images/p3.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Section1() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="section1-container">
      <h3 className="sec-title">
        Trending Startups <i class="fa fa-angle-double-up"></i>
      </h3>

      <Slider {...settings}>
        <Startupcard img={p1} />
        <Startupcard img={p2} />
        <Startupcard img={p3} />
        <Startupcard img={p1} />
        <Startupcard img={p2} />
        <Startupcard img={p3} />
      </Slider>
    </div>
  );
}

export default Section1;
