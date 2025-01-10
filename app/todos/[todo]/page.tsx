'use client';

import { fetcher } from '@/lib/utils';
import { Todo } from '@/types';
import useSWR from 'swr';

export default function TodoPage({ params }: { params: { todo: string } }) {
  const { data, error, isLoading } = useSWR<Todo>(
    `/api/todos/${params.todo}`,
    fetcher
  );
  if (error) return <div>failed to load {error.message}</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div className="container">
      <h1 className="text-2xl font-bold">{data?.title}</h1>
      <p className="text-sm text-gray-500">
        {data?.completed ? 'Completed' : 'Not Completed'}
      </p>
    </div>
  );
}
