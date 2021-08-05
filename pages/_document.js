import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="pl">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Overpass&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
          <Main />
          <div id="navigation" />
          <div id="modal" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
