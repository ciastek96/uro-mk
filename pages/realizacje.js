import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Image from "next/image";
import RoundButton from "../components/RoundButton/RoundButton";
import Heading from "../components/Heading/Heading";
import Content from "../components/Content/Content";
import MasonryGrid from "../components/MasonryGrid/MasonryGrid";
import Img1 from "../public/gallery/1.jpg";
import AngleLeft from "../components/icons/AngleLeft";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  background: ${({ theme }) => theme.color.grey};

  @media all and (min-width: ${({ theme }) => theme.size.sm}) {
    flex-direction: row;

    & > * {
      flex: 1 1 50%;
    }
  }
`;

const Inner = styled.div`
  display: grid;
  /* place-items: center; */
  padding: 1rem;
  position: relative;
  min-height: 350px;
  padding-block: clamp(10px, 10rem, 15vw);
  padding-inline: clamp(0.25rem, 5rem, 8vw);
`;

const Item = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <Inner>
        <RoundButton
          onClick={() => {
            router.back();
          }}
        >
          <AngleLeft />
        </RoundButton>
        <Heading>Dom w Jabłonkach IV</Heading>
        <Content>
          Przedstawiamy relację z budowy domu jednorodzinnego wraz z
          pomieszczeniem gospodarczym, zlokalizowanej w Pyskowicach.
          <ul>
            W zakresie naszych prac były:
            <li>ściany fundamentowe wraz z hydroizolacją,</li>
            <li>wymurowanie ścian nośnych i działowcych,</li>
            <li>strop żelbetowe i elementy konstrukcyjne budynku,</li>
            <li>komin systemowy,</li>
          </ul>
        </Content>
        <MasonryGrid />
      </Inner>
      <Inner>
        <Image
          src={Img1}
          alt="Img1"
          layout="fill"
          objectFit="cover"
          quality="75"
          placeholder="blur"
          priority
        />
      </Inner>
    </Wrapper>
  );
};

export default Item;
