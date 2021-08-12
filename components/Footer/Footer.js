import React from "react";
import Image from "next/image";
import styled from "styled-components";
import FooterImage from "../../public/footer.jpg";
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

const Footer = () => (
  <Wrapper>
    <StyledImage
      src={FooterImage}
      alt="Footer background photo"
      layout="fill"
      objectFit="cover"
      quality="75"
    />

    <InnerWrapper>
      <ContactData padding="1rem clamp(2rem, 50%, 4vw) 2rem" />
      <ContactForm />
    </InnerWrapper>
  </Wrapper>
);

export default Footer;
