import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import usePortal from "../../hooks/usePortal";
import styled from "styled-components";
import { createPortal } from "react-dom";
import Label from "../Label/Label";
import LogoLargeSVG from "../../public/logotype_a.svg";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  flex-direction: row;
  padding: 1rem;

  & > * {
    flex-basis: 100%;
  }
`;

const InsideWrapper = styled.div`
  height: 100%;
  display: grid;
  place-items: center;
`;

const Nav = styled.nav`
  height: 65%;
`;

const List = styled.ul`
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
  font-size: 3rem;
  font-weight: 600;
  color: white;
  list-style: none;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const ListItem = styled.li`
  position: relative;
  cursor: pointer;

  & > a {
    color: rgba(255, 255, 255, 0.65);
    border-bottom: 8px solid rgba(255, 255, 255, 0);
    display: inline-block;
    line-height: 28px;
    transition: color 0.15s, border-color 0.15s ease-in-out;
  }

  & > a:hover {
    color: rgba(255, 255, 255, 1);
    border-color: #f3b00d;
  }
`;

const Paragraph = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 22px;
  font-weight: 400;
  color: white;
  letter-spacing: 1px;
`;

const Logotype = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const Navigation = ({ isOpen }) => {
  const modalContent = isOpen ? (
    <Wrapper>
      <InsideWrapper>
        <Nav>
          <List>
            <ListItem>
              <Link href="/">
                <a>O nas</a>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/">
                <a>Praca</a>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/">
                <a>Realizacje</a>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/">
                <a>Kontakt</a>
              </Link>
            </ListItem>
          </List>
        </Nav>
      </InsideWrapper>
      <InsideWrapper>
        <div>
          <Logotype>
            <Image
              src={LogoLargeSVG}
              alt="URO-MK logo"
              height={80}
              width={250}
            />
          </Logotype>
          <Label>Email</Label>
          <Paragraph>uro-mk@o2.pl</Paragraph>
          <Paragraph>arek.koacz@gmail.com</Paragraph>
          <Label>Telefon</Label>
          <Paragraph>+48 505 146 377</Paragraph>
          <Paragraph>+48 500 156 578</Paragraph>
          <Paragraph>
            Usługi remontowo-ociepleniowe URO-MK Marek Kołacz
          </Paragraph>
        </div>
      </InsideWrapper>
    </Wrapper>
  ) : null;

  return usePortal(modalContent);
};

export default Navigation;
