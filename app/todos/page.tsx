'use client';

import { cn, fetcher } from '@/lib/utils';
import { Todo } from '@/types';
import Link from 'next/link';
import useSWR from 'swr';

export default function Home() {
  const { data, error, isLoading } = useSWR<Todo[]>('/api/todos', fetcher);
  if (error) return <div>failed to load {error.message}</div>;
  if (isLoading) return <div>loading...</div>;

  // render data
  return (
    <div className="container grid grid-cols-2 gap-4">
      {data?.map((todo) => (
        <Link
          key={todo.id}
          href={`/todos/${todo.id}`}
          className="flex items-center justify-between rounded-md border p-4"
        >
          <div>
            <h1 className="text-2xl font-bold">{todo.title}</h1>
            <p className="text-sm text-gray-500">
              {todo.completed ? 'Completed' : 'Not Completed'}
            </p>
          </div>
          <div className="relative">
            <div
              className={cn(
                'size-3 rounded-full',
                todo.completed ? 'bg-green-500' : 'bg-red-500'
              )}
            />
            <div
              className={cn(
                'absolute inset-0 size-3 animate-ping rounded-full',
                todo.completed ? 'bg-green-500' : 'bg-red-500'
              )}
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
