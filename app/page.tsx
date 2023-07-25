import Image from "next/image";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-stretch justify-between">
      <HeroSection />
    </main>
  );
}
