import { NextResponse } from "next/server";

let todos = [
  { id: 1, text: "Task number 1.", completed: false },
  { id: 2, text: "Task number 2", completed: true },
  { id: 3, text: "Task number 3", completed: false },
  { id: 4, text: "Task number 4", completed: true },
];


export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  todos = todos.filter((todo) => todo.id !== id);
  return NextResponse.json({ message: "Task deleted." });
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  const { completed } = await req.json();
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, completed } : todo
  );
  return NextResponse.json({ message: "Task has been updated." });
}
