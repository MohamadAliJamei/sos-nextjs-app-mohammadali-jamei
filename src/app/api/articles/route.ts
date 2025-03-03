import { NextResponse } from "next/server";

const articles = [
  { id: 1, title: "مقاله اول", content: "محتوای مقاله اول", image: "/images/articles/article1.png" },
  { id: 2, title: "مقاله دوم", content: "محتوای مقاله دوم", image: "/images/articles/article2.png" },
  { id: 3, title: "مقاله سوم", content: "محتوای مقاله سوم", image: "/images/articles/article3.png" },
  { id: 4, title: "مقاله چهارم", content: "محتوای مقاله چهارم", image: "/images/articles/article4.png" },
  { id: 5, title: "مقاله پنجم", content: "محتوای مقاله پنجم", image: "/images/articles/article5.png" },
  { id: 6, title: "مقاله ششم", content: "محتوای مقاله ششم", image: "/images/articles/article6.png" },
];

export async function GET() {
  return NextResponse.json(articles);
}