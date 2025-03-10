"use client";

import { useCallback, useState } from "react";

import { useAtomValue, useSetAtom } from "jotai/react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { editingSpeakerAtom, getRandomName, newSpeakerAtom } from "../atoms";

export default function Bottom() {
  const setNewSpeaker = useSetAtom(newSpeakerAtom);
  const editingSpeaker = useAtomValue(editingSpeakerAtom);
  const setEditingSpeaker = useSetAtom(editingSpeakerAtom);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleButtonClick = useCallback(
    (action: () => void) => {
      if (!isDisabled) {
        action();
        setIsDisabled(true);
        setTimeout(() => {
          setIsDisabled(false);
        }, 3000);
      }
    },
    [isDisabled],
  );

  const addRecognized = useCallback(() => {
    const { firstName, lastName } = getRandomName();
    const id = crypto.randomUUID();
    setNewSpeaker({
      id,
      recognized: true,
      firstName,
      lastName,
    });
  }, [setNewSpeaker]);

  const addUnrecognized = useCallback(() => {
    const id = crypto.randomUUID();
    setNewSpeaker({
      id,
      recognized: false,
    });
  }, [setNewSpeaker]);

  return (
    <motion.div
      layout
      transition={{ type: "spring", stiffness: 50 }}
      className={cn(
        "z-10 flex shrink-0 flex-col items-stretch justify-end gap-1 bg-white px-3 py-5 inset-shadow-2xs inset-shadow-white/15 dark:bg-slate-900",
        editingSpeaker ? "h-[200%]" : "h-full",
      )}
      style={{ borderRadius: 44 }}
    >
      {!editingSpeaker ? (
        <motion.div layout className="flex flex-col gap-1">
          <Button
            onClick={() => handleButtonClick(addRecognized)}
            disabled={isDisabled}
          >
            Add recognized
          </Button>
          <Button
            onClick={() => handleButtonClick(addUnrecognized)}
            disabled={isDisabled}
          >
            Add unrecognized
          </Button>
        </motion.div>
      ) : (
        <motion.div layout className="flex flex-col gap-1">
          <Button variant="secondary" onClick={() => setEditingSpeaker(null)}>
            Cancel
          </Button>
          <Button onClick={() => setEditingSpeaker(null)}>Update</Button>
        </motion.div>
      )}
    </motion.div>
  );
}
