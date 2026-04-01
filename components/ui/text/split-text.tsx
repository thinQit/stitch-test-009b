"use client";
import { cn } from "@/lib/utils";

export function SplitText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  // Stagger in from bottom with a split character animation
  return (
    <span
      className={cn(
        "inline-block overflow-hidden",
        className
      )}
      aria-label={text}
    >
      {text.split(" ").map((word, i) => (
        <span
          key={i}
          className="inline-block will-change-transform relative"
        >
          {word.split("").map((char, j) => (
            <span
              key={j}
              className="inline-block animate-moveUp"
              style={{
                animationDelay: `${0.07 * (i * 4 + j)}s`,
                animationDuration: "0.7s",
                animationFillMode: "forwards",
                opacity: 0,
                transform: "translateY(24px)",
              }}
            >
              {char === " " ? "\u00a0" : char}
            </span>
          ))}
          <span className="w-2 inline-block" />
        </span>
      ))}
    </span>
  );
}
