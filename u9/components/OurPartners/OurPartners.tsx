import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import * as Styled from "./OurPartners.styles";

import {
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

const OurPartners = () => {
  const data = [
    {
      image: "./images/logo-client-avison_young.png",
    },
    {
      image: "./images/logo-client-bentley.png",
    },
    {
      image: "./images/logo-client-boost.png",
    },
    {
      image: "./images/logo-client-bre.png",
    },
    {
      image: "./images/logo-client-catapult.png",
    },
    {
      image: "./images/logo-client-ies.png",
    },
    {
      image: "./images/logo-client-sheffield.png",
    },
    {
      image: "./images/logo-client-skanska.png",
    },
    {
      image: "./images/logo-client-ucl.png",
    },
    {
      image: "./images/logo-client-utilismart.png",
    },
  ];

  return (
    <Styled.Wrapper>
      <Marquee baseVelocity={1}>
        <Styled.WrapperLogos>
          {data.map(
            (item, index) => item?.image && <img src={item.image} alt={""} />
          )}
        </Styled.WrapperLogos>
      </Marquee>
    </Styled.Wrapper>
  );
};

export default OurPartners;

interface MarqueeProps {
  children: React.ReactNode;
  baseVelocity: number;
}

const Marquee = ({ children, baseVelocity = 100 }: MarqueeProps) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });
  
  const x = useTransform(baseX, (v) => `${wrap(-25, -50, v)}%`);
  
  const directionFactor = useRef<number>(1);
  const prevT = useRef<number>(0);
  useAnimationFrame((t) => {
    if (!prevT.current) prevT.current = t;

    const timeDelta = t - prevT.current;
    let moveBy = directionFactor.current * baseVelocity * (timeDelta / (1000));

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);

    prevT.current = t;
  });

  return (
    <Styled.WrapperMotion>
      <Styled.WrapperMotionInner style={{ x }}>
        <div>{children}</div>
        <div>{children}</div>
        <div>{children}</div>
        <div>{children}</div>
      </Styled.WrapperMotionInner>
    </Styled.WrapperMotion>
  );
};
