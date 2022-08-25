import styled from "styled-components";
import { colors, rfs } from "u9/utils/styles/theme";
import { pxToRems, setVh } from "u9/utils/styles/mixin";

export const Wrapper = styled.div`
  width: 100%;
  height: ${setVh(100)};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Video = styled.video`
  overflow: hidden;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: -998;
  object-fit: cover;
`;

export const WrapperLogo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

export const Logo = styled.div`
  position: relative;
  ${rfs(`${pxToRems(72)}rem`, "margin-left")};
  ${rfs(`${pxToRems(48)}rem`, "margin-top")};
  height: 37.49px;
  width: 133.02px;
`;

export const Label = styled.div`
  font-family: "Trap";
  ${rfs(`${pxToRems(120)}rem`, "font-size")};
  line-height: 90%;
  letter-spacing: -0.03em;
  text-align: center;
  color: ${colors.white};
  max-width: 1124px;
  ${rfs(`${pxToRems(32)}rem`, "margin-left")};
  ${rfs(`${pxToRems(32)}rem`, "margin-top")};
`;
