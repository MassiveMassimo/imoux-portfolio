import Bottom from "./components/Bottom";
import Top from "./components/Top";

export default function SpeakerRecognitionPage() {
  return (
    <main className="flex h-svh items-center justify-center gap-10 py-32">
      <div className="flex aspect-[9/19.5] h-full flex-col overflow-clip rounded-[48px] bg-blue-100 shadow-2xl dark:bg-blue-950">
        <div className="relative h-4/9 p-5">
          <Top />
        </div>
        <div className="flex h-1/9 shrink-0 items-center justify-center opacity-20">
          waveform/mitu
        </div>
        <div className="h-4/9 shrink-0 p-1 flex flex-col justify-end">
          <Bottom />
        </div>
      </div>
      <div className="hidden flex-col justify-center gap-5 sm:flex">
        <h1 className="text-2xl">Speaker Recognition Interactions</h1>
      </div>
    </main>
  );
}
