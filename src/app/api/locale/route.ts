import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookiesStore = cookies();
  const locale = cookiesStore.get("NEXT_LOCALE")?.value || "fa";
  return NextResponse.json({locale});
}

export async function POST(req: Request) {
  const { locale } = await req.json();

  if (!locale) {
    return NextResponse.json({ error: "Locale is required" }, { status: 400 });
  }

  cookies().set("NEXT_LOCALE", locale, { path: "/" });

  return NextResponse.json({ success: true });
}