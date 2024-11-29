import React from "react";
import { Link } from "react-router-dom";
import Section1 from "../../components/Section1";
import Section2 from "../../components/Section2";
import Planstarifs from "../Tarifs";

const Home = () => {
  return (
    <main>
     <Section1 />
     <Section2 />
      {/* Other content can go here */}
     <Planstarifs/>
    </main>
  );
};

export default Home;
