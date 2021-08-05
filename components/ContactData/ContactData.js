import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Label from "../Label/Label";
import LogoLargeSVG from "../../public/logotype_a.svg";

const Wrapper = styled.div`
  margin: 1rem auto 3rem;
`;

const Paragraph = styled.p`
  font-family: "Lato", sans-serif;
  font-size: clamp(
    ${({ theme }) => theme.fontSize.s},
    2vw,
    ${({ theme }) => theme.fontSize.m}
  );
  font-weight: 400;
  color: white;
  letter-spacing: 1px;
  text-align: ${({ align }) => align || "left"};
  line-height: 1.5;
`;

const LogotypeContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const ContactData = ({ simplified }) => {
  return (
    <Wrapper>
      <LogotypeContainer>
        <Image src={LogoLargeSVG} alt="URO-MK logo" height={80} width={250} />
      </LogotypeContainer>
      <Paragraph align="center">
        Usługi remontowo-ociepleniowe
        <br />
        URO-MK Marek Kołacz
      </Paragraph>
      <Label>Email</Label>
      <Paragraph>
        uro-mk@o2.pl
        <br />
        arek.koacz@gmail.com
      </Paragraph>
      <Label>Telefon</Label>
      <Paragraph>
        +48 505 146 377
        <br />
        +48 500 156 578
      </Paragraph>
      {!simplified && (
        <>
          <Label>Adres</Label>
          <Paragraph>
            ul. Jana Kochanowskiego 2 2/1
            <br />
            44-120 Pyskowice
          </Paragraph>
          <Label>NIP</Label>
          <Paragraph>969 041 31 43</Paragraph>
          <Label>Regon</Label>
          <Paragraph>276840269</Paragraph>
        </>
      )}
    </Wrapper>
  );
};

export default ContactData;
