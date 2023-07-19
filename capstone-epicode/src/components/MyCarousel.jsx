import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Img1 from "../image/img1.jpg";
import piscina2 from "../image/piscina2.png";
import img2 from "../image/img2.jpg";
import Imgpest from "../image/Imgpest.jpg";
import Imgpint from "../image/Imgpint.jpg";
import Img3 from "../image/img3.jpg";
import Img4 from "../image/img4.jpg";
import Img5 from "../image/img5.jpg";
import Img6 from "../image/img6.jpg";
import Img7 from "../image/img7.jpg";
import Img9 from "../image/img9.jpg";
import Img8 from "../image/img8.jpg";
import Sauna from "../image/sauna.jpg";
import Piscinasera from "../image/piscinasera.jpg";
import PiscinaEsterna1 from "../image/piscinaesterna1.jpg";
import festa from "../image/Festa.jpg";
import Relax from "../image/relax.jpg";

function CarouselFadeExample() {
  return (
    <Carousel
      className
      fluid="w-100 mx-auto mt-5 mb-5 carousel-home"
      nextIcon={null}
      prevIcon={null}
    >
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={Img1}
          alt="First slide"
          height={"400px"}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={piscina2}
          alt="First slide"
          height={"400px"}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={img2}
          alt="1 slide"
          height={"400px"}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={Imgpest}
          alt="2 slide"
          height={"400px"}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={Imgpint}
          alt="3 slide"
          height={"400px"}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={Img3}
          alt="4 slide"
          height={"400px"}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={Img4}
          alt="5 slide"
          height={"400px"}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={Img5}
          alt="6 slide"
          height={"400px"}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={Img6}
          alt="7 slide"
          height={"400px"}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={Relax}
          alt="8 slide"
          height={"400px"}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={Img7}
          alt="9 slide"
          height={"400px"}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={Sauna}
          alt="10 slide"
          height={"400px"}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={festa}
          alt="11 slide"
          height={"400px"}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={Img8}
          alt="12 slide"
          height={"400px"}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={Img9}
          alt="13 slide"
          height={"400px"}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={Piscinasera}
          alt="14 slide"
          height={"400px"}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={PiscinaEsterna1}
          alt="15 slide"
          height={"400px"}
        />
      </Carousel.Item>
    </Carousel>
  );
}
export default CarouselFadeExample;
