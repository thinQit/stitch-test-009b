export const dynamic = 'force-dynamic';

import { AnimatedContent } from "@/components/ui/effects/animated-content"
import ReservationForm from "@/components/ReservationForm"
import CTABanner from "@/components/CTABanner"

export default function ReservationsPage() {
  return (
    <main className="pt-24">
      <AnimatedContent>
        <section className="py-28 px-6 bg-background text-center">
          <h1 className="font-headline text-6xl italic">Reservations</h1>
          <p className="text-muted-foreground mt-4">Choose your seating, add a tasting, and let us handle the rest.</p>
        </section>
      </AnimatedContent>
      <AnimatedContent>
        <section className="py-24 px-6 bg-muted">
          <ReservationForm />
        </section>
      </AnimatedContent>
      <AnimatedContent>
        <section className="py-24 px-6 bg-background">
          <CTABanner
            headline="Planning something bigger?"
            description="For private dining and celebrations, our concierge will craft a custom menu and wine pairing."
            ctaLabel="Request Private Dining"
            ctaHref="/contact?topic=private-dining"
            secondaryCtaLabel="Email Concierge"
            secondaryCtaHref="mailto:concierge@osterianotte.com"
          />
        </section>
      </AnimatedContent>
    </main>
  )
}
