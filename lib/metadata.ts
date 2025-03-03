import { getTranslations } from "next-intl/server";

export async function generateMetadata(page: string) {
  const t = await getTranslations(page);

  return {
    title: t('meta.title') || 'sos-nextjs-Jamei',
    description: t('meta.description') || 'sos-nextjs-Jamei Description',
  };
}
