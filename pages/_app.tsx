import React, { useEffect, useState } from "react";
import type { AppProps } from "next/app";

import GlobalStyles from "u9/utils/styles/globalStyles";
import Menu from "u9/components/Menu/Menu";
// import gsap from "gsap/dist/gsap";
// import ScrollTrigger from "gsap/dist/ScrollTrigger";
// import SplitText from "gsap/dist/SplitText";

// gsap.registerPlugin(ScrollTrigger, SplitText);
// gsap.defaults({ overwrite: "auto", duration: 0.3 });
// gsap.config({ nullTargetWarn: false });

// contexts
import { BaseProvider } from "u9/contexts/base";

function App({ Component, pageProps }: AppProps) {
  // console.log("render");

  const [state, setState] = useState(() => {
    // console.log("state initialized");
    return "state";
  });

  useEffect(() => {
    // console.log("run useEffect");
    return () => console.log("unmount/ cleanup Effect");
  }, []);

  return (
    <>
      <GlobalStyles />
      <BaseProvider>
        <Menu />
        <Component {...pageProps} />
      </BaseProvider>
    </>
  );
}

export default App;
