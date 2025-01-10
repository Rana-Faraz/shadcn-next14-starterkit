import { getTodos } from '@/app/actions/get-todos';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default async function Home() {
  const data = await getTodos();

  return (
    <div className="container grid grid-cols-2 gap-4">
      {data?.map((todo) => (
        <Link
          key={todo.id}
          href={`/server/todos/${todo.id}`}
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
