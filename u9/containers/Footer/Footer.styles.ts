import styled from "styled-components";
import { colors, rfs } from "u9/utils/styles/theme";
import { mediaCustom, pxToRems, setTypography } from "u9/utils/styles/mixin";

export const Wrapper = styled.div`
  color: ${colors.white};
  background-color: ${colors.codGray2};
`;

export const WrapperInner = styled.div`
  ${rfs(`${pxToRems(60)}rem`, "padding-left")};
  ${rfs(`${pxToRems(60)}rem`, "padding-right")};
`;

export const WrapperLinkCases = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.div`
  ${setTypography("headline7")};
  ${rfs(`${pxToRems(127)}rem`, "margin-top")};
  ${rfs(`${pxToRems(39)}rem`, "margin-bottom")};
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  border: 1px solid ${colors.bianca}20;
`;

export const Link = styled.div`
  ${setTypography("headline6")}
  ${rfs(`${pxToRems(158)}rem`, "margin-bottom")};
  text-decoration: underline;
  cursor: pointer;
  text-align: center;
`;

export const WrapperRP = styled.div`
  ${rfs(`${pxToRems(30)}rem`, "padding-top")};
  ${rfs(`${pxToRems(30)}rem`, "padding-bottom")};
  width: 100%;
  display: flex;
  justify-content: space-between;

  ${setTypography("caption")}
  color: ${colors.bianca}50;

  ${rfs(`${pxToRems(24)}rem`, "column-gap")};
  ${mediaCustom(
    768,
    `
    flex-direction: column;
    align-items: center;
    ${rfs(`${pxToRems(24)}rem`, "row-gap")};
  `
  )}
`;

export const Shape = styled.div`
  ${rfs(`${pxToRems(70)}rem`, "height")};
  width: 100%;
  background-color: ${colors.white};
  border-radius: 0 0 30px 30px;
`;

export const WrapperContact = styled.div`
  ${rfs(`${pxToRems(64)}rem`, "margin-top")};
  ${rfs(`${pxToRems(64)}rem`, "margin-bottom")};
  > div {
    display: flex;
    justify-content: space-between;
    >div: nth-child(2) {
      width: 60%;
      ${mediaCustom(
        768,
        `
        width: 100%;
      `
      )}
    }

    ${mediaCustom(
      768,
      `
      flex-direction: column;
      align-items: flex-start;
      ${rfs(`${pxToRems(24)}rem`, "row-gap")};
    `
    )}
  }

  >div: first-child {
    ${setTypography("headline5")}
    ${rfs(`${pxToRems(335)}rem`, "margin-bottom")};
  }

  >div: nth-child(2) {
    ${setTypography("headline4")}

    > div: first-child {
      text-transform: uppercase;
    }
    >div: nth-child(2) {
      text-transform: uppercase;
      > div {
        padding: 5px;
        background-color: ${colors.white};
        color: ${colors.black};
        border-radius: 100px;

        display: inline-flex;
        align-items: center;
        justify-content: space-between;

        >div: first-child {
          ${rfs(`${pxToRems(60)}rem`, "padding-left")};
          ${rfs(`${pxToRems(60)}rem`, "padding-right")};
          margin-top: 3px;
        }

        cursor: pointer;
      }
    }
  }
`;

export const WrapperIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${colors.black};
  border-radius: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconLink = styled.div`
  position: relative;
  width: 15.79px;
  height: 12px;
  color: ${colors.white};
`;
