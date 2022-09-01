import { pxToRems } from "u9/utils/styles/mixin";
import { rfs } from "u9/utils/styles/theme";
import styled from "styled-components";
import { colors } from "../../utils/styles/theme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
 

export const WrapperCovers = styled.div`
  display: flex;
  align-items: center;
  ${rfs(`${pxToRems(178)}rem`, "column-gap")};
`;

export const WrapperClientImage = styled.div`
  position: relative;
  width: 100%;
  img {
    max-height: 135px;
  }
`;
