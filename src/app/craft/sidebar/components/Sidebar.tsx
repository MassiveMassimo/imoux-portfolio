import { Calendar, House, NotebookPen } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Sidebar() {
  return (
    <aside
      className="sticky top-0 flex h-svh items-center px-3"
      style={{ viewTransitionName: "sidebar" }}
    >
      <div className="flex size-full max-h-[512px] flex-col items-center rounded-xl border border-slate-300 bg-slate-100 p-1 dark:border-slate-700 dark:bg-slate-800">
        <Button variant="ghost" size="icon" className="rounded-lg">
          <House className="size-4" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-lg">
          <NotebookPen className="size-4" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-lg">
          <Calendar className="size-4" />
        </Button>
      </div>
    </aside>
  );
}
