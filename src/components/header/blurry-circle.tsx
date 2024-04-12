import { cn } from "@/lib/utils";

export function BlurryCircle({ className }: { className?: string }) {
  return <div className={cn("size-[216px] rounded-full blur-2xl", className)} />;
}
