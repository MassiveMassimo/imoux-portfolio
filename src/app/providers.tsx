"use client";

import React from "react";

import { Provider } from "jotai";
import { ViewTransitions } from "next-view-transitions";

export default function Providers({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ViewTransitions>
      <Provider>{children}</Provider>
    </ViewTransitions>
  );
}
