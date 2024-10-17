import ThemeToggle from "@/components/ThemeToggle";

export default function Footer() {
  return (
    <footer className="px-20 pb-24">
      <div className="flex items-center justify-between">
        <p className="text-slate-700 dark:text-slate-300">
          Designed and developed by Imo
        </p>
        <div className="h-10">
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}
