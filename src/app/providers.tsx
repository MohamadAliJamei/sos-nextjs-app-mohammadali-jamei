"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { getTheme } from "@/src/lib/theme";
import { usePathname } from "next/navigation";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import createCache, { StylisPlugin } from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";

export default function Providers({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const locale = pathname.startsWith("/fa") ? "fa" : "en";

  const theme = getTheme(locale);
  const prefixerPlugin: StylisPlugin = (element) => {
    if (typeof element === "string") {
      return prefixer(element);
    }
  };
  const cacheRtl = createCache({
    key: locale === "fa" ? "mui-rtl" : "mui",
    stylisPlugins: locale === "fa" ? [prefixerPlugin, rtlPlugin] : [],
  });

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
