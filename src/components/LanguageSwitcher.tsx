"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();

  const currentLocale = pathname.split("/")[1];
  const newLocale = currentLocale === "fa" ? "en" : "fa";
  const newPath = `/${newLocale}${pathname.substring(3)}`;

  return <Link href={newPath}>{newLocale === "fa" ? "فارسی" : "English"}</Link>;
}
