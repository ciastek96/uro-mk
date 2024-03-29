import React, { useContext } from "react";
import Image from "next/image";
import styled, {keyframes} from "styled-components";
import BackgroundImage from "../../public/background.webp";
import Context from "../../Context/Context";

type Props = {
  isNavOpen : boolean;
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background: darkgray;
  display: flex;
  align-items: center;
  position: relative;
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

const Title = styled.h1<Props>`
  font-size: 48px;
  font-size: clamp(24px, 5vw, 48px);
  font-family: ${({ theme }) => theme.fontFamily.MontSerrat};
  color: transparent;
  position: relative;
  display: inline-block;
  animation: ${({ isNavOpen }) =>
    isNavOpen ? "none" : "overlay 0.25s ease forwards"};
  animation-delay: 0.5s;
  opacity: ${({ isNavOpen }) => (isNavOpen ? 0 : 1)};
  transition: opacity 0.2s ease-in-out;

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
    transform: scaleX(0);
    transform-origin: left;
    animation: ${({ isNavOpen }) =>
      isNavOpen ? "none" : "reveal 1s ease forwards"};
    animation-delay: 0s;
  }

  @keyframes overlay {
    100% {
      color: ${({ theme }) => theme.color.grey};
    }
  }

  @keyframes reveal {
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

const Paragraph = styled.p<Props>`
  max-width: 420px;
  width: 80%;
  font-family: ${({ theme }) => theme.fontFamily.Overpass};
  font-size: clamp(16px, 2vw, 20px);
  color: transparent;
  transform: translateY(-30%);
  animation: ${({ isNavOpen }) =>
    isNavOpen ? "none" : "fadeInUp 1s ease forwards"};
  animation-delay: 0.5s;
  opacity: ${({ isNavOpen }) => (isNavOpen ? 0 : 1)};
  transition: opacity 2s ease-in-out;

  @keyframes fadeInUp {
    100% {
      color: ${({ theme }) => theme.color.darkGrey};
      transform: translateY(0);
    }
  }
`;

interface IHeroProps {
  hero: {
    content: string,
    header: string,
    bg: {
      url: string
    }
  }
}

const Hero:React.FC<IHeroProps> = ({hero}) => {
  const { isNavOpen } = useContext(Context);
  return (
    <Wrapper>
      <Image
        src={hero.bg.url}
        alt="URO-MK logo"
        layout="fill"
        objectFit="cover"
        quality="75"
        // placeholder="blur"
        priority
      />
      <Content>
        <Title isNavOpen={isNavOpen}>
        {hero.header}<span></span>
        </Title>
        <Paragraph isNavOpen={isNavOpen}>
        {hero.content}
        </Paragraph>
      </Content>
    </Wrapper>
  );
};

export default Hero;
