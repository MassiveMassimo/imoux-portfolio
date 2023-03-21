import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Experience from "./Experience";
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

export default function Experiences() {
  const [selectedComponent, setSelectedComponent] = useState<JSX.Element>();
  const [selectedComponentKey, setSelectedComponentKey] = useState<string>();

  const handleButtonClick = (experienceId: string) => {
    setSelectedComponent(<Experience experienceId={experienceId} />);
    setSelectedComponentKey(experienceId);
  };

  return (
    <section className="relative flex h-screen w-full flex-row gap-5 px-8 lg:px-16">
      <nav className="highlight flex basis-1/4 flex-col overflow-hidden py-10 rounded-xl bg-slate-200 ring-1 ring-slate-900/10 dark:bg-slate-800/50">
        <div
          className="group cursor-pointer flex items-center space-x-2 px-8 py-3 text-left hover:bg-slate-300 dark:hover:bg-slate-700"
          onClick={() => handleButtonClick("ristek")}
        >
          <RistekLogo />
          <p className="font-medium text-slate-600  dark:text-slate-400">
            RISTEK Fasilkom UI
          </p>
        </div>
        <div
          className="group cursor-pointer flex items-center space-x-2 px-8 py-3 text-left hover:bg-slate-300 dark:hover:bg-slate-700"
          onClick={() => handleButtonClick("compfest")}
        >
          <CompfestLogo />
          <p className="font-medium text-slate-600  dark:text-slate-400">
            COMPFEST
          </p>
        </div>
        <div
          className="group cursor-pointer flex items-center space-x-2 px-8 py-3 text-left hover:bg-slate-300 dark:hover:bg-slate-700"
          onClick={() => handleButtonClick("chronos")}
        >
          <ChronosLogo />
          <p className="font-medium text-slate-600  dark:text-slate-400">
            Chronos
          </p>
        </div>
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
