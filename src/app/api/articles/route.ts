import { NextResponse } from "next/server";

const articles = [
  { id: '1', title: "راهنمای دریافت معرفی‌نامه", content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی", image: "/images/articles/article1.png" },
  { id: '2', title: "مقاله دوم", content: "محتوای مقاله دوم", image: "/images/articles/article2.png" },
  { id: '3', title: "مقاله سوم", content: "محتوای مقاله سوم", image: "/images/articles/article3.png" },
  { id: '4', title: "مقاله چهارم", content: "محتوای مقاله چهارم", image: "/images/articles/article4.png" },
  { id: '5', title: "مقاله پنجم", content: "محتوای مقاله پنجم", image: "/images/articles/article5.png" },
  { id: '6', title: "مقاله ششم", content: "محتوای مقاله ششم", image: "/images/articles/article6.png" },
];

export async function GET() {
  return NextResponse.json(articles);
}