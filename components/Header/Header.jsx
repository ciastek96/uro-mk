import React, {useState} from "react";
import styled from "styled-components";
import Image from "next/image";
import Hamburger from "../Hamburger/Hamburger";
import Navigation from "../Navigation/Navigation";
import FBIcon from "../icons/FBIcon";
import YTIcon from "../icons/YTIcon";
import LogoSmallSVG from "../../public/logotype_c.svg";
import LogoLargeSVG from "../../public/logotype_a.svg";

const StyledHeader = styled.header`
  width: 100%;
  height: 100px;
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${({theme}) => theme.zIndex.header};
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1280px;
  height: 100%;
  margin: auto;
  padding: 0 1rem;
`;

const SocialContainer = styled.div`
  display: none;
  height: 100%;
  width: 80px;
  align-items: center;

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
  height: 100%;
  margin: 0 20px;

  @media all and (max-width: 540px) {
    margin-left: 0;
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
  const [isNavOpen, setIsNavOpen] = useState(true)
  return (
  <StyledHeader>
    <InnerWrapper>
      <SocialContainer>
        <a
          href="https://www.facebook.com/uromk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledFBIcon />
        </a>
        <a
          href="https://www.youtube.com/channel/UCqB9Mp9ZgEEeAUgq8rpz1fw/about"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledYTIcon />
        </a>
      </SocialContainer>
      <Logotype>
        <a href="#">
          <Image src={LogoSmallSVG} alt="URO-MK logo" height={60} width={60} />
          {/* <Image src={LogoLargeSVG} alt="URO-MK logo" height={80} width={250} /> */}
        </a>
      </Logotype>
      <Hamburger isToggle={isNavOpen} setIsToggle={setIsNavOpen}/>
      <Navigation isOpen={isNavOpen} />
    </InnerWrapper>
  </StyledHeader>
)}

export default Header;
