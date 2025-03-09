import { useTranslations } from "next-intl";


export function getNavItems(locale: string) {
  const t = useTranslations("header");

  return [
    { id: 1, label: t("home"), href: `/${locale}` },
    { id: 2, label: t("todoList"), href: `/${locale}/todo-list` },
    { id: 3, label: t("medicalServiceCenters"), href: `/${locale}` },
    { id: 4, label: t("branches"), href: `/${locale}` },
    { id: 5, label: t("faq"), href: `/${locale}` },
  ];
}
