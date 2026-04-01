'use client'

import { Leaf, WheatOff, Flame } from 'lucide-react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { AnimatedContent } from '@/components/ui/effects/animated-content'

interface MenuItemCardProps {
  name?: string
  description?: string
  price?: string
  dietary?: string[]
}

const iconMap: Record<string, JSX.Element> = {
  vegetarian: <Leaf size={14} />,
  glutenfree: <WheatOff size={14} />,
  spicy: <Flame size={14} />,
}

export default function MenuItemCard({
  name = 'Tagliolini al Tartufo',
  description = 'Fresh egg pasta, black truffle butter, 24-month Parmigiano.',
  price = '$34',
  dietary = ['vegetarian'],
}: Partial<MenuItemCardProps>) {
  return (
    <AnimatedContent>
      <motion.div whileHover={{ y: -6 }}>
        <Card className="rounded-xl bg-card/90 p-5 shadow-[0_12px_30px_rgba(0,0,0,0.45)]">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-serif text-xl text-foreground">{name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{description}</p>
              <div className="mt-3 flex gap-2 text-primary">
                {dietary.map((d) => (
                  <span key={d}>{iconMap[d.toLowerCase()] || <Leaf size={14} />}</span>
                ))}
              </div>
            </div>
            <p className="text-lg text-primary">{price}</p>
          </div>
        </Card>
      </motion.div>
    </AnimatedContent>
  )
}
