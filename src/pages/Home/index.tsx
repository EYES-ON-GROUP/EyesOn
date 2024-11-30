import React from "react";
// import { Link } from "react-router-dom";
import Section1 from "../../components/Section1";
import Section2 from "../../components/Section2";
import Carousel from "../../components/Carousel";
import LiveView from "../../components/LiveView";



const Home = () => {
  return (
    <main>
     <Section1 />
     <Section2 />
     <LiveView /> 
     <Carousel />
      {/* Other content can go here */}
    </main>
  );
};

export default Home;
