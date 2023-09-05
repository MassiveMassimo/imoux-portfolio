"use client";

import { Icon as BaseIcon, IconProps } from "@iconify/react";
import React from "react";

const Iconify: React.FunctionComponent<IconProps> = (props) => {
  return <BaseIcon {...props} className="text-current" />;
};

export default Iconify;
