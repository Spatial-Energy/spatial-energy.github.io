import { createRFS } from './rfs';

export enum FontWeights {
  extraLight = 200,
  extraLightItalic = 200,
  light = 300,
  lightItalic = 300,
  regular = 400,
  italic = 400,
  medium = 500,
  semiBold = 600,
  semiBoldItalic = 600,
  bold = 700,
  boldItalic = 700,
  black = 900,
}

const theme = {
  // "Name that Color" names
  colors: {
    primary: '#000000',
    white: '#ffffff',
    black: '#000000',
    cararra: '#eeede8',
    bianca: '#FDFCF5',
    codGray: '#111111',
    codGray2: '#1a1a1a',
    pampas: '#F0EFE7',
    mystic: '#DDE8EC',
    moonMist: '#D9DAC9',
    snuff: '#DFDDEC',
  },
  rfs: createRFS({ rfsBreakpoint: '1920px' }),
  fonts: {
    face: {
      primary:
        "sans-serif",
      code:
        'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace',
    },
    scale: {
      // TODO (FE): Based on Material design typography scale, adjust as needed
    },
  },
} as const;

// Aliases
export const { colors, fonts, rfs } = theme;

export default theme;
