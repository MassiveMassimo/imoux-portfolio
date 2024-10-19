"use client";

import type { MutableRefObject } from "react";

import { useCallback, useMemo, useRef, useState } from "react";

import { motion } from "framer-motion";
import gsap from "gsap";
import { useAtom } from "jotai";
import { LogOut } from "lucide-react";

import { joinedAtom, usernameAtom } from "@/app/atoms";
import { useGSAP } from "@gsap/react";
import { CursorsState } from "./Multiplayer";
import { Presences } from "./Presences";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

gsap.registerPlugin(useGSAP);

export default function MultiplayerControls({
  cursors: { current: cursorsCurrent },
}: Readonly<{
  cursors: MutableRefObject<CursorsState>;
}>) {
  const [joined, setJoined] = useAtom(joinedAtom);
  const [username, setUsername] = useAtom(usernameAtom);
  const [inputValue, setInputValue] = useState(username || ""); // Manage input state

  const controlsScope = useRef(null);
  const inputRef = useRef(null);
  const joinButtonRef = useRef(null);
  const controlsRef = useRef(null);

  const { contextSafe } = useGSAP({ scope: controlsScope });

  useGSAP(
    () => {
      if (!joined) {
        gsap.from([inputRef.current, joinButtonRef.current], {
          width: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.6,
          ease: "back.out(1)",
        });
      } else {
        gsap.fromTo(
          controlsRef.current,
          {
            width: 0,
            opacity: 0,
            filter: "blur(20px)",
          },
          {
            width: "auto",
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.6,
            ease: "back.out(1)",
          },
        );
      }
    },
    { scope: controlsScope, dependencies: [joined] },
  );

  const join = useCallback(() => {
    setJoined(true);
    setUsername(inputValue);
  }, [inputValue, setJoined, setUsername]);

  const onSubmit = useCallback(
    contextSafe(() => {
      if (!joined) {
        gsap.to([inputRef.current, joinButtonRef.current], {
          width: 0,
          opacity: 1,
          filter: "blur(20px)",
          duration: 0.6,
          ease: "circ.in",
          onComplete: () => join(),
        });
      } else {
        gsap.to(controlsRef.current, {
          width: 0,
          opacity: 0,
          filter: "blur(20px)",
          duration: 0.6,
          ease: "back.in(1)",
          onComplete: () => {
            setJoined(false);
            setUsername("");
          },
        });
      }
    }),
    [contextSafe, join, joined, setJoined, setUsername],
  );

  const handleLogOutClick = useMemo(
    () => contextSafe(() => onSubmit()),
    [contextSafe, onSubmit],
  );

  // Memoize the cursorsCurrent to ensure stable props for Presences
  const memoizedCursors = useMemo(
    () => ({ ...cursorsCurrent }),
    [cursorsCurrent],
  );

  return (
    <>
      <div
        ref={controlsScope}
        className="fixed inset-x-0 bottom-0 z-30 flex flex-col items-center bg-gradient-to-t from-slate-200 via-60% py-4 dark:from-slate-950"
      >
        <div className="z-10 flex gap-2">
          {!joined ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onSubmit();
              }}
              className="flex items-center gap-2"
            >
              <Input
                ref={inputRef}
                placeholder="Cursor display name"
                className="w-80 capitalize placeholder:normal-case"
                autoComplete="off"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} // Update input value
                required
              />
              <Button ref={joinButtonRef} type="submit">
                Join
              </Button>
            </form>
          ) : (
            <div ref={controlsRef} className="flex gap-2">
              <Presences cursors={memoizedCursors} />
              <motion.div layout>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleLogOutClick}
                >
                  <LogOut className="size-4" />
                </Button>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
