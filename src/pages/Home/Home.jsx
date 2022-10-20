import React from "react";
import { useEffect } from "react";

import { Text } from "../../components/Text";
import { TextVariants } from "../../components/Text/constants";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="topic">
        <div className="container">
          <div className="info">
            <Text className="likes">Buy likes followers views</Text>
            <Text className="naizop">NAIZOP</Text>
            <Text className="description" variant={TextVariants.h1}>
              is the <Text>most reliable</Text> panel on the market
              <br /> with <Text>529.122</Text> orders until now
            </Text>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="sociale-network-background" />
      </div>
      <div className="experience-background" />
      <div className="container experience">
        <div className="info">
          <Text className="naizop">NAIZOP</Text>
          <Text className="description" variant={TextVariants.h1}>
            is the <Text>most reliable</Text> panel on the market with{" "}
            <Text>529.122</Text> orders until now
          </Text>
        </div>
      </div>
    </>
  );
};

export default Home;
