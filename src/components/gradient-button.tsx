"use client";

import React from "react";

import { cn } from "@/lib/utils";

export const ButtonsCard = ({
  children,
  className,
  onClick,
}: {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "group/btn relative flex h-60 w-full items-center justify-center overflow-hidden rounded-xl border border-neutral-100 bg-white hover:border-neutral-200 dark:border-white/[0.2] dark:bg-black",
        className
      )}>
      <div className="dark:bg-dot-white/[0.1] bg-dot-black/[0.1] absolute inset-0" />
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          Border Magic
        </span>
      </button>
      <div className="relative z-40">{children}</div>
    </div>
  );
};
