"use client";
import { cn } from "@/lib/utils";

export function BlurText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  // Fade-in blur then resolve sharply
  return (
    <span
      className={cn(
        "inline-block animate-[blurText_1s_ease-out_forwards] blur-sm opacity-0",
        className
      )}
      style={{
        animationName: "blurText",
        animationDuration: "1s",
        animationTimingFunction: "ease-out",
        animationFillMode: "forwards",
      }}
      aria-label={text}
    >
      {text}
      <style jsx global>{`
        @keyframes blurText {
          0% {
            opacity: 0;
            filter: blur(12px);
          }
          50% {
            opacity: 1;
            filter: blur(4px);
          }
          100% {
            opacity: 1;
            filter: blur(0);
          }
        }
      `}</style>
    </span>
  );
}
