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
      title: "Dept. for Work and Pensions",
      description: "Automation of analysis for 700 buildings, quickly identifying which presented the biggest potential of savings. We helped DWP avoid long and expensive trips to all locations and allowed them to make informed decisions, pinpointing the biggest inefficiencies and prioritising investments. We have achieved this in a matter of a few days correlating weather data with consumption to find big spenders and take action, selecting the less performant buildings where energy transformation investments would make the biggest difference/impact.",
      image: "./images/case-study-dwp.jpg",
      color: colors.mystic,
    },
    {
      title: "Natwest",
      description: "Analysis of potential energy arbitrage when using energy storage in conjunction with data-centres backup systems for uninterrupted power supply. We have generated scenarios that helped Natwast understand the value of introducing energy storage as back-up systems for their data centres, allowing them to make an informed choice if to switch from diesel back-up generation to greener solutions. We showed the potential for cost reduction and greener grid imports with the adoption of dynamic tariffs and revenue staking, so that solar PV supported by storage would not only be environmentally friendly but also generate additional streams of revenues through flexibility services.",
      image: "./images/case-study-natwest.jpg",
      color: colors.moonMist,
    },
    {
      title: "Skanska",
      description: "Simulation of consumption for large residential building blocks in support of correct dimensioning of EV charging infrastructure and energy storage devices. We have supported Skanska at design and planning stages assessing the value of correctly dimensioned EV charging infrastructure and helped them understand potential benefits when operated in conjunction with energy storage, particularly where demand charges are high, limited interconnection are in place, and where EV charging can be an additional source of revenues.",
      image: "./images/case-study-skanska.jpg",
      color: colors.snuff,
    },
    {
      title: "Avison Young",
      description: "Analysis of tariffs and energy consumption with weather correlation to identify potential for costs reduction and installation of solar PV. We have provided ground-truth knowledge that eventually led to investments for 6 schools in Kent, with the goal of demonstrating the validity of the business model that can then scale up at national level. Our models have generated simulations of solar PV generation and energy storage, demonstrating 5 years payback time and IRR 25% over the asset lifecycle achieved by average 400kwp solar PV generation paired with average 300kw / 2h static storage solutions.",
      image: "./images/case-study-avison-young.jpg",
      color: colors.cararra,
    },
    {
      title: "Cambridge Ivanhoe",
      description: "Analysis of consumption for shopping centres and definition of a business plan for deployment of solar PV and EV charging infrastructure integrated with the existing network of sensors. We have studied the client’s data producing a report that demonstrates how energy storage can support the system at peak times, containing demand charges and potentially generating revenues through grid services. The reports gives a detailed breakdown of scenarios where optimal breakeven between increasing demand charges and cost of infrastructure is found.",
      image: "./images/case-study-cambridge-ivanhoe.jpg",
      color: colors.mystic,
    },
  ];
  const backupData = [
    {
      title: "Change Management",
      description:
        "Ci-iT is a knowledge management tool for construction that helps project teams efficiently respond to changes in building programmes. Ci-iT is a knowledge management tool for construction that helps project teams efficiently respond to changes in building programmes. Ci-iT is a knowledge management tool for construction that helps project teams efficiently respond to changes in building programmes.",
      image: "./images/case-study-change-management.png",
      color: colors.moonMist,
    },
    {
      title: "iTwin",
      description: "Digital twin XR App on Hololens-2 headset",
      image: "./images/case-study-itwin.png",
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
              <div>supporting the construction and real estate industry</div>
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
          </Styled.Partners>
        </WrapperInner>
        <OurPartners />
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
        marginBottom: restProps?.isSelected
          ? restProps?.isLast
            ? 40
            : 70
          : 40,
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
            {/* prettier-ignore */}
            <Image src={restProps?.item?.image} layout="fill" objectFit="cover" alt="" />
          </div>
        </div>
      </div>
    </Styled.Case>
  );
};
