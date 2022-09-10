import styled from "styled-components";
import { colors, rfs } from "u9/utils/styles/theme";
import { mediaCustom, pxToRems } from "u9/utils/styles/mixin";

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
`;

export const WrapperInner = styled.div`
  ${rfs(`${pxToRems(72)}rem`, "padding-left")};
  ${rfs(`${pxToRems(48)}rem`, "padding-top")};
  ${rfs(`${pxToRems(72)}rem`, "padding-right")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${rfs(`${pxToRems(50)}rem`, "column-gap")};
  > div: nth-child(2) {
    position: relative;
  }
  ${mediaCustom(
      768,
      `
        align-items: flex-start;
      `
    )}
`;

export const WrapperRoutes = styled.div<{ isDark: boolean }>`
  >div: first-child {
    display: flex;
    align-items: center;
    ${rfs(`${pxToRems(25)}rem`, "row-gap")};
    ${rfs(`${pxToRems(50)}rem`, "column-gap")};

    font-family: "Trap";
    ${rfs(`${pxToRems(16)}rem`, "font-size")};
    line-height: 90%;
    font-weight: 700;
    font-style: normal;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: ${({ isDark }) => (isDark ? colors.black : colors.white)};
    ${mediaCustom(
      768,
      `
        flex-direction: column;
        align-items: flex-end;
        ${rfs(`${pxToRems(16)}rem`, "padding")};
        margin-top: 50px;
      `
    )}
  }
  ${mediaCustom(
    768,
    `
      position: absolute;
      ${rfs(`${pxToRems(48)}rem`, "top")};
      ${rfs(`${pxToRems(72)}rem`, "right")};
      background-color: ${colors.codGray}10;
      border-radius: 30px;
      backdrop-filter: blur(5px);
    `
  )}
`;

export const Link = styled.div<{ isActive?: boolean }>`
  ${({ isActive }) => isActive && `text-decoration: underline;`};
  cursor: pointer;
  text-align: center;
`;
export const WrapperIconMobile = styled.div`
  cursor: pointer;
  display: none;
  padding: 5px;
  z-index: 2;
  ${mediaCustom(
    768,
    `
    display: block;
  `
  )}
`;
export const WrapperLetsTalk = styled.div<{ isDark: boolean }>`
  >div: first-child {
    ${rfs(`${pxToRems(60)}rem`, "padding-left")};
    ${rfs(`${pxToRems(60)}rem`, "padding-right")};
  }
  border-radius: 100px;
  border: 1px solid ${({ isDark }) => (isDark ? colors.black : colors.white)};
  border-radius: 100px;

  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
`;

export const WrapperIcon = styled.div<{ isDark: boolean }>`
  min-width: 40px;
  min-height: 40px;
  width: 40px;
  height: 40px;
  background-color: ${({ isDark }) => (isDark ? colors.black : colors.white)};
  color: ${({ isDark }) => (isDark ? colors.white : colors.black)};
  border-radius: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconMail = styled.div`
  position: relative;
  width: 16.98px;
  height: 18px;
`;
