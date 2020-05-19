import React, { useState, useEffect } from "react";
import axios from "axios";
import Startupcard from "../Startupcard/Startupcard";
import styles from "./section1.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";

const HomeWrapper = styled.div`
  .slick-prev:before {
    color: black;
    font-size: 22px;
  }
  .slick-next:before {
    color: black;
    font-size: 22px;
  }
`;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        left: "325px",
        display: "block",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        left: "14px",
        display: "block",
        fontSize: "22px",
      }}
      onClick={onClick}
    />
  );
}

function Section1(props) {
  const [startups, setStartups] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://my-json-server.typicode.com/alcatraz69/dealspacedummydata/startup"
      )
      .then((res) => {
        setStartups(res.data);
      });
  }, []);

  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          // nextArrow: <SampleNextArrow />,
          // prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
    ],
  };

  let startuplist = startups.length ? (
    startups.map((startup) => {
      let url;

      if (props.video === "false") {
        url = startup.img;
      } else {
        url = startup.video;
      }
      return (
        <Startupcard
          key={startup.id}
          img={url}
          name={startup.name}
          views={startup.views}
          description={startup.description}
        />
      );
    })
  ) : (
    <div className={styles.Loading}>Loading...</div>
  );

  return (
    <HomeWrapper>
      <div className={styles.section1_container}>
        <h3 className={styles.sec_title}>{props.title}</h3>

        <Slider {...settings}>{startuplist}</Slider>
      </div>
    </HomeWrapper>
  );
}

export default Section1;
