'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { AnimatedContent } from '@/components/ui/effects/animated-content'

interface ChefStorySplitProps {
  chefName?: string
  quote?: string
  imageSrc?: string
}

export default function ChefStorySplit({
  chefName = 'Chef Lorenzo Bianchi',
  quote = '“Every plate should taste like a memory you can’t forget.”',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577370/site-images/team-people/10375912.jpg',
}: Partial<ChefStorySplitProps>) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [200, 1000], [0, -50])

  return (
    <AnimatedContent>
      <section id="chef" className="mx-auto grid max-w-7xl gap-10 px-4 py-20 md:grid-cols-2 md:px-6">
        <motion.div style={{ y }} className="relative overflow-hidden rounded-xl">
          <Image src={imageSrc} alt={chefName} width={900} height={1200} unoptimized className="h-full w-full object-cover" />
        </motion.div>
        <div className="flex flex-col justify-center">
          <h3 className="font-serif text-4xl text-foreground">{chefName}</h3>
          <p className="mt-4 text-lg italic text-primary">{quote}</p>
          <ul className="mt-6 space-y-2 text-muted-foreground">
            <li>• Trained in Modena and Florence Michelin kitchens</li>
            <li>• Seasonal tasting philosophy rooted in regional Italy</li>
            <li>• Awarded “Best New Italian Table” 2025</li>
          </ul>
        </div>
      </section>
    </AnimatedContent>
  )
}
