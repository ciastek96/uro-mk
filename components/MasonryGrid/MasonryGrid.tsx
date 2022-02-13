import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

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
  height: 100%;

  a::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.color.blue};
    opacity: 0;
    transition: opacity 0.2s linear;
    z-index: 1;
  }

  a:hover::before {
    opacity: 0.6;
  }
`;

interface IMasonryGrid {
  images: Image[];
}

type Image = {
  title: string;
  slug: string;
  coverImage: {
    url: string;
    width: number;
    height: number;
  };
};

const MasonryGrid: React.FC<IMasonryGrid> = ({ images }) => (
  <List>
    {images.map(({ slug, title, coverImage: { url, width, height } }) => (
      <ListItem key={slug}>
        <Link href={`/realizacje/${encodeURIComponent(slug)}`} passHref={true}>
          <a>
            <Image
              src={url}
              alt={title}
              quality="75"
              layout="responsive"
              height={height}
              width={width}
            />
          </a>
        </Link>
      </ListItem>
    ))}
  </List>
);

export default MasonryGrid;
