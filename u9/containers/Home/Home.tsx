import type { NextPage } from "next";

import VideoBg from "u9/components/VideoBg/VideoBg";
import Head from "u9/components/Head/Head";
import * as Styled from "u9/containers/Home/Home.styles";
import Menu from "u9/components/Menu/Menu";
import { colors } from "u9/utils/styles/theme";
import Footer from "../Footer/Footer";
import { useEffect, useRef, useState } from "react";

import gsap from 'gsap/dist/gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitText from 'gsap/dist/SplitText';

const Home: NextPage = () => {
  const [visible, setVisible] = useState(false);
  const labelRef = useRef(null);

  useEffect(() => {
    if (labelRef.current) {
       
      const sublabelAnimatedSplitTextChild = new SplitText(
        labelRef.current,
        {
          type: 'lines',
          linesClass: 'split-child',
        }
      );
      const sublabelAnimatedSplitTextParent = new SplitText(
        labelRef.current,
        {
          type: 'lines',
          linesClass: 'split-parent',
        }
      );
      gsap.from(sublabelAnimatedSplitTextChild.lines, {
        duration: 1.5,
        yPercent: 100,
        ease: 'power4',
        stagger: 0.3,
        delay: 0.1,
        opacity: 0,
        onComplete: () => {
          sublabelAnimatedSplitTextChild.revert();
          sublabelAnimatedSplitTextParent.revert();
        },
        onStart: () => {
          setVisible(true);
        },
      });
    }
  }, [labelRef]);

  return (
    <>
      <Head title="Home" />
      <Styled.Wrapper>
        <VideoBg />
        <Menu />
        <Styled.WrapperLabel visible={visible}>
          <Styled.Label ref={labelRef}>
            The Innovation Lab for&nbsp;the Real-Estate Industry
          </Styled.Label>
        </Styled.WrapperLabel>
      </Styled.Wrapper>
      
    </>
  );
};

export default Home;
