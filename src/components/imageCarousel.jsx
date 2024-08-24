import React from "react";
import { Carousel } from "antd";

const contentStyle = {
  margin: 0,
  height: "auto", // Adjust as necessary
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
};

const ImageCarousel = ({photos}) => (
  <div className="carousel-container border-2 rounded-md border-black bg-black">
    <Carousel arrows infinite={true} style={{ width: "200px" }}>
      {
        photos.map((element) =>{
            return (
                <img src={element} alt="product" style={contentStyle} className="p-6"/>
            )
        })
      }
    </Carousel>
  </div>
);

export default ImageCarousel;
