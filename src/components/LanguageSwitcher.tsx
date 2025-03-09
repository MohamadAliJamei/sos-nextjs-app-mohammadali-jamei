"use client";

import { Button } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();

  const currentLocale = pathname.split("/")[1];
  const newLocale = currentLocale === "fa" ? "en" : "fa";
  const router = useRouter();

  const changeLocale = (newLocale: string) => {
    fetch("/api/locale", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ locale: newLocale }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const newPath = `/${newLocale}${pathname.replace(/^\/(fa|en)/, "")}`;
          router.push(newPath);
        }
      })
      .catch((err) => console.error("Error updating locale:", err));
  };
  
  return <Button sx={{
    minWidth: {xs: '16px', lg: "64px"}
  }} variant="text" size="small" onClick={() => changeLocale(newLocale)}>{newLocale}</Button>
}
