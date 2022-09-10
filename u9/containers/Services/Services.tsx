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
        title: "Digital Twin",
        description: `A digital twin is a virtual representation that serves as the
      real-time digital counterpart of a physical object or process.
      Though the concept originated earlier (attributed to Michael
      Grieves, then of the University of Michigan, in 2002) the first
      practical definition of a digital twin originated from NASA in
      an attempt to improve physical-model simulation of spacecraft in
      2010.`,
        image: "./images/services-digital-twin.png",
      },
      {
        title: "VR, MR & AR",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida congue velit sit amet lacinia. Nam diam enim, tincidunt ut sapien at, porta tempus nisl. Curabitur finibus dui lectus, ut mollis libero pharetra id. In id accumsan enim, non aliquet massa. Sed euismod purus ut luctus faucibus. Sed varius orci magna, et porta ligula porta id. Fusce sit amet interdum neque.",
        image: "./images/services-vr-mr-ar.png",
      },
      {
        title: "Metaverse",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida congue velit sit amet lacinia. Nam diam enim, tincidunt ut sapien at, porta tempus nisl. Curabitur finibus dui lectus, ut mollis libero pharetra id. In id accumsan enim, non aliquet massa. Sed euismod purus ut luctus faucibus. Sed varius orci magna, et porta ligula porta id. Fusce sit amet interdum neque.",
        image: "./images/services-metaverse.png",
      },
      {
        title: "Desktop Appraisal",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida congue velit sit amet lacinia. Nam diam enim, tincidunt ut sapien at, porta tempus nisl. Curabitur finibus dui lectus, ut mollis libero pharetra id. In id accumsan enim, non aliquet massa. Sed euismod purus ut luctus faucibus. Sed varius orci magna, et porta ligula porta id. Fusce sit amet interdum neque.",
        image: "./images/services-desktop-appraisal.png",
      },
      {
        title: "IoT",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida congue velit sit amet lacinia. Nam diam enim, tincidunt ut sapien at, porta tempus nisl. Curabitur finibus dui lectus, ut mollis libero pharetra id. In id accumsan enim, non aliquet massa. Sed euismod purus ut luctus faucibus. Sed varius orci magna, et porta ligula porta id. Fusce sit amet interdum neque.",
        image: "./images/services-iot.png",
      },
      {
        title: "Mobile App & Web Tools",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida congue velit sit amet lacinia. Nam diam enim, tincidunt ut sapien at, porta tempus nisl. Curabitur finibus dui lectus, ut mollis libero pharetra id. In id accumsan enim, non aliquet massa. Sed euismod purus ut luctus faucibus. Sed varius orci magna, et porta ligula porta id. Fusce sit amet interdum neque.",
        image: "./images/services-mobile-app-web-tools.png",
      },
    ],
    phases: [
      {
        phase: "Phase 1",
        title: "Discovery",
        description:
          "Nullam vulputate gravida enim, et tincidunt augue condimentum at. Nullam ultricies felis nisl, vitae pellen venenatis quis. Vitae vestibulum arcu, a semper metus nullam placerat.",
        image: "./images/services-phase-1.png",
      },
      {
        phase: "Phase 2",
        title: "Production of MVP",
        description:
          "Nullam vulputate gravida enim, et tincidunt augue condimentum at. Nullam ultricies felis nisl, vitae pellen venenatis quis. Vitae vestibulum arcu, a semper metus nullam placerat.",
        image: "./images/services-phase-2.png",
      },
      {
        phase: "Phase 3",
        title: "Validation & Reporting",
        description:
          "Nullam vulputate gravida enim, et tincidunt augue condimentum at. Nullam ultricies felis nisl, vitae pellen venenatis quis. Vitae vestibulum arcu, a semper metus nullam placerat.",
        image: "./images/services-phase-3.png",
        opacity: 0.5,
      },
      {
        phase: "Phase 4",
        title: "Final Solution",
        description:
          "Nullam vulputate gravida enim, et tincidunt augue condimentum at. Nullam ultricies felis nisl, vitae pellen venenatis quis. Vitae vestibulum arcu, a semper metus nullam placerat.",
        image: "./images/services-phase-4.png",
        opacity: 0.5,
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
            <div>We develop products</div>
            <div>
              <div>technologies + ART</div>
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
  const { width } = useWindowSize();
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
  }, [width, restProps?.isSelected]);

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
