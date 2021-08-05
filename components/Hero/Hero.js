import React from "react";
import Image from "next/image";
import styled from "styled-components";
import BackgroundImage from "../../public/background.jpg";

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background: darkgray;
  display: grid;
  align-items: center;
`;

const Content = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 380px;
  color: white;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 48px;
  font-size: clamp(24px, 5vw, 48px);
  font-family: ${({ theme }) => theme.fontFamily.MontSerrat};
  color: ${({ theme }) => theme.color.grey};
`;

const Paragraph = styled.p`
  max-width: 420px;
  width: 80%;
  font-family: ${({ theme }) => theme.fontFamily.Overpass};
  font-size: clamp(16px, 2vw, 20px);
  color: ${({ theme }) => theme.color.darkGrey};
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
      <Content>
        <Title>Kompleksowa budowa domów</Title>
        <Paragraph>
          At Finance we care about your future. We help you invest the way you
          want. So you can relax, have fun and let your fund grow.
        </Paragraph>
      </Content>
    </Wrapper>
  );
};

export default Hero;
