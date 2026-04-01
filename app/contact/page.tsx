export const dynamic = 'force-dynamic';

import { AnimatedContent } from "@/components/ui/effects/animated-content"
import ContactForm from "@/components/ContactForm"
import LocationMapEmbed from "@/components/LocationMapEmbed"

export default function ContactPage() {
  return (
    <main className="pt-24">
      <AnimatedContent>
        <section className="relative h-[614px] flex items-center justify-center overflow-hidden">
          <img
            className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale"
            src="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577086/site-images/restaurant/10520478.jpg"
            alt="Inquiries and reservations hero"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
          <div className="relative z-10 text-center px-4">
            <h1 className="font-headline text-5xl md:text-7xl mb-6 tracking-tight">Inquiries & Reservations</h1>
            <p className="font-label uppercase text-[12px] tracking-[0.4rem] text-primary">The Midnight Sommelier awaits your presence</p>
          </div>
        </section>
      </AnimatedContent>
      <AnimatedContent>
        <section className="px-6 md:px-12 lg:px-24 pb-32 bg-background">
          <ContactForm
            headline="Concierge Inquiries"
            subheadline="For private events, cellar tours, or special dietary requirements, leave a message."
          />
        </section>
      </AnimatedContent>
      <AnimatedContent>
        <section className="py-24 px-6 bg-muted">
          <LocationMapEmbed />
        </section>
      </AnimatedContent>
    </main>
  )
}
