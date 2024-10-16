import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Experience from "./Experience";
import RistekLogo from "../../logos/RistekLogo";
import CompfestLogo from "../../logos/CompfestLogo";
import VishwakarmaLogo from "../../logos/VishwakarmaLogo";
import DN35Logo from "../../logos/DN35Logo";
import ChronosLogo from "../../logos/ChronosLogo";

const containerVariants = {
  hidden: {
    opacity: 0,
    y: "-40",
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
    },
  },
  exit: {
    opacity: 0,
    y: "20vh",
    scale: 0.975,
    transition: {
      ease: "easeInOut",
      duration: 0.2,
    },
  },
};

export default function Experiences() {
  const [selectedComponent, setSelectedComponent] = useState<JSX.Element>(
    <Experience experienceId="ristek" />
  );

  const [selectedComponentKey, setSelectedComponentKey] = useState<string>();

  const handleButtonClick = (experienceId: string) => {
    setSelectedComponent(<Experience experienceId={experienceId} />);
    setSelectedComponentKey(experienceId);
  };

  return (
    <section
      id="experience"
      className="relative flex h-screen w-full flex-row gap-5 px-8 lg:px-16"
    >
      <nav className="highlight flex basis-1/4 flex-col overflow-hidden rounded-xl bg-slate-200 py-10 ring-1 ring-slate-900/10 dark:bg-slate-800/50">
        <div
          className="trailer-right group flex items-center space-x-2 px-8 py-4 text-left hover:bg-slate-300 dark:hover:bg-slate-700"
          onClick={() => handleButtonClick("ristek")}
        >
          <RistekLogo />
          <p className="font-medium text-slate-600  dark:text-slate-400">
            RISTEK Fasilkom UI
          </p>
        </div>
        <div
          className="trailer-right group flex items-center space-x-2 px-8 py-4 text-left hover:bg-slate-300 dark:hover:bg-slate-700"
          onClick={() => handleButtonClick("compfest")}
        >
          <CompfestLogo />
          <p className="font-medium text-slate-600  dark:text-slate-400">
            COMPFEST
          </p>
        </div>
        <div
          className="trailer-right group flex items-center space-x-2 px-8 py-4 text-left hover:bg-slate-300 dark:hover:bg-slate-700"
          onClick={() => handleButtonClick("vishwakarma")}
        >
          <VishwakarmaLogo />
          <p className="font-medium text-slate-600  dark:text-slate-400">
            Vishwakarma
          </p>
        </div>
        <div
          className="trailer-right group flex items-center space-x-2 px-8 py-4 text-left hover:bg-slate-300 dark:hover:bg-slate-700"
          onClick={() => handleButtonClick("dn35")}
        >
          <DN35Logo />
          <p className="font-medium text-slate-600  dark:text-slate-400">
            Dies Natalis Fasilkom UI
          </p>
        </div>
        <div
          className="trailer-right group flex items-center space-x-2 px-8 py-4 text-left hover:bg-slate-300 dark:hover:bg-slate-700"
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
