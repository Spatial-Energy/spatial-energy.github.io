import type { NextPage } from "next";

import Head from "u9/components/Head/Head";
import * as Styled from "u9/containers/About/About.styles";
import Menu from "u9/components/Menu/Menu";
import Footer from "../Footer/Footer";
import { BaseContext, BaseContextType } from "u9/contexts/base";
import { useContext, useEffect } from "react";
import OurPartners from "u9/components/OurPartners/OurPartners";
import Image from "next/image";
import { colors } from "u9/utils/styles/theme";
import { Wrapper, WrapperInner } from "u9/components/Layout/Layout";

const About: NextPage = () => {
  const { setMenuDark }: BaseContextType = useContext(BaseContext);

  const data = [
    {
      title: "Energy Open Piazza",
      description: `An Energy Modelling tool that enables rapid assessment of solar energy generation and storage.`,
      image: "./images/case-study-energy-open-piazza.png",
      color: colors.mystic,
    },
    {
      title: "Change Management",
      description:
        "Ci-iT is a knowledge management tool for construction that helps project teams efficiently respond to changes in building programmes.",
      image: "./images/case-study-change-management.png",
      color: colors.moonMist,
    },
    {
      title: "iTwin",
      description: "Digital twin XR App on Hololens-2 headset",
      image: "./images/case-study-itwin.jpg",
      color: colors.snuff,
    },
  ];

  useEffect(() => {
    setMenuDark(true);
  }, []);

  return (
    <>
      <Head title="About" />
      {/* <Menu isDark /> */}
      <Wrapper>
        <WrapperInner>
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
        </WrapperInner>
        <WrapperInner spaceSize={20}>
        <Styled.CaseStudies>
          <Styled.Title>Case Studies</Styled.Title>
          <Styled.Acc>
            {data.map((item, index) => (
              <Styled.Case key={index} color={item.color}>
                <div>
                  <div>{item.title}</div>
                  <div>{item.description}</div>
                </div>
                <div>
                  <div>
                    <Image
                      src={item.image}
                      layout="fill"
                      objectFit="cover"
                      alt=""
                    />
                  </div>
                </div>
              </Styled.Case>
            ))}
          </Styled.Acc>
        </Styled.CaseStudies>
        </WrapperInner>
        <WrapperInner>
        <Styled.Partners>
          <div>Partners</div>
          <div>
            We are a Unit9 spin-out company and rely on 25 years of experience
            in digital with a world-wide network of collaborators. We have
            direct experience working with international organisations such as:
          </div>

          <OurPartners />
        </Styled.Partners>
        </WrapperInner>
      </Wrapper>
       
      <Footer isAbout />
    </>
  );
};

export default About;
