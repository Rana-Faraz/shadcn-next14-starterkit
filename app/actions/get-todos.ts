import { Todo } from '@/types';

export async function getTodos(): Promise<Todo[]> {
  const todos = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await todos.json();
  return data;
}
