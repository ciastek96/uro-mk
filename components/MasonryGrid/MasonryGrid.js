import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import Img1 from "../../public/gallery/1.jpg";
import Img2 from "../../public/gallery/2.jpg";
import Img3 from "../../public/gallery/3.jpg";
import Img4 from "../../public/gallery/4.jpg";
import Img5 from "../../public/gallery/5.jpg";
import Img6 from "../../public/gallery/6.jpg";
import Img7 from "../../public/gallery/7.jpg";
import Img8 from "../../public/gallery/8.jpg";

const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8];

// body ul li a img

const List = styled.ul`
  margin: 0;
  padding: 0;
  column-count: 2;
  list-style: none;
  column-gap: 0.5rem;

  @media all and (min-width: 540px) {
    column-count: 3;
  }
`;

const ListItem = styled.li`
  break-inside: avoid;
  margin-bottom: 0.5rem;
  position: relative;
  cursor: pointer;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.color.blue};
    opacity: 0;
    transition: opacity 0.2s linear;
  }

  &:hover::after {
    opacity: 0.7;
  }
`;

const MasonryGrid = () => (
  <List>
    {images.map((image) => (
      <ListItem key={image.blurDataURL}>
        <Link href="/realizacje">
          <a>
            <Image
              src={image}
              alt={image.src}
              layout="responsive"
              quality="75"
              placeholder="blur"
            />
          </a>
        </Link>
      </ListItem>
    ))}
  </List>
);

export default MasonryGrid;
