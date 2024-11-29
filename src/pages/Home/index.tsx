import React from "react";
// import { Link } from "react-router-dom";
import Section1 from "../../components/Section1";
import Section2 from "../../components/Section2";
import GlobalSection from "../../components/GlobalSection";

const Home = () => {
  return (
    <main>
      <GlobalSection>
        <Section1 />
        <Section2 />
      </GlobalSection>
      {/* Other content can go here */}
    </main>
  );
};

export default Home;
