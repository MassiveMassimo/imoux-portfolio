"use client";

import { Icon as BaseIcon, IconProps } from "@iconify/react";
import React from "react";

const Iconify: React.FunctionComponent<IconProps & { className?: string }> = ({
  className,
  ...props
}) => {
  return (
    <BaseIcon
      {...props}
      className={`shrink-0 text-current ${className}`}
      aria-hidden="true"
    />
  );
};

export default Iconify;
