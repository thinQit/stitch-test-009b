"use client";

import { useState } from "react";

interface GalleryImage {
  url: string;
  alt: string;
  caption?: string;
}

interface GalleryMasonryProps {
  headline: string;
  subheadline?: string;
  images: GalleryImage[];
}

export function GalleryMasonry({
  headline = "Nightly Atmospheres",
  subheadline = "A visual diary of mixology, candlelight, and late-hour Roman indulgence.",
  images = [
    {
      url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577090/site-images/restaurant/11368919.jpg",
      alt: "Nightly Mixology",
      caption: "Nightly Mixology",
    },
    {
      url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577086/site-images/restaurant/10520478.jpg",
      alt: "Candlelit Ambiance",
      caption: "Candlelit Ambiance",
    },
    {
      url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577096/site-images/restaurant/12324704.jpg",
      alt: "Chef's Pass",
      caption: "Chef's Pass",
    },
  ],
}: GalleryMasonryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl italic tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map(function (img, i) {
            return (
              <div
                key={i}
                className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl"
                onClick={function () {
                  setSelectedImage(img);
                }}
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/0 transition-all group-hover:bg-background/30" />
                {img.caption && (
                  <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-transform group-hover:translate-y-0">
                    <p className="text-sm text-[#e5e2e1]">{img.caption}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-4" onClick={() => setSelectedImage(null)}>
            <img
              src={selectedImage.url}
              alt={selectedImage.alt}
              className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default GalleryMasonry;
