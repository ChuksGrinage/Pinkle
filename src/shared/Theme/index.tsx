import { extendTheme } from "@chakra-ui/react";
// import { createBreakpoints } from '@chakra-ui/theme-tools'

// const breakpoints = createBreakpoints({
// 	sm: '40em',
// 	md: '52em',
// 	lg: '64em',
// 	xl: '80em',
// })

const theme = extendTheme({
  fonts: {
    // heading: 'Nova mono, monospace',ss
    body: "Lato, sans-serif",
  },
  colors: {
    nyanza: "#d8f3dcff",
    pinkleGreen: "#b7e4c7ff",
    turquoisegreen2: "#95d5b2ff",
    oceangreen: "#74c69dff",
    oceangreen2: "#52b788ff",
    illuminatingemerald: "#40916cff",
    bottlegreen: "#2d6a4fff",
    brunswickgreen: "#1b4332ff",
    darkjunglegreen: "#081c15ff",
    Cultured: "#f8f9fa",
    Cultured2: "#e9ecef",
    Gainsboro: "#dee2e6",
    LightGray: "#ced4da",
    CadetBlueCrayola: "#adb5bd",
    SlateGray: "#6c757d",
    DavysGrey: "#495057",
    Gunmetal: "#343a40",
    CharlestonGreen: "#212529",
  },
  spacing: {
    four: "4px",
    eight: "8px",
    twelve: "12px",
    sixteen: "16px",
    twentyFour: "24px",
    thirtyTwo: "32px",
    thirtyEight: "38px",
    fortyTwo: "42px",
  },
});

export default theme;
