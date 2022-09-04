import { StyledWrapper, StyledWrapperInner } from "./Layout.styles";

export const Wrapper = ({ ...restProps }) => {
  return <StyledWrapper>{restProps?.children}</StyledWrapper>;
};

export const WrapperInner = ({ ...restProps }) => {
  return (
    <StyledWrapperInner spaceSize={restProps?.spaceSize || 60}>
      {restProps?.children}
    </StyledWrapperInner>
  );
};
