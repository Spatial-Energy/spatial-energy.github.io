import type { NextPage } from "next";

import Head from "u9/components/Head/Head";
import * as Styled from "u9/containers/About/About.styles";
import Footer from "../Footer/Footer";
import { BaseContext, BaseContextType } from "u9/contexts/base";
import { useContext, useEffect, useRef, useState } from "react";
import OurPartners from "u9/components/OurPartners/OurPartners";
import Image from "next/image";
import { colors } from "u9/utils/styles/theme";
import { Wrapper, WrapperInner } from "u9/components/Layout/Layout";
import useWindowSize from "u9/utils/hooks/useWindowSize";
import useIsomorphicLayoutEffect from "u9/utils/hooks/useIsomorphicLayoutEffect";
import { gsap } from "gsap/dist/gsap";

const About: NextPage = () => {
  const { setMenuDark }: BaseContextType = useContext(BaseContext);
  useEffect(() => {
    setMenuDark(true);
  }, []);

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
  const [accSelectedIndex, setAccSelectedIndex] = useState(0);
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
                <Case
                  isLast={index === data.length - 1}
                  key={index}
                  item={item}
                  onClick={() => {
                    setAccSelectedIndex(index);
                  }}
                  isSelected={accSelectedIndex === index}
                />
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
              direct experience working with international organisations such
              as:
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

const Case = ({ ...restProps }) => {
  const windowSize = useWindowSize();
  const itemRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const imageRef = useRef(null);
  useIsomorphicLayoutEffect(() => {
    if (itemRef.current) {
      gsap.to(itemRef?.current, {
        // @ts-ignore
        height: restProps?.isSelected
          ? // @ts-ignore
            itemRef.current.scrollHeight
          : // @ts-ignore
            titleRef.current.scrollHeight,
        marginTop: 40,
        marginBottom: restProps?.isSelected ? 70 : restProps?.isLast ? 40 : 70,
      });
      gsap.to(descRef?.current, {
        autoAlpha: restProps?.isSelected ? 1 : 0,
      });
      gsap.to(imageRef?.current, {
        autoAlpha: restProps?.isSelected ? 1 : 0,
      });
    }
  }, [windowSize.width, restProps?.isSelected]);
  return (
    <Styled.Case
      color={restProps?.item?.color}
      onClick={() => {
        restProps?.onClick();
      }}
      isSelected={restProps?.isSelected}
    >
      <div ref={itemRef}>
        <div>
          <div ref={titleRef}>{restProps?.item?.title}</div>
          <div ref={descRef}>{restProps?.item?.description}</div>
        </div>
        <div ref={imageRef}>
          <div>
            <Image
              src={restProps?.item?.image}
              layout="fill"
              objectFit="cover"
              alt=""
            />
          </div>
        </div>
      </div>
    </Styled.Case>
  );
};
