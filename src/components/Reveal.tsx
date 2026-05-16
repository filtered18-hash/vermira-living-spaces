import { useReveal } from "@/hooks/use-reveal";
import type { PropsWithChildren, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  as: As = "div",
  ...rest
}: PropsWithChildren<{ className?: string; as?: "div" | "section" | "article" }> &
  HTMLAttributes<HTMLDivElement>) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <As ref={ref as never} className={cn("fade-up", className)} {...rest}>
      {children}
    </As>
  );
}
