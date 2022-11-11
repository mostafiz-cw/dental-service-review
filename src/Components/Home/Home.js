import React from "react";
import OurTeam from "./OurTeam";
import ServiceCard from "./ServiceCard";
import Banner from "./Shared/Banner";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <ServiceCard></ServiceCard>
        <OurTeam></OurTeam>
        <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
