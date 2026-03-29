"use client";

import dynamic from "next/dynamic";

const FallingLettersCanvas = dynamic(
  () => import("@/components/common/FallingLettersCanvas"),
  { ssr: false }
);

export default function ClientCanvas() {
  return <FallingLettersCanvas />;
}
