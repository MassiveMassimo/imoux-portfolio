"use client";

import React from "react";

import { Provider } from "jotai";

export default function Providers({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <Provider>{children}</Provider>;
}
