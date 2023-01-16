import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { StreamLanguage } from "@codemirror/language";
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
    <section className="flex w-full px-8 lg:px-16 py-20">
      <div className="w-1/2">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-4xl lg:text-5xl">
          Editor Section
        </h2>
      </div>
      <div className="w-1/2">
        <CodeMirror
          className="text-base p-5 bg-sky-400"
          height="500px"
          value='<section className="flex w-full px-8 lg:px-16 py-20">
          <div className="w-1/2">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-4xl lg:text-5xl"> 
              Editor Section
            </h2>
          </div>
        </section>'
          basicSetup={{
            foldGutter: false,
          }}
          theme={resolvedTheme === "dark" ? githubDark : githubLight}
          // extensions={[StreamLanguage.define(html)]}
          onChange={onChange}
        />
      </div>
    </section>
  );
}
