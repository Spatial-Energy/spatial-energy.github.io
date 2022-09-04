import styled from "styled-components";
import { colors } from "u9/utils/styles/theme";
import { setTypography, setVh } from "u9/utils/styles/mixin";

export const WrapperLabel = styled.div<{ visible: boolean }>`
  width: 100%;
  min-height: ${setVh(100)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
`;

export const Label = styled.div`
  ${setTypography('headline1')};
  color: ${colors.white};
  max-width: 1124px;
  text-align: center;
`;

export const Video = styled.video`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -7224;
  object-fit: cover;
`;
