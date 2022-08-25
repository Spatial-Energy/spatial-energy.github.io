import styled from "styled-components";
import { colors, rfs } from "u9/utils/styles/theme";
import { mediaCustom, pxToRems } from "u9/utils/styles/mixin";

export const Wrapper = styled.div`
  ${rfs(`${pxToRems(244)}rem`, "padding-top")};
  ${rfs(`${pxToRems(60)}rem`, "margin-left")};
  ${rfs(`${pxToRems(60)}rem`, "margin-right")};
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

export const Acc = styled.div`
  ${rfs(`${pxToRems(70)}rem`, "padding")};
  ${rfs(`${pxToRems(129)}rem`, "margin-top")};
  ${rfs(`${pxToRems(184)}rem`, "margin-bottom")};
  border-radius: 30px;
  background-color: ${colors.pampas};

  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;

    column-gap: 24px;

    ${mediaCustom(
      1024,
      `
      flex-direction: column;
      row-gap: 24px;
    `
    )}

    > div: nth-child(2) {
      position: relative;
      ${rfs(`${pxToRems(730)}rem`, "width")};
      ${rfs(`${pxToRems(620)}rem`, "height")};
      flex-shrink: 0;
    }
  }
`;

export const HowWeWork = styled.div`
  ${rfs(`${pxToRems(184)}rem`, "margin-top")};
  
  >div: first-child {
    font-family: "Trap";
    ${rfs(`${pxToRems(100)}rem`, "font-size")};
    line-height: 90%;
    letter-spacing: -0.03em;
    font-style: normal;
    font-weight: 600;

    text-align: center;

    ${rfs(`${pxToRems(180)}rem`, "margin-bottom")};
  }

  >div: nth-child(2) {
    > div {
      max-width: 50%;
      border-top: 1px solid ${colors.black};
      >div: first-child {
        ${rfs(`${pxToRems(20)}rem`, "padding-top")};
        font-family: "Trap";
        ${rfs(`${pxToRems(22)}rem`, "font-size")};
        line-height: 90%;
        letter-spacing: -0.03em;
        font-style: normal;
        font-weight: 600;

        ${rfs(`${pxToRems(92)}rem`, "margin-bottom")};
      }
      >div: nth-child(2) {
        font-family: "Trap";
        ${rfs(`${pxToRems(48)}rem`, "font-size")};
        line-height: 90%;
        letter-spacing: -0.03em;
        font-style: normal;
        font-weight: 600;

        ${rfs(`${pxToRems(19)}rem`, "margin-bottom")};
      }
      >div: nth-child(3) {
        font-family: "Darker Grotesque";
        ${rfs(`${pxToRems(20)}rem`, "font-size")};
        line-height: 90%;
        letter-spacing: -0.03em;
        font-style: normal;
        font-weight: 500;

        ${rfs(`${pxToRems(92)}rem`, "margin-bottom")};
      }
      > div: nth-child(4) {
        position: relative;
        ${rfs(`${pxToRems(500)}rem`, "width")}; 
        ${rfs(`${pxToRems(500)}rem`, "height")}; 
      }
    }
  }
`;