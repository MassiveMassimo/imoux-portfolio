"use client";

import LocalCursor from "./LocalCursor";
import MultiplayerCursor from "./MultiplayerCursor";
import { Button } from "./ui/button";
import { FormField, FormItem, FormControl, Form } from "./ui/form";
import { Input } from "./ui/input";
import { createClient } from "@/utils/supabase/client";
import { useGSAP } from "@gsap/react";
import { RealtimeChannel } from "@supabase/supabase-js";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useForm, FieldValues } from "react-hook-form";

gsap.registerPlugin(useGSAP);
const supabase = createClient();

interface CursorProps {
  id: string;
  username: string;
  location: string;
  x: number;
  y: number;
  presence_ref: string;
}

interface PresenceData {
  location: string;
  username: string;
  x: number;
  y: number;
  presence_ref: string;
}

interface PresenceObject {
  [key: string]: PresenceData[];
}

export default function MultiplayerControls() {
  const pathname = usePathname();

  const [joined, setJoined] = useState(false);
  const [username, setUsername] = useState("");
  const [cursors, setCursors] = useState<PresenceObject>({});
  const [room, setRoom] = useState<RealtimeChannel>(supabase.channel(pathname));
  const [UUID, setUUID] = useState("");

  const controlsScope = useRef(null);
  const controlsRef = useRef(null);

  const form = useForm();

  const { contextSafe } = useGSAP({ scope: controlsScope });

  useEffect(() => {
    const newRoom = supabase.channel(pathname);
    setRoom(newRoom);
  }, [pathname]);

  const onSubmit = contextSafe((formData?: FieldValues) => {
    const newRoom = supabase.channel(pathname);
    gsap.to(controlsRef.current, {
      opacity: 0,
      yPercent: 200,
      duration: 0.7,
      ease: "back.in(2)",
      onComplete: () => {
        setJoined(!joined);
        if (!joined) {
          setUsername(formData?.username);

          const userStatus = {
            username: formData?.username,
            location: pathname,
            x: 0,
            y: -80,
          };
          let personalId = "";

          newRoom
            .subscribe(async (status) => {
              // initial subscription to the room
              if (status !== "SUBSCRIBED") {
                return;
              }
              const presenceTrackStatus = await newRoom.track(userStatus);
              console.log(presenceTrackStatus);
            })
            .on("presence", { event: "join" }, ({ key, newPresences }) => {
              console.log("presence", key, newPresences);
              !personalId && (personalId = key);
              !UUID && setUUID(key);
              console.log(personalId);

              // if (key !== personalId) {
              //   setCursors((prevCursors) => {
              //     const updatedCursors = { ...prevCursors };

              //     updatedCursors[key] = [
              //       {
              //         location: newPresences[0].location,
              //         username: newPresences[0].username,
              //         x: newPresences[0].x,
              //         y: newPresences[0].y,
              //         presence_ref: newPresences[0].presence_ref,
              //       },
              //     ];
              //     console.log(updatedCursors);
              //     return updatedCursors;
              //   });
              // }
            })
            .on("presence", { event: "sync" }, () => {
              const newState = newRoom.presenceState() as PresenceObject;
              console.log(newState);
              console.log(personalId);
              delete newState[personalId];
              console.log(newState);
              setCursors(newState);
            })
            .on("broadcast", { event: "test" }, (payload) => {
              console.log(payload);
              console.log(personalId);
              if (payload.payload.id !== personalId) {
                setCursors((prevCursors) => {
                  const updatedCursors = { ...prevCursors };

                  console.log(updatedCursors);
                  console.log(payload.payload.id);

                  if (updatedCursors[payload.payload.id]) {
                    console.log(updatedCursors[payload.payload.id]);
                    // Update the cursor data
                    updatedCursors[payload.payload.id] = [
                      {
                        location: payload.payload.location,
                        username: payload.payload.username,
                        x: payload.payload.x,
                        y: payload.payload.y,
                        presence_ref: payload.payload.presence_ref,
                      },
                    ];
                  }
                  console.log(updatedCursors);
                  return updatedCursors;
                });
              }
            });
        } else {
          setUsername("");

          const untrackPresence = async () => {
            const presenceUntrackStatus = await newRoom.untrack();
            console.log(presenceUntrackStatus);
          };

          untrackPresence();
        }
      },
    });
  });

  useGSAP(
    () => {
      gsap.from(controlsRef.current, {
        opacity: 0,
        yPercent: 200,
        duration: 0.7,
        ease: "back.out(2)",
      });
    },
    { scope: controlsScope, dependencies: [joined] }
  );

  return (
    <>
      {joined &&
        Object.values(cursors).map((cursorList) =>
          cursorList.map((cursor) => (
            <MultiplayerCursor
              key={cursor.presence_ref}
              username={cursor.username}
              x={cursor.x}
              y={cursor.y}
            />
          ))
        )}
      <LocalCursor
        username={username}
        room={room}
        joined={joined}
        UUID={UUID}
      />
      <div
        ref={controlsScope}
        className="fixed inset-x-0 bottom-0 z-10 flex flex-col items-center py-4"
      >
        <div className="z-10 flex gap-2">
          {!joined && (
            <div ref={controlsRef}>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex items-center gap-2"
                >
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Cursor display name"
                            className="w-80"
                            defaultValue={username}
                            required
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <Button type="submit">Join</Button>
                </form>
              </Form>
            </div>
          )}
          {joined && (
            <div ref={controlsRef} className="flex gap-2">
              <Button variant="outline" onClick={() => onSubmit()}>
                Leave
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
