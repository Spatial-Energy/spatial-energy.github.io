import styled from "styled-components";
import { colors, rfs } from "u9/utils/styles/theme";
import { mediaCustom, pxToRems } from "u9/utils/styles/mixin";

export const Wrapper = styled.div`
    ${rfs(`${pxToRems(244)}rem`, "padding-top")};
    ${rfs(`${pxToRems(60)}rem`, "padding-left")};
    ${rfs(`${pxToRems(60)}rem`, "padding-right")};
`;

export const Title = styled.div`
  font-family: "Trap";
  ${rfs(`${pxToRems(150)}rem`, "font-size")};
  line-height: 90%;
  letter-spacing: -0.03em;
  font-style: normal;
  font-weight: 600;
  ${rfs(`${pxToRems(111)}rem`, "margin-top")};
  ${rfs(`${pxToRems(111)}rem`, "margin-bottom")};
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  border: 1px solid ${colors.codGray}25;
`

export const TopContent = styled.div`
  ${rfs(`${pxToRems(41)}rem`, "margin-top")};
  ${rfs(`${pxToRems(129)}rem`, "margin-bottom")};
  display: flex;

  ${mediaCustom(
    800,
    `
    flex-direction: column;
  `
  )}

  > div {
    width: 50%;
    ${mediaCustom(
      800,
      `
      width: 100%;
    `
    )}
    >div: first-child {
      text-transform: uppercase;

      font-family: "Trap";
      ${rfs(`${pxToRems(16)}rem`, "font-size")};
      line-height: 90%;
      letter-spacing: -0.03em;
      font-style: normal;
      font-weight: 600;
    }

    >div: nth-child(2) {
      ${rfs(`${pxToRems(57)}rem`, "margin-top")};

      font-family: "Trap";
      ${rfs(`${pxToRems(64)}rem`, "font-size")};
      line-height: 90%;
      letter-spacing: -0.03em;
      font-style: normal;
      font-weight: 500;

      span {
        text-decoration: underline;
      }
    }
  }

  >div: first-child {
    text-transform: uppercase;
    width: 40%;

    font-family: "Trap";
    ${rfs(`${pxToRems(16)}rem`, "font-size")};
    line-height: 90%;
    letter-spacing: -0.03em;
    font-style: normal;
    font-weight: 600;

    ${mediaCustom(
      800,
      `
      width: 100%;
      ${rfs(`${pxToRems(41)}rem`, "margin-bottom")};
    `
    )}
  }
`;


export const Partners = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
  ${rfs(`${pxToRems(240)}rem`, "margin-top")};
  ${rfs(`${pxToRems(240)}rem`, "margin-bottom")};
  > div: first-child {
    text-transform: uppercase;

    font-family: "Trap";
    ${rfs(`${pxToRems(16)}rem`, "font-size")};
    line-height: 90%;
    letter-spacing: -0.03em;
    font-style: normal;
    font-weight: 600;
    
    ${rfs(`${pxToRems(75)}rem`, "margin-bottom")};
  }

  > div: nth-child(2) {
    
    max-width: 880px;
    font-family: "Trap";
    ${rfs(`${pxToRems(48)}rem`, "font-size")};
    line-height: 90%;
    letter-spacing: -0.03em;
    font-style: normal;
    font-weight: 500;
    
  }

  > div: nth-child(3) {
    ${rfs(`${pxToRems(240)}rem`, "margin-top")};
    display: flex;
    ${rfs(`${pxToRems(180)}rem`, "column-gap")};
    font-family: "Trap";
    ${rfs(`${pxToRems(150)}rem`, "font-size")};
    line-height: 90%;
    letter-spacing: -0.03em;
    font-style: normal;
    font-weight: 500;


    white-space: nowrap;
  }
`;