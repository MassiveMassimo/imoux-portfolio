"use client";

import type { RealtimeChannel } from "@supabase/supabase-js";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { useAtomValue } from "jotai/react";
import { AnimatePresence, motion } from "motion/react";

import { UUIDAtom } from "@/app/atoms";
import { cn, getColor } from "@/lib/utils";
import { Input } from "./ui/input";

export default function CursorBubble({
  username,
  channel,
}: Readonly<{ username: string; channel: RealtimeChannel | null }>) {
  const [chatting, setChatting] = useState(false);
  const [message, setMessage] = useState("");
  const [inputWidth, setInputWidth] = useState(140); // Minimum width
  const measureRef = useRef<HTMLSpanElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const id = useAtomValue(UUIDAtom);

  // Measure the width of the input based on the message content
  useEffect(() => {
    if (measureRef.current) {
      const newWidth = Math.max(140, measureRef.current.offsetWidth + 20);
      if (newWidth !== inputWidth) {
        setInputWidth(newWidth);
      }
    }
  }, [message, inputWidth]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "/" && !chatting) {
        event.preventDefault();
        setChatting(true);
        // Focus the input after a short delay to ensure it's rendered
        setTimeout(() => inputRef.current?.focus(), 0);
      } else if (event.key === "Escape") {
        setChatting(false);
        setMessage("");
        channel?.send({
          type: "broadcast",
          event: "message",
          payload: {
            id: id,
            message: "",
          },
        });
      }
    };

    const handleClickOutside = () => {
      if (chatting) {
        setChatting(false);
        setMessage("");
        channel?.send({
          type: "broadcast",
          event: "message",
          payload: {
            id: id,
            message: "",
          },
        });
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [chatting, channel, id]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setMessage(e.target.value);
      channel?.send({
        type: "broadcast",
        event: "message",
        payload: {
          id: id,
          message: e.target.value,
        },
      });
    },
    [channel, id],
  );

  const handleInputClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent click from bubbling up and triggering the close
  }, []);

  const handleBubbleClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent clicks on the bubble from closing
  }, []);

  const motionProps = useMemo(
    () => ({
      initial: { width: 0, height: 0, filter: "blur(20px)" },
      animate: { width: "auto", height: "auto", filter: "blur(0px)" },
      exit: { width: 0, height: 0, filter: "blur(20px)" },
    }),
    [],
  );

  const inputStyle = useMemo(
    () => ({
      width: inputWidth - 28,
      maxWidth: "420px",
    }),
    [inputWidth],
  );

  return (
    <motion.div
      className={cn(
        "username font-500 fixed z-50 max-w-md translate-x-[50vw] translate-y-[110svh] truncate rounded-[20px] border-2 px-3 py-2 text-sm text-white capitalize shadow-lg transition-[border-top-left-radius] before:transition-[border-top-left-radius]",
        "before:absolute before:inset-0 before:rounded-[18px] before:shadow-inner before:shadow-white/30",
        chatting && "rounded-tl-md before:rounded-tl",
      )}
      style={{
        borderColor: `var(--color-${getColor(username)}-600)`,
        backgroundColor: `var(--color-${getColor(username)}-500)`,
      }}
      onClick={handleBubbleClick} // Prevent clicks on the bubble from closing
    >
      {username}
      {/* Hidden span to measure text width */}
      <span
        ref={measureRef}
        className="absolute -left-[9999px] text-sm whitespace-pre text-inherit"
      >
        {message || "Send a message"}{" "}
        {/* Use placeholder text if message is empty */}
      </span>
      <AnimatePresence>
        {chatting && (
          <motion.div key="chat-box" {...motionProps} className="h-8">
            <Input
              ref={inputRef}
              placeholder="Send a message"
              maxLength={48}
              value={message}
              className="font-400 m-0 h-8! rounded-none border-0 bg-transparent p-0 ring-0 ring-offset-transparent selection:bg-white/30 selection:no-underline placeholder:text-white/70 focus-visible:ring-0 focus-visible:ring-transparent dark:bg-transparent dark:ring-offset-transparent dark:selection:bg-white/30 dark:placeholder:text-white/70 dark:focus-visible:ring-transparent"
              style={inputStyle} // Set dynamic width
              autoFocus
              autoComplete="off"
              onChange={handleInputChange}
              onClick={handleInputClick}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
