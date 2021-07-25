import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Hamburger from "../Hamburger/Hamburger";
import FBIcon from "../icons/FBIcon";
import YTIcon from "../icons/YTIcon";
import LogoLargeSVG from "../../public/logotype_b.svg";
import LogoSmallSVG from "../../public/logotype_c.svg";

const StyledHeader = styled.header`
  width: 100%;
  height: 100px;
  background: #ccc;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;

  img {
    color: white;
  }
`;

const SocialContainer = styled.div`
  height: 100%;
  width: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Logotype = styled.div`
  height: 100%;
  margin: 0 20px;

  a {
    display: block;
    height: 100%;
    display: grid;
    place-items: center;
  }
`;

const StyledFBIcon = styled(FBIcon)`
  height: 24px;
  fill: white;
`;

const StyledYTIcon = styled(YTIcon)`
  height: 24px;
  fill: white;
`;

const Header = () => (
  <StyledHeader>
    <SocialContainer>
      <a
        href="https://www.facebook.com/uromk"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>
          <StyledFBIcon />
        </span>
      </a>
      <a href="" target="_blank" rel="noopener noreferrer">
        <span>
          <StyledYTIcon />
        </span>
      </a>
    </SocialContainer>
    <Logotype>
      <a href="#">
        <Image src={LogoSmallSVG} alt="URO-MK logo" height={80} width={250} />
        {/* <Image src={LogoLargeSVG} alt="URO-MK logo" height={80} width={250} /> */}
      </a>
    </Logotype>
    <Hamburger />
  </StyledHeader>
);

export default Header;
