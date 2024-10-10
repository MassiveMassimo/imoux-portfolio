"use client";

import type { MutableRefObject } from "react";

import { useCallback, useRef, useState } from "react";

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
  cursors,
}: {
  cursors: MutableRefObject<CursorsState>;
}) {
  console.log(cursors);
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

  const onSubmit = contextSafe(() => {
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
  });

  const join = useCallback(() => {
    setJoined(true);
    setUsername(inputValue);
  }, [inputValue, setJoined, setUsername]);

  return (
    <div
      ref={controlsScope}
      className="fixed inset-x-0 bottom-0 z-10 flex flex-col items-center py-4"
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
            <Presences cursors={cursors.current} />
            <Button variant="outline" size="icon" onClick={onSubmit}>
              <LogOut className="size-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
