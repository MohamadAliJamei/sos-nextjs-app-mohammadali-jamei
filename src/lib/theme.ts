import { createTheme } from "@mui/material/styles";
import { faIR, enUS } from "@mui/material/locale";

export const getTheme = (locale: "fa" | "en") =>
  createTheme(
    {
      direction: locale === "fa" ? "rtl" : "ltr",
      typography: {
        fontFamily: locale === "fa" ? "IRANSans" : "Arial",
        h2: {
          fontSize: "1rem",
          fontWeight: 600,
          color: '#121212'
        },
        body1: {
          fontSize: "0.875rem",
          fontWeight: 400,
        }
      },
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 960,
          lg: 1200,
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
        text: {
          primary: "#121212",
        },
        grey: {
          '100': '#e5e5e5',
          '300': '#9E9E9E',
          '400': '#767676'
        }
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
              '@media (min-width:1200px)': {
                maxWidth: '1180px',
              },
              '@media (min-width:1600px)': {
                maxWidth: '1440px',
                padding: 0,
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
        MuiCard: {
          styleOverrides: {
            root:({theme}) => ({
              borderRadius: 16,
              border: "1px solid",
              borderColor: theme.palette.primary.main,
              boxShadow: "unset",
              padding: 16,
              maxWidth: 348
            }),
          },
        }
      },
    },
    locale === "fa" ? faIR : enUS
  );
