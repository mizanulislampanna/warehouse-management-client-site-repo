import React from "react";
import Banner from "./Banner";
import Bonus from "./Bonus";

import HomepageBikes from "./HomepageBikes";
import Subscribe from "./Subscribe";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HomepageBikes></HomepageBikes>
      <Bonus></Bonus>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;
