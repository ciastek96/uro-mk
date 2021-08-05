import React from "react";
import Image from "next/image";
import Heading from "../Heading/Heading";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 230px;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  position: relative;
  flex-wrap: wrap;

  @media all and (min-width: ${({ theme }) => theme.size.sm}) {
    flex-direction: ${({ id }) => (id % 2 ? "row-reverse" : "row")};
  }

  & > * {
    flex: 0 0 50%;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: 0;

  &:nth-child(1) {
    //height: clamp(320px, 100vw, 560px);
    min-height: 320px;
    background: blue;
  }

  &:nth-child(2) {
    padding-block: clamp(10px, 10rem, 15vw);
    padding-inline: clamp(0.25rem, 5rem, 8vw);
  }

  /* @media all and (min-width: ${({ theme }) => theme.size.xs}) {
    &:nth-child(2) {
      padding: 4rem;
    }
  } */
`;

const Content = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.Overpass};
  font-size: clamp(16px, 2vw, 18px);
`;

const Card = ({ id, image, imageAlt, title, children }) => {
  return (
    <Wrapper id={id}>
      <InnerWrapper>
        <p>qwheuwqheuwqhuieqw</p>
        <Image
          src={image}
          alt={imageAlt}
          layout="fill"
          objectFit="cover"
          quality="75"
        />
      </InnerWrapper>
      <InnerWrapper>
        <Heading>{title}</Heading>
        <Content>{children}</Content>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Card;
