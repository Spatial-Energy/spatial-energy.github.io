import { kebabCase } from 'lodash';
import { FlattenSimpleInterpolation } from 'styled-components';

import { colors, fonts, rfs } from './theme';
import * as VARS from './variables';

// Fix Safari mobile fix, where vh values are wrongly calculated
// https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
export const setVh = (value: number) => `calc(var(--vh, 1vh) * ${value})`;

export const setTypography = (category: keyof typeof fonts.scale) => `
  ${Object.entries(fonts.scale[category])
    .map(([key, value]) => {
      const isRemUnit = ['fontSize'].includes(key);
      const isPercUnit = ['lineHeight'].includes(key);
      const isEmUnit = ['letterSpacing'].includes(key);
      const parsedKey = kebabCase(key);
      // @ts-ignore
      return isRemUnit ? `${rfs(`${pxToRems(value)}rem`, `${parsedKey}`)};` : `${parsedKey}: ${value}${isEmUnit ? 'em' : ''}${isPercUnit ? '%' : ''};`;
    })
    .join('\n')}
`;

export const isDarkColor = (color: keyof typeof colors) =>
  ['black'].includes(color);

export const pxToRems = (fontSize: number) => {
  const rootSize = VARS.defaultFontSize;
  let remSize = 1;
  // Calculate rem size
  remSize = Number((fontSize / rootSize).toFixed(3));
  return remSize;
};

export const mqCustom = (breakpoint: number) => `(max-width: ${breakpoint}px)`;
export const mediaCustom = (breakpoint: number, content: string | FlattenSimpleInterpolation) =>
  `@media ${mqCustom(breakpoint)} {
    ${content}
  }`;
// @ts-ignore
export const fetcher = (...args) => fetch(...args).then(res => res.json());
