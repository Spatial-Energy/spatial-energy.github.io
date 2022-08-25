import React, { useEffect, useState } from "react";
import type { AppProps } from "next/app";

import GlobalStyles from "u9/utils/styles/globalStyles";
// import gsap from "gsap/dist/gsap";
// import ScrollTrigger from "gsap/dist/ScrollTrigger";
// import SplitText from "gsap/dist/SplitText";


// gsap.registerPlugin(ScrollTrigger, SplitText);
// gsap.defaults({ overwrite: "auto", duration: 0.3 });
// gsap.config({ nullTargetWarn: false });

function App({ Component, pageProps }: AppProps) {
  console.log("render");

  const [state, setState] = useState
  (() => {
    console.log("state initialized");
    return "state";
  });

  useEffect(() => {
    console.log("run useEffect");
    return () => console.log("unmount/ cleanup Effect");
  }, []);

  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
