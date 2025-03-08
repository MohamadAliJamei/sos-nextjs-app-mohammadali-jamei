import { Container, Typography, Card, Grid2, Button } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

type props = {
  params: { locale: string };
};
export default async function HomePage(props: props) {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000"
  const res = await fetch(`${BASE_URL}/api/articles`, {
    cache: "no-store",
  });
  const articles = await res.json();

  const { locale } = props.params;
  const t = await getTranslations("home");
  const tCommon = await getTranslations("common");
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {t("articles")}
      </Typography>
      <Grid2 sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        {articles.map(
          (article: {
            id: number;
            title: string;
            image: string;
            content: string;
          }) => (
            <Card key={article.id} sx={{display: "flex", flexDirection: "column", justifyContent:"space-between"}}>
              <Grid2>
                <Image
                  src={article.image}
                  alt={article.title}
                  width={316}
                  height={158}
                  priority
                />
                <Typography variant="h2">{article.title}</Typography>
                <Typography
                  variant="subtitle1"
                  color="grey.400"
                  display={"flex"}
                  alignItems={"center"}
                  gap={1}
                >
                  <AccessTimeIcon />5 دقیقه
                </Typography>
                <Typography variant="body1" color="grey.400">
                  {article.content}
                </Typography>
              </Grid2>
              <Grid2 container justifyContent={"flex-end"}>
                <Button
                  LinkComponent={"a"}
                  href={`${locale}/articles/${article.id}`}
                  variant={"outlined"}
                  color={"primary"}
                >
                  {tCommon("continue")}
                </Button>
              </Grid2>
            </Card>
          )
        )}
      </Grid2>
    </Container>
  );
}
