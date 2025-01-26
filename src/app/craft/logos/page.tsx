import LogoCarousel from "./components/LogoCarousel";

export default function LogosPage() {
  return (
    <main className="flex min-h-svh flex-col">
      <section className="sticky -top-[calc(50svh-120px)] flex h-[50svh] flex-col items-center justify-center rounded-b-[48px] bg-linear-to-t from-slate-100 dark:from-slate-950">
        <LogoCarousel />
      </section>

      <section className=""></section>
    </main>
  );
}
