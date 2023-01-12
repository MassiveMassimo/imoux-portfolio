import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { githubLight, githubDark } from "@uiw/codemirror-theme-github";
import { useCallback, useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function Editor() {
  const [hydrated, setHydrated] = useState(false);
  const { resolvedTheme } = useTheme();
  
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
    <section className="relative flex h-screen w-full flex-col space-y-5 px-8">
      <h2 className="mx-auto text-center text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-4xl lg:text-5xl">
        Editor Section
      </h2>
      <div className="">
        <CodeMirror
          className="text-base"
          value="console.log('hello world!');"
          height="500px"
          basicSetup={{
            foldGutter: false,
          }}
          theme={resolvedTheme === "dark" ? githubDark : githubLight}
          extensions={[javascript({ typescript: true })]}
          onChange={onChange}
        />
      </div>
    </section>
  );
}
