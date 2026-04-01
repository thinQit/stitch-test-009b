'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { AnimatedContent } from '@/components/ui/effects/animated-content'
import CTAButton from '@/components/CTAButton'

interface ReservationCTAProps {
  title?: string
  tastingHighlight?: string
}

export default function ReservationCTA({
  title = 'Reserve Your Midnight Table',
  tastingHighlight = 'Chef’s 7-course Notte Tasting available nightly at 8:30pm.',
}: Partial<ReservationCTAProps>) {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -60])

  return (
    <AnimatedContent>
      <section className="relative overflow-hidden bg-card/40 py-20">
        <motion.div style={{ y }} className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.5),transparent_50%)]" />
        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
          <h2 className="font-serif text-4xl text-foreground">{title}</h2>
          <p className="mt-3 text-muted-foreground">{tastingHighlight}</p>
          <div className="mt-8">
            <CTAButton label="Book Reservation" />
          </div>
        </div>
      </section>
    </AnimatedContent>
  )
}
