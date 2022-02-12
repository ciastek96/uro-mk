import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import graphQLClient from '../../api/graphQLClient'
import Image from "next/image";
import RoundButton from "../../components/RoundButton/RoundButton";
import Heading from "../../components/Heading/Heading";
import Content from "../../components/Content/Content";
import MasonryGrid from "../../components/MasonryGrid/MasonryGrid";
import Img1 from "../../public/gallery/1.jpg";
import AngleLeft from "../../components/icons/AngleLeft";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  background: ${({ theme }) => theme.color.grey};

  @media all and (min-width: ${({ theme }) => theme.size.sm}) {
    flex-direction: row;

    & > * {
      flex: 1 1 50%;
    }
  }
`;

const Inner = styled.div`
  display: grid;
  /* place-items: center; */
  padding: 1rem;
  position: relative;
  min-height: 350px;
  padding-block: clamp(10px, 10rem, 15vw);
  padding-inline: clamp(0.25rem, 5rem, 8vw);
`;

const Item = ({post: {title, content, photos, coverImage}}) => {
  const router = useRouter();
  return (
    <Wrapper>
      <Inner>
        <RoundButton
          onClick={() => {
            router.back();
          }}
        >
          <AngleLeft />
        </RoundButton>
        <Heading></Heading>
        <Content>
          {content}
        </Content>
        <MasonryGrid />
      </Inner>
      <Inner>
        <Image
          src={coverImage.url}
          alt={`${title} - zdjęcie`}
          layout="fill"
          objectFit="cover"
          quality="75"
          // placeholder="blur"
          priority
        />
      </Inner>
    </Wrapper>
  );
};


export const getStaticPaths = async () => {
  const query = `{
    posts {
      slug
    }
  }
  `;
  const {posts} = await graphQLClient.request(query);
  const paths = posts.map(post=>({params: {slug: [post.slug]}}))

  return {
    paths, fallback: false
  };
};

export const getStaticProps = async ({params}) => {
  const slug = params.slug[0];

  const query = `{
    post(where: {slug: "${slug}"}) {
      slug
      content
      id
      photos {
        url
      }
      title
      coverImage {
        url
      }
    }
  }
  `;
  const {post} = await graphQLClient.request(query);

  return {
    props: {
      post
    },
  };
};


export default Item;
