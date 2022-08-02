import React, { useEffect, useState } from "react";
import heroImg from "../assets/imghero.webp";

const Hero = ({ largeShort }) => {
  const [classHeros, setClassHeros] = useState("large");

  useEffect(() => {
    setClassHeros(largeShort);
  });

  return (
    <div className={classHeros}>
      <img src={heroImg} alt="hero img" />
    </div>
  );
};

export default Hero;
