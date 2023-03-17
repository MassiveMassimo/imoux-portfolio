import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Ristek from "./Ristek";
import Compfest from "./Compfest";
import Chronos from "./Chronos";
import RistekLogo from "../../logos/RistekLogo";
import CompfestLogo from "../../logos/CompfestLogo";
import ChronosLogo from "../../logos/ChronosLogo";

const containerVariants = {
  hidden: {
    opacity: 0,
    y: "-40",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
    },
  },
  exit: {
    opacity: 0,
    y: "20vh",
    transition: {
      ease: "easeInOut",
      duration: 0.2,
    },
  },
};

export default function Experience() {
  const [selectedComponent, setSelectedComponent] = useState<JSX.Element>();
  const [selectedComponentKey, setSelectedComponentKey] = useState<string>();

  const handleButtonClick = (component: JSX.Element) => {
    setSelectedComponent(component);
    setSelectedComponentKey(component.type.toString());
  };

  return (
    <section className="relative flex h-screen w-full flex-row gap-10 px-8 lg:px-16">
      <nav className="highlight flex basis-1/4 flex-col overflow-hidden py-10 rounded-xl bg-slate-200 ring-1 ring-slate-900/10 dark:bg-slate-800/50">
        <button
          className="group flex items-center space-x-2 px-8 py-3 text-left hover:bg-slate-300 dark:hover:bg-slate-700"
          onClick={() => handleButtonClick(<Ristek />)}
        >
          <RistekLogo />
          <p className="font-medium text-slate-600  dark:text-slate-400">
            RISTEK Fasilkom UI
          </p>
        </button>
        <button
          className="group flex items-center space-x-2 px-8 py-3 text-left hover:bg-slate-300 dark:hover:bg-slate-700"
          onClick={() => handleButtonClick(<Compfest />)}
        >
          <CompfestLogo />
          <p className="font-medium text-slate-600  dark:text-slate-400">
            COMPFEST
          </p>
        </button>
        <button
          className="group flex items-center space-x-2 px-8 py-3 text-left hover:bg-slate-300 dark:hover:bg-slate-700"
          onClick={() => handleButtonClick(<Chronos />)}
        >
          <ChronosLogo />
          <p className="font-medium text-slate-600  dark:text-slate-400">
            Chronos
          </p>
        </button>
      </nav>
      <AnimatePresence mode="wait">
        {selectedComponent && (
          <motion.div
            key={selectedComponentKey}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex-1 overflow-y-auto"
          >
            {selectedComponent}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
