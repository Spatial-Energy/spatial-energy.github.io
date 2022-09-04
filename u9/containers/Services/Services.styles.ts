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


export const Acc = styled.div`
  ${rfs(`${pxToRems(70)}rem`, "padding-left")};
  ${rfs(`${pxToRems(70)}rem`, "padding-right")};

  ${rfs(`${pxToRems(129)}rem`, "margin-top")};
  ${rfs(`${pxToRems(184)}rem`, "margin-bottom")};
  border-radius: 30px;
  background-color: ${colors.pampas};

  >div: last-child {
    border-bottom: unset;
  }
`;

export const AccItem = styled.div<{ isSelected: boolean; height: number }>`
  ${({ height }) => `height: ${height}px;`}

  width: 100%;
  display: flex;
  justify-content: space-between;

  ${rfs(`${pxToRems(178)}rem`, "column-gap")};

  transition: height 0.3s ease-out, padding-top 0.3s ease-out,
    padding-bottom 0.3s ease-out;
  border-bottom: 1px solid ${colors.black}20;

  ${({ isSelected }) =>
    `${rfs(`${pxToRems(isSelected ? 80 : 0)}rem`, "padding-top")};`}
  ${({ isSelected }) =>
    `${rfs(`${pxToRems(isSelected ? 80 : 0)}rem`, "padding-bottom")};`}

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
    ${({ isSelected }) => !isSelected && `cursor: pointer;`}
    >div: nth-child(1) {
      ${({ isSelected }) =>
        `${rfs(`${pxToRems(isSelected ? 0 : 40)}rem`, "padding-top")};`}
      ${setTypography("headline3")}
      ${({ isSelected }) =>
        `${rfs(`${pxToRems(isSelected ? 0 : 40)}rem`, "padding-bottom")};`}
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
  overflow: hidden;
`;

export const HowWeWork = styled.div`
  ${rfs(`${pxToRems(184)}rem`, "margin-top")};
  >div: first-child {
    ${setTypography("headline6")}
    text-align: center;
    ${rfs(`${pxToRems(180)}rem`, "margin-bottom")};
  }

  >div: nth-child(2) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    ${rfs(`${pxToRems(160)}rem`, "gap")};
    ${mediaCustom(
      768,
      `
    grid-template-columns: 1fr;
  `
    )}

    >div: nth-child(even) {
      ${rfs(`${pxToRems(160)}rem`, "margin-top")};
    }
    >div: nth-child(n + 3) {
      opacity: 0.5;
    }

    > div {
      display: flex;
      flex-direction: column;
      border-top: 1px solid ${colors.black};
      >div: first-child {
        ${rfs(`${pxToRems(20)}rem`, "padding-top")};
        ${setTypography("headline7")}
        ${rfs(`${pxToRems(92)}rem`, "margin-bottom")};
      }
      >div: nth-child(2) {
        ${setTypography("headline8")}
        ${rfs(`${pxToRems(19)}rem`, "margin-bottom")};
      }
      >div: nth-child(3) {
        ${setTypography("body2")}
        ${rfs(`${pxToRems(92)}rem`, "margin-bottom")};
      }
      >div: nth-child(4) {
        position: relative;
        ${rfs(`${pxToRems(500)}rem`, "width")};
        ${rfs(`${pxToRems(500)}rem`, "height")};
        align-self: center;
      }
    }
  }
`;
