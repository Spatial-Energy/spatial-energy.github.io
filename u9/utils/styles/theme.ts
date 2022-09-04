import { createRFS } from "./rfs";

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
    primary: "#000000",
    white: "#ffffff",
    black: "#000000",
    cararra: "#eeede8",
    bianca: "#FDFCF5",
    codGray: "#111111",
    codGray2: "#1a1a1a",
    pampas: "#F0EFE7",
    mystic: "#DDE8EC",
    moonMist: "#D9DAC9",
    snuff: "#DFDDEC",
    pink: "pink",
  },
  rfs: createRFS({ rfsBreakpoint: "1920px" }),
  fonts: {
    face: {
      primary: "sans-serif",
      code: "Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace",
    },
    scale: {
      // TODO (FE): should follow some guidelines. For now, just using layout scales
      headline1: {
        fontFamily: "Trap",
        fontSize: 120,
        lineHeight: 90,
        fontWeight: FontWeights.semiBold,
        letterSpacing: -0.03,
        fontStyle: "normal",
      },
      headline2: {
        fontFamily: "Trap",
        fontSize: 150,
        lineHeight: 90,
        fontWeight: FontWeights.semiBold,
        letterSpacing: -0.03,
        fontStyle: "normal",
      },
      headline3: {
        fontFamily: "Trap",
        fontSize: 36,
        lineHeight: 90,
        fontWeight: FontWeights.medium,
        letterSpacing: -0.03,
        fontStyle: "normal",
      },
      headline4: {
        fontFamily: "Trap",
        fontSize: 16,
        lineHeight: 90,
        fontWeight: FontWeights.semiBold,
        letterSpacing: -0.03,
        fontStyle: "normal",
        textTransform: "uppercase",
      },
      headline5: {
        fontFamily: "Trap",
        fontSize: 64,
        lineHeight: 90,
        fontWeight: FontWeights.medium,
        letterSpacing: -0.03,
        fontStyle: "normal",
      },
      headline6: {
        fontFamily: "Trap",
        fontSize: 100,
        lineHeight: 90,
        fontWeight: FontWeights.semiBold,
        letterSpacing: -0.03,
        fontStyle: "normal",
      },
      headline7: {
        fontFamily: "Trap",
        fontSize: 22,
        lineHeight: 90,
        fontWeight: FontWeights.semiBold,
        letterSpacing: -0.03,
        fontStyle: "normal",
      },
      headline8: {
        fontFamily: "Trap",
        fontSize: 48,
        lineHeight: 90,
        fontWeight: FontWeights.semiBold,
        letterSpacing: -0.03,
        fontStyle: "normal",
      },
      body1: {},
      body2: {
        fontFamily: "Darker Grotesque",
        fontSize: 20,
        lineHeight: 120,
        fontStyle: "normal",
        fontWeight: FontWeights.medium,
      },
      caption: {
        fontFamily: "Trap",
        fontSize: 14,
        lineHeight: 120,
        fontStyle: "normal",
        fontWeight: FontWeights.semiBold,
      },
    },
  },
} as const;

// Aliases
export const { colors, fonts, rfs } = theme;

export default theme;
