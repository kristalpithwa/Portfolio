"use client";

import React from "react";
import dynamic from "next/dynamic";

const FallingLettersCanvas = dynamic(
  () => import("@/components/common/FallingLettersCanvas"),
  { ssr: false }
);

export default function ClientCanvas(): React.JSX.Element {
  return <FallingLettersCanvas />;
}
