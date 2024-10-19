// components
import { Button } from "@/components/ui/button";
// icons
import { PartyPopper } from "lucide-react";

type ButtonVariant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";
type ButtonSize = "default" | "sm" | "lg" | "icon";

const components = [
  {
    title: "Button",
    variants: [
      "default",
      "destructive",
      "outline",
      "secondary",
      "ghost",
      "link",
    ] as ButtonVariant[],
    sizes: ["default", "sm", "lg", "icon"] as ButtonSize[],
    component: Button,
  },
];

export default function Components() {
  return (
    <main className="min-h-svh">
      <div className="flex">
        <div className="h-20 basis-1/2 border-r border-slate-200 bg-white text-slate-900 shadow-xl dark:border-slate-700 dark:bg-slate-900">
          Components
        </div>
        <div className="h-20 basis-1/2 bg-gradient-to-r from-slate-100 via-white to-white py-10 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900"></div>
      </div>
      {components.map(({ title, variants, sizes, component: Component }) =>
        variants.map((variant) =>
          sizes.map((size) => (
            <div key={`${title}${variant}${size}`} className="flex">
              <div className="basis-1/2 border-r border-slate-200 bg-white shadow-xl dark:border-slate-700 dark:bg-slate-900">
                {title} - {variant} - {size}
              </div>
              <div className="flex basis-1/2 items-center justify-center bg-gradient-to-r from-slate-100 via-white to-white py-10 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
                <Component variant={variant} size={size}>
                  {size === "icon" ? (
                    <PartyPopper size={20} />
                  ) : (
                    `${variant} - ${size}`
                  )}
                </Component>
              </div>
            </div>
          )),
        ),
      )}
    </main>
  );
}
