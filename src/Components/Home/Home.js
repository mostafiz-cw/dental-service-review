import React from "react";
import useTitle from "../../Hooks/useTitle";
import OurTeam from "./OurTeam";
import ServiceCard from "./ServiceCard";
import Banner from "./Shared/Banner";
import Testimonials from "./Testimonials";

const Home = () => {
  // dynamic title
  useTitle("Home");
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
