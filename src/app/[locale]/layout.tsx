import { NextIntlClientProvider } from "next-intl";
import Providers from "../providers";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/src/i18n/routing";
import { generateMetadata as createMetadata } from "@/src/lib/metadata";
import Header from "@/src/components/common/header";
import "../globals.css";
import { CssBaseline, Grid2 } from "@mui/material";

export async function generateMetadata() {
  return createMetadata("home");
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === "fa" ? "rtl" : "ltr"}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <CssBaseline />
            <Header locale={locale} />
            <Grid2 sx={{ mt: 12 }}>{children}</Grid2>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
