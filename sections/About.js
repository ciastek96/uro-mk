import React from "react";
import styled from "styled-components";
import Img1 from "../public/Frame_1.jpg";
import Img2 from "../public/Frame_2.jpg";
import Img3 from "../public/Frame_3.jpg";
import Img4 from "../public/Frame_4.jpg";
import Card from "../components/Card/Card";

const Wrapper = styled.section`
  max-width: 1440px;
  margin: 2rem auto;
  position: relative;
  // padding: 1rem;
`;

const data = [
  {
    id: 0,
    image: Img2,
    title: "O nas",
    content: `Firma powstała w roku 2000 i od tego czasu działa na rynku budowlanym. Od
  początku swojej działalności kładziemy duży nacisk na dbałość wykonywanych
  przez nas inwestycji. Wszelkie zlecone do wykonania prace wykonujemy z
  dobrych jakościowo i certyfikowanych materiałów. Staramy się aby sposób
  wykonania był na wysokim poziomie oraz spełniał wymogi technologii
  wykonania. Przestrzegając powyższych kryterii gwarantujemy wysoką jakość
  naszych usług na które udzielamy gwarancji.`,
  },
  {
    id: 1,
    image: Img4,
    title: "Kompleksowa budowa",
    content: `Poszukujemy osoby chętne do pracy, mile widziane osoby wykwalifikowane w
    budownictwie, wynagrodzenie adekwatne do zaangażowania i umiejętności,
    praca w ambitnym zespole. Gwarantujemy pełne wyposażenie w ubrania
    robocze, sprzęt oraz wszystko inne niezbędne do pracy, dla chętnych
    możliwość nadgodzin.`,
  },
  {
    id: 2,
    image: Img3,
    title: "Ocieplenia",
    content: `Firma powstała w roku 2000 i od tego czasu działa na rynku budowlanym. Od
  początku swojej działalności kładziemy duży nacisk na dbałość wykonywanych
  przez nas inwestycji. Wszelkie zlecone do wykonania prace wykonujemy z
  dobrych jakościowo i certyfikowanych materiałów. Staramy się aby sposób
  wykonania był na wysokim poziomie oraz spełniał wymogi technologii
  wykonania. Przestrzegając powyższych kryterii gwarantujemy wysoką jakość
  naszych usług na które udzielamy gwarancji.`,
  },
  {
    id: 3,
    image: Img1,
    title: "Praca",
    content: `Poszukujemy osoby chętne do pracy, mile widziane osoby wykwalifikowane w
    budownictwie, wynagrodzenie adekwatne do zaangażowania i umiejętności,
    praca w ambitnym zespole. Gwarantujemy pełne wyposażenie w ubrania
    robocze, sprzęt oraz wszystko inne niezbędne do pracy, dla chętnych
    możliwość nadgodzin.`,
  },
];

const About = () => (
  <Wrapper id="onas">
    {data.map(({ id, image, title, content }) => (
      <Card key={id} id={id} image={image} title={title}>
        {content}
      </Card>
    ))}
  </Wrapper>
);

export default About;
