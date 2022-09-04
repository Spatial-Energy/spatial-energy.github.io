import styled from "styled-components";
import { colors, rfs } from "u9/utils/styles/theme";
import { mediaCustom, pxToRems, setTypography } from "u9/utils/styles/mixin";


export const Title = styled.div`
  ${setTypography("headline2")}
  ${rfs(`${pxToRems(244)}rem`, "padding-top")};
  ${rfs(`${pxToRems(111)}rem`, "margin-bottom")};
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  border: 1px solid ${colors.codGray}25;
`;

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
      ${setTypography("headline4")}
    }
    >div: nth-child(2) {
      ${rfs(`${pxToRems(57)}rem`, "margin-top")};
      ${setTypography("headline5")}
      span {
        text-decoration: underline;
      }
    }
  }

  >div: first-child {
    ${setTypography("headline4")} 
    width: 40%;
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
  >div: first-child {
    text-transform: uppercase;

    font-family: "Trap";
    ${rfs(`${pxToRems(16)}rem`, "font-size")};
    line-height: 90%;
    letter-spacing: -0.03em;
    font-style: normal;
    font-weight: 600;

    ${rfs(`${pxToRems(75)}rem`, "margin-bottom")};
  }

  >div: nth-child(2) {
    max-width: 880px;
    font-family: "Trap";
    ${rfs(`${pxToRems(48)}rem`, "font-size")};
    line-height: 90%;
    letter-spacing: -0.03em;
    font-style: normal;
    font-weight: 500;
  }

  >div: nth-child(3) {
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

export const CaseStudies = styled.div`
  background-color: ${colors.pampas};
  border-radius: 30px;
  >div: first-child {
    display: flex;
    justify-content: center;
    align-items: center;
    ${rfs(`${pxToRems(804)}rem`, "height")};
    text-align: center;
  }
`;

export const Acc = styled.div`
  
  ${rfs(`${pxToRems(129)}rem`, "margin-top")};
  ${rfs(`${pxToRems(184)}rem`, "margin-bottom")};
  border-radius: 30px;
  background-color: ${colors.pampas};

  >div: last-child {
    border-bottom: unset;
    border-radius: 30px;
    ${rfs(`${pxToRems(80)}rem`, "padding-bottom")};
  }
`;

export const Case = styled.div<{ color: string }>`
    ${({ color }) => `background-color: ${color};`}
    width: 100%;
    display: flex;
    justify-content: space-between;
    ${rfs(`${pxToRems(178)}rem`, "column-gap")};
    ${rfs(`${pxToRems(70)}rem`, "padding-left")};
    ${rfs(`${pxToRems(70)}rem`, "padding-right")};
    ${rfs(`${pxToRems(80)}rem`, "padding-top")};
    ${rfs(`${pxToRems(110)}rem`, "padding-bottom")};
    
    margin-top: -30px;  

    border-radius: 30px 30px 0 0;
    
    ${mediaCustom(
      1024,
      `
      flex-direction: column;
      ${rfs(`${pxToRems(40)}rem`, "row-gap")};
    `
    )}
    >div: nth-child(1) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      >div: nth-child(1) {
        ${setTypography("headline6")}
      }
      >div: nth-child(2) {
        ${setTypography("body2")}
        margin-top: 16px;
      }
    }
    >div: nth-child(2) {
      position: relative;
      ${rfs(`${pxToRems(730)}rem`, "width")};
      ${rfs(`${pxToRems(620)}rem`, "height")};
      flex-shrink: 0;
      border-radius: 20px;
      overflow: hidden;
      ${mediaCustom(
        1024,
        `
        width: 100%;
        ${rfs(`${pxToRems(730)}rem`, "height")};
      `
      )}
    }
  }
`;
