import { createTheme } from "@mui/material/styles";
import { faIR, enUS } from "@mui/material/locale";

export const getTheme = (locale: "fa" | "en") =>
  createTheme(
    {
      direction: locale === "fa" ? "rtl" : "ltr",
      typography: {
        fontFamily: locale === "fa" ? "IRANSans" : "Arial",
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
