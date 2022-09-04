import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { BaseContext, BaseContextType } from "u9/contexts/base";
import { colors } from "u9/utils/styles/theme";
import Logo from "../Logo/Logo";
import * as Styled from "./Menu.styles";

type MenuProps = {
  isDark?: boolean;
};
const Menu = ({ ...props }: MenuProps) => {
  const router = useRouter();
  const { isMenuDark }: BaseContextType = useContext(BaseContext);

  return (
    <Styled.Wrapper>
      <Styled.WrapperInner>
        <Link href="./">
          <Logo isDark={isMenuDark || false} />
        </Link>
        <Styled.WrapperRoutes isDark={isMenuDark || false}>
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
            <Styled.Link>Let&apos;s talk</Styled.Link>
            <Styled.WrapperIcon isDark={isMenuDark || false}>
              <Styled.IconMail>
                <Image
                  src={`./images/icon-mail${isMenuDark ? "-dark" : ""}.svg`}
                  layout="fill"
                  objectFit="contain"
                  alt="Icon mail"
                />
              </Styled.IconMail>
            </Styled.WrapperIcon>
          </Styled.WrapperLetsTalk>
        </Styled.WrapperRoutes>
      </Styled.WrapperInner>
    </Styled.Wrapper>
  );
};

export default Menu;
