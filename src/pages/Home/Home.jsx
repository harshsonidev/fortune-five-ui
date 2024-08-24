import React from "react";
import Layout from "../../Layout";

import "./Home.scss";

import Section1 from "./Section1";
import Section3 from "./Section3";
import Section2 from "./Section2";
import Section4 from "./Section4";
import Section5 from "./Section5";

const Home = () => {
  return (
    <Layout>
      <div className="home-container">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </div>
    </Layout>
  );
};

export default Home;
