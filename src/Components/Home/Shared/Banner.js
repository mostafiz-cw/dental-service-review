import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Banners.css";

const Banner = () => {
  return (
    <div className="container mt-3">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 banner"
            src="https://images.pexels.com/photos/6812561/pexels-photo-6812561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3>First slide label</h3> */}
            <p>
              From dental tech to virtual reality, artificial intelligence and
              mobile app, we got you.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 banner"
            src="https://images.pexels.com/photos/3952010/pexels-photo-3952010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Second slide"
          />

          <Carousel.Caption>
            {/* <h3>Second slide label</h3> */}
            <p>Your Resource for Enhancing and Maintaining Your Smile.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 banner"
            src="https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Third slide"
          />

          <Carousel.Caption>
            {/* <h3>Third slide label</h3> */}
            <p>
              We accept all PPO plans but if you don’t have one, subscribe to
              one of our monthly plans and save.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
