import Image from "next/image";
import * as Styled from "./Logo.styles";

type MenuProps = {
  isDark?: boolean;
};

const Logo = ({ ...props }: MenuProps) => {
return (
    <Styled.Wrapper href="./">
      <Styled.WrapperInner>
      <Image
        src={`./images/logo${props?.isDark ? '-dark' : ''}.svg`}
        layout="fill"
        objectFit="cover"
        alt="Spatial logo"
      />
      </Styled.WrapperInner>
    </Styled.Wrapper>
  );
};

export default Logo;
