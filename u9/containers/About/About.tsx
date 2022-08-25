import type { NextPage } from "next";

import Head from "u9/components/Head/Head";
import * as Styled from "u9/containers/About/About.styles";
import Menu from "u9/components/Menu/Menu";
import Footer from "../Footer/Footer";

const About: NextPage = () => {
  return (
    <>
      <Head title="About" />
      <Menu isDark/>
      <Styled.Wrapper>
        <Styled.Title>About</Styled.Title>
        <Styled.Separator />
        <Styled.TopContent>
          <div>We Research, Analyze & consult</div>
          <div>
            <div>Construction & Real ESTATE INDUSTRY</div>
            <div>
              Spatial Energy is a research, data science, and tech consultancy
              that specialises in building solutions for complex problems for
              the construction and real estate industry.
            </div>
          </div>
        </Styled.TopContent>
        <Styled.Partners>
          <div>Partners</div>
          <div>
            We are a Unit9 spin-out company and rely on 25 years of experience
            in digital with a world-wide network of collaborators. We have
            direct experience working with international organisations such as:
          </div>

          <div>
            <div>UCL</div>
            <div>Sheffield Uni</div>
            <div>Avison Young</div>
            <div>Bentley Systems</div>
            <div>IES</div>
            <div>Skanska</div>
          </div>
        </Styled.Partners>
      </Styled.Wrapper>
      <Footer isAbout />
    </>
  );
};

export default About;
