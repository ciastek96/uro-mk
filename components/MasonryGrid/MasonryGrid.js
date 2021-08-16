import React from "react";
import styled from "styled-components";
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
`;

const MasonryGrid = () => (
  <List>
    {images.map((image) => (
      <ListItem key={image.blurDataURL}>
        <Image
          src={image}
          alt={image.src}
          layout="responsive"
          quality="75"
          placeholder="blur"
        />
      </ListItem>
    ))}
  </List>
);

export default MasonryGrid;
