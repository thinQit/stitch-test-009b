'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { AuroraBackground } from '@/components/ui/backgrounds/aurora-background'
import { SplitText } from '@/components/ui/text/split-text'
import { BlurText } from '@/components/ui/text/blur-text'
import { AnimatedContent } from '@/components/ui/effects/animated-content'
import CTAButton from '@/components/CTAButton'

interface ReactBitsHeroAuroraProps {
  title?: string
  subtitle?: string
  imageSrc?: string
}

export default function ReactBitsHeroAurora({
  title = 'Il Sapore della Notte',
  subtitle = 'An intimate Italian dining ritual shaped by fire, seasonality, and midnight elegance.',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577710/site-images/hero-backgrounds/12981879.jpg',
}: Partial<ReactBitsHeroAuroraProps>) {
  const { scrollY } = useScroll()
  const vignetteY = useTransform(scrollY, [0, 500], [0, 80])

  return (
    <section className="relative min-h-screen overflow-hidden">
      <AuroraBackground className="absolute inset-0 opacity-70" />
      <motion.div style={{ y: vignetteY }} className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.75)_85%)]" />
      <div className="absolute inset-0 opacity-[0.08] mix-blend-soft-light bg-[url('/noise.png')]" />
      <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577710/site-images/hero-backgrounds/12981879.jpg')] bg-cover bg-center opacity-30" />
      <AnimatedContent>
        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 text-center">
          <SplitText text={title} className="font-serif text-5xl md:text-7xl text-foreground" />
          <BlurText text={subtitle} className="mt-6 max-w-2xl text-base md:text-lg text-foreground/80" />
          <div className="mt-10">
            <CTAButton label="Reserve a Table" />
          </div>
        </div>
      </AnimatedContent>
    </section>
  )
}
