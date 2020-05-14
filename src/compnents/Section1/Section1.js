import React, { useState, useEffect } from "react";
import axios from "axios";
import Startupcard from "../Startupcard/Startupcard";
import styles from "./section1.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
    <div className={styles.section1_container}>
      <h3 className={styles.sec_title}>{props.title}</h3>

      <Slider {...settings}>{startuplist}</Slider>
    </div>
  );
}

export default Section1;
