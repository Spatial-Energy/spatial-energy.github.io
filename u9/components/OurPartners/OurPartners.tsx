import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import * as Styled from "./OurPartners.styles";

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

  useEffect(() => {
    horizontalLoop(".box", {
      repeat: -1,
    });
  }, []);

  // @ts-ignore
  const horizontalLoop = (items, config) => {
    items = gsap.utils.toArray(items);
    config = config || {};
    let tl = gsap.timeline({
        repeat: config.repeat,
        paused: config.paused,
        defaults: { ease: "none" },
        // @ts-ignore
        onReverseComplete: () =>
          tl.totalTime(tl.rawTime() + tl.duration() * 100),
      }),
      length = items.length,
      startX = items[0].offsetLeft,
      // @ts-ignore
      times = [],
      // @ts-ignore
      widths = [],
      // @ts-ignore
      xPercents = [],
      curIndex = 0,
      pixelsPerSecond = (config.speed || 1) * 100,
      // @ts-ignore
      snap = config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
      totalWidth,
      curX,
      distanceToStart,
      distanceToLoop,
      item,
      i;
    gsap.set(items, {
      // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
      xPercent: (i, el) => {
        // @ts-ignore
        let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
        // @ts-ignore
        xPercents[i] = snap((parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 + gsap.getProperty(el, "xPercent"));
        // @ts-ignore
        return xPercents[i];
      },
    });
    gsap.set(items, { x: 0 });
    // @ts-ignore
    totalWidth = items[length - 1].offsetLeft + (xPercents[length - 1] / 100) * widths[length - 1] - startX + items[length - 1].offsetWidth * gsap.getProperty(items[length - 1], "scaleX") + (parseFloat(config.paddingRight) || 0);
    for (i = 0; i < length; i++) {
      item = items[i];
      // @ts-ignore
      curX = (xPercents[i] / 100) * widths[i];
      distanceToStart = item.offsetLeft + curX - startX;
      // @ts-ignore
      distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
      tl.to(
        item,
        {
          // @ts-ignore
          xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
          duration: distanceToLoop / pixelsPerSecond,
        },
        0
      )
        .fromTo(
          item,
          {
            // @ts-ignore
            xPercent: snap(((curX - distanceToLoop + totalWidth) / widths[i]) * 100),
          },
          {
            // @ts-ignore
            xPercent: xPercents[i],
            duration:
              (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
            immediateRender: false,
          },
          distanceToLoop / pixelsPerSecond
        )
        .add("label" + i, distanceToStart / pixelsPerSecond);
      times[i] = distanceToStart / pixelsPerSecond;
    }
    // @ts-ignore
    function toIndex(index, vars) {
      vars = vars || {};
      Math.abs(index - curIndex) > length / 2 && (index += index > curIndex ? -length : length); // always go in the shortest direction
      // @ts-ignore
      let newIndex = gsap.utils.wrap(0, length, index), time = times[newIndex];
      if (time > tl.time() !== index > curIndex) {
        // if we're wrapping the timeline's playhead, make the proper adjustments
        vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
        time += tl.duration() * (index > curIndex ? 1 : -1);
      }
      curIndex = newIndex;
      vars.overwrite = true;
      return tl.tweenTo(time, vars);
    }
    // @ts-ignore
    tl.next = (vars) => toIndex(curIndex + 1, vars);
    // @ts-ignore
    tl.previous = (vars) => toIndex(curIndex - 1, vars);
    tl.current = () => curIndex;
    // @ts-ignore
    tl.toIndex = (index, vars) => toIndex(index, vars);
    tl.times = times;
    tl.progress(1, true).progress(0, true); // pre-render for performance
    if (config.reversed) {
      // @ts-ignore
      tl.vars.onReverseComplete();
      tl.reverse();
    }
    return tl;
  };

  return (
    <Styled.Wrapper>
      <Styled.WrapperCovers>
        {data.map((item, index) => (
          <Styled.WrapperClientImage key={index} className="box">
            {item?.image && <img src={item.image} alt={""} />}
          </Styled.WrapperClientImage>
        ))}
      </Styled.WrapperCovers>
    </Styled.Wrapper>
  );
};

export default OurPartners;
