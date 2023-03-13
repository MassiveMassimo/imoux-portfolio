import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Ristek from "./Ristek";
import Chronos from "./Chronos";
import RistekLogo from "../../logos/RistekLogo";
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
    <section className="relative flex h-[80vh] w-full gap-10 px-8 lg:px-16">
      <nav className="highlight flex basis-1/4 flex-col justify-center overflow-hidden rounded-xl bg-slate-200 ring-1 ring-slate-900/10 dark:bg-slate-800">
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
          >
            {selectedComponent}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
