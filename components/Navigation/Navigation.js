import React from "react";
import Link from "next/link";
import styled from "styled-components";
import usePortal from "../../hooks/usePortal";
import Contact from "../Contact/Contact";

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
  height: 100vh;
  width: 100%;
  backdrop-filter: blur(5px);
  background-color: ${({ theme }) => theme.color.dark50};
  z-index: ${({ theme }) => theme.zIndex.nav};
  display: flex;
  flex-direction: row;
  padding: 1rem;

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
  height: 65vh;
  width: 100%;
  margin: 0;
  padding-left: clamp(5px, 30%, 50%);
`;

const List = styled.ul`
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: ${({ theme }) => theme.fontFamily.Montserrat};
  font-size: clamp(2.5rem, 50%, 4rem);
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

  & > a:hover {
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

  & > a:hover::before {
    color: ${({ theme }) => theme.color.white65};
    border-color: ${({ theme }) => theme.color.yellow};
    transform: scaleX(100%);
  }

  & > a:active {
    color: ${({ theme }) => theme.color.white80};
  }

  & > a:active::before {
    color: ${({ theme }) => theme.color.white65};
    border-color: ${({ theme }) => theme.color.yellow};
    transform: scaleX(150%);
  }
`;

const Navigation = ({ isOpen }) => {
  const modalContent = isOpen ? (
    <Wrapper isOpen={isOpen}>
      <InnerWrapper>
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
      </InnerWrapper>
      <InnerWrapper>
        <Contact />
      </InnerWrapper>
    </Wrapper>
  ) : null;

  return usePortal(modalContent);
};

export default Navigation;
