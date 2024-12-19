import LogoCarousel from "../components/LogoCarousel";

export default async function CraftPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  return (
    <main className="flex min-h-svh flex-col">
      <section className="flex h-[50svh] flex-col items-center justify-center bg-gradient-to-t from-slate-100">
        <LogoCarousel />
      </section>

      <section className="">
        <h1 className="text-4xl">{slug}</h1>
      </section>
    </main>
  );
}
