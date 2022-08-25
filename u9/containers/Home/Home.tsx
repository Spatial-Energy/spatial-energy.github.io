import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import * as Styled from "u9/containers/Home/Home.styles";

const Home: NextPage = () => {
  return (
    <>
      <Head>
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
