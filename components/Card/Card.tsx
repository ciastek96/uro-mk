import React, {ReactNode} from "react";
import Image from "next/image";
import Heading from "../Heading/Heading";
import Content from "../Content/Content";
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
  display: block;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: 0;

  &:nth-child(1) {
    //height: clamp(320px, 100vw, 560px);
    min-height: 320px;
    background: ${({ theme }) => theme.color.blue};
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

// const Content = styled.p`
//   font-family: ${({ theme }) => theme.fontFamily.Overpass};
//   color: ${({ theme }) => theme.color.dark80};
//   font-size: clamp(16px, 2vw, 18px);
//   line-height: 1.4;
// `;

interface ICardProps {
  id: string;
  image: string;
  title: string;
  children: ReactNode;
}

const Card: React.FC<ICardProps> = ({ id, image, title, children }) => (
    <Wrapper id={id}>
      <InnerWrapper>
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          quality="75"
          // `placeholder="blur"
        />
      </InnerWrapper>
      <InnerWrapper>
        <Heading>{title}</Heading>
        <Content>{children}</Content>
      </InnerWrapper>
    </Wrapper>
  )

export default Card;
