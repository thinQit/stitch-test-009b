'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedContent } from '@/components/ui/effects/animated-content'
import { cn } from '@/lib/utils'

interface NavbarProps {
  brand?: string
  links?: { label: string; href: string }[]
  activePath?: string
}

export default function Navbar({
  brand = 'Osteria Notte',
  links = [
    { label: 'Menu', href: '#menu' },
    { label: 'Chef', href: '#chef' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ],
  activePath = '#menu',
}: Partial<NavbarProps>) {
  const [open, setOpen] = useState(false)

  return (
    <AnimatedContent>
      <header className="fixed inset-x-0 top-4 z-50 mx-auto w-[95%] max-w-7xl rounded-2xl bg-background/70 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.45)]">
        <nav className="flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="font-serif text-xl tracking-wide text-foreground">
            {brand}
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="relative text-sm text-foreground/85 hover:text-foreground transition-colors">
                {link.label}
                {activePath === link.href && (
                  <motion.span
                    layoutId="active-nav"
                    className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-primary"
                  />
                )}
              </Link>
            ))}
            <Button className="rounded-lg bg-gradient-to-br from-[#f2ca50] to-[#d4af37] text-[#3c2f00] hover:brightness-110">
              Reserve
            </Button>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden px-4 pb-4"
          >
            <div className="rounded-xl bg-card/90 p-4 space-y-3">
              {links.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className={cn('block text-sm text-foreground/85')}>
                  {link.label}
                </Link>
              ))}
              <Button className="w-full rounded-lg bg-gradient-to-br from-[#f2ca50] to-[#d4af37] text-[#3c2f00]">
                Reserve
              </Button>
            </div>
          </motion.div>
        )}
      </header>
    </AnimatedContent>
  )
}
