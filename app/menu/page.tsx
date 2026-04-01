export const dynamic = 'force-dynamic';

import { AnimatedContent } from "@/components/ui/effects/animated-content"
import MenuTabs from "@/components/MenuTabs"
import ReservationCTA from "@/components/ReservationCTA"

export default function MenuPage() {
  return (
    <main className="pt-24">
      <AnimatedContent>
        <section className="py-28 px-6 bg-background text-center">
          <h1 className="font-headline text-6xl italic">The Menu</h1>
          <p className="text-muted-foreground mt-4">Seasonal Italian cooking with a midnight edge.</p>
        </section>
      </AnimatedContent>
      <AnimatedContent>
        <section className="py-24 px-6 bg-muted">
          <MenuTabs />
        </section>
      </AnimatedContent>
      <AnimatedContent>
        <section className="py-24 px-6 bg-background">
          <ReservationCTA />
        </section>
      </AnimatedContent>
    </main>
  )
}
