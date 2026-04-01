export const dynamic = 'force-dynamic';

import { AnimatedContent } from "@/components/ui/effects/animated-content"
import ChefStorySplit from "@/components/ChefStorySplit"
import CTABanner from "@/components/CTABanner"

export default function AboutPage() {
  return (
    <main className="pt-24">
      <AnimatedContent>
        <section className="py-28 px-6 bg-background text-center">
          <h1 className="font-headline text-6xl italic">The story behind Osteria Notte</h1>
        </section>
      </AnimatedContent>
      <AnimatedContent>
        <section className="py-24 px-6 bg-muted">
          <ChefStorySplit />
        </section>
      </AnimatedContent>
      <AnimatedContent>
        <section className="py-24 px-6 bg-background">
          <CTABanner
            headline="Come for dinner. Stay for the last pour."
            ctaLabel="Reserve"
            ctaHref="/reservations"
            secondaryCtaLabel="Call"
            secondaryCtaHref="tel:+12125550198"
          />
        </section>
      </AnimatedContent>
    </main>
  )
}
