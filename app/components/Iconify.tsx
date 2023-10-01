"use client";

import { Icon as BaseIcon, IconProps } from "@iconify/react";
import React from "react";

export default function Iconify({
  className,
  ...props
}: IconProps & { className?: string }) {
  return (
    <BaseIcon
      {...props}
      className={`shrink-0 text-current ${className}`}
      aria-hidden="true"
    />
  );
}
