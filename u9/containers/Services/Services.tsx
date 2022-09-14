import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";
import Head from "u9/components/Head/Head";
import { Wrapper, WrapperInner } from "u9/components/Layout/Layout";
import { BaseContext, BaseContextType } from "u9/contexts/base";
import Footer from "../Footer/Footer";
import * as Styled from "./Services.styles";
import { gsap } from "gsap/dist/gsap";
import useWindowSize from "u9/utils/hooks/useWindowSize";
import useIsomorphicLayoutEffect from "u9/utils/hooks/useIsomorphicLayoutEffect";

const Services = () => {
  const { setMenuDark }: BaseContextType = useContext(BaseContext);
  useEffect(() => {
    setMenuDark(true);
  }, []);

  const data = {
    acc: [
      {
        title: "Desktop Appraisals",
        description:
          "We are capable of delivering accurate appraisals for real estate asset portfolios faster and at a lower cost than traditional solutions. Investors with real estate portfolios have used our solution Energy Open Piazza (EOP) to quickly create scenarios and assess benefits of energy transformation projects. Using vetted localised data sources (such as pricing and carbon intensity of the grid) applied to available building details (such as bills, consumption datasets and construction type), we generate results in a fast, accurate, regulatory-compliant valuation, producing a detailed business case ready for investment.",
        image: "./images/services-desktop-appraisal.png",
      },
      {
        title: "Digital Twins",
        description: 
          "We deliver bespoke Digital Twins solutions capable of representing the underlying physical energy assets in a defined real context. Our Digital Twins help companies improve planning and specifications, operational efficiency and use of energy. They also offer a way to stress-test important assets and systems in preparation for a wide range of scenarios, including severe weather episodes and or spike in energy pricing.",
        image: "./images/services-digital-twin.png",
      },
      {
        title: "Internet of Things (IoT)",
        description:
          "We integrate vertical solutions provided by technical partners into a holistic single platform capable of monitoring and reporting on optimisations for HVAC systems and heat pumps, smart lighting, solar PV generation and efficient use of energy with static energy storage. The effectiveness of IoT solutions lies in the creation of ecosystems capable of collecting, analysing, and processing data from a variety of different devices. Our solution breaks the usual structure of vertical silos and finds efficiencies inherent to interoperability.",
        image: "./images/services-iot.png",
      },
      {
        title: "Metaverse",
        description:
          "We leverage the latest technologies to integrate digital twin simulations and datasets from sensors into 3D representations that help visualise complex and possibly remote systems in an accessible way. Metaverse solutions really help bringing people together for real-time collaboration, getting acquainted with environments that are in remote locations, building the knowledge needed to understand and execute changes and optimisations of processes that are hard to understand when experienced first person.",
        image: "./images/services-metaverse.png",
      },
      {
        title: "Virtual, Mixed & Augmented Reality",
        description:
          "We are experts at creating immersive reality solutions that give a stronger sense of the dimensions, space and potential of the built assets than a traditional brochure or website or website. Use cases are multiple: remote immersive visualisation of residential and commercial properties; applications in the construction sector, where workers can access plans on-site using AR glasses, helping them get ahead of potential planning problems and reduce building waste; VR to test and visualise architectural plans and collaborate with multiple stakeholders in virtual environments, where users can tailor design features as the project develops.",
        image: "./images/services-vr-mr-ar.png",
      },
      {
        title: "Mobile Apps & Web Tools",
        description:
          "Mobile and Web applications are still the bricks and mortar in digital infrastructure and we have years of experience delivering usable tools that maximise the business goals of an organisation. Whether it's a matter of optimising a customer funnel by bringing in the technologies needed to provide a smooth experience, or defining a breakthrough product through a design sprint that pinpoints the company strategy in a technological output, we can support the process from ideation through to delivery.",
        image: "./images/services-mobile-app-web-tools.png",
      },
    ],
    phases: [
      {
        phase: "Phase 1",
        title: "Strategise and Discovery",
        description:
          "During this phase we assess the technicalities, the creative treatment, the UX, the resources needed whilst collecting all the requirements for both the Proof of Concept (POC) and the full system. We offer a long term strategy to provide our client with a sustainable outcome.",
        image: "./images/services-phase-1.png",
        opacity: 0.9,
      },
      {
        phase: "Phase 2",
        title: "Production of MVP",
        description:
          "Based on the POC requirement we gathered, we focus on developing a fully operational Minimum Viable Product (MVP)  in a confined environment. We deliver the MVP fully tested and ready for the scale-up phase.",
        image: "./images/services-phase-2.png",
        opacity: 0.9,
      },
      {
        phase: "Phase 3",
        title: "Full Product Production",
        description:
          "After validating the MVP we focus on iterating features and developing a fully scalable solution. This is achieved by deploying and extensively testing the infrastructure. In this phase we implement all the features needed for the final solution.",
        image: "./images/services-phase-3.png",
        opacity: 0.9,
      },
      {
        phase: "Phase 4",
        title: "Product Release",
        description:
          "In this phase we release the final product, by guaranteeing a fully tested solution together with the support and documentation needed for handover. In this phase we deploy the final solution and provide support and maintenance.",
        image: "./images/services-phase-4.png",
        opacity: 0.9,
      },
    ],
  };

  const [accSelectedIndex, setAccSelectedIndex] = useState(0);
  return (
    <>
      <Head title="Services" />
      <Wrapper>
        <WrapperInner>
          <Styled.Title>Services</Styled.Title>
          <Styled.Separator />
          <Styled.TopContent>
            <div>We bring innovation</div>
            <div>
              <div>through digital products</div>
              <div>
                We have worked with international companies, helping them solve{" "}
                <span>complex problems</span> with state of{" "}
                <span>the art technologies</span>, such as:
              </div>
            </div>
          </Styled.TopContent>
        </WrapperInner>
        <WrapperInner spaceSize={20}>
          <Styled.Acc>
            {data.acc.map((item, index) => (
              <AccItem
                key={index}
                item={item}
                onClick={() => {
                  setAccSelectedIndex(index);
                }}
                isSelected={accSelectedIndex === index}
              />
            ))}
          </Styled.Acc>
        </WrapperInner>
        <WrapperInner>
          <Styled.HowWeWork>
            <div>How we Work</div>
            <div>
              {data.phases.map((item, index) => (
                <div key={index} style={{ opacity: item.opacity }}>
                  <div>{item.phase}</div>
                  <div>{item.title}</div>
                  <div>{item.description}</div>
                  <div>
                    <Image
                      src={item.image}
                      layout="fill"
                      objectFit="contain"
                      alt=""
                    />
                  </div>
                </div>
              ))}
            </div>
          </Styled.HowWeWork>
        </WrapperInner>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Services;

const AccItem = ({ ...restProps }) => {
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
          // @ts-ignore
          ? itemRef.current.scrollHeight
          // @ts-ignore
          : titleRef.current.clientHeight,
        marginTop: 40,
        marginBottom: 40,
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
    <Styled.AccItem
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
    </Styled.AccItem>
  );
};
