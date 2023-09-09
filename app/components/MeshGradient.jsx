"use client";

import { useEffect } from "react";
import { Gradient } from "./Gradient";

// interface MeshGradientProps {
//   color1: string;
//   color2: string;
//   color3: string;
//   color4: string;
// }

export default function MeshGradient({ color1, color2, color3, color4 }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      const gradient = new Gradient();
      gradient.initGradient("#gradient-canvas");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <canvas className="h-full w-full absolute" id="gradient-canvas">
      {/* You can customize the colors using the provided props */}
      <style jsx>{`
        div {
          --gradient-color-1: ${color1};
          --gradient-color-2: ${color2};
          --gradient-color-3: ${color3};
          --gradient-color-4: ${color4};
        }
      `}</style>
    </canvas>
  );
}
