"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface GalleryItem {
  imageUrl: string;
  title: string;
  description?: string;
  href?: string;
}

interface HorizontalScrollGalleryProps {
  headline?: string;
  items: GalleryItem[];
}

export function HorizontalScrollGallery({
  headline = "Il Sapore della Notte — Spring 2024 Collection",
  items = [
    {
      imageUrl:
        "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577054/site-images/restaurant/10207592.jpg",
      title: "Tartufo Notturno — €42",
      description: "Handmade Tagliatelle, Umbrian Black Truffle, Midnight Butter",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577071/site-images/restaurant/10875172.jpg",
      title: "Manzo Invecchiato — €85",
      description: "45-Day Dry Aged Ribeye, Aged Balsamic, Smoked Sea Salt",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577093/site-images/restaurant/1224789.jpg",
      title: "Oro Nero — €24",
      description: "70% Dark Cocoa Fondant, 24k Gold Leaf, Espresso Foam",
    },
  ],
}: HorizontalScrollGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-" + (items.length * 25 - 25) + "%"]);

  return (
    <section ref={containerRef} style={{ height: items.length * 60 + "vh" }} className="relative bg-muted">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="container mx-auto px-4">
          {headline && (
            <h2 className="mb-8 font-serif text-3xl italic tracking-tight text-foreground md:text-4xl">
              {headline}
            </h2>
          )}
          <motion.div style={{ x }} className="flex gap-6">
            {items.map(function (item, i) {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="min-w-[350px] shrink-0 md:min-w-[450px] lg:min-w-[550px]"
                >
                  <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6 text-foreground">
                      <h3 className="font-serif text-xl md:text-2xl">{item.title}</h3>
                      {item.description && <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HorizontalScrollGallery;
