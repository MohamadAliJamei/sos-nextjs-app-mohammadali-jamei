import { Container, Typography, List, ListItem, ListItemText } from "@mui/material";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

type props = {
  params: { locale: string };
}
export default async function HomePage(props: props){
  const res = await fetch("http://localhost:3000/api/articles", { cache: "no-store" });
  const articles = await res.json();
  
  const { locale } = props.params;
  const t = await getTranslations('home');
  return (
    <Container>
      <Typography variant="h4" gutterBottom>{t('articles')}</Typography>
      <List>
        {articles.map((article: { id: number; title: string, image: string }) => (
          <ListItem key={article.id} component="a" href={`${locale}/articles/${article.id}`}>
            <ListItemText primary={article.title} />
            <Image src={article.image} alt={article.title} width={316}  height={158} priority />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}