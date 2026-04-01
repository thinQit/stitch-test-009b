"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedContent } from "@/components/ui/effects/animated-content";

interface TestimonialItem {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

interface TestimonialsAnimatedProps {
  headline: string;
  subheadline?: string;
  testimonials: TestimonialItem[];
  autoplay?: boolean;
}

export function TestimonialsAnimated({
  headline = "Shared Moments",
  subheadline = "Voices from guests who joined us for Rome’s most cinematic evening service.",
  testimonials = [
    {
      quote:
        "The ambiance is transcendental. We felt like we were in a film. Every bite was an exploration of texture and heritage.",
      name: "Marco Santini",
      designation: "Gourmet Critic",
      src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577370/site-images/team-people/1181405.jpg",
    },
  ],
  autoplay = true,
}: TestimonialsAnimatedProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, [autoplay, testimonials.length]);

  const t = testimonials[current];

  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <AnimatedContent animation="fadeUp">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-serif text-3xl italic tracking-tight text-foreground md:text-4xl">{headline}</h2>
            {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
          </div>
        </AnimatedContent>
        <div className="mx-auto max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="mx-auto mb-6 h-16 w-16 overflow-hidden rounded-full">
                <img src={t.src} alt={t.name} className="h-full w-full object-cover" />
              </div>
              <blockquote className="font-serif text-lg italic text-foreground md:text-xl">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-4">
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-sm uppercase tracking-wider text-[#d4af37]">{t.designation}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map(function (_, i) {
              return (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={
                    "h-2 rounded-full transition-all " + (i === current ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30")
                  }
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsAnimated;
