import styled from "styled-components";
import { rfs } from "u9/utils/styles/theme";
import { pxToRems, setVh } from "u9/utils/styles/mixin";

export const StyledWrapper = styled.main`
  width: 100%;
  min-height: ${setVh(100)};
`;

export const StyledWrapperInner = styled.div<{ spaceSize: number }>`
  ${({ spaceSize }) => `${rfs(`${pxToRems(spaceSize)}rem`, "padding-left")}`}
  ${({ spaceSize }) => `${rfs(`${pxToRems(spaceSize)}rem`, "padding-right")}`}
  margin: 0 auto;
`;
