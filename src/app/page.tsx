import About from "./components/About";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-svh flex-col items-stretch py-40">
      <Hero />
      <About />
    </main>
  );
}
