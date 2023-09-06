import Script from "next/script";
import { LivePreview } from "react-live";

export default function Preview() {
  return (
    <>
      <Script src="https://cdn.tailwindcss.com" />
      <LivePreview />
    </>
  );
}
