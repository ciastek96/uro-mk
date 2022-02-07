import React from "react";
import Image from "next/image";
import styled from "styled-components";
import FooterImage from "../../public/footer.jpg";
import Logotype from "../../public/logotype_c.svg";
import ContactData from "../ContactData/ContactData";
import ContactForm from "../ContactForm/ContactForm";

const Wrapper = styled.div`
  width: 100%;
  padding: 3rem 0;
  position: relative;
  background-color: ${({ theme }) => theme.color.blue};
`;

const InnerWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  position: relative;

  & > * {
    flex: 1 1 50%;
  }
`;

const StyledImage = styled(Image)`
  opacity: 0.2;
`;

const FooterWrapper = styled.div`
  width: 100%;
  margin: 6rem auto 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogotypeWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1440px;
  display: grid;
  align-self: center;
`;

const Divider = styled.div`
  &::after,
  &::before {
    content: "";
    width: calc(50% - 45px);
    height: 1px;
    background-color: rgba(255, 255, 255, 0.1);
    position: absolute;
    top: 60%;
    // transform: translateY(-60%);
  }

  &::after {
    left: 0;
  }

  &::before {
    right: 0;
  }
`;

const Paragraph = styled.p`
  margin: 1rem;
  color: ${({ theme }) => theme.color.grey};
  font-family: ${({ theme }) => theme.fontFamily.Lato};
  font-size: 16px;
  font-weight: 300;
  text-align: center;
`;

const StyledLogotype = styled(Image)`
  background: 0;
`;

const Footer = () => (
  <Wrapper>
    <StyledImage
      src={FooterImage}
      alt="Footer background photo"
      layout="fill"
      objectFit="cover"
      quality="75"
      placeholder="blur"
    />

    <InnerWrapper>
      <ContactData padding="1rem clamp(2rem, 50%, 4vw) 2rem" />
      <ContactForm />
    </InnerWrapper>
    <FooterWrapper>
      <LogotypeWrapper>
        <Divider />
        <StyledLogotype
          src={Logotype}
          alt="URO-MK logo"
          height={80}
          width={250}
        />
      </LogotypeWrapper>
      <Paragraph>© 2021 URO-MK. Wszelkie prawa zastrzeżone.</Paragraph>
    </FooterWrapper>
  </Wrapper>
);

export default Footer;
