import React from "react";
import "../styles/Banking.css";
import Slider from "react-slick";
import data from "./data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banking = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 1,
  };

  return (
    <div className="banking-container">
      <div className="banking-items-container">
        {/* <Slider {...settings} className="slider"> */}
        {data.map((eachData) => {
          return (
            <div key={eachData.id} className="banking-items">
              <img
                src={eachData.img}
                alt={eachData.title}
                className="banking-img"
              />
              <p className="title">{eachData.title}</p>
              <p className="des">{eachData.des}</p>
            </div>
          );
        })}
        {/* </Slider> */}
      </div>
    </div>
  );
};

export default Banking;
