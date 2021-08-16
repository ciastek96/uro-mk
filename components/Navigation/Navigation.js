import React from "react";
import Link from "next/link";
import styled from "styled-components";
import usePortal from "../../hooks/usePortal";
import ContactData from "../ContactData/ContactData";

const InnerWrapper = styled.div`
  height: 100%;
  display: grid;
  place-items: center;
`;

const Wrapper = styled.div`
  @keyframes inAnimation {
    0% {
      opacity: 0;
      visibility: hidden;
    }
    100% {
      opacity: 1;
      visibility: visible;
    }
  }

  @keyframes outAnimation {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      visibility: hidden;
    }
  }

  animation: inAnimation 0.2s;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  backdrop-filter: blur(5px);
  background-color: ${({ theme }) => theme.color.dark50};
  z-index: ${({ theme }) => theme.zIndex.nav};
  display: flex;
  flex-direction: row;

  & > * {
    flex: 100%;
  }

  & > ${InnerWrapper}:last-child {
    display: none;
  }

  @media all and (min-width: ${({ theme }) => theme.size.sm}) {
    & > ${InnerWrapper}:last-child {
      display: flex;
    }
  }
`;

const Nav = styled.nav`
  height: 60%;
  max-width: ${({ theme }) => theme.size.sm};
  margin: 0;
  padding-left: min(5vw, 15rem);
`;

const List = styled.ul`
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: ${({ theme }) => theme.fontFamily.Montserrat};
  font-size: clamp(32px, 2.7vw, 3rem);
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
    color: ${({ theme }) => theme.color.white65};
    transition: color 0.15s ease-in-out;
  }

  & > a:hover,
  & > a:focus {
    color: ${({ theme }) => theme.color.white};
  }

  & > a::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 5px;
    width: 30%;
    background-color: ${({ theme }) => theme.color.yellow};
    color: ${({ theme }) => theme.color.white65};
    transition: transform 0.15s ease-in-out;
    transform: scaleX(0);
    transform-origin: 0% 50%;
  }

  & > a:hover::before,
  & > a:focus::before {
    color: ${({ theme }) => theme.color.white65};
    border-color: ${({ theme }) => theme.color.yellow};
    transform: scaleX(100%);
  }

  & > a:active {
    color: ${({ theme }) => theme.color.white80};
  }
`;

const Line = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: calc(100% - 120px);
  overflow: hidden;
  z-index: calc(${({ theme }) => theme.zIndex.nav} + 1);
  background-color: rgba(255, 255, 255, 0.1);
`;

const NavLink = ({ href, children }) => (
  <ListItem>
    <Link href={href}>
      <a>{children}</a>
    </Link>
  </ListItem>
);

const Navigation = ({ isOpen }) => {
  const modalContent = isOpen ? (
    <>
      <Wrapper isOpen={isOpen}>
        <InnerWrapper>
          <Nav>
            <List>
              <NavLink href="#onas">O nas</NavLink>
              <NavLink href="#praca">Praca</NavLink>
              <NavLink href="#realizacje">Realizacje</NavLink>
              <NavLink href="#kontakt">Kontakt</NavLink>
            </List>
          </Nav>
        </InnerWrapper>
        <InnerWrapper>
          <ContactData simplified="true" margin="1rem auto 3rem" />
          <Line />
        </InnerWrapper>
      </Wrapper>
    </>
  ) : null;

  return usePortal(modalContent);
};

export default Navigation;
