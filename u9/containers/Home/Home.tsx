import type { NextPage } from "next";

import Head from "u9/components/Head/Head";
import React, { useContext, useEffect, useRef, useState } from "react";
import { BaseContext, BaseContextType } from "u9/contexts/base";

import gsap from "gsap/dist/gsap";
import SplitText from "gsap/dist/SplitText";
import { Wrapper, WrapperInner } from "u9/components/Layout/Layout";
import * as Styled from "u9/containers/Home/Home.styles";
const Home: NextPage = () => {
  const { setMenuDark }: BaseContextType = useContext(BaseContext);
  const [visible, setVisible] = useState(false);
  const labelRef = useRef(null);

  useEffect(() => {
    if (labelRef.current) {
      // prettier-ignore
      const sublabelAnimatedSplitTextChild = new SplitText(labelRef.current, { type: "lines", linesClass: "split-child" });
      // prettier-ignore
      const sublabelAnimatedSplitTextParent = new SplitText(labelRef.current, { type: "lines", linesClass: "split-parent" });
      // prettier-ignore
      gsap.from(sublabelAnimatedSplitTextChild.lines, { duration: 1.5, yPercent: 100, opacity: 0, ease: "power4.out", stagger: 0.3,
        onComplete: () => {
          sublabelAnimatedSplitTextChild.revert();
          sublabelAnimatedSplitTextParent.revert();
          setVisible(true);
        },
        onStart: () => {
          setVisible(true);
        },
      });
    }
  }, [labelRef]);

  useEffect(() => {
    setMenuDark(false);
  }, []);

  return (
    <>
      <Head title="Home" />
      <Wrapper>
        <Styled.Video autoPlay muted loop playsInline>
          <source src={"./bg.mp4"} type="video/mp4" />
        </Styled.Video>
        <WrapperInner>
          <Styled.WrapperLabel visible={visible}>
            <Styled.Label ref={labelRef}>
              We help the real-estate industry deliver the future of energy transformation
              {/* The Innovation Lab for the Real-Estate Industry */}
            </Styled.Label>
          </Styled.WrapperLabel>
        </WrapperInner>
      </Wrapper>
    </>
  );
};

export default Home;
