import { NextResponse } from "next/server";

let todos = [
  { id: 1, text: "Task number 1.", completed: false },
  { id: 2, text: "Task number 2", completed: true },
  { id: 3, text: "Task number 3", completed: false },
  { id: 4, text: "Task number 4", completed: true },
];

export async function GET() {
  return NextResponse.json(todos);
}

export async function POST(req: Request) {
  const { text } = await req.json();
  const newTodo = { id: Date.now(), text, completed: false };
  todos.push(newTodo);
  return NextResponse.json(newTodo, { status: 201 });
}
