import { createTheme } from "@mui/material/styles";
import { faIR, enUS } from "@mui/material/locale";

export const getTheme = (locale: "fa" | "en") =>
  createTheme(
    {
      direction: locale === "fa" ? "rtl" : "ltr",
      typography: {
        fontFamily: locale === "fa" ? "IRANSans" : "Arial",
      },
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 960,
          lg: 1280,
          xl: 1600,
        },
      },
      palette: {
        primary: {
          main: "#1158A7",
          '100': "#c5e0ff",
          '500': "#5278a3",
          '700': "#2a64a5",
        },
        secondary: {
          main: "#EE1D25",
        },
      },
      components: {
        MuiContainer: {
          defaultProps: {
            maxWidth: 'xl',
          },
          styleOverrides: {
            root: {
              '@media (min-width:600px)': {
                maxWidth: '540px',
              },
              '@media (min-width:960px)': {
                maxWidth: '800px',
              },
              '@media (min-width:1280px)': {
                maxWidth: '1200px',
              },
              '@media (min-width:1600px)': {
                maxWidth: '1440px',
              },
            },
          },
        },
        MuiButton: {
          defaultProps: {
            variant: "contained",
            size: "medium",
          },
          styleOverrides: {
            sizeMedium: {
              paddingLeft: 32,
              paddingRight: 32,
              paddingTop: 16,
              paddingBottom: 16,
              borderRadius: 16,
            },
            containedPrimary: {
              '&: hover': {
                backgroundColor: "primary['700']",
              }
            }
          },
        },
      },
    },
    locale === "fa" ? faIR : enUS
  );
