import React from "react";
import Image from "next/image";
import styled from "styled-components";
import BackgroundImage from "../../public/background.webp";

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background: darkgray;
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 380px;
  color: white;
  z-index: 2;
  // display: flex;
  /* flex-direction: column;
  justify-content: center; */
  margin: auto;
  padding: 2rem;
  /* flex: 1; */
`;

const Title = styled.h1`
  font-size: 48px;
  font-size: clamp(24px, 5vw, 48px);
  font-family: ${({ theme }) => theme.fontFamily.MontSerrat};
  color: transparent;
  position: relative;
  display: inline-block;
  animation: overlay 0.25s ease forwards;
  animation-delay: 0.5s;

  &::first-of-type {
    color: hsla(43, 91%, 50%, 1);
  }

  & > span {
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.color.yellow};
    width: 100%;
    height: 100%;
    overflow: hidden;
    // z-index: -1;
    transform: scaleX(0);
    transform-origin: left;
    animation: reveal 1s ease forwards;
    animation-delay: 0s;
  }

  @keyframes overlay {
    100% {
      color: ${({ theme }) => theme.color.grey};
    }
  }

  @keyframes reveal {
    /* 0% {
      transform: scaleX(-100%);
    } */
    50% {
      transform: scaleX(100%);
      transform-origin: left;
    }
    60% {
      transform: scaleX(100%);
      transform-origin: right;
    }
    100% {
      transform: scaleX(0%);
      transform-origin: right;
    }
  }
`;

const Paragraph = styled.p`
  max-width: 420px;
  width: 80%;
  font-family: ${({ theme }) => theme.fontFamily.Overpass};
  font-size: clamp(16px, 2vw, 20px);
  color: ${({ theme }) => theme.color.darkGrey};
  color: transparent;
  transform: translateY(-30%);
  animation: fadeInUp 1s ease forwards;
  animation-delay: 0.5s;

  @keyframes fadeInUp {
    100% {
      color: ${({ theme }) => theme.color.darkGrey};
      transform: translateY(0);
    }
  }
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
        placeholder="blur"
        priority
      />
      <Content>
        <Title>
          Kompleksowa budowa domów<span></span>
        </Title>
        <Paragraph>
          At Finance we care about your future. We help you invest the way you
          want. So you can relax, have fun and let your fund grow.
        </Paragraph>
      </Content>
    </Wrapper>
  );
};

export default Hero;
