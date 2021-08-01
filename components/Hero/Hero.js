import React from "react";
import Image from "next/image";
import styled from "styled-components";
import BackgroundImage from "../../public/background.jpg";

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background: darkgray;
`;

const Hero = () => {
  return (
    <Wrapper>
      <Image
        src={BackgroundImage}
        alt="URO-MK logo"
        layout="fill"
        objectFit="cover"
        quality="75"
      />
    </Wrapper>
  );
};

export default Hero;
