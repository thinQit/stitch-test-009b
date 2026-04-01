'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedContent } from '@/components/ui/effects/animated-content'

interface MenuTabsProps {
  categories?: string[]
  content?: Record<string, string>
}

export default function MenuTabs({
  categories = ['Antipasti', 'Pasta', 'Secondi', 'Dolci', 'Wine'],
  content = {
    Antipasti: 'Burrata, crudo, and charred artichoke selections.',
    Pasta: 'Hand-rolled tagliolini, cacio e pepe, and truffle ravioli.',
    Secondi: 'Branzino al forno, veal Milanese, and braised short rib.',
    Dolci: 'Tiramisu della casa and olive oil semifreddo.',
    Wine: 'Curated Italian cellar with rare Barolo verticals.',
  },
}: Partial<MenuTabsProps>) {
  const [active, setActive] = useState(categories[0] || 'Antipasti')

  return (
    <AnimatedContent>
      <div id="menu" className="w-full">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActive(cat)} className="relative rounded-lg px-4 py-2 text-sm text-foreground/85 focus:outline-none focus:ring-2 focus:ring-primary">
              {cat}
              {active === cat && <motion.span layoutId="menu-indicator" className="absolute inset-x-1 -bottom-1 h-0.5 bg-primary" />}
            </button>
          ))}
        </div>
        <div className="mt-6 rounded-xl bg-card/80 p-6 min-h-[96px]">
          <AnimatePresence mode="wait">
            <motion.p
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="text-muted-foreground"
            >
              {content[active] || ''}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </AnimatedContent>
  )
}
