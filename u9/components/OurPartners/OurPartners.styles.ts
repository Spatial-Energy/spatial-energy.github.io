import { pxToRems } from "u9/utils/styles/mixin";
import { colors, rfs } from "u9/utils/styles/theme";
import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  ${rfs(`${pxToRems(253)}rem`, "margin-top")};
  ${rfs(`${pxToRems(207)}rem`, "margin-bottom")};
  
`;

export const WrapperLogos = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  ${rfs(`${pxToRems(80)}rem`, "column-gap")};
  img {
    ${rfs(`${pxToRems(135)}rem`, "max-height")};
  }
`

export const WrapperMotion = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
`
export const WrapperMotionInner = styled(motion.div)`
  display: flex;
  flex-wrap: nowrap;
  ${rfs(`${pxToRems(80)}rem`, "column-gap")};
`