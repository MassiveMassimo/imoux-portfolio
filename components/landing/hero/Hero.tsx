import { useRef, useEffect } from "react";
import TopLeft from "./TopLeft";
import TopRight from "./TopRight";
import BottomLeft from "./BottomLeft";
import BottomRight from "./BottomRight";

export default function Hero() {
  const hero = useRef<HTMLDivElement>(null);
  const toprow = useRef<HTMLDivElement>(null);
  const bottomrow = useRef<HTMLDivElement>(null);
  const tl = useRef<HTMLDivElement>(null);
  const tr = useRef<HTMLDivElement>(null);
  const bl = useRef<HTMLDivElement>(null);
  const br = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      if (
        hero.current &&
        tl.current &&
        tr.current &&
        bl.current &&
        br.current &&
        toprow.current &&
        bottomrow.current
      ) {
        const rect = hero.current.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        const width = Math.max(Math.min((mouseX / rect.width) * 100, 80), 20);
        const height = Math.max(Math.min((mouseY / rect.height) * 100, 70), 30);
        tl.current.style.width = `${width}%`;
        bl.current.style.width = `${width}%`;
        tr.current.style.width = `${100 - width}%`;
        br.current.style.width = `${100 - width}%`;
        toprow.current.style.height = `${height}%`;
        bottomrow.current.style.height = `${100 - height}%`;
      }
    }

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [hero]);

  return (
    <section ref={hero} className="mt-16 flex h-screen flex-col">
      <div ref={toprow} className="flex grow flex-row">
        <div
          ref={tl}
          className="flex grow @container"
        >
          <TopLeft />
        </div>
        <div ref={tr} className="flex grow bg-gradient-to-b from-slate-50 to-slate-200 @container">
          <TopRight />
        </div>
      </div>
      <div ref={bottomrow} className="flex grow flex-row">
        <div ref={bl} className="flex grow bg-gradient-to-b from-slate-50 to-slate-200 @container">
          <BottomLeft />
        </div>
        <div ref={br} className="flex grow @container">
          <BottomRight />
        </div>
      </div>
    </section>
  );
}
