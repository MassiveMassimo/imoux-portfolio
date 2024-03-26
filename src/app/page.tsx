import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-svh flex-col items-center gap-10 bg-white p-24 dark:bg-slate-900">
      <h1 className="text-5xl font-600">Press / to chat</h1>
      <Button className="font-400">Click me</Button>
    </main>
  );
}
