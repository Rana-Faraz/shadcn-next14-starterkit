import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      This is Home Page
      <Button asChild className="mt-4">
        <Link href="/demo">Go to demo page</Link>
      </Button>
      <Button asChild className="mt-4">
        <Link href="/todos">Go to swr demo page</Link>
      </Button>
      <Button asChild className="mt-4">
        <Link href="/server/todos">Go to server action demo page</Link>
      </Button>
      <Button asChild className="mt-4">
        <Link href="/server/todos/slow">
          Go to server action slow demo page
        </Link>
      </Button>
    </main>
  );
}
