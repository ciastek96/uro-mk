import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Button from "../../components/Button/Button";
import Heading from "../../components/Heading/Heading";
import Content from "../../components/Content/Content";

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
  place-items: center;
  padding: 1rem;

  padding-block: clamp(10px, 10rem, 15vw);
  padding-inline: clamp(0.25rem, 5rem, 8vw);
`;

const Item = () => (
  <Wrapper>
    <Inner>
      <Link href="/">
        <a>
          <Button>Powrót</Button>
        </a>
      </Link>
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
    </Inner>
    <Inner>
      <p>
        Dolor kasd sed diam justo nonumy no gubergren est tempor elitr.
        Sadipscing ipsum ea nonumy elitr. Justo clita elitr amet ipsum et sed et
        lorem. Ea vero lorem sanctus sanctus sea est ut. Rebum accusam ipsum sit
        sit est sed. Lorem rebum nonumy magna accusam dolor no et eirmod justo,
        amet lorem sit nonumy consetetur dolor sit justo duo no, justo vero
        clita eirmod lorem sed duo stet et. Vero justo invidunt aliquyam vero
        eirmod ea dolor, stet dolor et sed ipsum aliquyam. Sed accusam sit vero
        ut. Et takimata consetetur invidunt gubergren dolores. Et labore diam
        diam ut tempor accusam, stet et no vero sit labore sea lorem vero, et
        takimata duo lorem dolores sed aliquyam et sit invidunt. Erat gubergren
        dolore stet rebum aliquyam sit et dolores. Lorem et rebum amet nonumy
        eos dolor sea erat dolor. Lorem elitr no sit lorem diam consetetur.
        Tempor justo et magna sit dolore dolore accusam, takimata et dolor magna
        aliquyam est rebum justo, et rebum dolores lorem et tempor lorem clita
        accusam diam, ea lorem sanctus consetetur vero. Consetetur amet sed
        tempor accusam erat. Nonumy clita kasd lorem rebum sed vero est.
        Gubergren sed sed eirmod ipsum. Kasd est ipsum kasd rebum rebum aliquyam
        ea, stet accusam sit lorem takimata et voluptua et. Est erat sea
        takimata sit sed est vero duo. Aliquyam duo accusam duo accusam takimata
        at est, stet et sadipscing eirmod accusam sit gubergren diam sit, diam
        no duo dolor invidunt elitr sed et sed, magna et dolore stet et ea et
        accusam diam no. Dolore et voluptua et voluptua dolor lorem aliquyam,
        gubergren lorem tempor sit amet sit ut, sit dolor rebum duo et ea
        sanctus voluptua nonumy sed. Sed lorem aliquyam lorem magna, lorem
        accusam sit est amet accusam, takimata clita dolor eirmod rebum lorem,
        sanctus aliquyam labore sit labore takimata sadipscing sadipscing
        sanctus. Ipsum nonumy amet dolor duo voluptua. Et voluptua et diam ut
        justo labore et magna. Dolore sanctus magna et dolor consetetur amet, et
        gubergren labore sit et aliquyam dolor. Et amet duo accusam sed, et stet
        sanctus eirmod diam invidunt dolor consetetur. Labore ea elitr accusam
        dolores tempor lorem eirmod. Lorem est sanctus gubergren rebum, dolor
        sanctus dolor dolor sea ipsum at et, at ipsum vero et erat amet justo
        elitr est diam, consetetur tempor lorem labore et magna takimata. Ea ut
        lorem kasd clita et vero amet lorem, duo lorem tempor takimata sed amet.
        Et eirmod eos elitr diam no takimata rebum. Et gubergren lorem amet
        accusam vero. Amet amet eos labore consetetur, takimata et diam sed et
        et sadipscing ea. Stet sit magna kasd dolor invidunt, voluptua sit justo
        dolor elitr dolor sit vero dolore accusam. Takimata sit vero rebum
        dolor, no accusam clita consetetur tempor dolor elitr. At sed amet et
        est ea sed gubergren dolor, ut sit sit justo tempor voluptua. At duo
        dolores eirmod justo, erat sed accusam nonumy dolor clita. Takimata
        tempor eos at sed. Est est ea justo et est sanctus sanctus no, accusam
        diam.
      </p>
    </Inner>
  </Wrapper>
);

export default Item;
