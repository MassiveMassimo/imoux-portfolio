import About from "./components/About";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";

export default function Home() {
  return (
    <main className="flex min-h-svh flex-col items-center py-40 *:max-w-3xl">
      <Hero />
      <About />
      {/* <Timeline /> */}
    </main>
  );
}
