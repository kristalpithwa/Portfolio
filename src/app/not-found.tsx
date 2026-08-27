import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#060b18] text-white gap-4">
      <h2 className="text-xl font-geist font-bold">Page not found</h2>
      <p className="text-gray-400 text-sm">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="text-blue-400 hover:text-blue-300 text-sm transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
