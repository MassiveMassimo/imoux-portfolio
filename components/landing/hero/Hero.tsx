import { useRef, useEffect, useState } from "react";
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
  const [tlCollapse, setTlCollapse] = useState<boolean>(false);
  const [trCollapse, setTrCollapse] = useState<boolean>(false);
  const [blCollapse, setBlCollapse] = useState<boolean>(false);
  const [brCollapse, setBrCollapse] = useState<boolean>(false);

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

        if (width == 20 && height == 30) {
          setTlCollapse(true);
        } else {
          setTlCollapse(false);
        }
        if (width == 80 && height == 30) {
          setTrCollapse(true);
        } else {
          setTrCollapse(false);
        }
        if (width == 20 && height == 70) {
          setBlCollapse(true);
        } else {
          setBlCollapse(false);
        }
        if (width == 80 && height == 70) {
          setBrCollapse(true);
        } else {
          setBrCollapse(false);
        }
      }
    }

    hero.current?.addEventListener("mousemove", handleMouseMove);
    return () => {
      hero.current?.removeEventListener("mousemove", handleMouseMove);
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
        <div ref={tr} className="flex grow @container">
          <TopRight collapse={trCollapse} />
        </div>
      </div>
      <div ref={bottomrow} className="flex grow flex-row">
        <div ref={bl} className="flex grow @container">
          <BottomLeft />
        </div>
        <div ref={br} className="flex grow @container">
          <BottomRight />
        </div>
      </div>
    </section>
  );
}
