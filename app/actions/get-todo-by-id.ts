import { Todo } from '@/types';

export async function getTodoById(id: string): Promise<Todo> {
  const todo = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const data = await todo.json();
  return data;
}
