import { notFound } from "next/navigation";
import { Container, Typography } from "@mui/material";
import Image from "next/image";

type Props = {
  params: { id: string };
};

async function getArticle(id: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/articles/${id}`);
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    return null;
  }
}

export default async function ArticlePage({ params: { id } }: Props) {
  const article = await getArticle(id);

  if (!article) {
    return notFound();
  }

  return (
    <Container>
      <Typography variant="h2">{article.title}</Typography>
      <Typography variant="body1">{article.content}</Typography>
      {article.image && <Image src={article.image} alt={article.title} width={316} height={159} />}
    </Container>
  );
}
