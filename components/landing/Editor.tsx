import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { githubLight, githubDark } from "@uiw/codemirror-theme-github";
import { useCallback, useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function Editor() {
  const [hydrated, setHydrated] = useState(false);
  const { theme } = useTheme();
  
  const onChange = useCallback((value: string, viewUpdate: any) => {
    console.log("value:", value);
  }, []);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }
  
  return (
    <section className="relative flex h-4/5 w-full flex-col space-y-5 px-8">
      <h2 className="mx-auto text-center text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
        Editor Section
      </h2>
      <div className="transition duration-500 rotate-90 intersect:transform-none delay-500">
        <CodeMirror
          value="console.log('hello world!');"
          height="400px"
          theme={theme === "dark" ? githubDark : githubLight}
          extensions={[javascript({ typescript: true })]}
          onChange={onChange}
        />
      </div>
    </section>
  );
}
