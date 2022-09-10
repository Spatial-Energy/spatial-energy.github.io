import Image from "next/image";
import { useContext } from "react";
import { BaseContext, BaseContextType } from "u9/contexts/base";
import * as Styled from "./Logo.styles";
const Logo = ({ ...props }) => {
  const { isMenuDark }: BaseContextType = useContext(BaseContext);
  return (
    <Styled.Wrapper href="./">
      <Styled.WrapperInner>
        <Image
          src={`./images/logo${isMenuDark ? "-dark" : ""}.svg`}
          layout="fill"
          objectFit="cover"
          alt="Spatial energy logo"
        />
      </Styled.WrapperInner>
    </Styled.Wrapper>
  );
};

export default Logo;
