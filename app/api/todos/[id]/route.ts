import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const todo = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.id}`
  );
  const data = await todo.json();
  return NextResponse.json(data);
}
