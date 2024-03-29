import { useState } from "react";
import graphQLClient from "../api/graphQLClient";
import Head from "next/head";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import About from "../sections/About";
import Works from "../sections/Works";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Context from "../Context/Context";

export const getStaticProps = async () => {
  const query = `{
    hero(where: {id: "ckz0bnlygl2v50c484so2ymjp"}) {
      content
      header
      bg {
        url
      }
    }
    sections {
      title
      id
      content
      image {
        url
      }
    }
    posts(orderBy: date_DESC) {
      title
      slug
      coverImage {
        url
        width
        height
      }
      date
    }
  }
  `;
  const { hero, sections, posts } = await graphQLClient.request(query);

  console.log(posts);

  return {
    props: {
      hero,
      sections,
      posts,
    },
  };
};

interface IHomeProps {
  hero: any;
  sections: any;
  posts: any;
}

export default function Home({ hero, sections, posts }: IHomeProps) {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  return (
    <>
      <Head>
        <title>URO-MK - Usługi remontowo ociepleniowe MK Marek Kołacz</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Usługi remontowo ociepleniowe MK Marek Kołacz"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Context.Provider value={{ isNavOpen, setIsNavOpen }}>
        <Header />
        <Hero hero={hero} />
      </Context.Provider>

      <About sections={sections} />
      <Works posts={posts} />

      <Footer />
      <ScrollToTop />
      {/* <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <p className={styles.description}>
            Get started by editing{" "}
            <code className={styles.code}>pages/index.js</code>
          </p>

          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h2>Learn &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
              className={styles.card}
            >
              <h2>Examples &rarr;</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h2>Deploy &rarr;</h2>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main>

        <footer className={styles.footer}>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Powered by{" "}
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" layout="fill" />
            </span>
          </a>
        </footer> */}
    </>
  );
}
