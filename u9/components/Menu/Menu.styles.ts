import styled from "styled-components";
import { colors, rfs } from "u9/utils/styles/theme";
import { mediaCustom, pxToRems } from "u9/utils/styles/mixin";

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  z-index: 1;
`;

export const WrapperInner = styled.div`
  ${rfs(`${pxToRems(72)}rem`, "padding-left")};
  ${rfs(`${pxToRems(48)}rem`, "padding-top")};
  ${rfs(`${pxToRems(72)}rem`, "padding-right")};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WrapperRoutes = styled.div<{ isDark: boolean }>`
  display: flex;
  align-items: center;
  ${rfs(`${pxToRems(50)}rem`, "row-gap")};
  ${rfs(`${pxToRems(50)}rem`, "column-gap")};

  font-family: "Trap";
  ${rfs(`${pxToRems(16)}rem`, "font-size")};
  line-height: 90%;
  font-weight: 700;
  font-style: normal;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${({ isDark }) => isDark ? colors.black : colors.white};
`;

export const Link = styled.div<{ isActive?: boolean }>`
  ${({ isActive }) => isActive && `text-decoration: underline;`};
  cursor: pointer;
  text-align: center;

  ${mediaCustom(
    800,
    `
    display: none;
  `
  )}
`;
export const WrapperLetsTalk = styled.div<{ isDark: boolean }>`
  > div: first-child {
    ${rfs(`${pxToRems(60)}rem`, "padding-left")};
    ${rfs(`${pxToRems(60)}rem`, "padding-right")};
  }
  border-radius: 100px;
  border: 1px solid ${({ isDark }) => isDark ? colors.black : colors.white};
  border-radius: 100px;

  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;

  ${mediaCustom(
    800,
    `
    width: 50px;
    border: unset;
  `
  )}
`;

export const WrapperIcon = styled.div<{ isDark: boolean }>`
  width: 40px;
  height: 40px;
  background-color: ${({ isDark }) => isDark ? colors.black : colors.white};
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

