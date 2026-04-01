"use client";
import { AuroraBackground } from "@/components/ui/backgrounds/aurora-background";
import { BlurText } from "@/components/ui/text/blur-text";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroAuroraProps {
  badge?: string;
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  auroraColors?: string[];
}

export function HeroAurora({
  badge = "The Midnight Sommelier",
  headline = "Osteria Notte: The Art of Midnight Dining",
  subheadline = "An intimate Roman dining ritual shaped by candlelight, heritage ingredients, and the quiet drama of the late evening.",
  primaryCta = { label: "Reserve Your Table", href: "#reservation" },
  secondaryCta = { label: "View the Menu", href: "#menu" },
  auroraColors = ["#d4af37", "#ffbf00", "#bfcdff", "#99907c", "#3c2f00"],
}: HeroAuroraProps) {
  return (
    <AuroraBackground auroraColors={auroraColors} className="bg-background text-foreground">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className="relative flex flex-col items-center justify-center gap-4 px-4 py-24 md:py-36"
      >
        <span className="mb-2 inline-block rounded-full bg-card/70 px-4 py-1.5 text-sm font-medium uppercase tracking-[0.28rem] text-[#d4af37] backdrop-blur-sm">
          {badge}
        </span>

        <BlurText
          text={headline}
          className="max-w-5xl text-center font-serif text-4xl italic tracking-tight text-foreground sm:text-5xl md:text-7xl"
        />

        <p className="mt-4 max-w-2xl text-center text-lg text-muted-foreground md:text-xl">
          {subheadline}
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="px-8 py-6 text-sm font-bold uppercase tracking-[0.2rem] text-[#3c2f00]"
            asChild
          >
            <a href={primaryCta.href}>{primaryCta.label}</a>
          </Button>
          {secondaryCta && (
            <Button
              variant="outline"
              size="lg"
              className="border-[#99907c]/40 bg-background/40 px-8 py-6 text-sm font-bold uppercase tracking-[0.2rem] text-[#d4af37] hover:bg-muted"
              asChild
            >
              <a href={secondaryCta.href}>{secondaryCta.label}</a>
            </Button>
          )}
        </div>
      </motion.div>
    </AuroraBackground>
  );
}

export default HeroAurora;
