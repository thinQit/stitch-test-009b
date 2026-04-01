export const dynamic = 'force-dynamic';

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AnimatedContent } from "@/components/ui/effects/animated-content"
import { SplitText } from "@/components/ui/text/split-text"
import { BlurText } from "@/components/ui/text/blur-text"
import Aurora from "@/components/backgrounds/Aurora"
import ContactForm from "@/components/ContactForm"
import TestimonialsAnimated from "@/components/TestimonialsAnimated"
import GalleryMasonry from "@/components/GalleryMasonry"
import ScrollReveal from "@/components/ScrollReveal"

export default function HomePage() {
  return (
    <main className="pt-24">
      <AnimatedContent>
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Aurora />
          </div>
          <div className="absolute inset-0 z-0">
            <img
              alt="Osteria Notte Dining Hall"
              className="w-full h-full object-cover brightness-[0.35]"
              src="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577090/site-images/restaurant/11368919.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
          <div className="relative z-10 text-center px-4 max-w-5xl">
            <span className="font-label uppercase tracking-[0.4rem] text-primary mb-6 block text-sm">
              The Midnight Sommelier
            </span>
            <SplitText
              text="Osteria Notte: The Art of Midnight Dining"
              className="font-headline text-5xl md:text-8xl text-foreground mb-8 tracking-tight text-glow italic"
            />
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Button className="gradient-gold px-10 py-4 text-primary-foreground font-bold font-label uppercase text-sm tracking-widest">
                Reserve Your Table
              </Button>
              <Button
                variant="outline"
                className="border border-border px-10 py-4 text-primary font-bold font-label uppercase text-sm tracking-widest bg-transparent"
              >
                View the Menu
              </Button>
            </div>
          </div>
        </section>
      </AnimatedContent>

      <AnimatedContent>
        <section className="py-32 px-8 bg-muted">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
              <div className="max-w-2xl">
                <h2 className="font-headline text-4xl md:text-6xl mb-6 italic">Il Sapore della Notte</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  A curated selection of nocturnal flavors, crafted with ingredients sourced from the darkest corners of the Italian peninsula.
                </p>
              </div>
              <div className="font-label text-primary tracking-[0.2rem] uppercase border-b border-primary/30 pb-2">
                Spring 2024 Collection
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                ["Tartufo Notturno", "€42", "Handmade Tagliatelle, Umbrian Black Truffle, Midnight Butter", "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577054/site-images/restaurant/10207592.jpg"],
                ["Manzo Invecchiato", "€85", "45-Day Dry Aged Ribeye, Aged Balsamic, Smoked Sea Salt", "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577064/site-images/restaurant/11236818.jpg"],
                ["Oro Nero", "€24", "70% Dark Cocoa Fondant, 24k Gold Leaf, Espresso Foam", "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577097/site-images/restaurant/12008097.jpg"],
              ].map((item) => (
                <Card key={item[0]} className="group bg-card p-2 rounded-xl border-0">
                  <div className="aspect-[4/5] overflow-hidden rounded-lg mb-8">
                    <img alt={item[0]} src={item[3]} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="px-4 pb-8">
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="font-headline text-2xl">{item[0]}</h3>
                      <span className="text-primary font-label text-lg">{item[1]}</span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-6 uppercase tracking-wider">{item[2]}</p>
                    <span className="text-primary text-xs font-label uppercase tracking-widest">View Details</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </AnimatedContent>

      <AnimatedContent>
        <section className="py-32 bg-background">
          <ScrollReveal>
            <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
              <div className="md:col-span-7 relative">
                <div className="aspect-[4/3] rounded-xl overflow-hidden">
                  <img
                    alt="Our Chef"
                    className="w-full h-full object-cover grayscale-[0.3] brightness-75"
                    src="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577370/site-images/team-people/10375912.jpg"
                  />
                </div>
              </div>
              <div className="md:col-span-5 md:pl-8">
                <span className="font-label uppercase text-primary tracking-[0.3rem] mb-6 block text-sm">Legacy of Passion</span>
                <h2 className="font-headline text-5xl mb-8">From Rome to the Midnight Hour</h2>
                <BlurText
                  text={`"Osteria Notte was born from a simple desire: to capture the quiet intensity of an Italian kitchen at midnight, when the city sleeps and flavor speaks loudest."`}
                  className="text-muted-foreground text-lg leading-relaxed mb-8 italic"
                />
              </div>
            </div>
          </ScrollReveal>
        </section>
      </AnimatedContent>

      <AnimatedContent>
        <section className="py-32 px-8 bg-muted">
          <ContactForm
            headline="Claim Your Table"
            subheadline="We recommend booking at least 14 days in advance for weekend soirées."
          />
        </section>
      </AnimatedContent>

      <AnimatedContent>
        <section className="py-32 bg-background">
          <TestimonialsAnimated
            title="Shared Moments"
            testimonials={[
              {
                quote:
                  "The ambiance is transcendental. We felt like we were in a film. Every bite was an exploration of texture and heritage.",
                name: "Marco Santini",
                designation: "Gourmet Critic",
                src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577325/site-images/team-people/10347164.jpg",
              },
            ]}
          />
        </section>
      </AnimatedContent>

      <AnimatedContent>
        <section className="py-32 px-8 bg-muted">
          <GalleryMasonry
            headline="A room made for the evening"
            subheadline="Marble, brass, and velvet—designed to glow."
            images={[
              { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577096/site-images/restaurant/12324704.jpg", alt: "Nightly Mixology" },
              { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577093/site-images/restaurant/1224789.jpg", alt: "The Atmosphere" },
              { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577087/site-images/restaurant/1080383.jpg", alt: "Wine Pour" },
              { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577071/site-images/restaurant/10135116.jpg", alt: "Seafood Plate" },
            ]}
          />
        </section>
      </AnimatedContent>
    </main>
  )
}
