"use client";

import type { RefObject } from "react";

import { useCallback, useMemo, useState } from "react";

import { useAtom } from "jotai";
import { LogOut } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { joinedAtom, usernameAtom } from "@/app/atoms";
import { cn } from "@/lib/utils";
import { CursorsState } from "./Multiplayer";
import { Presences } from "./Presences";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const transition = {
  type: "spring",
  duration: 1.5,
  bounce: 0.25,
};

const variants = {
  initial: {
    opacity: 0,
    filter: "blur(20px)",
  },
  animate: {
    opacity: 1,
    filter: "blur(0px)",
    transition,
  },
  exit: {
    opacity: 0,
    filter: "blur(20px)",
    transition,
  },
};

export default function MultiplayerControls({
  cursors: { current: cursorsCurrent },
}: Readonly<{
  cursors: RefObject<CursorsState>;
}>) {
  const [joined, setJoined] = useAtom(joinedAtom);
  const [username, setUsername] = useAtom(usernameAtom);
  const [inputValue, setInputValue] = useState(username || "");

  const join = useCallback(() => {
    setJoined(true);
    setUsername(inputValue);
  }, [inputValue, setJoined, setUsername]);

  const onSubmit = useCallback(() => {
    if (!joined) {
      join();
    } else {
      setJoined(false);
      setUsername("");
    }
  }, [join, joined, setJoined, setUsername]);

  const memoizedCursors = useMemo(
    () => ({ ...cursorsCurrent }),
    [cursorsCurrent],
  );

  return (
    <motion.div
      layoutRoot
      className="fixed inset-x-0 bottom-0 z-30 flex h-20 items-center justify-center"
    >
      <div className="flex max-w-sm grow items-center justify-center">
        <AnimatePresence mode="popLayout">
          {!joined ? (
            <motion.form
              key="join-form"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              layoutId="controls"
              transition={transition}
              onSubmit={(e) => {
                e.preventDefault();
                onSubmit();
              }}
              className="flex h-full max-w-sm grow items-center justify-center gap-2"
            >
              <Input
                placeholder="Cursor display name"
                className="grow capitalize placeholder:normal-case"
                autoComplete="off"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                required
              />
              <Button type="submit" className={cn(joined && "opacity-0")}>
                Join
              </Button>
            </motion.form>
          ) : (
            <motion.div
              key="controls"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              layoutId="controls"
              transition={transition}
              className="flex w-fit items-center justify-between gap-2"
            >
              <Presences cursors={memoizedCursors} />
              <Button variant="outline" size="icon" onClick={onSubmit}>
                <LogOut className="size-4" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
