"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxFeatureSectionProps {
  headline: string;
  description: string;
  imageUrl: string;
  imageOnRight?: boolean;
  features?: { icon: string; title: string; description: string }[];
  ctaLabel?: string;
  ctaHref?: string;
}

export function ParallaxFeatureSection({
  headline = "From Rome to the Midnight Hour",
  description = `“Osteria Notte was born from a simple desire: to capture the quiet intensity of an Italian kitchen at midnight, when the city sleeps and flavor speaks loudest.”`,
  imageUrl = "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577370/site-images/team-people/10375912.jpg",
  imageOnRight = false,
  features = [
    {
      icon: "🍷",
      title: "Legacy of Passion",
      description:
        "Chef Alessandro Valente brings three decades of Michelin-starred experience to each service.",
    },
    {
      icon: "🕯️",
      title: "Midnight Atmosphere",
      description:
        "A candlelit dining room inspired by the theatrical calm of Rome after dark.",
    },
    {
      icon: "🍝",
      title: "Ingredient Reverence",
      description:
        "Each plate is designed as a sensory journey, honoring regional Italian sourcing.",
    },
  ],
  ctaLabel = "Read the Full Chronicle",
  ctaHref = "#story",
}: ParallaxFeatureSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  const imageCol = (
    <motion.div style={{ y: imageY }} className="relative aspect-[4/5] overflow-hidden rounded-2xl">
      <img src={imageUrl} alt={headline} className="h-full w-full object-cover" />
    </motion.div>
  );

  const textCol = (
    <motion.div style={{ y: textY }} className="flex flex-col justify-center">
      <p className="mb-6 text-sm uppercase tracking-[0.3rem] text-[#d4af37]">Legacy of Passion</p>
      <h2 className="font-serif text-3xl italic tracking-tight text-foreground md:text-4xl lg:text-5xl">
        {headline}
      </h2>
      <p className="mt-6 text-lg italic text-muted-foreground">{description}</p>
      <p className="mt-6 text-base leading-relaxed text-muted-foreground">
        We believe fine dining is not just a meal, but a sacred pause in the fabric of time.
      </p>

      {features && features.length > 0 && (
        <div className="mt-8 grid gap-4">
          {features.map(function (f, i) {
            return (
              <div key={i} className="flex gap-4">
                <span className="text-2xl">{f.icon}</span>
                <div>
                  <h3 className="font-semibold text-foreground">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {ctaLabel && ctaHref && (
        <div className="mt-8">
          <a
            href={ctaHref}
            className="inline-flex items-center rounded-lg bg-primary px-6 py-3 font-medium uppercase tracking-wider text-primary-foreground transition-colors hover:bg-[#ffbf00]"
          >
            {ctaLabel}
          </a>
        </div>
      )}
    </motion.div>
  );

  return (
    <section ref={ref} className="overflow-hidden bg-background py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div
          className={
            "grid items-center gap-12 md:grid-cols-2 md:gap-16 " +
            (imageOnRight ? "" : "md:[direction:rtl] md:[&>*]:[direction:ltr]")
          }
        >
          {imageOnRight ? (
            <>
              {textCol}
              {imageCol}
            </>
          ) : (
            <>
              {imageCol}
              {textCol}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default ParallaxFeatureSection;
