import Image from "next/image";
import Link from "next/link";
import { colors } from "u9/utils/styles/theme";
import Logo from "../Logo/Logo";
import * as Styled from "./Menu.styles";

type MenuProps = {
  isDark?: boolean;
};
const Menu = ({ ...props }: MenuProps) => {
  return (
    <Styled.Wrapper>
    <Styled.WrapperInner>
      
      <Link href="./" passHref>
        <Logo isDark={props?.isDark || false}/>
      </Link>
      <Styled.WrapperRoutes isDark={props?.isDark || false}>
        <Link href="/services">
          <Styled.Link>Services</Styled.Link>
        </Link>
        <Link href="/about">
          <Styled.Link>About</Styled.Link>
        </Link>
        <Styled.WrapperLetsTalk isDark={props?.isDark || false}>
          <Styled.Link>Let&apos;s talk</Styled.Link>
          <Styled.WrapperIcon isDark={props?.isDark || false}>
            <Styled.IconMail>
              <Image
                src={`./images/icon-mail${props?.isDark ? '-dark' : ''}.svg`}
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
