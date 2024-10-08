"use client";

import type { RealtimeChannel } from "@supabase/supabase-js";

import { useEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { useAtomValue } from "jotai";

import { UUIDAtom } from "@/app/atoms";
import { cn, getColor } from "@/lib/utils";
import { Input } from "./ui/input";

export default function CursorBubble({
  username,
  channel,
}: Readonly<{ username: string; channel: RealtimeChannel | null }>) {
  const [chatting, setChatting] = useState(false);
  const [message, setMessage] = useState("");
  const [inputWidth, setInputWidth] = useState(60); // Minimum width
  const measureRef = useRef<HTMLSpanElement>(null);

  const id = useAtomValue(UUIDAtom);

  // Measure the width of the input based on the message content
  useEffect(() => {
    if (measureRef.current) {
      const width = Math.max(60, measureRef.current.offsetWidth + 20); // Minimum width of 60px
      setInputWidth(width);
    }
  }, [message]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "/") {
        event.preventDefault();
        setChatting(true);
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

    const handleClickOutside = (event: MouseEvent) => {
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
  }, [chatting]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
    channel?.send({
      type: "broadcast",
      event: "message",
      payload: {
        id: id,
        message: e.target.value,
      },
    });
  };

  const handleInputClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent click from bubbling up and triggering the close
  };

  return (
    <motion.div
      className={cn(
        "username fixed left-0 top-0 z-50 max-w-md -translate-x-[calc(50%-80px)] -translate-y-[calc(50%-40px)] truncate rounded-[20px] px-3 py-2 text-sm font-500 capitalize text-white shadow-lg transition-[border-top-left-radius] before:transition-[border-top-left-radius]",
        `border-2 border-${getColor(username)}-600 bg-${getColor(username)}-500 `,
        "before:absolute before:inset-0 before:rounded-[18px] before:shadow-inner before:shadow-white/30",
        chatting && "rounded-tl-md before:rounded-tl",
      )}
      onClick={(e) => e.stopPropagation()} // Prevent clicks on the bubble from closing
    >
      {username}
      {/* Hidden span to measure text width */}
      <span
        ref={measureRef}
        className="absolute -left-[9999px] whitespace-pre"
        style={{
          font: "inherit",
          fontSize: "0.875rem", // text-sm
        }}
      >
        {message || "Send a message"}{" "}
        {/* Use placeholder text if message is empty */}
      </span>
      <AnimatePresence>
        {chatting && (
          <motion.div
            key="chat-box"
            initial={{ width: 0, height: 0, filter: "blur(20px)" }} // Start hidden
            animate={{ width: "auto", height: "auto", filter: "blur(0px)" }} // Animate in
            exit={{ width: 0, height: 0, filter: "blur(20px)" }} // Animate out
          >
            <Input
              placeholder="Send a message"
              value={message}
              className="m-0 rounded-none border-0 bg-transparent p-0 font-400 ring-0 ring-offset-transparent placeholder:text-white/70 focus-visible:ring-0 focus-visible:ring-transparent dark:bg-transparent dark:ring-offset-transparent dark:placeholder:text-white/70 dark:focus-visible:ring-transparent"
              style={{ width: inputWidth, maxWidth: "420px" }} // Set dynamic width
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
