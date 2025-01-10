import { getTodoById } from '@/app/actions/get-todo-by-id';

export default async function TodoPage({
  params,
}: {
  params: { todo: string };
}) {
  const data = await getTodoById(params.todo);

  return (
    <div className="container">
      <h1 className="text-2xl font-bold">{data?.title}</h1>
      <p className="text-sm text-gray-500">
        {data?.completed ? 'Completed' : 'Not Completed'}
      </p>
    </div>
  );
}
