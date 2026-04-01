'use client'

import { MapPin, Train, Car } from 'lucide-react'
import { AnimatedContent } from '@/components/ui/effects/animated-content'

interface LocationMapEmbedProps {
  mapSrc?: string
}

export default function LocationMapEmbed({
  mapSrc = 'https://www.google.com/maps?q=214%20Via%20della%20Luna%20NYC&output=embed',
}: Partial<LocationMapEmbedProps>) {
  return (
    <AnimatedContent>
      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-20 md:grid-cols-2 md:px-6">
        <div className="rounded-xl bg-card/80 p-6">
          <h3 className="font-serif text-3xl text-foreground">Visit Osteria Notte</h3>
          <p className="mt-3 flex items-center gap-2 text-muted-foreground"><MapPin size={16} className="text-primary" />214 Via della Luna, SoHo, NYC</p>
          <p className="mt-2 flex items-center gap-2 text-muted-foreground"><Train size={16} className="text-primary" />Subway: C/E to Spring St (5 min walk)</p>
          <p className="mt-2 flex items-center gap-2 text-muted-foreground"><Car size={16} className="text-primary" />Valet and nearby covered parking available</p>
        </div>
        <div className="overflow-hidden rounded-xl bg-card/70 p-2">
          <iframe title="Osteria Notte location map" src={mapSrc} className="h-[360px] w-full rounded-lg" loading="lazy" />
        </div>
      </section>
    </AnimatedContent>
  )
}
