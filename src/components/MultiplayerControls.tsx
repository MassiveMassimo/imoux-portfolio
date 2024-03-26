"use client";

import LocalCursor from "./LocalCursor";
import MultiplayerCursor from "./MultiplayerCursor";
import { Button } from "./ui/button";
import { FormField, FormItem, FormControl, Form } from "./ui/form";
import { Input } from "./ui/input";
import { UUIDAtom } from "@/app/atoms";
import { createClient } from "@/utils/supabase/client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useAtomValue } from "jotai";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { useForm, FieldValues } from "react-hook-form";

gsap.registerPlugin(useGSAP);

export default function MultiplayerControls() {
  const UUID = useAtomValue(UUIDAtom);

  const [joined, setJoined] = useState(false);
  const [username, setUsername] = useState("");
  const [cursors, setCursors] = useState<{
    [key: string]: { username: string; x: number; y: number };
  }>({});

  const controlsScope = useRef(null);
  const controlsRef = useRef(null);

  const pathname = usePathname();

  const form = useForm();

  const { contextSafe } = useGSAP({ scope: controlsScope });

  const supabase = createClient();
  const room = supabase.channel(pathname);

  function messageReceived(payload: any) {
    setCursors((prevCursors) => ({
      ...prevCursors,
      [payload.payload.id]: {
        username: payload.payload.username,
        x: payload.payload.x,
        y: payload.payload.y,
      },
    }));
  }

  const onSubmit = contextSafe((formData?: FieldValues) => {
    gsap.to(controlsRef.current, {
      opacity: 0,
      yPercent: 200,
      duration: 0.7,
      ease: "back.in(2)",
      onComplete: () => {
        setJoined(!joined);
        if (!joined) {
          setUsername(formData?.username);

          room
            .on("broadcast", { event: "test" }, (payload) =>
              messageReceived(payload),
            )
            .subscribe();

          room
            .on("presence", { event: "sync" }, () => {
              const newState = room.presenceState();
              console.log("sync", newState);
            })
            .on("presence", { event: "join" }, ({ key, newPresences }) => {
              console.log("join", key, newPresences);
            })
            .on("presence", { event: "leave" }, ({ key, leftPresences }) => {
              console.log("leave", key, leftPresences);
            })
            .subscribe();

          const userStatus = {
            // user: "user-1",
            online_at: new Date().toISOString(),
          };

          room.subscribe(async (status) => {
            if (status !== "SUBSCRIBED") {
              return;
            }

            const presenceTrackStatus = await room.track(userStatus);
            console.log(presenceTrackStatus);
          });
        } else {
          setUsername("");
          room.unsubscribe();
          const untrackPresence = async () => {
            const presenceUntrackStatus = await room.untrack();
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
    { scope: controlsScope, dependencies: [joined] },
  );

  return (
    <>
      {joined &&
        Object.entries(cursors).map(([id, { x, y }]) => {
          if (id !== UUID.toString()) {
            return (
              <MultiplayerCursor key={id} username={username} x={x} y={y} />
            );
          }
          return null;
        })}
      <LocalCursor username={username} room={room} />
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
        {/* <div className="*:animate-pulse-slow relative *:rounded-full *:mix-blend-luminosity">
        <div className="absolute size-[280px] translate-x-[-20px] translate-y-[-70px] bg-indigo-400 blur-3xl" />
        <div className="absolute size-[320px] translate-x-[-260px] translate-y-[-40px] bg-emerald-400 blur-3xl delay-100" />
        <div className="absolute size-[160px] translate-x-[-120px] translate-y-[-80px] bg-rose-400 blur-3xl delay-75" />
        <div className="delay absolute size-[120px] translate-x-[0px] translate-y-[-50px] bg-green-400 blur-3xl" />
      </div> */}
      </div>
    </>
  );
}
