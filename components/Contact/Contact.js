import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Label from "../Label/Label";
import LogoLargeSVG from "../../public/logotype_a.svg";

const Paragraph = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 22px;
  font-weight: 400;
  color: white;
  letter-spacing: 1px;
`;

const LogotypeContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const Contact = () => {
  return (
    <div>
      <LogotypeContainer>
        <Image src={LogoLargeSVG} alt="URO-MK logo" height={80} width={250} />
      </LogotypeContainer>
      <Label>Email</Label>
      <Paragraph>uro-mk@o2.pl</Paragraph>
      <Paragraph>arek.koacz@gmail.com</Paragraph>
      <Label>Telefon</Label>
      <Paragraph>+48 505 146 377</Paragraph>
      <Paragraph>+48 500 156 578</Paragraph>
      <Paragraph>Usługi remontowo-ociepleniowe URO-MK Marek Kołacz</Paragraph>
    </div>
  );
};

export default Contact;
