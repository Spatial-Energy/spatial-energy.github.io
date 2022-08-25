import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import * as Styled from "u9/containers/Home/Home.styles";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Exo:wght@300&family=Open+Sans:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <Styled.Video autoPlay muted loop src={"./bg.mp4"} />
        <Styled.WrapperLogo>
          <Styled.Logo>
            <Image
              src={"./images/logo.svg"}
              layout="fill"
              objectFit="cover"
              alt="Spatial logo"
            />
          </Styled.Logo>
        </Styled.WrapperLogo>
        <Styled.Wrapper>
          <Styled.Label>
            The Innovation Lab for the Real-Estate Industry
          </Styled.Label>
        </Styled.Wrapper>
      </main>
    </>
  );
};

export default Home;
