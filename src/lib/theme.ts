import { createTheme } from "@mui/material/styles";
import { faIR, enUS } from "@mui/material/locale";

export const getTheme = (locale: "fa" | "en") =>
  createTheme({
    direction: locale === "fa" ? "rtl" : "ltr",
    typography: {
      fontFamily: locale === "fa" ? "IRANSans" : "Arial",
    },
  }, locale === "fa" ? faIR : enUS);
