import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useRef, useState } from "react";
import { BaseContext, BaseContextType } from "u9/contexts/base";
import { colors } from "u9/utils/styles/theme";
import Logo from "../Logo/Logo";
import * as Styled from "./Menu.styles";
import { gsap } from "gsap/dist/gsap";
import useWindowSize from "u9/utils/hooks/useWindowSize";

type MenuProps = {
  isDark?: boolean;
};
const Menu = ({ ...props }: MenuProps) => {
  const router = useRouter();
  const { isMenuDark }: BaseContextType = useContext(BaseContext);
  const wrapperRoutesRef = useRef(null);
  const [isMenuActive, setMenuActive] = useState(false);
  const menuLine1Ref = useRef(null);
  const menuLine2Ref = useRef(null);
  const windowSize = useWindowSize();

  useEffect(() => {
    // prettier-ignore
    gsap.to(menuLine1Ref.current, { transformOrigin: "center center", y: isMenuActive ? 5.5 : 0, rotate: isMenuActive ? 45 : 0, ease: isMenuActive ? "back.out" : "back.in" });
    // prettier-ignore
    gsap.to(menuLine2Ref.current, {transformOrigin: "center center", y: isMenuActive ? -5.5 : 0, rotate: isMenuActive ? -45 : 0, ease: isMenuActive ? "back.out" : "back.in" });
  }, [isMenuActive]);
  useEffect(() => {
    // prettier-ignore
    gsap.to(wrapperRoutesRef.current, { duration: 0, autoAlpha: isMenuActive ? 1 : windowSize.width > 768 ? 1 : 0 });
  }, [windowSize.width, isMenuActive]);
  useEffect(() => {
    if (windowSize.width > 768) {
      setMenuActive(true);
    } else {
      setMenuActive(false);
    }
  }, [windowSize.width]);
  useEffect(() => {
    setMenuActive(false);
  }, [router.asPath]);

  return (
    <Styled.Wrapper>
      <Styled.WrapperInner>
        <Link href="./" passHref>
          <Logo />
        </Link>
        {/* prettier-ignore */}
        <Styled.WrapperIconMobile onClick={() => setMenuActive(!isMenuActive)}> 
          <Styled.WrapperIcon isDark={isMenuDark || false}>
            <svg width="17" height="17" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line ref={menuLine1Ref} y1="2" x2="24" y2="2" stroke="currentColor"strokeWidth="4"/>
              <line ref={menuLine2Ref} y1="13" x2="24" y2="13" stroke="currentColor" strokeWidth="4"/>
            </svg>
          </Styled.WrapperIcon>
        </Styled.WrapperIconMobile>
        <Styled.WrapperRoutes
          isDark={isMenuDark || false}
          ref={wrapperRoutesRef}
        >
          <div>
            <Link href="/services">
              <Styled.Link isActive={router.pathname === "/services"}>
                Services
              </Styled.Link>
            </Link>
            <Link href="/about">
              <Styled.Link isActive={router.pathname === "/about"}>
                About
              </Styled.Link>
            </Link>
            <Styled.WrapperLetsTalk
              isDark={isMenuDark || false}
              onClick={() => {
                window.open("mailto:hello@spatial.energy");
              }}
            >
              <Styled.Link>Let&apos;s&nbsp;talk</Styled.Link>
              {/* prettier-ignore */}
              <Styled.WrapperIcon isDark={isMenuDark || false}>
                <Styled.IconMail>
                  <Image src={`./images/icon-mail${isMenuDark ? "-dark" : ""}.svg`} layout="fill" objectFit="contain" alt="Icon mail" />
                </Styled.IconMail>
              </Styled.WrapperIcon>
            </Styled.WrapperLetsTalk>
          </div>
        </Styled.WrapperRoutes>
      </Styled.WrapperInner>
    </Styled.Wrapper>
  );
};

export default Menu;
