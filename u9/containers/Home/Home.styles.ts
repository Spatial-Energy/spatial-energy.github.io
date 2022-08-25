import styled from "styled-components";
import { colors, rfs } from "u9/utils/styles/theme";
import { pxToRems, setVh } from "u9/utils/styles/mixin";

export const Wrapper = styled.main``;

export const WrapperLabel = styled.div<{ visible: boolean }>`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${rfs(`${pxToRems(60)}rem`, "padding-left")};
  ${rfs(`${pxToRems(60)}rem`, "padding-right")};
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
`;

export const Label = styled.div`
  font-family: "Trap";
  ${rfs(`${pxToRems(120)}rem`, "font-size")};
  line-height: 90%;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.03em;
  text-align: center;
  color: ${colors.white};
  max-width: 1124px;
`;
