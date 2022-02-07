import React, {useState, useContext} from "react";
import styled, {keyframes} from "styled-components";
import Image from "next/image";
import Hamburger from "../Hamburger/Hamburger";
import Navigation from "../Navigation/Navigation";
import FBIcon from "../icons/FBIcon";
import YTIcon from "../icons/YTIcon";
import LogoSmallSVG from "../../public/logotype_c.svg";
import LogoLargeSVG from "../../public/logotype_a.svg";
import Context from '../../Context/Context'

const fadeInUp = keyframes`
0% {
      opacity: 0;
      transform: translateY(-30%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
`

const StyledHeader = styled.header`
  width: 100%;
  height: 100px;
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${({theme}) => theme.zIndex.header};
  animation: ${fadeInUp} 1s ease forwards;
`;



const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  height: 100%;
  margin: auto;
  padding: 0 1rem;
`;


const SocialContainer = styled.div<{isNavOpen: boolean}>`
  display: none;
  height: 100%;
  width: 80px;
  align-items: center;
  opacity: ${({isNavOpen}) => isNavOpen ? 0:1};
  transition: opacity 0.15s linear;

  a {
    display: grid;
    place-items: center;
    padding: 6px 8px;
  }

  @media all and (min-width: 540px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Logotype = styled.div`
  display: block;
  height: 100%;
  //margin: 0 20px;

  @media all and (min-width: 540px) {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  a {
    display: block;
    height: 100%;
    display: grid;
    place-items: center;
  }
`;

const StyledFBIcon = styled(FBIcon)`
  height: 18px;
  fill: ${({theme}) => theme.color.white80};

  ${SocialContainer} a:hover & {
    fill: ${({theme}) => theme.color.white};
  }
`;

const StyledYTIcon = styled(YTIcon)`
  height: 18px;
  fill: ${({theme}) => theme.color.white80};

  ${SocialContainer} a:hover & {
    fill: ${({theme}) => theme.color.white};
  }
`;

const Header = () => {
  const {isNavOpen} = useContext(Context);
  console.log( useContext(Context))
  return (
  <StyledHeader>
    <InnerWrapper>
      <SocialContainer isNavOpen={isNavOpen}>
        <a
          href="https://www.facebook.com/uromk"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <StyledFBIcon />
        </a>
        <a
          href="https://www.youtube.com/channel/UCqB9Mp9ZgEEeAUgq8rpz1fw/about"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Youtube"
        >
          <StyledYTIcon />
        </a>
      </SocialContainer>
      <Logotype>
        <a href="#" aria-label="URO-MK">
          <Image src={LogoSmallSVG} alt="URO-MK logo" height={60} width={60} />
          {/* <Image src={LogoLargeSVG} alt="URO-MK logo" height={80} width={250} /> */}
        </a>
      </Logotype>
      <Hamburger />
      <Navigation />
    </InnerWrapper>
  </StyledHeader>
)}

export default Header;
// #inner {
//   /* fill: rgba(255, 255, 255,0);
//   */
//   stroke: white;
//   stroke-width: 1px;
//   fill: transparent;
//   stroke-dasharray: 1000;
//   stroke-dashoffset: 1000;
//   animation: dash2 3s linear forwards;

// }

// #outer {
//   stroke: white;
//   stroke-width: 1px;
//   fill: transparent;
//   stroke-dasharray: 1000;
//   stroke-dashoffset: 1000;
//   animation: dash1 3s linear forwards;
// }


// @keyframes dash1 {
//   0% {
//     fill: transparent;
//     opacity: 0;
//   }
//   50% {
//     fill: transparent;

//     transform: scale(1);
//   }

//   100% {
//     stroke-dashoffset: 0;
//     stroke-width:1px;
//     stroke: transparent;
//     fill: #F3B00D;
//   }
// }

// @keyframes dash2 {
//   0% {
//     fill: transparent;
//     opacity: 0;
//   }
//   50% {
//     fill: transparent;

//     transform: scale(1);
//   }

//   100% {
//     stroke-dashoffset: 0;
//     stroke-width: 1px;
//     stroke: transparent;
//     fill: #fff;
//   }
// }
