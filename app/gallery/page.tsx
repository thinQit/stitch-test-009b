export const dynamic = 'force-dynamic';

import { AnimatedContent } from "@/components/ui/effects/animated-content"
import GalleryMasonry from "@/components/GalleryMasonry"
import HorizontalScrollGallery from "@/components/HorizontalScrollGallery"
import CTABanner from "@/components/CTABanner"

export default function GalleryPage() {
  return (
    <main className="pt-24">
      <AnimatedContent>
        <section className="py-28 px-6 bg-background text-center">
          <h1 className="font-headline text-6xl italic">Gallery</h1>
        </section>
      </AnimatedContent>
      <AnimatedContent>
        <section className="py-24 px-6 bg-muted">
          <GalleryMasonry
            headline="Dining room, bar, and kitchen craft"
            images={[
              { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577090/site-images/restaurant/11368919.jpg", alt: "Dining room" },
              { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577087/site-images/restaurant/11236793.jpg", alt: "Wine cellar wall" },
            ]}
          />
          <HorizontalScrollGallery />
        </section>
      </AnimatedContent>
      <AnimatedContent>
        <section className="py-24 px-6 bg-background">
          <CTABanner
            headline="Ready to step into the night?"
            ctaLabel="Reserve"
            ctaHref="/reservations"
            secondaryCtaLabel="Call Concierge"
            secondaryCtaHref="tel:+12125550198"
          />
        </section>
      </AnimatedContent>
    </main>
  )
}
