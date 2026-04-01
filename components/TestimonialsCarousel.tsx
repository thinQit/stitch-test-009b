'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star } from 'lucide-react'
import { AnimatedContent } from '@/components/ui/effects/animated-content'

interface TestimonialsCarouselProps {
  testimonials?: { name: string; text: string; rating: number }[]
}

export default function TestimonialsCarousel({
  testimonials = [
    { name: 'Elena R.', text: 'A transportive evening—service, wine, and pacing were flawless.', rating: 5 },
    { name: 'Marco T.', text: 'The truffle pasta and Barolo pairing were unforgettable.', rating: 5 },
    { name: 'Sophie L.', text: 'Warmly theatrical ambiance with truly refined food.', rating: 5 },
  ],
}: Partial<TestimonialsCarouselProps>) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 4500)
    return () => clearInterval(id)
  }, [paused, testimonials.length])

  const item = testimonials[index]

  return (
    <AnimatedContent>
      <section id="testimonials" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} className="mx-auto max-w-4xl px-4 py-20 text-center">
        <AnimatePresence mode="wait">
          <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} drag="x" dragConstraints={{ left: 0, right: 0 }} onDragEnd={(_, info) => info.offset.x < -40 ? setIndex((index + 1) % testimonials.length) : info.offset.x > 40 ? setIndex((index - 1 + testimonials.length) % testimonials.length) : null}>
            <div className="mb-4 flex justify-center gap-1 text-primary">
              {Array.from({ length: item?.rating || 5 }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <p className="font-serif text-2xl text-foreground">“{item?.text || ''}”</p>
            <p className="mt-4 text-sm text-muted-foreground">{item?.name || ''}</p>
          </motion.div>
        </AnimatePresence>
      </section>
    </AnimatedContent>
  )
}
