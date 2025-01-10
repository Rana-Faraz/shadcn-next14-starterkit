import { NextResponse } from 'next/server';

export async function GET() {
  const todos = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await todos.json();
  return NextResponse.json(data);
}
